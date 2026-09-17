import { describe, test, expect } from 'vitest'
import { composeStories, setProjectAnnotations } from '@storybook/react-vite'
import { render } from '../test-utils'

// Mirrors the tag default from apps/storybook/.storybook/preview.tsx (every
// story is `snapshot`-tagged unless it opts out with `!snapshot`) without
// depending on the storybook app itself — composeStories() needs project
// annotations set before it can resolve tag negation correctly.
setProjectAnnotations([{ tags: ['snapshot'] }])

// Portable, not components-specific — the whole point of this file is that
// it's the unit to lift into a shared tool once a second package needs it.
const storyModules = import.meta.glob('./**/*.stories.tsx', {
  eager: true,
}) as Record<string, unknown>

for (const [path, mod] of Object.entries(storyModules)) {
  // @ts-expect-error mod is unknown atm
  const composed = composeStories(mod)
  const snapshotStories = Object.entries(composed).filter(([, Story]) =>
    // @ts-expect-error same here
    Story.tags?.includes('snapshot'),
  )
  if (snapshotStories.length === 0) continue // every story in this file opted out

  describe(path, () => {
    for (const [name, Story] of snapshotStories) {
      // The package's default testTimeout (2500ms) is tuned for unit tests;
      // capturing + encoding + diffing a screenshot routinely takes longer,
      // so this needs its own, more generous budget.
      test(name, { timeout: 10000 }, async () => {
        // @ts-expect-error same here
        const { container } = await render(<Story />)
        await document.fonts.ready
        await expect(container).toMatchScreenshot()
      })
    }
  })
}
