import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    setupFiles: ["./tests/setup.ts"],
    reporters: ['verbose'],
    globals: true,
  }
}))
