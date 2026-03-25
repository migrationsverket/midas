import {
  Button,
  DropZone,
  FileList,
  FileListItem,
  FileTrigger,
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FileTrigger
        allowsMultiple
        onSelect={handleSelect}
      >
        <Button>Välj filer</Button>
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
    <>
      <DropZone onDrop={handleDrop}>
        <FileTrigger
          allowsMultiple
          onSelect={handleSelect}
        >
          <Button variant='secondary'>
            <ArrowUpFromLine /> Välj fil
          </Button>
        </FileTrigger>
        <Text slot='label'>Dra och släpp filer här</Text>
      </DropZone>
      {files.length > 0 && (
        <FileList style={{ marginTop: '1rem' }}>
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
    </>
  )
}
