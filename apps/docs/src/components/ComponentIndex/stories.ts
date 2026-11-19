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
  story?: string
  /** Turn off the scaling, React Aria positions overlays from unscaled coordinates */
  fit?: boolean
  /**
   * Width to render the story at before it's scaled down to fit. For
   * components that take their width from the container
   */
  width?: string
  /** Args on top of the story's own, e.g. to swap placeholder text */
  args?: Record<string, unknown>
}

/**
 * Stories that show a component better than its default pick, by page title.
 * Only non-modal overlays can be shown open: an open Popover, Menu or Modal
 * locks scrolling for the whole page and hides the rest of it from screen
 * readers, so those keep showing their trigger
 */
const overrides: Record<string, Override> = {
  tooltip: { story: 'Open', fit: false },
  // Uses container queries and hides parts of itself below 675px
  pagination: { width: '720px' },
  // The preview is on layer 01, the default skeleton blends into it
  skeleton: { story: 'IsOnLayer01', args: { isAnimated: false } },
  // Fills the viewport's height, so it's given a desktop size instead
  layout: {
    story: 'WithNavbar',
    width: '1280px',
    args: { style: { height: '540px' } },
  },
  // Its region is fixed, the preview contains it
  toast: { story: 'VariantsOpen' },

  // Swedish text instead of the stories' placeholders. Fields are rendered
  // wider so they look like a field in a form, not squeezed into the card
  button: { args: { children: 'Spara' } },
  checkbox: { args: { children: 'Jag har läst informationen' } },
  combobox: {
    args: {
      label: 'Land',
      placeholder: 'Sök eller välj land',
      description: 'Börja skriva för att söka',
    },
  },
  heading: { story: 'Heading1', args: { children: 'Rubrik' } },
  infobanner: {
    story: 'Info',
    args: { message: 'Du har fått ett nytt meddelande.' },
  },
  progressbar: { args: { label: 'Laddar upp fil' } },
  radio: { args: { children: 'E-post' } },
  searchfield: { width: '480px' },
  select: {
    args: {
      label: 'Språk',
      placeholder: 'Välj språk',
      description: 'Du kan ändra det senare',
    },
  },
  tag: { args: { children: 'Pågående' } },
  text: {
    story: 'Default',
    args: { children: 'Det här är ett stycke brödtext.' },
  },
  textarea: {
    args: {
      label: 'Meddelande',
      description: 'Beskriv ditt ärende kort',
      defaultValue: '',
    },
  },
  textfield: {
    args: {
      label: 'Förnamn',
      description: 'Som det står i ditt pass',
      defaultValue: 'Anna',
    },
  },
}

/**
 * The story to preview: an override, else `Preview` if the file has one, else
 * `Primary`, else the first story that isn't hidden or opened for a screenshot
 */
export const pickStory = (title: string, stories: StoryModule) => {
  const override = overrides[normalize(title)]
  const story =
    (override?.story && stories[override.story]) ??
    [stories.Preview, stories.Primary].find(isPreviewable) ??
    Object.entries(stories).find(
      ([name, story]) => name !== 'default' && isPreviewable(story),
    )?.[1]
  return story && override?.args
    ? { ...story, args: { ...story.args, ...override.args } }
    : story
}

/** Whether a page's preview is scaled to fit its box */
export const shouldFit = (title: string) =>
  overrides[normalize(title)]?.fit ?? true

/** The width a page's preview is rendered at, if it's overridden */
export const previewWidth = (title: string) =>
  overrides[normalize(title)]?.width
