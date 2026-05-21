import { type Meta, type StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from '@midas-ds/components'
import { Ellipsis } from 'lucide-react'
import { Layout, LayoutContent } from '../layout'
import { Main } from '../main'
import { Panel } from '.'
import { PanelProvider } from './PanelProvider'
import { PanelRegion } from './PanelRegion'
import { usePanels } from './usePanels'

type Story = StoryObj<typeof Panel>

const loremParagraphs = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates mollitia natus beatae libero tenetur accusantium harum rem voluptatum blanditiis.',
  'Odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit. Vel ipsum veritatis quisquam amet rem aperiam error nostrum earum consequuntur.',
  'Quidem fugit blanditiis odit corrupti consequatur nam culpa nesciunt. Cupiditate autem suscipit asperiores expedita excepturi hic modi tenetur maxime.',
  'Dicta omnis aliquam quas doloremque cumque repellendus iure. Eveniet reprehenderit sapiente quidem culpa nam vel ipsum veritatis quisquam amet.',
  'Rem aperiam error nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti consequatur nam culpa nesciunt cupiditate autem suscipit.',
]

const loremIpsum = loremParagraphs.map((text, i) => (
  <p key={i} style={{ margin: '0 0 1rem' }}>{text}</p>
))

export default {
  component: Panel,
  title: 'Layout/Panel',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen', rootElement: 'div' },
  args: {
    title: 'App name',
  },
  decorators: [
    Story => (
      <Layout>
        <LayoutContent>
          <Story />
        </LayoutContent>
      </Layout>
    ),
  ],
} satisfies Meta<typeof Panel>

export const Primary: Story = {
  args: {
    defaultOpen: true,
  },
}

export const Controlled: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Main style={{ display: 'flex', gap: '0.5rem', padding: '1rem', alignItems: 'flex-start' }}>
          <Button onPress={() => setIsOpen(true)}>Open panel</Button>
          <Button
            variant='secondary'
            onPress={() => setIsOpen(false)}
          >
            Dismiss panel
          </Button>
        </Main>
        <Panel
          {...args}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
        />
      </>
    )
  },
}

export const WithActions: Story = {
  args: {
    defaultOpen: true,
    actions: (
      <Button
        variant='icon'
        size='medium'
        aria-label='More options'
      >
        <Ellipsis size={20} />
      </Button>
    ),
  },
}

export const WithScrollableContent: Story = {
  args: {
    defaultOpen: true,
    children: loremIpsum,
  },
}

function MultiplePanelControls() {
  const { addPanel } = usePanels()
  const panels = [
    { id: 'panel-a', title: 'Panel A' },
    { id: 'panel-b', title: 'Panel B' },
    { id: 'panel-c', title: 'Panel C' },
  ]

  return (
    <Main>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {panels.map(p => (
            <Button
              key={p.id}
              variant='secondary'
              size='medium'
              onPress={() => addPanel(p)}
            >
              Open {p.title}
            </Button>
          ))}
        </div>
        {loremIpsum}
      </div>
    </Main>
  )
}

export const BehaviorReplace: Story = {
  decorators: [
    _Story => (
      <PanelProvider panelBehavior='replace'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>
    ),
  ],
  render: () => <span />,
}

export const BehaviorBringToFront: Story = {
  decorators: [
    _Story => (
      <PanelProvider panelBehavior='bring-to-front'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>
    ),
  ],
  render: () => <span />,
}

export const BehaviorPopTo: Story = {
  decorators: [
    _Story => (
      <PanelProvider panelBehavior='pop-to'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>
    ),
  ],
  render: () => <span />,
}

export const VariantOverlay: Story = {
  decorators: [
    _Story => (
      <PanelProvider panelVariant='overlay'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>
    ),
  ],
  render: () => <span />,
}

export const VariantPush: Story = {
  decorators: [
    _Story => (
      <PanelProvider panelVariant='push'>
        <Layout>
          <LayoutContent>
            <MultiplePanelControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>
    ),
  ],
  render: () => <span />,
}

const items = [
  { id: '1', name: 'Application #1042', status: 'Pending', date: '2026-03-12', notes: 'Awaiting document submission from applicant.' },
  { id: '2', name: 'Application #1043', status: 'Approved', date: '2026-03-14', notes: 'All documents verified. Decision letter sent.' },
  { id: '3', name: 'Application #1044', status: 'Under review', date: '2026-03-15', notes: 'Assigned to case officer. Background check in progress.' },
  { id: '4', name: 'Application #1045', status: 'Rejected', date: '2026-03-18', notes: 'Missing supporting documents. Applicant notified.' },
]

function DetailViewControls() {
  const { addPanel } = usePanels()

  return (
    <Main style={{ padding: '1rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
        <thead>
          <tr style={{ textAlign: 'left', borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '0.5rem' }}>Name</th>
            <th style={{ padding: '0.5rem' }}>Status</th>
            <th style={{ padding: '0.5rem' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr
              key={item.id}
              style={{ borderBottom: '1px solid #eee', cursor: 'pointer' }}
              onClick={() =>
                addPanel({
                  id: 'detail',
                  title: item.name,
                  children: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem' }}>
                      <div><strong>Status:</strong> {item.status}</div>
                      <div><strong>Date:</strong> {item.date}</div>
                      <div><strong>Notes:</strong> {item.notes}</div>
                    </div>
                  ),
                })
              }
            >
              <td style={{ padding: '0.5rem' }}>{item.name}</td>
              <td style={{ padding: '0.5rem' }}>{item.status}</td>
              <td style={{ padding: '0.5rem' }}>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Main>
  )
}

export const DetailView: Story = {
  decorators: [
    _Story => (
      <PanelProvider
        panelBehavior='replace'
        panelVariant='push'
      >
        <Layout>
          <LayoutContent>
            <DetailViewControls />
            <PanelRegion />
          </LayoutContent>
        </Layout>
      </PanelProvider>
    ),
  ],
  render: () => <span />,
}
