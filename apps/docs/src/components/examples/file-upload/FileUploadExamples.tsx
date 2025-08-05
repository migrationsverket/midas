import { Button, DropZone, FileTrigger, Text } from '@midas-ds/components'
import React from 'react'
import { DropEvent } from 'react-aria'

export const Example = () => {
  const [files, setFiles] = React.useState<string[]>([])

  return (
    <>
      <FileTrigger
        onSelect={(e: FileList | null) => {
          const selectedFiles = e ? Array.from(e) : []
          const filenames = selectedFiles.map(file => file.name)
          setFiles(filenames)
        }}
      >
        <Button>Välj fil</Button>
      </FileTrigger>
      {files.length > 0 && <Text>{files.join(', ')}</Text>}
    </>
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
