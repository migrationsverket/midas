import type { Meta, StoryObj } from '@storybook/react-vite'
import { Breadcrumbs } from './Breadcrumbs'
import { Breadcrumb } from './Breadcrumb'
import { Link } from '../link'

type Story = StoryObj<typeof Breadcrumbs>

export default {
  component: Breadcrumbs,
  subcomponents: { Breadcrumb },
  title: 'Components/Breadcrumbs',
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>

export const Primary: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumb>
        <Link href='#'>Jag vill förlänga</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link href='#'>Arbete</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link href='#'>Anställd</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link href='#'>Jag vill förlänga</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link href='#'>Arbete</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link href='#'>Anställd</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link href='#'>Jag vill förlänga</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link href='#'>Arbete</Link>
      </Breadcrumb>
      <Breadcrumb>
        <Link href='#'>Anställd</Link>
      </Breadcrumb>
    </Breadcrumbs>
  ),
}
