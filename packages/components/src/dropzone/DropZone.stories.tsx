import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { DropEvent } from 'react-aria'
import { DropZone } from './DropZone'
import { FileTrigger } from '../file-upload'
import { Button } from '../button'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Label } from '../label'

const meta: Meta<typeof DropZone> = {
  component: DropZone,
  title: 'Components/DropZone',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <DropZone
      {...args}
      style={{ width: 679 }}
    >
      <Text slot='label'>Släpp filer här</Text>
    </DropZone>
  ),
}

export const WithFieldLabel: Story = {
  name: 'With an outer field label',
  parameters: {
    docs: {
      description: {
        story:
          "For a Dropzone used as one field among others in a form, pair it with an outer `Label` — same pattern as `TextField`. Wire it up with `aria-labelledby`; it's combined with the inside `slot='label'` text for the accessible name, so both stay announced.",
      },
    },
  },
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', width: 679 }}>
      <Label id='dropzone-field-label'>Ladda upp filer</Label>
      <DropZone
        {...args}
        aria-labelledby='dropzone-field-label'
      >
        <Text slot='label'>Släpp filer här</Text>
      </DropZone>
    </div>
  ),
}

export const Invalid: Story = {
  name: 'Invalid (message inside)',
  render: args => (
    <DropZone
      {...args}
      isInvalid
      style={{ width: 679 }}
    >
      <Text slot='label'>Släpp filer här</Text>
      {/* Pinned to the corner, full width — the dropzone's own `align-items:
          center` would otherwise center it like the label above. */}
      <FieldError style={{ alignSelf: 'flex-start', width: '100%' }}>
        Validering
      </FieldError>
    </DropZone>
  ),
}

export const InvalidOutside: Story = {
  name: 'Invalid (message outside)',
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', width: 679 }}>
      <DropZone
        {...args}
        isInvalid
      >
        <Text slot='label'>Släpp filer här</Text>
      </DropZone>
      <FieldError isInvalid>Validering</FieldError>
    </div>
  ),
}

export const Disabled: Story = {
  render: args => (
    <DropZone
      {...args}
      isDisabled
      style={{ width: 679 }}
    >
      <Text slot='label'>Släpp filer här</Text>
    </DropZone>
  ),
}

// ─── Test-only: composed with FileTrigger for the classic file-upload flow ───

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
        onDrop={handleDrop}
        data-testid='drop-zone'
      >
        <Text slot='label'>Drop files here</Text>
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

export const WithFileTrigger: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  // @ts-expect-error onSelect exists only on the test container, not DropZone
  render: args => <DropZoneTestContainer {...args} />,
}
