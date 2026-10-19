import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { DropEvent, isFileDropItem } from 'react-aria'
import { Upload } from 'lucide-react'
import { FileField, FileFieldProps } from './FileField'
import { FileTrigger } from '../file-trigger'
import { DropZone } from '../drop-zone'
import { FileList, FileListItem } from '../file-list'
import { Button } from '../button'
import { Text } from '../text'

type Story = StoryObj<typeof FileField>

export default {
  component: FileField,
  title: 'Components/FileField',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Ladda upp en bild på din favoritfrukt',
    description: 'Du kan välja flera om du har många favoritfrukter',
  },
} satisfies Meta<typeof FileField>

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

const DefaultContainer = (args: FileFieldProps) => {
  const { files, addFiles, removeFile } = useUniqueFiles()

  return (
    <FileField {...args}>
      <FileTrigger
        allowsMultiple
        onSelect={fileList => fileList && addFiles(Array.from(fileList))}
        data-testid='file-trigger'
      >
        <Button
          variant='secondary'
          icon={Upload}
        >
          Välj fil(er)
        </Button>
      </FileTrigger>
      <UploadedFiles
        files={files}
        onDelete={removeFile}
      />
    </FileField>
  )
}

const DropZoneContainer = (args: FileFieldProps) => {
  const { files, addFiles, removeFile } = useUniqueFiles()

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(isFileDropItem)
    addFiles(await Promise.all(fileItems.map(item => item.getFile())))
  }

  return (
    <FileField {...args}>
      <DropZone onDrop={handleDrop}>
        <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
        <FileTrigger
          allowsMultiple
          onSelect={fileList => fileList && addFiles(Array.from(fileList))}
        >
          <Button
            variant='secondary'
            icon={Upload}
          >
            Välj fil(er)
          </Button>
        </FileTrigger>
      </DropZone>
      <UploadedFiles
        files={files}
        onDelete={removeFile}
      />
    </FileField>
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
