import { Button, DropZone, FileList, FileListItem, FileTrigger, Text } from '@midas-ds/components'
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
      <FileTrigger allowsMultiple onSelect={handleSelect}>
        <Button>Välj filer</Button>
      </FileTrigger>
      {files.length > 0 && (
        <FileList>
          {files.map(file => (
            <FileListItem
              key={file.name}
              id={file.name}
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
  const [files, setFiles] = React.useState<string[]>([])

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(item => item.kind === 'file')
    const droppedFiles: File[] = await Promise.all(
      fileItems.map(item => item.getFile()),
    )
    const filenames = droppedFiles.map(file => file.name)
    setFiles(prev => [...prev, ...filenames])
  }

  const handleSelect = (e: FileList | null) => {
    const selectedFiles = e ? Array.from(e) : []
    const filenames = selectedFiles.map(file => file.name)
    setFiles(prev => [...prev, ...filenames])
  }

  return (
    <DropZone onDrop={handleDrop}>
      <FileTrigger allowsMultiple onSelect={handleSelect}>
        <Button>Select files</Button>
      </FileTrigger>
      <Text slot="label" style={{ display: 'block' }}>
        {files.length > 0 ? files.join(', ') : 'Drop files here'}
      </Text>
    </DropZone>
  )
}
