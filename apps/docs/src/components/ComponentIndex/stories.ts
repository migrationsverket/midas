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
// require.context needs literal arguments, hence one per package
const contexts: Record<string, ReturnType<NodeRequire['context']>> = {
  components: require.context(
    '../../../../../packages/components/src',
    true,
    /\.stories\.tsx$/,
    'lazy',
  ),
  layout: require.context(
    '../../../../../packages/layout/src',
    true,
    /\.stories\.tsx$/,
    'lazy',
  ),
  'table-styles': require.context(
    '../../../../../packages/table-styles/src',
    true,
    /\.stories\.tsx$/,
    'lazy',
  ),
}

/**
 * Loads a page's stories from the `story` in its `sidebar_custom_props`,
 * e.g. `components/select/Select` for
 * `packages/components/src/select/Select.stories.tsx`.
 * `stories.spec.ts` checks that every page has one that exists
 */
export const findStories = (story: string) => {
  const [pkg, ...path] = story.split('/')
  const context = contexts[pkg]
  const key = `./${path.join('/')}.stories.tsx`
  return context?.keys().includes(key) ? () => context(key) : undefined
}

const isPreviewable = (story: any) =>
  story &&
  typeof story === 'object' &&
  !story.tags?.includes('!dev') &&
  !story.args?.defaultOpen

/**
 * The story to preview: the file's `Preview` story if it has one, else
 * `Primary`, else the first story that isn't hidden or opened for a screenshot.
 * `Preview` is hidden from Storybook, so it's picked even though it's tagged `!dev`.
 * The fallback goes by export name, in alphabetical order, not the file's order
 */
export const pickStory = (stories: StoryModule) =>
  stories.Preview ??
  [stories.Primary].find(isPreviewable) ??
  Object.entries(stories).find(
    ([name, story]) => name !== 'default' && isPreviewable(story),
  )?.[1]

export interface PreviewParameters {
  /** Scale the preview to fit its box. Off for overlays, React Aria positions them from unscaled coordinates */
  fit?: boolean
  /** Width to render at before scaling down, for components that take their width from the container */
  width?: string
}

/** How a story is shown on the index, from `parameters.indexPreview` in the story */
export const previewParameters = (story: any): PreviewParameters =>
  story?.parameters?.indexPreview ?? {}
