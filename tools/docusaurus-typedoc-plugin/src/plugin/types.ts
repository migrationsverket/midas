import type { JSONOutput } from 'typedoc';

export interface PluginOptions {
  /**
   * Unique identifier for this plugin instance (useful for multiple instances)
   */
  id: string;

  /**
   * Entry points for TypeDoc to analyze
   * Can be glob patterns like ['packages/components/src/*\/index.tsx']
   */
  entryPoints: string[];

  /**
   * Path to tsconfig.json for TypeDoc to use
   */
  tsconfig: string;

  /**
   * Output directory for generated JSON files (relative to site dir)
   * @default '.docusaurus/typedoc-api'
   */
  out?: string;

  /**
   * Watch mode for development - regenerate on file changes
   * @default false
   */
  watch?: boolean;

  /**
   * Glob patterns to exclude from documentation
   * @default ['**\/*.test.tsx', '**\/*.stories.tsx']
   */
  exclude?: string[];

  /**
   * Additional TypeDoc options
   */
  typedocOptions?: Partial<{
    excludePrivate: boolean;
    excludeProtected: boolean;
    excludeExternals: boolean;
    excludeInternal: boolean;
    readme: string;
  }>;
}

export interface ComponentDoc {
  /**
   * Component name
   */
  name: string;

  /**
   * File path relative to project root
   */
  filePath: string;

  /**
   * Component description from JSDoc
   */
  description: string;

  /**
   * Component props
   */
  props: PropDoc[];

  /**
   * Type parameters/generics
   */
  typeParameters?: TypeParameterDoc[];

  /**
   * Full type signature
   */
  signature: string;

  /**
   * JSDoc tags (e example, @deprecated, @see)
   */
  tags: Record<string, string>;
}

export interface PropDoc {
  /**
   * Prop name
   */
  name: string;

  /**
   * Prop type as string
   */
  type: string;

  /**
   * Whether prop is required
   */
  required: boolean;

  /**
   * Default value if any
   */
  defaultValue?: string;

  /**
   * Prop description from JSDoc
   */
  description: string;

  /**
   * JSDoc tags
   */
  tags: Record<string, string>;

  /**
   * Parent interface (e.g., 'HTMLAttributes' for inherited props)
   */
  parent?: string;
}

export interface TypeParameterDoc {
  name: string;
  constraint?: string;
  default?: string;
  description?: string;
}

export interface ApiData {
  /**
   * Plugin instance ID
   */
  id: string;

  /**
   * Map of component name to component documentation
   */
  components: Record<string, ComponentDoc>;

  /**
   * Generation timestamp
   */
  generatedAt: string;
}

export type TypeDocReflection = JSONOutput.DeclarationReflection;
export type TypeDocProjectReflection = JSONOutput.ProjectReflection;
