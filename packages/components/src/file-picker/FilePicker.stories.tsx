import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { Upload } from 'lucide-react'
import { FilePicker } from './FilePicker'
import { FileTrigger } from '../file-trigger'
import { DropZone } from '../drop-zone'
import { FileList, FileListItem, type FileListItemProps } from '../file-list'
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
    allowsMultiple: true,
  },
} satisfies Meta<typeof FilePicker>

// Fixed dates keep the visual snapshots stable
const apple = new File(['🍎'], 'äpple.png', {
  type: 'image/png',
  lastModified: 0,
})

const DropZoneControls = () => (
  <>
    <DropZone>
      <Text slot='label'>Välj filer eller dra och släpp filer här</Text>
      <FileTrigger>
        <Button icon={Upload}>Välj fil(er)</Button>
      </FileTrigger>
    </DropZone>
    <FileList />
  </>
)

export const Default: Story = {}

export const Invalid: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Endast .jpg- och .png-filer tillåts',
  },
}

export const WithDropZone: Story = {
  name: 'With a DropZone',
  render: args => (
    <FilePicker {...args}>
      <DropZoneControls />
    </FilePicker>
  ),
}

export const InvalidWithDropZone: Story = {
  args: {
    isInvalid: true,
    errorMessage: 'Endast .jpg- och .png-filer tillåts',
  },
  render: args => (
    <FilePicker {...args}>
      <DropZoneControls />
    </FilePicker>
  ),
}

export const AcceptedFileTypes: Story = {
  args: {
    acceptedFileTypes: ['image/png', 'image/jpeg'],
    description: 'Endast .jpg- och .png-filer',
    validationBehavior: 'aria',
  },
  render: args => (
    <FilePicker {...args}>
      <DropZoneControls />
    </FilePicker>
  ),
}

export const Disabled: Story = {
  args: {
    isDisabled: true,
    defaultValue: [apple],
  },
}

export const ErrorOnTop: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    isInvalid: true,
    errorMessage: 'Endast .jpg- och .png-filer tillåts',
    errorPosition: 'top',
  },
}

export const Controlled: Story = {
  tags: ['!snapshot'],
  render: function Render(args) {
    const [files, setFiles] = React.useState<File[]>([])

    return (
      <div>
        <FilePicker
          {...args}
          value={files}
          onChange={setFiles}
        />
        <p data-testid='file-count'>Valda filer: {files.length}</p>
      </div>
    )
  },
}

const SubmittedFiles = ({ names }: { names: string[] | null }) =>
  names && <output data-testid='submitted'>{names.join(', ') || '–'}</output>

const useSubmittedFiles = (name: string) => {
  const [names, setNames] = React.useState<string[] | null>(null)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const files = new FormData(e.currentTarget).getAll(name) as File[]
    setNames(files.filter(file => file.name).map(file => file.name))
  }

  return { names, onSubmit }
}

export const InForm: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    name: 'fruits',
  },
  render: function Render(args) {
    const { names, onSubmit } = useSubmittedFiles('fruits')

    return (
      <form onSubmit={onSubmit}>
        <FilePicker {...args} />
        <button type='submit'>Skicka</button>
        <button type='reset'>Rensa</button>
        <SubmittedFiles names={names} />
      </form>
    )
  },
}

export const Required: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    name: 'fruits',
    isRequired: true,
  },
  render: function Render(args) {
    const { names, onSubmit } = useSubmittedFiles('fruits')

    return (
      <form onSubmit={onSubmit}>
        <FilePicker {...args} />
        <button type='submit'>Skicka</button>
        <SubmittedFiles names={names} />
      </form>
    )
  },
}

export const CustomValidation: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  args: {
    name: 'fruits',
    validate: (files: File[]) =>
      files.length > 2 ? 'Välj högst två filer' : true,
  },
  render: function Render(args) {
    const { names, onSubmit } = useSubmittedFiles('fruits')

    return (
      <form onSubmit={onSubmit}>
        <FilePicker {...args} />
        <button type='submit'>Skicka</button>
        <button type='reset'>Rensa</button>
        <SubmittedFiles names={names} />
      </form>
    )
  },
}

type UploadState = Pick<
  FileListItemProps,
  'status' | 'progress' | 'errorMessage'
>

/**
 * Uploads each file as soon as it's added and submits the uploaded files'
 * names instead of the files. The form can't be submitted while uploads are
 * running.
 */
export const UploadOnAdd: Story = {
  tags: ['!snapshot'],
  render: function Render(args) {
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
          progress += 25
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
    const uploaded = [...uploads.entries()]
      .filter(([, upload]) => upload.status === 'success')
      .map(([file]) => file.name)

    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          setSubmitted(new FormData(e.currentTarget).get('uploaded') as string)
        }}
      >
        <FilePicker
          {...args}
          onAdd={added => added.forEach(startUpload)}
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
          name='uploaded'
          value={uploaded.join(', ')}
        />
        <button type='submit'>Skicka</button>
        {submitted !== null && (
          <output data-testid='submitted'>{submitted || '–'}</output>
        )}
      </form>
    )
  },
}
