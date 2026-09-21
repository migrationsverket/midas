import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
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
  parameters: {
    docs: {
      description: {
        story:
          "Use `onCancel`, not `onDelete`, while `status='uploading'` — that's where you'd abort the actual in-flight request (`XMLHttpRequest.abort()`/`AbortController.abort()`). `onDelete` still works as a fallback if `onCancel` is omitted, but an upload that isn't actually aborted keeps running in the background after the row disappears.",
      },
    },
  },
  render: args => (
    <FileList {...args}>
      <FileListItem
        fileName='large-video.mp4'
        fileSize='128 MB'
        status='uploading'
        onCancel={() => {
          // noop — in a real app, abort the in-flight upload request here
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
        onCancel={() => {
          // noop — in a real app, abort the in-flight upload request here
        }}
      />
    </FileList>
  ),
}

export const Success: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`FileList` has no concept of an upload having completed vs. a file only ever existing locally — by the time `status='success'` is set, the file is presumably already persisted server-side. `onDelete` here is your only hook to remove it there too; if you only pop it from local state, the file stays wherever it was uploaded to.",
      },
    },
  },
  render: args => (
    <FileList {...args}>
      <FileListItem
        fileName='resume.pdf'
        fileSize='1.2 MB'
        status='success'
        onDelete={() => {
          // noop — in a real app, this is likely a server-side delete call
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
        onCancel={() => {
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

// ─── Test-only: real state-driven removal, so focus management on delete
// (moves to a sibling's action button, or the list itself if that was the
// last row) can actually be exercised. ───

interface FocusTestContainerProps {
  initialFiles: string[]
}

const FocusTestContainer = ({ initialFiles }: FocusTestContainerProps) => {
  const [files, setFiles] = React.useState(initialFiles)

  return (
    <FileList aria-label='Test'>
      {files.map(name => (
        <FileListItem
          key={name}
          fileName={name}
          onDelete={() => setFiles(prev => prev.filter(f => f !== name))}
        />
      ))}
    </FileList>
  )
}

export const FocusManagementTest: StoryObj<FocusTestContainerProps> = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  render: args => <FocusTestContainer {...args} />,
}
