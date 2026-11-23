import {
  Button,
  DropZone,
  FileList,
  FileListItem,
  FilePicker,
  FileTrigger,
  Text,
  type DropEvent,
} from '@midas-ds/components'
import { Upload } from 'lucide-react'
import React from 'react'
import { isFileDropItem } from 'react-aria'

const ACCEPTED_TYPES = ['image/png', 'image/jpeg']
const MAX_FILE_SIZE = 5 * 1024 * 1024
const MAX_TOTAL_SIZE = 10 * 1024 * 1024

// Byt ut mot er egen uppladdning
const uploadFile = (file: File, signal: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timer = setTimeout(resolve, 1500)
    signal.addEventListener('abort', () => {
      clearTimeout(timer)
      reject(signal.reason)
    })
  })

interface SelectedFile {
  id: number
  file: File
  status: 'idle' | 'uploading' | 'success' | 'error'
}

const formatSize = (bytes: number) =>
  bytes < 1024 * 1024
    ? `${Math.round(bytes / 1024)} kB`
    : `${(bytes / 1024 / 1024).toFixed(1)} MB`

const WRONG_TYPE = 'Felaktigt filformat. Ladda upp en jpg eller png.'
const FILE_TOO_LARGE = 'Filen är för stor. Maximal filstorlek är 5 MB.'
const TOTAL_TOO_LARGE = 'Filerna tillsammans överstiger 10 MB.'
const UPLOAD_FAILED = 'Uppladdningen misslyckades. Försök igen.'

const getFileError = (file: File, sizeBefore: number) => {
  if (!ACCEPTED_TYPES.includes(file.type)) return WRONG_TYPE
  if (file.size > MAX_FILE_SIZE) return FILE_TOO_LARGE
  if (sizeBefore + file.size > MAX_TOTAL_SIZE) return TOTAL_TOO_LARGE
  return undefined
}

export const FileUploadComplete = () => {
  const [files, setFiles] = React.useState<SelectedFile[]>([])
  const nextId = React.useRef(0)
  const controllers = React.useRef(new Map<number, AbortController>())

  const checked: (SelectedFile & { error?: string })[] = []
  let totalSize = 0
  for (const selected of files) {
    const error = getFileError(selected.file, totalSize)
    if (!error) totalSize += selected.file.size
    checked.push({ ...selected, error })
  }
  const isTooLarge = checked.some(({ error }) => error === TOTAL_TOO_LARGE)

  // Filer med fel visas först så att de syns direkt
  const hasError = ({ error, status }: (typeof checked)[number]) =>
    Boolean(error) || status === 'error'
  const sorted = [
    ...checked.filter(hasError),
    ...checked.filter(selected => !hasError(selected)),
  ]

  const setStatus = (id: number, status: SelectedFile['status']) =>
    setFiles(prev =>
      prev.map(selected =>
        selected.id === id ? { ...selected, status } : selected,
      ),
    )

  React.useEffect(() => {
    checked
      .filter(({ error, status }) => !error && status === 'idle')
      // React kör effekter två gånger i utvecklingsläge
      .filter(({ id }) => !controllers.current.has(id))
      .forEach(({ id, file }) => {
        const controller = new AbortController()
        controllers.current.set(id, controller)
        setStatus(id, 'uploading')
        uploadFile(file, controller.signal)
          .then(() => setStatus(id, 'success'))
          .catch(() => {
            if (!controller.signal.aborted) setStatus(id, 'error')
          })
      })
  })

  const addFiles = (newFiles: File[]) =>
    setFiles(prev => [
      ...prev,
      ...newFiles.map(file => ({
        id: nextId.current++,
        file,
        status: 'idle' as const,
      })),
    ])

  const removeFile = (id: number) => {
    controllers.current.get(id)?.abort()
    controllers.current.delete(id)
    setFiles(prev => prev.filter(selected => selected.id !== id))
  }

  const handleDrop = async (e: DropEvent) => {
    const items = e.items.filter(isFileDropItem)
    addFiles(await Promise.all(items.map(item => item.getFile())))
  }

  return (
    <FilePicker
      label='Ladda upp bilder på dina favoritfrukter'
      description='Endast jpg eller png. Max 5 MB per fil och 10 MB totalt.'
      isInvalid={isTooLarge}
      errorMessage={`${TOTAL_TOO_LARGE} Ta bort en eller flera filer för att gå vidare.`}
    >
      <DropZone onDrop={handleDrop}>
        <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
        <FileTrigger
          allowsMultiple
          acceptedFileTypes={ACCEPTED_TYPES}
          onSelect={fileList => fileList && addFiles(Array.from(fileList))}
        >
          <Button icon={Upload}>Välj fil(er)</Button>
        </FileTrigger>
      </DropZone>
      {checked.length > 0 && (
        <FileList aria-label='Valda filer'>
          {sorted.map(({ id, file, status, error }) => (
            <FileListItem
              key={id}
              fileName={file.name}
              fileSize={formatSize(file.size)}
              status={error ? 'error' : status}
              errorMessage={
                error ?? (status === 'error' ? UPLOAD_FAILED : undefined)
              }
              onCancel={() => removeFile(id)}
              onDelete={() => removeFile(id)}
            />
          ))}
        </FileList>
      )}
    </FilePicker>
  )
}
