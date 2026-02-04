import type { NextConfig } from 'next'
import { PHASE_PRODUCTION_BUILD, type PHASE_TYPE } from 'next/constants'

export default function (
  phase: PHASE_TYPE,
  { defaultConfig }: { defaultConfig: NextConfig },
): NextConfig {
  return {
    ...defaultConfig,
    turbopack: {
      resolveAlias:
        phase === PHASE_PRODUCTION_BUILD && !process.env.E2E_REGISTRY
          ? {
              '@midas-ds/components': 'dist/packages/components',
            }
          : {},
    },
  }
}
