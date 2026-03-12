import { useState } from 'react'
import { FileList, FileListItem, Heading } from '@midas-ds/components'

interface FileEntry {
  id: string
  fileName: string
  fileSize: string
}

const initialFiles: FileEntry[] = [
  { id: '1', fileName: 'resume.pdf', fileSize: '1.2 MB' },
  { id: '2', fileName: 'cover-letter.docx', fileSize: '45 KB' },
  { id: '3', fileName: 'portfolio.zip', fileSize: '12.8 MB' },
  { id: '4', fileName: 'references.pdf', fileSize: '3.4 MB' },
]

export function FileListPage() {
  const [files, setFiles] = useState<FileEntry[]>(initialFiles)

  const removeFile = (id: string) => {
    setFiles(prev => prev.filter(f => f.id !== id))
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px' }}>
      <Heading
        level={1}
        enableMargins
      >
        FileList
      </Heading>
      <FileList aria-label='Uploaded files'>
        {files.map(file => (
          <FileListItem
            key={file.id}
            id={file.id}
            fileName={file.fileName}
            fileSize={file.fileSize}
            onDelete={() => removeFile(file.id)}
          />
        ))}
      </FileList>
      {files.length === 0 && <p>No files uploaded.</p>}
    </div>
  )
}
