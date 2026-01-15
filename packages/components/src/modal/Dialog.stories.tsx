import type { Meta, StoryObj } from '@storybook/react-vite'
import { options } from '../utils/tests'
import { useState } from 'react'
import { DialogTrigger, type Key } from 'react-aria-components'
import { Modal } from './Dialog'
import { Button } from '../button'
import { Select } from '../select'
import { ListBoxItem } from '../list-box'
import { Text } from '../text'
import { Cell, Column, Row, Table, TableBody, TableHeader } from '../table'

type Story = StoryObj<typeof Modal>

export default {
  component: Modal,
  subcomponents: {
    DialogTrigger,
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
          defaultValue={['kiwi']}
          label='Select fruits'
          selectionMode='multiple'
          items={options}
          isSelectableAll={false}
        >
          {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
        </Select>
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
    Story => (
      <div>
        <h2>Läs riktlinjer för användning! </h2>
        <Story />
      </div>
    ),
  ],
  parameters: {},
  args: {
    hideCloseButton: true,
    isKeyboardDismissDisabled: true,
    title: 'Close button hidden',
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
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
  render: () => {
    const [selectedFruit, setSelectedFruit] = useState<Key[] | null>(null)
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
            {selectedFruit &&
              selectedFruit.map(fruit => (
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
              items={options}
              onChange={value =>
                value &&
                setSelectedFruit(previousValue =>
                  previousValue ? [...previousValue, value] : [value],
                )
              }
            >
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </Modal>
        </DialogTrigger>
      </>
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
