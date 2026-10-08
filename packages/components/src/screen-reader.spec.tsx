import { describe, expect, test } from 'vitest'
import { composeStories } from '@storybook/react-vite'
import { render } from 'vitest-browser-react'
import { readAll } from '@midas-ds/test-utils/screen-reader'

// Screen reader regression baseline. Every story tagged `screen-reader` is
// read from start to end by a simulated screen reader, and what it says is
// stored as plain text under __screen-reader__/, so a change in what a screen
// reader user hears shows up as a readable diff in the PR. Opt-in, so the
// baseline only grows with stories someone has actually reviewed. See
// docs/screen-reader-testing-plan.md

const TAG = 'screen-reader'

const storyModules = import.meta.glob('./**/*.stories.tsx', {
  eager: true,
}) as Record<string, unknown>

let taggedStories = 0

for (const [path, mod] of Object.entries(storyModules)) {
  // @ts-expect-error mod is unknown atm
  const composed = composeStories(mod)
  const stories = Object.entries(composed).filter(([, Story]) =>
    // @ts-expect-error same here
    Story.tags?.includes(TAG),
  )
  if (stories.length === 0) continue
  taggedStories += stories.length

  // ./textfield/TextField.stories.tsx -> textfield/TextField
  const file = path.replace(/^\.\//, '').replace(/\.stories\.tsx$/, '')

  describe(path, () => {
    for (const [name, Story] of stories) {
      test(name, async () => {
        // @ts-expect-error same here
        const { container } = await render(<Story />)
        const phrases = await readAll(container)
        await expect(`${phrases.join('\n')}\n`).toMatchFileSnapshot(
          `./__screen-reader__/${file}/${name}.txt`,
        )
      })
    }
  })
}

// Keeps the file valid before any story has opted in
if (taggedStories === 0) {
  test.todo(`tag a story with '${TAG}' to add it to the baseline`)
}
