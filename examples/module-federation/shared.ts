// Shared dependencies, used by both the host and the remote.
//
// React, Midas and the react-aria family are shared as singletons, so the
// page runs one copy of each. With MFE_SHARE=react-only only React is
// shared, which shows what breaks when each app ships its own Midas.
//
// requiredVersion is a major range: by default Module Federation takes the
// version from package.json, and an app that pins Midas exactly then warns
// (or with strictVersion, fails) whenever another app's version is used.

const singleton = (requiredVersion: string) => ({
  singleton: true,
  requiredVersion,
})

const react = {
  react: singleton('^19.0.0'),
  'react-dom': singleton('^19.0.0'),
  'react/jsx-runtime': singleton('^19.0.0'),
}

const midas = {
  '@midas-ds/components': singleton('^17.0.0'),
  'react-aria-components': singleton('^1.0.0'),
  'react-aria': singleton('^3.0.0'),
  'react-stately': singleton('^3.0.0'),
}

export const reactOnly = process.env.MFE_SHARE === 'react-only'

export const shared = reactOnly ? react : { ...react, ...midas }
