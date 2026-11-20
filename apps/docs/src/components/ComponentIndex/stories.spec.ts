import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = fileURLToPath(new URL('../../../../../', import.meta.url))
const pagesDir = join(root, 'apps/docs/docs/components')

// The packages stories.ts has a require.context for
const packages = ['components', 'layout', 'table-styles']

/** The `story` in a page's `sidebar_custom_props` frontmatter */
const pageStory = (file: string) => {
  const frontmatter = readFileSync(join(pagesDir, file), 'utf8').split(
    /^---$/m,
  )[1]
  return frontmatter?.match(/^\s+story:\s*(\S+)\s*$/m)?.[1]
}

/** Every card on the index: a page, or a category of pages */
const cards = readdirSync(pagesDir, { withFileTypes: true }).flatMap(entry => {
  if (entry.isFile() && entry.name.endsWith('.mdx')) {
    // The index page itself isn't a card
    return entry.name === 'index.mdx'
      ? []
      : [{ name: entry.name, story: pageStory(entry.name) }]
  }
  const category = join(pagesDir, entry.name, '_category_.json')
  if (entry.isDirectory() && existsSync(category)) {
    const { customProps } = JSON.parse(readFileSync(category, 'utf8'))
    return [
      { name: `${entry.name}/_category_.json`, story: customProps?.story },
    ]
  }
  return []
})

describe('components index stories', () => {
  it.each(cards)('$name points to a story file', ({ story }) => {
    expect(story, 'set story in sidebar_custom_props').toBeTypeOf('string')
    const [pkg, ...path] = (story as string).split('/')
    expect(packages).toContain(pkg)
    expect(
      existsSync(
        join(root, 'packages', pkg, 'src', `${path.join('/')}.stories.tsx`),
      ),
    ).toBe(true)
  })
})
