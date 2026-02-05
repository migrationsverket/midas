import type { Meta, StoryObj } from '@storybook/react-vite'
import { Layout } from '.'
import { Header } from '../header'
import { Panel } from '../panel'
import { Navbar } from '../navbar'

type Story = StoryObj<typeof Layout>

export default {
  component: Layout,
  subcomponents: {
    Header,
    Panel,
    Navbar,
  },
  title: 'Components/Layout/Layout',
  tags: ['autodocs'],
  args: {
    children: 'Content',
  },
  parameters: { layout: 'fullscreen', rootElement: 'div' },
  render: ({ children, ...rest }) => (
    <Layout {...rest}>
      <Header>Header</Header>
      <Panel aria-label='left panel'>Panel</Panel>
      <main style={{ height: '5rem', padding: '1rem' }}>{children}</main>
      <Panel
        aria-label='right panel'
        style={{ gridArea: 'panelRight' }}
      >
        Panel
      </Panel>
      <Navbar>Navbar</Navbar>
    </Layout>
  ),
} satisfies Meta<typeof Layout>

export const Primary: Story = {}
