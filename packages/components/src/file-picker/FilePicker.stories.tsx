import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { DropEvent, isFileDropItem } from 'react-aria'
import { Upload } from 'lucide-react'
import { FilePicker, FilePickerProps } from './FilePicker'
import { FileTrigger } from '../file-trigger'
import { DropZone } from '../drop-zone'
import { FileList, FileListItem } from '../file-list'
import { Button } from '../button'
import { Text } from '../text'

type Story = StoryObj<typeof FilePicker>

export default {
  component: FilePicker,
  title: 'Components/FilePicker',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Ladda upp en bild på din favoritfrukt',
    description: 'Du kan välja flera om du har många favoritfrukter',
  },
} satisfies Meta<typeof FilePicker>

const useUniqueFiles = () => {
  const [files, setFiles] = React.useState<File[]>([])

  const addFiles = (newFiles: File[]) =>
    setFiles(oldFiles => {
      const existingFileNames = new Set(oldFiles.map(({ name }) => name))

      return [
        ...oldFiles,
        ...newFiles.filter(({ name }) => !existingFileNames.has(name)),
      ]
    })

  const removeFile = (name: string) =>
    setFiles(oldFiles => oldFiles.filter(file => file.name !== name))

  return { files, addFiles, removeFile }
}

const UploadedFiles = ({
  files,
  onDelete,
}: {
  files: File[]
  onDelete: (name: string) => void
}) =>
  files.length > 0 && (
    <FileList aria-label='Valda filer'>
      {files.map(file => (
        <FileListItem
          key={file.name}
          fileName={file.name}
          fileSize={`${(file.size / 1024).toFixed(1)} KB`}
          onDelete={() => onDelete(file.name)}
        />
      ))}
    </FileList>
  )

const DefaultContainer = (args: FilePickerProps) => {
  const { files, addFiles, removeFile } = useUniqueFiles()

  return (
    <FilePicker {...args}>
      <FileTrigger
        allowsMultiple
        onSelect={fileList => fileList && addFiles(Array.from(fileList))}
        data-testid='file-trigger'
      >
        <Button icon={Upload}>Välj fil(er)</Button>
      </FileTrigger>
      <UploadedFiles
        files={files}
        onDelete={removeFile}
      />
    </FilePicker>
  )
}

const DropZoneContainer = (args: FilePickerProps) => {
  const { files, addFiles, removeFile } = useUniqueFiles()

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(isFileDropItem)
    addFiles(await Promise.all(fileItems.map(item => item.getFile())))
  }

  return (
    <FilePicker {...args}>
      <DropZone onDrop={handleDrop}>
        <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
        <FileTrigger
          allowsMultiple
          onSelect={fileList => fileList && addFiles(Array.from(fileList))}
        >
          <Button icon={Upload}>Välj fil(er)</Button>
        </FileTrigger>
      </DropZone>
      <UploadedFiles
        files={files}
        onDelete={removeFile}
      />
    </FilePicker>
  )
}

export const Default: Story = {
  render: args => <DefaultContainer {...args} />,
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Endast .jpg- och .png-filer tillåts',
  },
  render: args => <DefaultContainer {...args} />,
}

export const WithDropZone: Story = {
  name: 'With a DropZone',
  render: args => <DropZoneContainer {...args} />,
}

export const InvalidWithDropZone: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Endast .jpg- och .png-filer tillåts',
  },
  render: args => <DropZoneContainer {...args} />,
}

const ACCEPTED_TYPES = ['image/png', 'image/jpeg']
const MAX_SIZE = 1024 * 1024

/** The reason a file can't be uploaded, if any */
const validateFile = (file: File) => {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    return 'Endast .jpg- och .png-filer tillåts'
  }
  if (file.size > MAX_SIZE) return 'Filen är för stor, max 1 MB'
  return undefined
}

const RejectedFilesContainer = (args: FilePickerProps) => {
  const { files, addFiles, removeFile } = useUniqueFiles()

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(isFileDropItem)
    addFiles(await Promise.all(fileItems.map(item => item.getFile())))
  }

  return (
    <FilePicker {...args}>
      <DropZone onDrop={handleDrop}>
        <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
        <FileTrigger
          allowsMultiple
          acceptedFileTypes={ACCEPTED_TYPES}
          onSelect={fileList => fileList && addFiles(Array.from(fileList))}
          data-testid='file-trigger'
        >
          <Button icon={Upload}>Välj fil(er)</Button>
        </FileTrigger>
      </DropZone>
      {files.length > 0 && (
        <FileList aria-label='Valda filer'>
          {files.map(file => {
            const error = validateFile(file)
            return (
              <FileListItem
                key={file.name}
                fileName={file.name}
                fileSize={`${(file.size / 1024).toFixed(1)} KB`}
                status={error ? 'error' : 'idle'}
                errorMessage={error}
                onDelete={() => removeFile(file.name)}
              />
            )
          })}
        </FileList>
      )}
    </FilePicker>
  )
}

/**
 * `acceptedFileTypes` only limits the file dialog, a dropped file can be of
 * any type. The app checks every file, and lists the ones it rejects as
 * failed, with the reason.
 */
export const RejectedFiles: Story = {
  args: {
    description: 'Endast .jpg och .png, max 1 MB per fil',
  },
  render: args => <RejectedFilesContainer {...args} />,
}
