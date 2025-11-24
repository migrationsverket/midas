import type { LoadContext, Plugin } from '@docusaurus/types';
import * as path from 'path';
import * as fs from 'fs-extra';
import { glob } from 'glob';
import { TypeDocGenerator } from './typedocGenerator';
import { DataTransformer } from './dataTransformer';
import { Cache } from './cache';
import { adaptToReactDocgen } from './reactDocgenAdapter';
import type { PluginOptions, ApiData } from './types';

export default async function pluginTypeDoc(
  context: LoadContext,
  options: PluginOptions
): Promise<Plugin<ApiData>> {
  const { siteDir } = context;

  // Validate required options
  if (!options.id) {
    throw new Error('[typedoc-plugin] "id" option is required');
  }
  if (!options.entryPoints || options.entryPoints.length === 0) {
    throw new Error('[typedoc-plugin] "entryPoints" option is required');
  }
  if (!options.tsconfig) {
    throw new Error('[typedoc-plugin] "tsconfig" option is required');
  }

  const pluginId = options.id;
  const generator = new TypeDocGenerator(siteDir, options);
  const transformer = new DataTransformer();
  const cache = new Cache(siteDir, pluginId);

  let apiData: ApiData | null = null;

  return {
    name: '@midas-ds/docusaurus-typedoc-plugin',

    async loadContent(): Promise<ApiData> {
      console.log(`[typedoc-plugin:${pluginId}] Loading content...`);

      try {
        // Expand entry point globs to get actual files
        const entryPointPatterns = options.entryPoints.map((pattern) =>
          path.resolve(siteDir, pattern)
        );

        let allFiles: string[] = [];
        for (const pattern of entryPointPatterns) {
          const files = await glob(pattern, {
            ignore: options.exclude || ['**/*.test.tsx', '**/*.stories.tsx'],
            absolute: true,
          });
          allFiles = allFiles.concat(files);
        }

        if (allFiles.length === 0) {
          console.warn(
            `[typedoc-plugin:${pluginId}] No files found matching entry points:`,
            options.entryPoints
          );
        }

        // Generate hash for cache validation
        const filesHash = await Cache.hashFiles(allFiles);

        // Check cache
        const cachedData = await cache.get(filesHash);
        if (cachedData) {
          console.log(
            `[typedoc-plugin:${pluginId}] Using cached data (${Object.keys(cachedData.components).length} components)`
          );
          apiData = cachedData;
          return cachedData;
        }

        // Initialize TypeDoc
        await generator.initialize();

        // Generate TypeDoc JSON
        console.log(
          `[typedoc-plugin:${pluginId}] Generating TypeDoc documentation...`
        );
        const typedocJson = await generator.generate();

        // Transform to API data
        console.log(
          `[typedoc-plugin:${pluginId}] Transforming documentation...`
        );
        apiData = transformer.transform(typedocJson, pluginId);

        // Cache the result
        await cache.set(filesHash, apiData);

        console.log(
          `[typedoc-plugin:${pluginId}] Generated documentation for ${Object.keys(apiData.components).length} components`
        );

        // Write human-readable output for debugging
        const outDir = path.resolve(
          siteDir,
          options.out || '.docusaurus/typedoc-api'
        );
        await fs.ensureDir(outDir);
        await fs.writeJSON(path.join(outDir, `${pluginId}-api.json`), apiData, {
          spaces: 2,
        });

        return apiData;
      } catch (error) {
        console.error(`[typedoc-plugin:${pluginId}] Failed to load content:`, error);
        throw error;
      }
    },

    async contentLoaded({ content, actions }): Promise<void> {
      const { setGlobalData, addRoute } = actions;

      // Make API data available globally in both formats:
      // 1. New TypeDoc format
      setGlobalData({
        apiData: content,
      });

      // 2. react-docgen-typescript compatible format for existing PropsTable
      const reactDocgenData = adaptToReactDocgen(content);

      // Also inject with the old plugin's key for backward compatibility
      if (pluginId === 'components') {
        (actions as any).setGlobalData({
          pluginName: 'docusaurus-plugin-react-docgen-typescript',
          pluginId: 'default',
          content: reactDocgenData,
        });
      }

      console.log(
        `[typedoc-plugin:${pluginId}] API data loaded into global context`
      );
    },

    async postBuild(): Promise<void> {
      // Cleanup after build
      generator.dispose();
    },

    getPathsToWatch(): string[] {
      if (!options.watch) {
        return [];
      }

      // Return patterns to watch for changes in dev mode
      return options.entryPoints.map((pattern) =>
        path.resolve(siteDir, pattern)
      );
    },

    getThemePath(): string {
      // Return path to theme components
      return path.resolve(__dirname, '../theme');
    },

    getTypeScriptThemePath(): string {
      // Return path to TypeScript theme for type generation
      return path.resolve(__dirname, '../theme');
    },
  };
}

export { PluginOptions, ApiData, ComponentDoc, PropDoc } from './types';
