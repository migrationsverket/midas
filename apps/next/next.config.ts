import type { NextConfig } from 'next'
import { PHASE_PRODUCTION_BUILD, type PHASE_TYPE } from 'next/constants'
import { TurbopackOptions } from 'next/dist/server/config-shared'

const resolveAlias = (phase: PHASE_TYPE): TurbopackOptions['resolveAlias'] => {
  if (process.env.E2E_REGISTRY) {
    return {
      '@midas-ds/components': 'node_modules/@midas-ds/components',
    }
  }

  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      '@midas-ds/components': 'dist/packages/components',
    }
  }

  // use aliases defined in tsconfig.json
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
