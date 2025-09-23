# 3.0.0 (2025-09-23)

### 🚀 Features

- **theme:** update signal colors ([#194](https://github.com/migrationsverket/midas/issues/194))
- ⚠️ **components-theme:** add new default css export ([60df9c5b0c](https://github.com/migrationsverket/midas/commit/60df9c5b0c))

### 🏭 Refactoring

- **theme:** refactor style dictionary build script to nx executor ([08676187cf](https://github.com/migrationsverket/midas/commit/08676187cf))
- remove theme from components project completely, rely on theme package ([5616f8ecc2](https://github.com/migrationsverket/midas/commit/5616f8ecc2))

### 🔧 Maintenance

- split global.css into fonts.css and color-scheme.css ([4597020286](https://github.com/migrationsverket/midas/commit/4597020286))
- fix errors in playground app, disable for future builds ([787e74f234](https://github.com/migrationsverket/midas/commit/787e74f234))
- **theme:** add auto generated files in unformatted shape ([d8e2aa989f](https://github.com/migrationsverket/midas/commit/d8e2aa989f))
- **theme:** add explicit exports for css type help ([444b3a6e3b](https://github.com/migrationsverket/midas/commit/444b3a6e3b))
- temporary fix on named module imports in preview.tsx ([4ef7584195](https://github.com/migrationsverket/midas/commit/4ef7584195))
- buildable docs version ([b25c77fdf3](https://github.com/migrationsverket/midas/commit/b25c77fdf3))

### ⚠️ Breaking Changes

- **components-theme:** Default styles are now accessible from `import '@midas-ds/components/default.css'` or via the `@midas-ds/theme` package.

## 2.0.1 (2025-09-12)

### 🔧 Maintenance

- **theme:** rename style dictionary artifacts ([6aef7a733f](https://github.com/migrationsverket/midas/commit/6aef7a733f))
- **theme:** remove 'generated' ([81eb8978a9](https://github.com/migrationsverket/midas/commit/81eb8978a9))
- **theme:** edit config ([8db8ba0b0a](https://github.com/migrationsverket/midas/commit/8db8ba0b0a))
- **theme:** streamline build config ([ca07684b88](https://github.com/migrationsverket/midas/commit/ca07684b88))
- **theme:** sync tokens with components lib ([30c3df9190](https://github.com/migrationsverket/midas/commit/30c3df9190))
- clean up workflows ([6068c40031](https://github.com/migrationsverket/midas/commit/6068c40031))
- **theme:** update package.json with meta data ([11fd386c38](https://github.com/migrationsverket/midas/commit/11fd386c38))
