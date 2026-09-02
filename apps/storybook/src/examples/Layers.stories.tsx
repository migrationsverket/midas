import type { Meta, StoryObj } from '@storybook/react-vite'
import { DialogTrigger } from 'react-aria-components'
import {
  Popover,
  TextField,
  SearchField,
  Select,
  ListBoxItem,
  Heading,
  Button,
} from '@midas-ds/components'

const meta: Meta = {
  title: 'Examples/Layers',
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          'Formulärfält väljer automatiskt rätt bakgrundsfärg beroende på vilken yta de ligger på — `field-01` direkt på sidbakgrunden, `field-02` på en yta som `Popover`. Detta sker via en CSS-variabelkedja, utan att komponenterna behöver några extra props. Samma auto-val gäller `isDisabled`.',
      },
    },
  },
}
export default meta
type Story = StoryObj

const LayerFields = ({ isDisabled }: { isDisabled?: boolean }) => (
  <>
    <TextField
      label='Namn'
      placeholder='Anna Andersson'
      isDisabled={isDisabled}
    />
    <SearchField
      placeholder='Sök...'
      isDisabled={isDisabled}
    />
    <Select
      label='Välj alternativ'
      isDisabled={isDisabled}
    >
      <ListBoxItem id='a'>Alternativ A</ListBoxItem>
      <ListBoxItem id='b'>Alternativ B</ListBoxItem>
    </Select>
  </>
)

export const FieldLayers: Story = {
  args: {},
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        alignItems: 'start',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Heading level={3}>På sidbakgrund (field-01)</Heading>
        <LayerFields />
        <Heading level={4}>Inaktiverad</Heading>
        <LayerFields isDisabled />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Heading level={3}>I Popover (field-02)</Heading>
        <DialogTrigger defaultOpen>
          <Button variant='secondary'>Öppna popover</Button>
          <Popover placement='bottom start'>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <LayerFields />
              <Heading level={4}>Inaktiverad</Heading>
              <LayerFields isDisabled />
            </div>
          </Popover>
        </DialogTrigger>
      </div>
    </div>
  ),
}
