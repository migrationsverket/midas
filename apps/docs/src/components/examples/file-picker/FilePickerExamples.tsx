import {
  Button,
  DropZone,
  FieldError,
  FilePicker,
  FileList,
  FileListItem,
  FileTrigger,
  Text,
  type FileListItemProps,
} from '@midas-ds/components'
import { Upload } from 'lucide-react'
import React from 'react'
import { DropEvent, isFileDropItem } from 'react-aria'

export const DefaultExample = () => (
  <FilePicker
    label='Ladda upp en bild på din favoritfrukt'
    description='Du kan välja flera om du har många favoritfrukter'
    allowsMultiple
  />
)

export const DropZoneExample = () => (
  <FilePicker
    label='Ladda upp en bild på din favoritfrukt'
    description='Du kan välja flera om du har många favoritfrukter'
    allowsMultiple
  >
    <DropZone aria-label='Välj filer eller dra och släpp filer här'>
      <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
      <FileTrigger>
        <Button icon={Upload}>Välj filer</Button>
      </FileTrigger>
    </DropZone>
    <FileList />
  </FilePicker>
)

export const AcceptedFileTypesExample = () => (
  <FilePicker
    label='Ladda upp en bild på din favoritfrukt'
    description='Endast .jpg- och .png-filer'
    acceptedFileTypes={['image/jpeg', 'image/png']}
    allowsMultiple
  >
    <DropZone aria-label='Välj filer eller dra och släpp filer här'>
      <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
      <FileTrigger>
        <Button icon={Upload}>Välj filer</Button>
      </FileTrigger>
    </DropZone>
    <FileList />
  </FilePicker>
)

export const FormExample = () => {
  const [submitted, setSubmitted] = React.useState<string[] | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const files = new FormData(e.currentTarget).getAll('fruits') as File[]
    setSubmitted(files.map(file => file.name))
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <FilePicker
        label='Ladda upp bilder på dina favoritfrukter'
        description='Högst tre bilder'
        name='fruits'
        isRequired
        allowsMultiple
        validate={files => (files.length > 3 ? 'Välj högst tre bilder' : true)}
      />
      <div>
        <Button type='submit'>Skicka</Button>
      </div>
      {submitted && <output>Skickade: {submitted.join(', ')}</output>}
    </form>
  )
}

type UploadState = Pick<FileListItemProps, 'status' | 'progress'>

export const UploadOnAddExample = () => {
  const [uploads, setUploads] = React.useState(new Map<File, UploadState>())
  const timers = React.useRef(new Map<File, number>())
  const [submitted, setSubmitted] = React.useState<string | null>(null)

  const setUpload = (file: File, upload: UploadState | null) =>
    setUploads(prev => {
      const next = new Map(prev)
      if (upload) next.set(file, upload)
      else next.delete(file)
      return next
    })

  // Stands in for a fetch or XMLHttpRequest with progress events
  const startUpload = (file: File) => {
    let progress = 0
    setUpload(file, { status: 'uploading', progress })
    timers.current.set(
      file,
      window.setInterval(() => {
        progress += 10
        if (progress < 100) {
          setUpload(file, { status: 'uploading', progress })
          return
        }
        window.clearInterval(timers.current.get(file))
        setUpload(file, { status: 'success' })
      }, 300),
    )
  }

  const abortUpload = (file: File) => {
    window.clearInterval(timers.current.get(file))
    setUpload(file, null)
  }

  const isUploading = [...uploads.values()].some(
    upload => upload.status === 'uploading',
  )
  const fileIds = [...uploads.entries()]
    .filter(([, upload]) => upload.status === 'success')
    .map(([file]) => file.name)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        setSubmitted(new FormData(e.currentTarget).get('fileIds') as string)
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <FilePicker
        label='Ladda upp bilder på dina favoritfrukter'
        allowsMultiple
        onAdd={files => files.forEach(startUpload)}
        onRemove={abortUpload}
        validate={() =>
          isUploading ? 'Vänta tills uppladdningen är klar' : true
        }
      >
        <FileTrigger>
          <Button icon={Upload}>Välj filer</Button>
        </FileTrigger>
        <FileList>
          {file => (
            <FileListItem
              file={file}
              {...uploads.get(file)}
            />
          )}
        </FileList>
      </FilePicker>
      <input
        type='hidden'
        name='fileIds'
        value={fileIds.join(',')}
      />
      <div>
        <Button type='submit'>Skicka</Button>
      </div>
      {submitted !== null && <output>Skickade: {submitted || '–'}</output>}
    </form>
  )
}

export const ControlledExample = () => {
  const [files, setFiles] = React.useState<File[]>([])
  const totalSize = files.reduce((sum, file) => sum + file.size, 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FilePicker
        label='Ladda upp en bild på din favoritfrukt'
        allowsMultiple
        value={files}
        onChange={setFiles}
      />
      <Text>
        Valda filer: {files.length}, totalt {Math.round(totalSize / 1000)} kB
      </Text>
    </div>
  )
}

export const DisabledExample = () => (
  <FilePicker
    label='Ladda upp en bild på din favoritfrukt'
    isDisabled
    defaultValue={[
      new File(['🍎'], 'äpple.png', { type: 'image/png' }),
    ]}
  />
)

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
