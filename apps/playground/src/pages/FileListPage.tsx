import { useState } from 'react'
import { FileList, FileListItem, Heading } from '@midas-ds/components'

interface FileEntry {
  fileName: string
  fileSize: string
}

const initialFiles: FileEntry[] = [
  { fileName: 'resume.pdf', fileSize: '1.2 MB' },
  { fileName: 'cover-letter.docx', fileSize: '45 KB' },
  { fileName: 'portfolio.zip', fileSize: '12.8 MB' },
  { fileName: 'references.pdf', fileSize: '3.4 MB' },
]

export function FileListPage() {
  const [files, setFiles] = useState<FileEntry[]>(initialFiles)

  const removeFile = (fileName: string) => {
    setFiles(prev => prev.filter(f => f.fileName !== fileName))
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
            key={file.fileName}
            fileName={file.fileName}
            fileSize={file.fileSize}
            onDelete={() => removeFile(file.fileName)}
          />
        ))}
      </FileList>
      {files.length === 0 && <p>No files uploaded.</p>}
    </div>
  )
}
