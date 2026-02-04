import type { NextConfig } from 'next'
import { PHASE_PRODUCTION_BUILD, type PHASE_TYPE } from 'next/constants'
import { TurbopackOptions } from 'next/dist/server/config-shared'

const resolveAlias = (phase: PHASE_TYPE): TurbopackOptions['resolveAlias'] => {
  // In e2e registry mode, use packages installed from Verdaccio (via apps/next/node_modules)
  if (process.env.E2E_REGISTRY) {
    return {
      '@midas-ds/components': './node_modules/@midas-ds/components',
    }
  }

  // For regular builds, use the built dist output
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      '@midas-ds/components': '../../dist/packages/components',
    }
  }

  // For dev mode, use tsconfig paths (source files)
  return {}
}

export default function (
  phase: PHASE_TYPE,
  { defaultConfig }: { defaultConfig: NextConfig },
): NextConfig {
  return {
    ...defaultConfig,
    turbopack: {
      resolveAlias: resolveAlias(phase),
    },
  }
}
