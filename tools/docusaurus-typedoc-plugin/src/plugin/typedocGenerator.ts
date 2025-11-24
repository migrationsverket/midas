import * as path from 'path';
import * as fs from 'fs-extra';
import { Application, TSConfigReader, TypeDocReader } from 'typedoc';
import type { PluginOptions, TypeDocProjectReflection } from './types';

export class TypeDocGenerator {
  private app: Application | null = null;
  private options: PluginOptions;
  private siteDir: string;

  constructor(siteDir: string, options: PluginOptions) {
    this.siteDir = siteDir;
    this.options = options;
  }

  /**
   * Initialize TypeDoc with configuration
   */
  async initialize(): Promise<void> {
    const tsconfig = path.resolve(this.siteDir, this.options.tsconfig);

    // Bootstrap TypeDoc with configuration
    this.app = await Application.bootstrapWithPlugins({
      tsconfig,
      entryPoints: this.options.entryPoints.map((entry) =>
        path.resolve(this.siteDir, entry)
      ),
      exclude: this.options.exclude || ['**/*.test.tsx', '**/*.stories.tsx'],
      excludePrivate: this.options.typedocOptions?.excludePrivate ?? true,
      excludeProtected: this.options.typedocOptions?.excludeProtected ?? false,
      excludeExternals: this.options.typedocOptions?.excludeExternals ?? true,
      excludeInternal: this.options.typedocOptions?.excludeInternal ?? false,
      skipErrorChecking: true, // Skip TypeScript errors - we only care about extracting types
      // We want JSON output, not HTML
      plugin: [],
      // Ensure we get detailed type information
      categorizeByGroup: false,
      readme: this.options.typedocOptions?.readme || 'none',
      compilerOptions: {
        // Allow any module resolution issues
        skipLibCheck: true,
        skipDefaultLibCheck: true,
      },
    });
  }

  /**
   * Generate TypeDoc JSON documentation
   */
  async generate(): Promise<TypeDocProjectReflection> {
    if (!this.app) {
      throw new Error('TypeDoc application not initialized. Call initialize() first.');
    }

    // Convert entry points to absolute paths and expand globs
    const entryPoints = this.options.entryPoints.map((entry) =>
      path.resolve(this.siteDir, entry)
    );

    // Convert TypeDoc and generate project reflection
    const project = await this.app.convert();

    if (!project) {
      throw new Error(
        `TypeDoc failed to convert entry points: ${entryPoints.join(', ')}`
      );
    }

    // Serialize to JSON
    const json = this.app.serializer.projectToObject(
      project,
      process.cwd()
    ) as TypeDocProjectReflection;

    // Optionally write to disk for debugging
    const outDir = path.resolve(
      this.siteDir,
      this.options.out || '.docusaurus/typedoc-api'
    );
    await fs.ensureDir(outDir);
    await fs.writeJSON(path.join(outDir, 'typedoc-raw.json'), json, {
      spaces: 2,
    });

    return json;
  }

  /**
   * Watch for file changes and regenerate
   */
  async watch(onChange: () => void): Promise<void> {
    // TypeDoc has built-in watch mode, but we'll implement a simple one
    const chokidar = await import('chokidar');

    const watchPaths = this.options.entryPoints.map((entry) =>
      path.resolve(this.siteDir, entry)
    );

    const watcher = chokidar.watch(watchPaths, {
      ignoreInitial: true,
      persistent: true,
    });

    watcher.on('change', async (filePath) => {
      console.log(`[typedoc-plugin] File changed: ${filePath}`);
      try {
        await this.generate();
        onChange();
      } catch (error) {
        console.error('[typedoc-plugin] Generation failed:', error);
      }
    });

    console.log(`[typedoc-plugin] Watching: ${watchPaths.join(', ')}`);
  }

  /**
   * Dispose of TypeDoc application
   */
  dispose(): void {
    // TypeDoc doesn't have explicit cleanup, but we can clear references
    this.app = null as any;
  }
}
