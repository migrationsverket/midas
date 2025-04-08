import { FileUpload } from '@midas-ds/components'
import React from 'react'

export const ControlledExample = () => {
  const [files, setFiles] = React.useState<string[]>([])

  return (
    <>
      <FileUpload
        allowsMultiple
        label='Välj filer att ladda upp'
        description='Du kan välja flera filer'
        onSelect={e => {
          if (e) {
            const files = Array.from(e)
            const filenames = files.map(file => file.name)
            setFiles(filenames)
          }
        }}
      />
      Valda filer: {files.join(', ')}
    </>
  )
}
