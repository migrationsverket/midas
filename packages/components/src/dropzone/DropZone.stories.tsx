import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { DropEvent, isFileDropItem } from 'react-aria'
import { Upload } from 'lucide-react'
import { DropZone } from './DropZone'
import { FileTrigger } from '../file-upload'
import { Button } from '../button'
import { Text } from '../text'
import { FieldError } from '../field-error'
import { Label } from '../label'

const meta: Meta<typeof DropZone> = {
  component: DropZone,
  title: 'Components/DropZone',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => (
    <DropZone
      {...args}
      style={{ width: 679 }}
    >
      <Text slot='label'>Släpp filer här</Text>
    </DropZone>
  ),
}

export const WithUploadButton: Story = {
  name: 'With an upload button',
  render: args => (
    <DropZone
      {...args}
      style={{ width: 679 }}
    >
      <Text slot='label'>
        Välj filer eller dra och släpp inom det streckade området
      </Text>
      <FileTrigger>
        <Button
          variant='secondary'
          size='medium'
          icon={Upload}
          iconPlacement='left'
        >
          Välj filer
        </Button>
      </FileTrigger>
    </DropZone>
  ),
}

export const WithFieldLabel: Story = {
  name: 'With an outer field label',
  parameters: {
    docs: {
      description: {
        story:
          "For a Dropzone used as one field among others in a form, pair it with an outer `Label` — same pattern as `TextField`. Wire it up with `aria-labelledby`; it's combined with the inside `slot='label'` text for the accessible name, so both stay announced.",
      },
    },
  },
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', width: 679 }}>
      <Label id='dropzone-field-label'>Ladda upp filer</Label>
      <DropZone
        {...args}
        aria-labelledby='dropzone-field-label'
      >
        <Text slot='label'>Släpp filer här</Text>
      </DropZone>
    </div>
  ),
}

export const Invalid: Story = {
  render: args => (
    <div style={{ display: 'flex', flexDirection: 'column', width: 679 }}>
      <DropZone
        {...args}
        isInvalid
      >
        <Text slot='label'>Släpp filer här</Text>
      </DropZone>
      <FieldError isInvalid>Validering</FieldError>
    </div>
  ),
}

// ─── Rejects a disallowed file type — validation is entirely consumer-owned:
// DropZone/FileTrigger have no concept of "invalid file", they just report
// what was selected/dropped. The consumer checks the type and drives
// `isInvalid` + a composed `FieldError` from that. ───

const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png']

const RejectingContainer = () => {
  const [isInvalid, setIsInvalid] = React.useState(false)

  const validate = (files: File[]) => {
    setIsInvalid(files.some(file => !ACCEPTED_FILE_TYPES.includes(file.type)))
  }

  const handleSelect = (selectedFileList: FileList | null) => {
    if (selectedFileList) validate(Array.from(selectedFileList))
  }

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(isFileDropItem)
    const droppedFiles = await Promise.all(
      fileItems.map(item => item.getFile()),
    )
    validate(droppedFiles)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 679 }}>
      <DropZone
        onDrop={handleDrop}
        isInvalid={isInvalid}
        data-testid='drop-zone'
      >
        <Text slot='label'>
          Släpp filer här eller välj en fil (endast .jpg/.png)
        </Text>
        <FileTrigger
          acceptedFileTypes={ACCEPTED_FILE_TYPES}
          onSelect={handleSelect}
          data-testid='file-trigger'
        >
          <Button
            variant='secondary'
            size='medium'
            icon={Upload}
            iconPlacement='left'
          >
            Välj filer
          </Button>
        </FileTrigger>
      </DropZone>
      {isInvalid && (
        <FieldError isInvalid>Endast .jpg- och .png-filer tillåts</FieldError>
      )}
    </div>
  )
}

export const RejectsWrongFileType: Story = {
  name: 'Rejects a disallowed file type',
  parameters: {
    docs: {
      description: {
        story:
          "DropZone and FileTrigger don't validate file type themselves — `acceptedFileTypes` only narrows the native file picker, it does nothing for drag-and-drop. The consumer checks `file.type` in `onSelect`/`onDrop` and drives `isInvalid` + a composed `FieldError` from the result, same pattern as the plain `Invalid` story above.",
      },
    },
  },
  render: () => <RejectingContainer />,
}

// ─── `getDropOperation` runs during drag-over, before anything is dropped —
// it only sees the dragged item's declared type, never its content, so a
// mismatched type can be rejected before it lands (no drop-target highlight,
// cursor shows "not allowed"). This is a UX affordance, not a security
// check: the declared type is untrusted metadata (usually derived from the
// file extension), not verified content — real validation still belongs
// server-side, same as the reactive `onDrop`/`file.type` check above. Drag a
// real file from your OS onto this story to see it in action. ───

export const RejectsTypeBeforeDrop: Story = {
  name: 'Rejects a disallowed file type before drop',
  parameters: {
    docs: {
      description: {
        story:
          "`getDropOperation` runs during drag-over, before anything is dropped — it only sees the dragged item's declared type (`types.has('image/png')`), never its content, so a mismatched file can be rejected before it lands: the zone never enters its drop-target state and the cursor shows \"not allowed\". This is a UX affordance, not a security check — the declared type is untrusted metadata (usually derived from the file extension), not verified content. Real validation still belongs server-side, same as the reactive `onDrop`/`file.type` check in the story above. Want the invalid styling itself to show while the bad file is still hovering, not just the cursor? Drive `isInvalid` from inside `getDropOperation` directly — `onDropEnter`/`onDropExit` won't help here, they only fire once a drag is already accepted and never carry type info of their own.",
      },
    },
  },
  render: args => (
    <DropZone
      {...args}
      getDropOperation={types =>
        ACCEPTED_FILE_TYPES.some(type => types.has(type)) ? 'copy' : 'cancel'
      }
      style={{ width: 679 }}
    >
      <Text slot='label'>
        Dra en .jpg- eller .png-fil hit — andra filtyper avvisas redan innan
        släpp
      </Text>
    </DropZone>
  ),
}

export const Disabled: Story = {
  render: args => (
    <DropZone
      {...args}
      isDisabled
      style={{ width: 679 }}
    >
      <Text slot='label'>
        Välj filer eller dra och släpp inom det streckade området
      </Text>
      <FileTrigger>
        <Button
          variant='secondary'
          size='medium'
          icon={Upload}
          iconPlacement='left'
          isDisabled
          // `secondary` is transparent/outline even when enabled, but its
          // disabled state currently applies the shared washed-fill
          // background meant for solid-filled variants (primary/danger),
          // which doesn't match Figma here. Real fix belongs in Button.module
          // .css (tracked separately, out of scope for this branch) — this
          // is a demo-only override so the story reflects the intended look.
          style={{ backgroundColor: 'transparent' }}
        >
          Välj filer
        </Button>
      </FileTrigger>
    </DropZone>
  ),
}

// ─── Test-only: composed with FileTrigger for the classic file-upload flow ───

interface DropZoneTestContainerProps {
  onSelect: (files: File[]) => void
}

const DropZoneTestContainer = (props: DropZoneTestContainerProps) => {
  const [files, setFiles] = React.useState<File[]>([])

  const handleSelect = (selectedFileList: FileList | null) => {
    if (selectedFileList) {
      const selectedFiles = Array.from(selectedFileList)
      setFiles(prev => [...prev, ...selectedFiles])
      props.onSelect(selectedFiles)
    }
  }

  const handleDrop = async (e: DropEvent) => {
    const fileItems = e.items.filter(item => item.kind === 'file')
    const droppedFiles: File[] = await Promise.all(
      fileItems.map(item => item.getFile()),
    )
    setFiles(prev => [...prev, ...droppedFiles])
    props.onSelect(droppedFiles)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FileTrigger
        onSelect={handleSelect}
        data-testid='file-trigger'
      >
        <Button>Select files</Button>
      </FileTrigger>
      <img
        alt=''
        data-testid='image'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Relative_compliment.svg/250px-Relative_compliment.svg.png'
      />
      <DropZone
        onDrop={handleDrop}
        data-testid='drop-zone'
      >
        <Text slot='label'>Drop files here</Text>
      </DropZone>
      {files.length > 0 && (
        <div>
          <h4>Selected files:</h4>
          <ul>
            {files.map((file, i) => (
              <li key={i}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export const WithFileTrigger: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  // @ts-expect-error onSelect exists only on the test container, not DropZone
  render: args => <DropZoneTestContainer {...args} />,
}
