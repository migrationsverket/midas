import { readFileSync } from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'
import type { ComponentDoc } from 'react-docgen-typescript'

const DOCGEN_JSON_PATH = path.resolve(
  import.meta.dirname,
  '../../../dist/tools/docgen/component-docs.json',
)

/**
 * Spike: injects `Component.__docgenInfo` from the shared tools/docgen
 * output (see tools/docgen/src/generate.ts) instead of letting
 * @storybook/react-vite run its own docgen extraction. Storybook's built-in
 * `enhanceArgTypes` (from `storybook/internal/docs-tools`) already knows how
 * to read `__docgenInfo` — reusing that keeps argTypes/description/defaults/
 * "Show code" rendering identical to Storybook's native behavior, we're only
 * swapping where the data comes from.
 *
 * Validated against Button.tsx first (matching fidelity to the Docusaurus
 * rendering, story-level argTypes overrides still winning, graceful
 * degradation for unmatched files) before being generalized to every
 * component covered by tools/docgen.
 */
export function docgenPlugin(): Plugin {
  let docsByFile: Map<string, ComponentDoc[]> | null = null

  function loadDocs(): Map<string, ComponentDoc[]> {
    if (docsByFile) return docsByFile
    const allDocs: ComponentDoc[] = JSON.parse(
      readFileSync(DOCGEN_JSON_PATH, 'utf-8'),
    )
    docsByFile = new Map()
    for (const doc of allDocs) {
      const key = path.normalize(doc.filePath)
      const existing = docsByFile.get(key)
      if (existing) existing.push(doc)
      else docsByFile.set(key, [doc])
    }
    return docsByFile
  }

  return {
    name: 'midas-docgen',
    enforce: 'post',
    transform(code, id) {
      const filePath = id.split('?')[0]
      if (!filePath.endsWith('.tsx')) return
      const docs = loadDocs().get(path.normalize(filePath))
      if (!docs?.length) return

      const injections = docs
        .map(
          doc =>
            `if (typeof ${doc.displayName} !== 'undefined') { ${doc.displayName}.__docgenInfo = ${JSON.stringify(doc)}; }`,
        )
        .join('\n')

      return { code: `${code}\n${injections}`, map: null }
    },
  }
}
