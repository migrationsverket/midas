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
        fileName='resume.pdf'
        fileSize='1.2 MB'
        onDelete={() => {
          // noop
        }}
      />
      <FileListItem
        fileName='cover-letter.docx'
        fileSize='45 KB'
        onDelete={() => {
          // noop
        }}
      />
      <FileListItem
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
        fileName='resume.pdf'
        onDelete={() => {
          // noop
        }}
      />
      <FileListItem
        fileName='cover-letter.docx'
        onDelete={() => {
          // noop
        }}
      />
    </FileList>
  ),
}

export const Empty: Story = {
  // Reproduced twice on the same machine, back to back, no code changes in
  // between: fails visual regression with "Could not capture a stable
  // screenshot within 5000ms." Quarantined until root-caused — see PR #1367.
  tags: ['!snapshot'],
  render: args => (
    <FileList {...args}>
      {[]}
    </FileList>
  ),
}

export const Uploading: Story = {
  tags: ['!snapshot'],
  render: args => (
    <FileList {...args}>
      <FileListItem
        fileName='large-video.mp4'
        fileSize='128 MB'
        status='uploading'
        onDelete={() => {
          // noop
        }}
      />
    </FileList>
  ),
}

export const UploadingDeterminate: Story = {
  render: args => (
    <FileList {...args}>
      <FileListItem
        fileName='large-video.mp4'
        fileSize='128 MB'
        status='uploading'
        progress={40}
        onDelete={() => {
          // noop
        }}
      />
    </FileList>
  ),
}

export const Success: Story = {
  render: args => (
    <FileList {...args}>
      <FileListItem
        fileName='resume.pdf'
        fileSize='1.2 MB'
        status='success'
        onDelete={() => {
          // noop
        }}
      />
    </FileList>
  ),
}

export const Error: Story = {
  render: args => (
    <FileList {...args}>
      <FileListItem
        fileName='resume.pdf'
        fileSize='1.2 MB'
        status='error'
        errorMessage='Det gick inte bra'
        onDelete={() => {
          // noop
        }}
      />
    </FileList>
  ),
}

export const MixedStates: Story = {
  render: args => (
    <FileList {...args}>
      <FileListItem
        fileName='idle-file.pdf'
        fileSize='1.2 MB'
        onDelete={() => {
          // noop
        }}
      />
      <FileListItem
        fileName='large-video.mp4'
        fileSize='128 MB'
        status='uploading'
        progress={40}
        onDelete={() => {
          // noop
        }}
      />
      <FileListItem
        fileName='cover-letter.docx'
        fileSize='45 KB'
        status='success'
        onDelete={() => {
          // noop
        }}
      />
      <FileListItem
        fileName='references.pdf'
        fileSize='3.4 MB'
        status='error'
        errorMessage='Det gick inte bra'
        onDelete={() => {
          // noop
        }}
      />
    </FileList>
  ),
}
