/**
 * One screen reader test per story, for every story tagged `screen-reader`.
 * The simulated screen reader reads the story from start to end, and what it
 * says is stored as plain text under __screen-reader__/, so a change in what a
 * screen reader user hears shows up as a readable diff in the PR.
 *
 * Call it from the package's src/screen-reader.spec.tsx with its story
 * modules. The glob has to be written in that file, because Vite resolves it
 * relative to the file it's in:
 *
 *   readStories(import.meta.glob('./**\/*.stories.tsx', { eager: true }))
 */

import { type ComponentType, createElement } from 'react'
import { describe, expect, test } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import { readAll } from './read.ts'

const TAG = 'screen-reader'

type StoryModule = Parameters<typeof composeStories>[0]
/** What composeStories returns per story, as far as we use it */
type ComposedStory = ComponentType & { tags?: string[] }

export function readStories(storyModules: Record<string, StoryModule>) {
  let taggedStories = 0

  for (const [path, storyModule] of Object.entries(storyModules)) {
    const composed = composeStories(storyModule) as Record<
      string,
      ComposedStory
    >
    // Opt-in, so the baseline only grows with stories someone has reviewed
    const stories = Object.entries(composed).filter(([, Story]) =>
      Story.tags?.includes(TAG),
    )
    if (stories.length === 0) continue
    taggedStories += stories.length

    // ./textfield/TextField.stories.tsx -> textfield/TextField
    const file = path.replace(/^\.\//, '').replace(/\.stories\.tsx$/, '')

    describe(path, () => {
      for (const [name, Story] of stories) {
        test(name, async () => {
          const { container } = await render(createElement(Story))
          const phrases = await readAll(container)
          // Relative to the test file, the package's src/screen-reader.spec.tsx
          await expect(`${phrases.join('\n')}\n`).toMatchFileSnapshot(
            `./__screen-reader__/${file}/${name}.txt`,
          )
        })
      }
    })
  }

  // Keeps the spec valid before any story has opted in
  if (taggedStories === 0) {
    test.todo(`tag a story with '${TAG}' to add it to the baseline`)
  }
}
