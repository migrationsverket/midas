import { snapshotStories } from '@midas-ds/visual-testing/stories'

snapshotStories(import.meta.glob('./**/*.stories.tsx', { eager: true }))
