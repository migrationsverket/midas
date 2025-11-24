import type { ComponentDoc, PropDoc, ApiData } from './types';

/**
 * Adapter to convert our TypeDoc-based ComponentDoc format
 * to react-docgen-typescript format for compatibility with existing PropsTable
 */

export interface ReactDocgenProp {
  type: {
    name: string;
    raw?: string;
    value?: Array<{ value: string }>;
  };
  required: boolean;
  defaultValue?: {
    value: string;
  };
  description: string;
}

export interface ReactDocgenComponentDoc {
  displayName: string;
  description?: string;
  props: Record<string, ReactDocgenProp>;
}

export function adaptToReactDocgen(apiData: ApiData): ReactDocgenComponentDoc[] {
  const componentDocs: ReactDocgenComponentDoc[] = [];

  for (const [name, component] of Object.entries(apiData.components)) {
    const props: Record<string, ReactDocgenProp> = {};

    // Convert each prop to react-docgen format
    for (const prop of component.props) {
      props[prop.name] = {
        type: {
          name: prop.type,
          raw: prop.type,
          // Parse union types into enum-like structure if applicable
          value: parseEnumValues(prop.type),
        },
        required: prop.required,
        defaultValue: prop.defaultValue
          ? { value: prop.defaultValue }
          : undefined,
        description: prop.description || '',
      };
    }

    componentDocs.push({
      displayName: name,
      description: component.description,
      props,
    });
  }

  return componentDocs;
}

/**
 * Parse union types like 'a' | 'b' | 'c' into enum values
 */
function parseEnumValues(typeString: string): Array<{ value: string }> | undefined {
  // Check if it's a union type with string literals
  if (typeString.includes('|')) {
    const values = typeString
      .split('|')
      .map((v) => v.trim())
      .filter((v) => v.startsWith("'") || v.startsWith('"'));

    if (values.length > 0) {
      return values.map((v) => ({ value: v }));
    }
  }

  return undefined;
}
