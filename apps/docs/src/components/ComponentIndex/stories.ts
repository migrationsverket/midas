declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace -- augments @types/node
  namespace NodeJS {
    interface Require {
      context(
        directory: string,
        recursive: boolean,
        regExp: RegExp,
        mode: 'lazy',
      ): {
        keys(): string[]
        (key: string): Promise<StoryModule>
      }
    }
  }
}

/* eslint-disable @typescript-eslint/no-explicit-any -- story modules are typed per component */
export interface StoryModule {
  default: any
  [story: string]: any
}

// Lazy, so a story module is only downloaded when its card is rendered.
// The layout package comes first: its Layout is the one the Layout category shows.
const contexts = [
  require.context(
    '../../../../../packages/layout/src',
    true,
    /\.stories\.tsx$/,
    'lazy',
  ),
  require.context(
    '../../../../../packages/components/src',
    true,
    /\.stories\.tsx$/,
    'lazy',
  ),
  require.context(
    '../../../../../packages/table-styles/src',
    true,
    /\.stories\.tsx$/,
    'lazy',
  ),
]

const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '')

/** Story files by component name, e.g. `select` for `select/Select.stories.tsx` */
const storyFiles = new Map<string, () => Promise<StoryModule>>()
for (const context of contexts) {
  for (const key of context.keys()) {
    const name = normalize(
      (key.split('/').pop() ?? '').replace('.stories.tsx', ''),
    )
    if (!storyFiles.has(name)) storyFiles.set(name, () => context(key))
  }
}

/** Loads the stories for a docs page, matched on the page's title */
export const findStories = (title: string) => storyFiles.get(normalize(title))

const isPreviewable = (story: any) =>
  story &&
  typeof story === 'object' &&
  !story.tags?.includes('!dev') &&
  !story.args?.defaultOpen

interface Override {
  story: string
  /** Turn off the scaling, React Aria positions overlays from unscaled coordinates */
  fit?: boolean
}

/**
 * Stories that show a component better than its default pick, by page title.
 * Only non-modal overlays can be shown open: an open Popover, Menu or Modal
 * locks scrolling for the whole page and hides the rest of it from screen
 * readers, so those keep showing their trigger
 */
const overrides: Record<string, Override> = {
  tooltip: { story: 'Open', fit: false },
}

/**
 * The story to preview: an override, else `Preview` if the file has one, else
 * `Primary`, else the first story that isn't hidden or opened for a screenshot
 */
export const pickStory = (title: string, stories: StoryModule) =>
  stories[overrides[normalize(title)]?.story] ??
  [stories.Preview, stories.Primary].find(isPreviewable) ??
  Object.entries(stories).find(
    ([name, story]) => name !== 'default' && isPreviewable(story),
  )?.[1]

/** Whether a page's preview is scaled to fit its box */
export const shouldFit = (title: string) =>
  overrides[normalize(title)]?.fit ?? true
