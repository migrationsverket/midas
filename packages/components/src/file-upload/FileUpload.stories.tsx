import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './FileUpload'
import { expect, fn, userEvent } from '@storybook/test'
import styles from './FileUpload.module.css'

const meta: Meta<typeof FileUpload> = {
  component: FileUpload,
  title: 'Components/FileUpload',
  tags: ['autodocs'],
  argTypes: {},
  args: {
    label: 'Label',
    description: 'Description',
    allowsMultiple: true,
    className: 'test-class',
  },
}
export default meta
type Story = StoryObj<typeof FileUpload>

export const Primary: Story = {
  play: async ({ canvasElement, step, args }) => {
    await step('it should use accept a custom className', async () => {
      await expect(canvasElement.querySelector('div')).toHaveClass(
        styles.container,
        args.className as string,
      )
    })
  },
}

export const DropZone: Story = {
  args: {
    dropzone: true,
  },
}

export const WithFiles: Story = {
  tags: ['!autodocs'],
  parameters: {
    chromatic: { disableSnapshot: true },
  },
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
      expect(fileUpload?.files?.[0]).toStrictEqual(testFile)
      expect(fileUpload?.files?.item(0)).toStrictEqual(testFile)
      expect(fileUpload.files).toHaveLength(1)
    })
  },
}
