import {
  Button,
  DropZone,
  FieldError,
  FileField,
  FileList,
  FileListItem,
  FileTrigger,
  Text,
} from '@midas-ds/components'
import { Upload } from 'lucide-react'
import React from 'react'
import { DropEvent, isFileDropItem } from 'react-aria'

const useUniqueFiles = () => {
  const [files, setFiles] = React.useState<File[]>([])

  const addFiles = (newFiles: File[]) => {
    setFiles(oldFiles => {
      const existingNames = new Set(oldFiles.map(f => f.name))
      return [...oldFiles, ...newFiles.filter(f => !existingNames.has(f.name))]
    })
  }

  const removeFile = (name: string) => {
    setFiles(oldFiles => oldFiles.filter(f => f.name !== name))
  }

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

export const FileListExample = () => {
  const { files, addFiles, removeFile } = useUniqueFiles()

  const handleSelect = (fileList: FileList | null) => {
    if (fileList) addFiles(Array.from(fileList))
  }

  return (
    <FileField
      label='Ladda upp en bild på din favoritfrukt'
      description='Du kan välja flera om du har många favoritfrukter'
    >
      <FileTrigger
        allowsMultiple
        onSelect={handleSelect}
      >
        <Button icon={Upload}>
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

export const DropZoneExample = () => {
  const { files, addFiles, removeFile } = useUniqueFiles()

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(isFileDropItem)
    const droppedFiles = await Promise.all(
      fileItems.map(item => item.getFile()),
    )
    addFiles(droppedFiles)
  }

  const handleSelect = (fileList: FileList | null) => {
    if (fileList) addFiles(Array.from(fileList))
  }

  return (
    <FileField
      label='Ladda upp en bild på din favoritfrukt'
      description='Du kan välja flera om du har många favoritfrukter'
    >
      <DropZone
        onDrop={handleDrop}
        aria-label='Välj filer eller dra och släpp filer här'
      >
        <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
        <FileTrigger
          allowsMultiple
          onSelect={handleSelect}
        >
          <Button icon={Upload}>
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

const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png']

export const ValidatedDropZoneExample = () => {
  const [isInvalid, setIsInvalid] = React.useState(false)

  const validate = (files: File[]) => {
    setIsInvalid(files.some(file => !ACCEPTED_FILE_TYPES.includes(file.type)))
  }

  const handleSelect = (fileList: FileList | null) => {
    if (fileList) validate(Array.from(fileList))
  }

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(isFileDropItem)
    const droppedFiles = await Promise.all(
      fileItems.map(item => item.getFile()),
    )
    validate(droppedFiles)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 480 }}>
      <DropZone
        onDrop={handleDrop}
        isInvalid={isInvalid}
        aria-label='Släpp filer här'
      >
        <Text slot='label'>Släpp filer här</Text>
        <FileTrigger
          acceptedFileTypes={ACCEPTED_FILE_TYPES}
          onSelect={handleSelect}
        >
          <Button>
            <Upload
              aria-hidden
              size={20}
            />
            Välj .jpg- eller .png-filer
          </Button>
        </FileTrigger>
      </DropZone>
      {isInvalid && (
        <FieldError isInvalid>Endast .jpg- och .png-filer tillåts</FieldError>
      )}
    </div>
  )
}
