import {
  Button,
  DropZone,
  FileList,
  FileListItem,
  FileTrigger,
  Label,
  Text,
} from '@midas-ds/components'
import { ArrowUpFromLine } from 'lucide-react'
import React from 'react'
import { DropEvent } from 'react-aria'

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
            icon={ArrowUpFromLine}
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
    const fileItems = e.items.filter(item => item.kind === 'file')
    const droppedFiles: File[] = await Promise.all(
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
                <ArrowUpFromLine size={20} /> Välj fil(er)
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
