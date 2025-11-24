import * as path from 'path';
import * as fs from 'fs-extra';
import * as crypto from 'crypto';
import type { ApiData } from './types';

export class Cache {
  private cacheDir: string;
  private cacheFile: string;

  constructor(siteDir: string, pluginId: string) {
    this.cacheDir = path.join(siteDir, '.docusaurus', 'typedoc-cache');
    this.cacheFile = path.join(this.cacheDir, `${pluginId}.json`);
  }

  /**
   * Ensure cache directory exists
   */
  async ensureDir(): Promise<void> {
    await fs.ensureDir(this.cacheDir);
  }

  /**
   * Get cached data if it exists and is valid
   */
  async get(filesHash: string): Promise<ApiData | null> {
    try {
      if (!(await fs.pathExists(this.cacheFile))) {
        return null;
      }

      const cached = await fs.readJSON(this.cacheFile);

      // Check if hash matches
      if (cached.hash === filesHash) {
        return cached.data;
      }

      return null;
    } catch (error) {
      console.warn('[typedoc-plugin] Failed to read cache:', error);
      return null;
    }
  }

  /**
   * Set cached data
   */
  async set(filesHash: string, data: ApiData): Promise<void> {
    try {
      await this.ensureDir();
      await fs.writeJSON(
        this.cacheFile,
        {
          hash: filesHash,
          data,
        },
        { spaces: 2 }
      );
    } catch (error) {
      console.warn('[typedoc-plugin] Failed to write cache:', error);
    }
  }

  /**
   * Clear cache
   */
  async clear(): Promise<void> {
    try {
      if (await fs.pathExists(this.cacheFile)) {
        await fs.remove(this.cacheFile);
      }
    } catch (error) {
      console.warn('[typedoc-plugin] Failed to clear cache:', error);
    }
  }

  /**
   * Generate hash from file contents for cache validation
   */
  static async hashFiles(files: string[]): Promise<string> {
    const hash = crypto.createHash('md5');

    for (const file of files.sort()) {
      if (await fs.pathExists(file)) {
        const stat = await fs.stat(file);
        // Use mtime and size for quick hash
        hash.update(`${file}:${stat.mtime.getTime()}:${stat.size}`);
      }
    }

    return hash.digest('hex');
  }
}
