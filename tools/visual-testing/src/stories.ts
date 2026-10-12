/**
 * One screenshot test per story, for every story tagged `snapshot`.
 *
 * Call it from the package's src/visual.spec.tsx with its story modules. The
 * glob has to be written in that file, because Vite resolves it relative to
 * the file it's in:
 *
 *   snapshotStories(import.meta.glob('./**\/*.stories.tsx', { eager: true }))
 */

import { type ComponentType, createElement } from 'react'
import { describe, expect, test } from 'vitest'
import { composeStories, setProjectAnnotations } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'

type StoryModule = Parameters<typeof composeStories>[0]
/** What composeStories returns per story, as far as we use it */
type ComposedStory = ComponentType & { tags?: string[] }

// Capturing, encoding and diffing a screenshot takes longer than the unit
// test timeouts the packages use
const SCREENSHOT_TIMEOUT = 10_000

export function snapshotStories(storyModules: Record<string, StoryModule>) {
  // Mirrors the tag default from apps/storybook/.storybook/preview.tsx (every
  // story is `snapshot`-tagged unless it opts out with `!snapshot`) without
  // depending on the Storybook app. composeStories() needs project
  // annotations set before it can resolve tag negation.
  setProjectAnnotations([{ tags: ['snapshot'] }])

  for (const [path, storyModule] of Object.entries(storyModules)) {
    const composed = composeStories(storyModule) as Record<
      string,
      ComposedStory
    >
    const stories = Object.entries(composed).filter(([, Story]) =>
      Story.tags?.includes('snapshot'),
    )

    // Every story in this file opted out
    if (stories.length === 0) continue

    describe(path, () => {
      for (const [name, Story] of stories) {
        test(name, { timeout: SCREENSHOT_TIMEOUT }, async () => {
          const { container } = await render(createElement(Story))
          await document.fonts.ready
          await expect(container).toMatchScreenshot()
        })
      }
    })
  }
}
