import { JSONOutput, ReflectionKind } from 'typedoc';
import type {
  TypeDocProjectReflection,
  TypeDocReflection,
  ComponentDoc,
  PropDoc,
  TypeParameterDoc,
  ApiData,
} from './types';

export class DataTransformer {
  private reflectionMap: Map<number, TypeDocReflection> = new Map();

  /**
   * Transform TypeDoc JSON into component documentation
   */
  transform(
    typedocJson: TypeDocProjectReflection,
    pluginId: string
  ): ApiData {
    const components: Record<string, ComponentDoc> = {};

    // First, build a map of all reflections by ID for easy lookup
    this.buildReflectionMap(typedocJson);

    // TypeDoc organizes exports into modules (kind: 2)
    // We need to look inside modules to find actual components
    if (typedocJson.children) {
      for (const module of typedocJson.children) {
        // Skip test files
        if (module.name.includes('.spec') || module.name.includes('.test')) {
          continue;
        }

        // Look for components inside each module
        if (module.children) {
          for (const child of module.children) {
            const componentDoc = this.parseComponent(child, module);
            if (componentDoc) {
              components[componentDoc.name] = componentDoc;
            }
          }
        }
      }
    }

    return {
      id: pluginId,
      components,
      generatedAt: new Date().toISOString(),
    };
  }

  /**
   * Recursively build a map of all reflections by ID
   */
  private buildReflectionMap(reflection: any): void {
    if (reflection.id !== undefined) {
      this.reflectionMap.set(reflection.id, reflection);
    }

    if (reflection.children) {
      for (const child of reflection.children) {
        this.buildReflectionMap(child);
      }
    }

    if (reflection.signatures) {
      for (const sig of reflection.signatures) {
        this.buildReflectionMap(sig);
      }
    }

    if (reflection.type?.declaration) {
      this.buildReflectionMap(reflection.type.declaration);
    }
  }

  /**
   * Parse a TypeDoc reflection into component documentation
   */
  private parseComponent(
    reflection: TypeDocReflection,
    module?: TypeDocReflection
  ): ComponentDoc | null {
    // We're looking for:
    // 1. Function components (kind: 64)
    // 2. Variables/Const components (kind: 32) - most common
    // 3. Class components (kind: 128)

    const isComponent =
      reflection.kind === ReflectionKind.Function || // 64
      reflection.kind === ReflectionKind.Variable || // 32 - const components
      reflection.kind === ReflectionKind.Class; // 128

    if (!isComponent) {
      return null;
    }

    // Extract props from component signature and its type references
    const props = this.extractProps(reflection, module);

    // Extract type parameters
    const typeParameters = this.extractTypeParameters(reflection);

    // Generate signature
    const signature = this.generateSignature(reflection);

    // Extract JSDoc tags
    const tags = this.extractTags(reflection);

    return {
      name: reflection.name,
      filePath: this.extractFilePath(reflection),
      description: this.extractDescription(reflection),
      props,
      typeParameters,
      signature,
      tags,
    };
  }

  /**
   * Check if a variable reflection is a React component
   */
  private isReactComponent(reflection: TypeDocReflection): boolean {
    // Check if the type signature suggests it's a React component
    // Usually returns JSX.Element or ReactElement
    if (reflection.type?.type === 'reflection' && reflection.type.declaration) {
      const returnType = this.findReturnType(reflection.type.declaration);
      if (returnType) {
        const returnTypeStr = this.typeToString(returnType);
        return (
          returnTypeStr.includes('JSX.Element') ||
          returnTypeStr.includes('ReactElement') ||
          returnTypeStr.includes('React.Element')
        );
      }
    }
    return false;
  }

  /**
   * Extract props from component reflection
   */
  private extractProps(reflection: TypeDocReflection, module?: TypeDocReflection): PropDoc[] {
    const props: PropDoc[] = [];

    // For Variable components (const Button = ...), check the type
    if (reflection.kind === ReflectionKind.Variable && reflection.type) {
      // Check if it's a React.FC<PropsType> or similar
      if (reflection.type.type === 'reference' && reflection.type.typeArguments) {
        // Get the props type from the generic argument
        for (const typeArg of reflection.type.typeArguments) {
          this.extractPropsFromType(typeArg, props);
        }
      }
    }

    // For function components, look at the first parameter
    if (reflection.signatures && reflection.signatures.length > 0) {
      const signature = reflection.signatures[0];
      if (signature.parameters && signature.parameters.length > 0) {
        const propsParam = signature.parameters[0];
        if (propsParam.type) {
          this.extractPropsFromType(propsParam.type, props);
        }
      }
    }

    // For class components, look for props property or constructor params
    if (reflection.kind === ReflectionKind.Class) {
      // Look for constructor parameters
      const constructor = reflection.children?.find(
        (child) => child.kind === ReflectionKind.Constructor
      );
      if (constructor?.signatures?.[0]?.parameters?.[0]?.type) {
        this.extractPropsFromType(
          constructor.signatures[0].parameters[0].type,
          props
        );
      }
    }

    // If still no props found, try to find a Props interface in the same module
    if (props.length === 0 && module?.children) {
      const propsInterfaceName = `${reflection.name}Props`;
      const propsInterface = module.children.find(
        (child) =>
          child.name === propsInterfaceName ||
          child.name.includes('Props') ||
          child.name.includes(reflection.name)
      );

      if (propsInterface) {
        this.extractPropsFromReflection(propsInterface, props);
      }
    }

    return props;
  }

  /**
   * Extract props from a type (usually an interface or type literal)
   */
  private extractPropsFromType(
    type: JSONOutput.SomeType,
    props: PropDoc[],
    parent?: string
  ): void {
    if (type.type === 'reference') {
      // Follow the reference to get the actual type
      if (type.reflection) {
        this.extractPropsFromReflection(type.reflection, props, type.name);
      } else if (typeof type.target === 'number') {
        // Look up the target by ID
        const targetReflection = this.reflectionMap.get(type.target);
        if (targetReflection) {
          this.extractPropsFromReflection(targetReflection, props, type.name);
        }
      }
    } else if (type.type === 'reflection' && type.declaration) {
      // It's an inline type literal
      this.extractPropsFromReflection(type.declaration, props, parent);
    } else if (type.type === 'intersection') {
      // It's an intersection type - extract from all parts
      for (const intersectionType of type.types || []) {
        this.extractPropsFromType(intersectionType, props, parent);
      }
    } else if (type.type === 'union') {
      // For union types, just take the first type (usually the main one)
      if (type.types && type.types.length > 0) {
        this.extractPropsFromType(type.types[0], props, parent);
      }
    }
  }

  /**
   * Extract props from a reflection (interface/type)
   */
  private extractPropsFromReflection(
    reflection: TypeDocReflection,
    props: PropDoc[],
    parent?: string
  ): void {
    // For type aliases, follow the type
    if (reflection.kind === ReflectionKind.TypeAlias && reflection.type) {
      this.extractPropsFromType(reflection.type, props, reflection.name);
      return;
    }

    if (!reflection.children) return;

    for (const child of reflection.children) {
      if (child.kind === ReflectionKind.Property) {
        const prop: PropDoc = {
          name: child.name,
          type: child.type ? this.typeToString(child.type) : 'unknown',
          required: !child.flags?.isOptional,
          defaultValue: this.extractDefaultValue(child),
          description: this.extractDescription(child),
          tags: this.extractTags(child),
          parent,
        };
        props.push(prop);
      }
    }

    // Handle extended/inherited props
    if (reflection.extendedTypes) {
      for (const extendedType of reflection.extendedTypes) {
        this.extractPropsFromType(extendedType, props, this.typeToString(extendedType));
      }
    }
  }

  /**
   * Convert TypeDoc type to string representation
   */
  private typeToString(type: JSONOutput.SomeType): string {
    switch (type.type) {
      case 'intrinsic':
        return type.name;
      case 'reference':
        return type.name + (type.typeArguments ? `<${type.typeArguments.map(t => this.typeToString(t)).join(', ')}>` : '');
      case 'array':
        return `${this.typeToString(type.elementType)}[]`;
      case 'union':
        return type.types?.map((t) => this.typeToString(t)).join(' | ') || 'unknown';
      case 'intersection':
        return type.types?.map((t) => this.typeToString(t)).join(' & ') || 'unknown';
      case 'literal':
        return JSON.stringify(type.value);
      case 'reflection':
        if (type.declaration?.signatures) {
          return this.signatureToString(type.declaration.signatures[0]);
        }
        return 'object';
      case 'tuple':
        return `[${type.elements?.map((t) => this.typeToString(t)).join(', ') || ''}]`;
      case 'query':
        return `typeof ${type.queryType ? this.typeToString(type.queryType) : 'unknown'}`;
      case 'predicate':
        return `${type.name} is ${type.targetType ? this.typeToString(type.targetType) : 'unknown'}`;
      case 'typeOperator':
        return `${type.operator} ${type.target ? this.typeToString(type.target) : ''}`;
      case 'indexedAccess':
        return `${type.objectType ? this.typeToString(type.objectType) : ''}[${type.indexType ? this.typeToString(type.indexType) : ''}]`;
      default:
        return 'unknown';
    }
  }

  /**
   * Convert signature to string
   */
  private signatureToString(signature: JSONOutput.SignatureReflection): string {
    const params = signature.parameters
      ?.map((p) => `${p.name}: ${p.type ? this.typeToString(p.type) : 'any'}`)
      .join(', ') || '';
    const returnType = signature.type ? this.typeToString(signature.type) : 'void';
    return `(${params}) => ${returnType}`;
  }

  /**
   * Extract type parameters from reflection
   */
  private extractTypeParameters(
    reflection: TypeDocReflection
  ): TypeParameterDoc[] | undefined {
    if (!reflection.typeParameters) return undefined;

    return reflection.typeParameters.map((tp) => ({
      name: tp.name,
      constraint: tp.type ? this.typeToString(tp.type) : undefined,
      default: tp.default ? this.typeToString(tp.default) : undefined,
      description: this.extractDescription(tp as any),
    }));
  }

  /**
   * Generate component signature
   */
  private generateSignature(reflection: TypeDocReflection): string {
    if (reflection.signatures && reflection.signatures.length > 0) {
      const sig = reflection.signatures[0];
      const typeParams = reflection.typeParameters
        ?.map((tp) => tp.name)
        .join(', ');
      const params = sig.parameters
        ?.map(
          (p) =>
            `${p.name}${p.flags?.isOptional ? '?' : ''}: ${
              p.type ? this.typeToString(p.type) : 'any'
            }`
        )
        .join(', ');
      const returnType = sig.type ? this.typeToString(sig.type) : 'void';
      return `function ${reflection.name}${typeParams ? `<${typeParams}>` : ''}(${params || ''}): ${returnType}`;
    }
    return reflection.name;
  }

  /**
   * Extract description from comment
   */
  private extractDescription(reflection: TypeDocReflection): string {
    if (!reflection.comment) return '';

    const summary = reflection.comment.summary
      ?.map((part) => part.text)
      .join('') || '';

    return summary.trim();
  }

  /**
   * Extract JSDoc tags
   */
  private extractTags(reflection: TypeDocReflection): Record<string, string> {
    const tags: Record<string, string> = {};

    if (reflection.comment?.blockTags) {
      for (const tag of reflection.comment.blockTags) {
        tags[tag.tag.substring(1)] = tag.content
          .map((part) => part.text)
          .join('');
      }
    }

    return tags;
  }

  /**
   * Extract default value from reflection
   */
  private extractDefaultValue(reflection: TypeDocReflection): string | undefined {
    return reflection.defaultValue;
  }

  /**
   * Extract file path from reflection
   */
  private extractFilePath(reflection: TypeDocReflection): string {
    if (reflection.sources && reflection.sources.length > 0) {
      return reflection.sources[0].fileName;
    }
    return '';
  }

  /**
   * Find return type in a declaration
   */
  private findReturnType(
    declaration: JSONOutput.DeclarationReflection
  ): JSONOutput.SomeType | undefined {
    if (declaration.signatures && declaration.signatures.length > 0) {
      return declaration.signatures[0].type;
    }
    return undefined;
  }
}
