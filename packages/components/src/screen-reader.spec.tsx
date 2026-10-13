import { readStories } from '@midas-ds/screen-reader-testing/stories'

readStories(import.meta.glob('./**/*.stories.tsx', { eager: true }))
