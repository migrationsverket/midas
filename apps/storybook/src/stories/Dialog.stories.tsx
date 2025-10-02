import type { Meta, StoryObj } from '@storybook/react-vite'
import { options } from '../utils/storybook'
import { useState } from 'react'
import { type Selection } from 'react-aria-components'
import { expect, userEvent, within } from 'storybook/test'
import {
  DialogTrigger,
  Modal,
  Button,
  Cell,
  Column,
  Row,
  Select,
  Table,
  TableBody,
  TableHeader,
  Text,
} from '@midas-ds/components'

type Story = StoryObj<typeof Modal>

export default {
  component: Modal,
  subcomponents: {
    DialogTrigger: DialogTrigger as React.ComponentType<unknown>,
  },
  title: 'Components/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  render: args => (
    <DialogTrigger>
      <Button>Öppna</Button>
      <Modal
        title='Enter your name'
        {...args}
      >
        <Select
          autoFocus
          placeholder='Select...'
          defaultSelectedKeys={['kiwi']}
          label='Select fruits'
          selectionMode='multiple'
          options={options}
          isClearable
          isSelectableAll={false}
        />
        <Button slot='close'>Submit</Button>
      </Modal>
    </DialogTrigger>
  ),
} as Meta<typeof Modal>

export const Default: Story = {
  args: {
    isDismissable: true,
  },
}

export const NotDismissable: Story = {}


/**
 * For special cases when modal should not be closable without taking further action
 */
export const HiddenCloseButton: Story = {
  decorators: [
    (Story) => (
      <div>
        <h2>Läs riktlinjer för användning! </h2>
        <Story/>
      </div>)
  ],
  parameters: {

  },
  args: {
    hideCloseButton: true,
    isKeyboardDismissDisabled: true,
    title: 'Close button hidden'
  },
  render: args => (
    <DialogTrigger>
      <Button>Öppna</Button>
      <Modal {...args}>
        <Text>This modal cannot be closed from the header</Text>
        <Button slot='close'>Agree</Button>
      </Modal>
    </DialogTrigger>
  ),
}

export const EmptyTitle: Story = {
  args: {
    title: null,
  },
  render: args => (
    <DialogTrigger>
      <Button>Öppna</Button>
      <Modal {...args}>
        <Text>This is a simple modal with no title.</Text>
        <Button slot='close'>Close</Button>
      </Modal>
    </DialogTrigger>
  ),
}

export const Scrollable: Story = {
  render: args => (
    <DialogTrigger>
      <Button>Öppna</Button>
      <Modal
        title='Read all the text'
        {...args}
      >
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolore saepe atque necessitatibus pariatur aliquam
          vel incidunt blanditiis rem maxime. Modi enim dolorem optio id error
          reprehenderit nisi non iste? Natus! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Itaque, dolores eligendi rerum
          distinctio dignissimos repellat magni est veniam, ratione, totam quo
          eius aperiam dolorum quod minima corporis quibusdam! Tempore, nam.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
          laborum praesentium deserunt incidunt minima doloremque eligendi odio
          iure officia sunt, delectus rem quam soluta dolores modi, illo
          expedita molestiae eaque! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis provident, dolorem perspiciatis nesciunt
          dicta explicabo sequi doloremque neque fugit? Ratione adipisci dolor
          saepe nam fugit provident asperiores voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe
          atque necessitatibus pariatur aliquam vel incidunt blanditiis rem
          maxime. Modi enim dolorem optio id error reprehenderit nisi non iste?
          Natus! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque, dolores eligendi rerum distinctio dignissimos repellat magni
          est veniam, ratione, totam quo eius aperiam dolorum quod minima
          corporis quibusdam! Tempore, nam. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tempore, laborum praesentium deserunt
          incidunt minima doloremque eligendi odio iure officia sunt, delectus
          rem quam soluta dolores modi, illo expedita molestiae eaque! Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Facilis provident,
          dolorem perspiciatis nesciunt dicta explicabo sequi doloremque neque
          fugit? Ratione adipisci dolor saepe nam fugit provident asperiores
          voluptas! Molestiae, cumque.
        </Text>
        <Button slot='close'>Submit</Button>
      </Modal>
    </DialogTrigger>
  ),
}

export const DS1282: Story = {
  tags: ['!dev', '!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [selectedFruit, setSelectedFruit] = useState<Selection>(new Set())
    const options = ['apple', 'banana'].map(fruit => ({
      id: fruit,
      name: fruit,
    }))

    return (
      <>
        <Table aria-label='tabell'>
          <TableHeader>
            <Column isRowHeader>Actions</Column>
          </TableHeader>
          <TableBody>
            {[...selectedFruit].map(fruit => (
              <Row key={fruit}>
                <Cell>
                  <DialogTrigger>
                    <Button>View</Button>
                    <Modal>{fruit}</Modal>
                  </DialogTrigger>
                </Cell>
              </Row>
            ))}
          </TableBody>
        </Table>
        <DialogTrigger>
          <Button>Add entry</Button>
          <Modal>
            <Select
              autoFocus
              label='test'
              options={options}
              onSelectionChange={setSelectedFruit}
            />
          </Modal>
        </DialogTrigger>
      </>
    )
  },
  play: async ({ canvasElement, step }) => {
    await step(
      'it should be possible to use the select multiple times while rendering a table with modals',
      async () => {
        // Open modal
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Space]')

        // Get the value of the select
        const body = canvasElement.ownerDocument.body
        const hiddenSelect = within(body).getByLabelText('test-hidden')

        // Select "apple"
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[Space]')
        await expect(hiddenSelect).toHaveDisplayValue('apple')

        // Select "banana"
        await userEvent.keyboard('[Space]')
        await userEvent.keyboard('[ArrowDown]')
        await userEvent.keyboard('[Space]')
        await expect(hiddenSelect).toHaveDisplayValue('banana')
      },
    )
  },
}

export const LongTitle: Story = {
  args: {
    title:
      'This is a very long title to test how the modal handles text wrapping and layout with a lot of text in the title bar',
  },
  render: args => (
    <DialogTrigger>
      <Button>Öppna</Button>
      <Modal {...args}>
        <Text>This modal has a very long title.</Text>
        <Button slot='close'>Close</Button>
      </Modal>
    </DialogTrigger>
  ),
}
