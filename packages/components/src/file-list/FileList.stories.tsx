import type { Meta, StoryObj } from '@storybook/react-vite'
import { FileList } from './FileList'
import { FileListItem } from './FileListItem'

type Story = StoryObj<typeof FileList>

export default {
  component: FileList,
  subcomponents: { FileListItem },
  title: 'Components/FileList',
  tags: ['autodocs'],
  args: {
    'aria-label': 'Uploaded files',
  },
  render: args => (
    <FileList {...args}>
      <FileListItem
        id='1'
        fileName='resume.pdf'
        fileSize='1.2 MB'
        onDelete={() => {
          // noop
        }}
      />
      <FileListItem
        id='2'
        fileName='cover-letter.docx'
        fileSize='45 KB'
        onDelete={() => {
          // noop
        }}
      />
      <FileListItem
        id='3'
        fileName='references.pdf'
        fileSize='3.4 MB'
        onDelete={() => {
          // noop
        }}
      />
    </FileList>
  ),
} satisfies Meta<typeof FileList>

export const Default: Story = {}

export const WithoutFileSize: Story = {
  render: args => (
    <FileList {...args}>
      <FileListItem
        id='1'
        fileName='resume.pdf'
        onDelete={() => {
          // noop
        }}
      />
      <FileListItem
        id='2'
        fileName='cover-letter.docx'
        onDelete={() => {
          // noop
        }}
      />
    </FileList>
  ),
}

export const Empty: Story = {
  render: args => (
    <FileList {...args}>
      {[]}
    </FileList>
  ),
}
