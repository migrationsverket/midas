module.exports = {
  source: [
    "packages/components/src/theme/tokens/**/*.json",
  ],
  platforms: {
    css: {
      transforms: ["color/hex"],
      transformGroup: 'css',
      prefix: 'midas',
      buildPath: 'packages/components/src/theme/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
        }
      ]
    }
  }
};
