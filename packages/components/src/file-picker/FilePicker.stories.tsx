import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { DropEvent, isFileDropItem } from 'react-aria'
import { Upload as UploadIcon } from 'lucide-react'
import { FilePicker, FilePickerProps } from './FilePicker'
import { FileTrigger } from '../file-trigger'
import { DropZone } from '../drop-zone'
import { FileList, FileListItem } from '../file-list'
import { Button } from '../button'
import { Text } from '../text'

type Story = StoryObj<typeof FilePicker>

export default {
  component: FilePicker,
  title: 'Components/FilePicker',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Ladda upp en bild på din favoritfrukt',
    description: 'Du kan välja flera om du har många favoritfrukter',
  },
} satisfies Meta<typeof FilePicker>

interface Upload {
  id: string
  file: File
  status: 'uploading' | 'success' | 'error'
  progress: number
}

/**
 * Stands in for the app's own upload logic: files are uploaded as soon as
 * they're picked, and files with "fel" in the name fail.
 */
let nextUploadId = 0

const useUploads = (initialUploads: Upload[] = []) => {
  const [uploads, setUploads] = React.useState(initialUploads)
  const timers = React.useRef(new Map<string, ReturnType<typeof setInterval>>())

  React.useEffect(() => {
    const running = timers.current
    return () => running.forEach(clearInterval)
  }, [])

  const update = (id: string, change: Partial<Upload>) =>
    setUploads(old => old.map(u => (u.id === id ? { ...u, ...change } : u)))

  const startUploads = (files: File[]) => {
    const added = files.map(file => ({
      id: `upload-${nextUploadId++}`,
      file,
      status: 'uploading' as const,
      progress: 0,
    }))
    setUploads(old => [...old, ...added])

    added.forEach(({ id, file }) => {
      let progress = 0
      const timer = setInterval(() => {
        progress += 25
        if (progress < 100) return update(id, { progress })

        clearInterval(timer)
        timers.current.delete(id)
        update(id, {
          progress,
          status: file.name.includes('fel') ? 'error' : 'success',
        })
      }, 200)
      timers.current.set(id, timer)
    })
  }

  const remove = (id: string) => {
    clearInterval(timers.current.get(id))
    timers.current.delete(id)
    setUploads(old => old.filter(u => u.id !== id))
  }

  const onSelect = (fileList: FileList | null) =>
    fileList && startUploads(Array.from(fileList))

  const onDrop = async (e: DropEvent) =>
    startUploads(
      await Promise.all(
        e.items.filter(isFileDropItem).map(item => item.getFile()),
      ),
    )

  return { uploads, remove, onSelect, onDrop }
}

const Uploads = ({
  uploads,
  onRemove,
}: {
  uploads: Upload[]
  onRemove: (id: string) => void
}) =>
  uploads.length > 0 && (
    <FileList aria-label='Valda filer'>
      {uploads.map(upload => (
        <FileListItem
          key={upload.id}
          fileName={upload.file.name}
          fileSize={`${(upload.file.size / 1024).toFixed(1)} KB`}
          status={upload.status}
          progress={upload.progress}
          errorMessage={
            upload.status === 'error'
              ? 'Uppladdningen misslyckades'
              : undefined
          }
          onCancel={() => onRemove(upload.id)}
          onDelete={() => onRemove(upload.id)}
        />
      ))}
    </FileList>
  )

const DefaultContainer = (args: FilePickerProps) => {
  const { uploads, remove, onSelect } = useUploads()

  return (
    <FilePicker {...args}>
      <FileTrigger
        allowsMultiple
        onSelect={onSelect}
        data-testid='file-trigger'
      >
        <Button icon={UploadIcon}>Välj fil(er)</Button>
      </FileTrigger>
      <Uploads
        uploads={uploads}
        onRemove={remove}
      />
    </FilePicker>
  )
}

const DropZoneContainer = ({
  initialUploads,
  ...args
}: FilePickerProps & { initialUploads?: Upload[] }) => {
  const { uploads, remove, onSelect, onDrop } = useUploads(initialUploads)

  return (
    <FilePicker {...args}>
      <DropZone onDrop={onDrop}>
        <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
        <FileTrigger
          allowsMultiple
          onSelect={onSelect}
        >
          <Button icon={UploadIcon}>Välj fil(er)</Button>
        </FileTrigger>
      </DropZone>
      <Uploads
        uploads={uploads}
        onRemove={remove}
      />
    </FilePicker>
  )
}

export const Default: Story = {
  render: args => <DefaultContainer {...args} />,
}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Endast .jpg- och .png-filer tillåts',
  },
  render: args => <DefaultContainer {...args} />,
}

export const WithDropZone: Story = {
  name: 'With a DropZone',
  render: args => <DropZoneContainer {...args} />,
}

export const InvalidWithDropZone: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Endast .jpg- och .png-filer tillåts',
  },
  render: args => <DropZoneContainer {...args} />,
}

const file = (name: string, kilobytes: number) =>
  new File([new Uint8Array(kilobytes * 1024)], name, { type: 'image/png' })

export const WithFiles: Story = {
  name: 'With files',
  render: args => (
    <DropZoneContainer
      {...args}
      initialUploads={[
        {
          id: 'apple',
          file: file('äpple.png', 245),
          status: 'success',
          progress: 100,
        },
        {
          id: 'pear',
          file: file('päron.png', 1830),
          status: 'uploading',
          progress: 50,
        },
        {
          id: 'banana',
          file: file('banan-fel.png', 512),
          status: 'error',
          progress: 100,
        },
      ]}
    />
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
  render: args => <DropZoneContainer {...args} />,
}

const validateUploads = (uploads: Upload[]) => {
  if (uploads.some(u => u.status === 'uploading'))
    return 'Vänta tills alla filer är uppladdade'
  if (uploads.some(u => u.status === 'error'))
    return 'Ta bort filerna som inte gick att ladda upp'
  if (uploads.length === 0) return 'Bifoga minst en bild'
  return undefined
}

/**
 * Files are uploaded as soon as they're picked, and the form submits their
 * ids. The app decides when the field is valid: here, on submit, and then
 * live as the uploads change.
 */
const FormContainer = (args: FilePickerProps) => {
  const { uploads, remove, onSelect, onDrop } = useUploads()
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [submittedIds, setSubmittedIds] = React.useState<string[]>()
  const triggerRef = React.useRef<HTMLButtonElement>(null)

  const error = isSubmitted ? validateUploads(uploads) : undefined

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
    if (validateUploads(uploads)) {
      triggerRef.current?.focus()
      return
    }
    setSubmittedIds(new FormData(e.currentTarget).getAll('fruits') as string[])
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
    >
      <FilePicker
        {...args}
        isRequired
        isInvalid={!!error}
        errorMessage={error}
      >
        <DropZone onDrop={onDrop}>
          <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
          <FileTrigger
            allowsMultiple
            onSelect={onSelect}
            data-testid='file-trigger'
          >
            <Button
              ref={triggerRef}
              icon={UploadIcon}
            >
              Välj fil(er)
            </Button>
          </FileTrigger>
        </DropZone>
        <Uploads
          uploads={uploads}
          onRemove={remove}
        />
      </FilePicker>
      {uploads
        .filter(u => u.status === 'success')
        .map(u => (
          <input
            key={u.id}
            type='hidden'
            name='fruits'
            value={u.id}
          />
        ))}
      <div>
        <Button type='submit'>Skicka</Button>
      </div>
      {submittedIds && (
        <Text role='status'>Skickade {submittedIds.length} fil(er)</Text>
      )}
    </form>
  )
}

export const InAForm: Story = {
  name: 'In a form, uploading right away',
  render: args => <FormContainer {...args} />,
}
