const { withNx } = require('@nx/rollup/with-nx')

// These options were migrated by @nx/rollup:convert-to-inferred from project.json
const options = {
  main: './src/index.ts',
  outputPath: '../../dist/tools/test-utils',
  tsConfig: './tsconfig.lib.json',
  sourceMap: true,
}

const config = withNx(options, {
  // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
  // e.g.
  // output: { sourcemap: true },
})

module.exports = config
