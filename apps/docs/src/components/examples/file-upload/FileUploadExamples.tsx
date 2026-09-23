import {
  Button,
  DropZone,
  FieldError,
  FileList,
  FileListItem,
  FileTrigger,
  Label,
  Text,
} from '@midas-ds/components'
import { Upload } from 'lucide-react'
import React from 'react'
import { DropEvent, isFileDropItem } from 'react-aria'

export const FileListExample = () => {
  const [files, setFiles] = React.useState<File[]>([])

  const handleSelect = (e: FileList | null) => {
    const selected = e ? Array.from(e) : []
    setFiles(prev => {
      const existingNames = new Set(prev.map(f => f.name))
      return [...prev, ...selected.filter(f => !existingNames.has(f.name))]
    })
  }

  const handleDelete = (name: string) => {
    setFiles(prev => prev.filter(f => f.name !== name))
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Label>Ladda upp en bild på din favoritfrukt</Label>
        <Text slot='description'>
          Du kan välja flera om du har många favoritfrukter
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FileTrigger
          allowsMultiple
          onSelect={handleSelect}
        >
          <Button
            variant='secondary'
            icon={Upload}
          >
            Välj fil(er)
          </Button>
        </FileTrigger>
        {files.length > 0 && (
          <FileList>
            {files.map(file => (
              <FileListItem
                key={file.name}
                fileName={file.name}
                fileSize={`${(file.size / 1024).toFixed(1)} KB`}
                onDelete={() => handleDelete(file.name)}
              />
            ))}
          </FileList>
        )}
      </div>
    </div>
  )
}

export const DropZoneExample = () => {
  const [files, setFiles] = React.useState<File[]>([])

  const setUniqueFiles = (newFiles: File[]) => {
    setFiles(oldFiles => {
      const existingNames = new Set(oldFiles.map(f => f.name))
      return [...oldFiles, ...newFiles.filter(f => !existingNames.has(f.name))]
    })
  }

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(isFileDropItem)
    const droppedFiles = await Promise.all(
      fileItems.map(item => item.getFile()),
    )
    setUniqueFiles(droppedFiles)
  }

  const handleSelect = (e: FileList | null) => {
    const selectedFiles = e ? Array.from(e) : []
    setUniqueFiles(selectedFiles)
  }

  const handleDelete = (name: string) => {
    setFiles(prev => prev.filter(f => f.name !== name))
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Label>Ladda upp en bild på din favoritfrukt</Label>
        <Text slot='description'>
          Du kan välja flera om du har många favoritfrukter
        </Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <DropZone onDrop={handleDrop}>
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
            <FileTrigger
              allowsMultiple
              onSelect={handleSelect}
            >
              <Button variant='secondary'>
                <Upload size={20} /> Välj fil(er)
              </Button>
            </FileTrigger>
          </div>
        </DropZone>
        {files.length > 0 && (
          <FileList>
            {files.map(file => (
              <FileListItem
                key={file.name}
                fileName={file.name}
                fileSize={`${(file.size / 1024).toFixed(1)} KB`}
                onDelete={() => handleDelete(file.name)}
              />
            ))}
          </FileList>
        )}
      </div>
    </div>
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 480,
      }}
    >
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
          <Button variant='secondary'>
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
