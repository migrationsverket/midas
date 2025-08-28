import type { Meta, StoryObj } from '@storybook/react-vite'
import { DropZone, FileTrigger } from './FileUpload'
import { Button } from '../button'
import { Text } from '../text'
import React from 'react'
import {
  expect,
  fn,
  userEvent,
  within,
  fireEvent,
  waitFor,
} from 'storybook/test'
import { DropEvent } from 'react-aria'

interface DropZoneTestContainerProps {
  onSelect: (files: File[]) => void;
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
  render: args => <DropZoneTestContainer {...args} />,
  args: {
    // @ts-expect-error onSelect exists only on FileTrigger
    onSelect: fn(),
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)
    const testFile = new File(['hello'], 'hello.png', { type: 'image/png' })

    // Test 1: FileTrigger button click
    const fileTrigger = canvas.getByTestId('file-trigger')
    await userEvent.upload(fileTrigger, testFile)
    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledWith([testFile])
    })

    // Test 2: DropZone drop
    const dropZone = canvas.getByTestId('drop-zone')
    const dropEvent = new Event('drop', { bubbles: true })
    Object.defineProperty(dropEvent, 'dataTransfer', {
      value: {
        files: [testFile],
        items: [
          {
            kind: 'file',
            type: testFile.type,
            getAsFile: () => testFile,
          },
        ],
        types: ['Files'],
      },
    })
    await fireEvent(dropZone, dropEvent)

    await waitFor(() => {
      expect(args.onSelect).toHaveBeenCalledTimes(2)
      expect(args.onSelect).toHaveBeenLastCalledWith([testFile])
    })
  },
}
