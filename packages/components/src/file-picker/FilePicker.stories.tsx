import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { Upload } from 'lucide-react'
import { FilePicker } from './FilePicker'
import { FileTrigger } from '../file-trigger'
import { DropZone } from '../drop-zone'
import { FileList } from '../file-list'
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
