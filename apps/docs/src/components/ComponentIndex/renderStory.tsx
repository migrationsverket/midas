import { createElement, type ComponentType, type ReactNode } from 'react'

type Args = Record<string, unknown>
type Decorator = (Story: ComponentType, context: unknown) => ReactNode

/** Storybook accepts a single decorator as well as a list */
const toList = (decorators: Decorator | Decorator[] = []) =>
  Array.isArray(decorators) ? decorators : [decorators]

interface StoryLike {
  args?: Args
  render?: (args: Args, context: unknown) => ReactNode
  decorators?: Decorator | Decorator[]
}

interface MetaLike extends StoryLike {
  component?: ComponentType<Args>
}

/**
 * Renders a story the way Storybook would, minus its runtime: args are merged,
 * the story's or meta's render is used, and decorators are applied inside out.
 * Enough for a static preview, nothing interactive is wired up.
 */
export const renderStory = (meta: MetaLike, story: StoryLike) => {
  const args = { ...meta.args, ...story.args }
  const render =
    story.render ??
    meta.render ??
    ((renderArgs: Args) =>
      meta.component ? createElement(meta.component, renderArgs) : null)
  const context = { args }

  // A component, so hooks inside a story's render work
  let Story: ComponentType = () => <>{render(args, context)}</>
  for (const decorator of [
    ...toList(story.decorators),
    ...toList(meta.decorators),
  ]) {
    const Inner = Story
    Story = () => <>{decorator(Inner, context)}</>
  }

  return <Story />
}
