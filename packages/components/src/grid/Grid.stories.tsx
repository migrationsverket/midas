import type { Meta, StoryObj } from '@storybook/react-vite'
import { Grid } from './Grid'
import { GridItem } from './GridItem'
import { TextField } from '../textfield'
import { Card, CardContent, CardTitle } from '../card'
import { Text } from '../text'

type Story = StoryObj<typeof Grid>

export default {
  component: Grid,
  subcomponents: { GridItem },
  title: 'Components/Grid',
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    isContained: { control: { type: 'boolean' } },
    removeMargins: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Grid>

export const Primary: Story = {
  args: {},
  render: ({ ...args }) => (
    <Grid {...args}>
      <GridItem>
        <TextField
          label='Ditt meddelande'
          description='Skriv ett litet meddelande'
        />
      </GridItem>
      <GridItem size={{ xs: 12, sm: 6, md: 6 }}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={{ xs: 12, sm: 6, md: 12, lg: 6, xl: 12 }}>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem size={{ xs: 12, sm: 5, md: 6 }}>
        <TextField
          label='Ditt meddelande'
          description='Skriv ett litet meddelande'
        />
      </GridItem>
      <GridItem size={{ xs: 12, sm: 5, md: 6 }}>
        <TextField
          label='Ditt meddelande'
          description='Skriv ett litet meddelande'
        />
      </GridItem>
      <GridItem size='auto'>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem>
        <Card>
          <CardContent>
            <CardTitle>Dina uppgifter</CardTitle>
            <Text>Namn: Namn Namnsson</Text>
          </CardContent>
        </Card>
      </GridItem>
    </Grid>
  ),
}

const previewRows = [[12], [6, 6], [4, 4, 4], [3, 3, 3, 3]] as const

export const Preview: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  // Empty boxes, so the columns themselves are what the preview shows
  parameters: { indexPreview: { width: '640px' } },
  render: args => (
    <Grid {...args}>
      {previewRows.flatMap((row, rowIndex) =>
        row.map((size, index) => (
          <GridItem
            key={`${rowIndex}-${index}`}
            size={size}
          >
            <div
              style={{
                height: 32,
                backgroundColor: 'var(--midas-border-color-subtle)',
              }}
            />
          </GridItem>
        )),
      )}
    </Grid>
  ),
}
