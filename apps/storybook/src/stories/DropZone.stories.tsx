import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button, DropZone, FileTrigger, Text } from '@midas-ds/components'
import React from 'react'
import { DropEvent } from 'react-aria'

interface DropZoneTestContainerProps {
  onSelect: (files: File[]) => void
}

const DropZoneTestContainer = (props: DropZoneTestContainerProps) => {
  const [files, setFiles] = React.useState<File[]>([])

  const handleSelect = (selectedFileList: FileList | null) => {
    if (selectedFileList) {
      const selectedFiles = Array.from(selectedFileList)
      setFiles(prev => [...prev, ...selectedFiles])
      props.onSelect(selectedFiles)
    }
  }

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(item => item.kind === 'file')
    const droppedFiles: File[] = await Promise.all(
      fileItems.map(item => item.getFile()),
    )
    setFiles(prev => [...prev, ...droppedFiles])
    props.onSelect(droppedFiles)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FileTrigger
        onSelect={handleSelect}
        data-testid='file-trigger'
      >
        <Button>Select files</Button>
      </FileTrigger>
      <img
        alt=''
        data-testid='image'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Relative_compliment.svg/250px-Relative_compliment.svg.png'
      />
      <DropZone
        {...props}
        onDrop={handleDrop}
        data-testid='drop-zone'
      >
        <Text>Drop files here</Text>
      </DropZone>
      {files.length > 0 && (
        <div>
          <h4>Selected files:</h4>
          <ul>
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const meta: Meta<typeof DropZone> = {
  component: DropZone,
  title: 'Components/DropZone',
  tags: ['!dev', '!autodocs'],
  // @ts-expect-error onSelect exists only on FileTrigger
  render: args => <DropZoneTestContainer {...args} />,
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
