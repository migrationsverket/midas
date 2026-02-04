import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumbs } from './Breadcrumbs'
import { Breadcrumb } from './Breadcrumb'
import { Link } from '../link'

type Item = { title: string; href: string }
type Story = StoryObj<typeof Breadcrumbs<Item>>

export default {
  component: Breadcrumbs,
  subcomponents: { Breadcrumb, Link },
  title: 'Components/Breadcrumbs',
  tags: ['autodocs'],
  args: {
    items: [
      { title: 'Jag vill förlänga', href: '#' },
      { title: 'Arbete', href: '#' },
      { title: 'Anställd', href: '#' },
    ],
    children: item => (
      <Breadcrumb id={item.title}>
        <Link href={item.href}>{item.title}</Link>
      </Breadcrumb>
    ),
  },
} satisfies Meta<typeof Breadcrumbs<Item>>

export const Primary: Story = {}
