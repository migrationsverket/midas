import type { Meta, StoryObj } from '@storybook/react-vite'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import readme from './README.md?raw'
import styles from './spikes.module.css'

/** The spike's README as the first page in Storybook, so it lives in one place */
const Overview = () => (
  <article className={styles.overview}>
    <Markdown remarkPlugins={[remarkGfm]}>{readme}</Markdown>
  </article>
)

export default {
  title: 'Spikes/Tree selection/0. Overview',
  component: Overview,
  tags: ['!snapshot', '!autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Overview>

type Story = StoryObj<typeof Overview>

export const ReadMe: Story = {}
