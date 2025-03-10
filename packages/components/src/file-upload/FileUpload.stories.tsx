import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './FileUpload'
import { expect, fn, userEvent } from '@storybook/test'

const meta: Meta<typeof FileUpload> = {
  component: FileUpload,
  title: 'Components/FileUpload',
  tags: ['autodocs'],
  argTypes: {},
  args: {
    label: 'Label',
    description: 'Description',
    allowsMultiple: true,
  },
}
export default meta
type Story = StoryObj<typeof FileUpload>

export const Primary: Story = {}

export const CustomSelectHandler: Story = {
  args: {
    // @ts-expect-error dont recognize this property
    'data-testid': 'test',
    onSelect: fn(),
  },
  play: async ({ canvas, step, args }) => {
    await step('it should use the provided onSelect callback', async () => {
      const testFile = new File(['derp'], 'derp.png', { type: 'image/png' })
      const fileUpload: HTMLInputElement = canvas.getByTestId(
        // @ts-expect-error dont recognize this property
        args['data-testid'] as string,
      )
      await userEvent.upload(fileUpload, testFile)
      expect(args.onSelect).toHaveBeenCalledTimes(1)
      expect(fileUpload?.files?.[0]).toStrictEqual(testFile)
      expect(fileUpload?.files?.item(0)).toStrictEqual(testFile)
      expect(fileUpload.files).toHaveLength(1)
    })
  },
}
