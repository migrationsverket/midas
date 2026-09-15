import { useState, type ComponentProps, type FormEvent } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router'
import { ArrowUpFromLine } from 'lucide-react'
import {
  Breadcrumb,
  Breadcrumbs,
  Button,
  Checkbox,
  ComboBox,
  DatePicker,
  DropZone,
  FileList,
  FileListItem,
  FileTrigger,
  Heading,
  Link,
  ListBoxItem,
  Radio,
  RadioGroup,
  Select,
  Text,
  TextArea,
  TextField,
  toastQueue,
} from '@midas-ds/components'
import { countries } from '../../data/countries'
import { typeLabels, type ApplicationType } from '../../data/applications'
import type { Key } from 'react-aria-components'

const applicationTypes = Object.entries(typeLabels).map(([id, name]) => ({
  id: id as ApplicationType,
  name,
}))

function ApplicationsNew() {
  const navigate = useNavigate()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [country, setCountry] = useState<Key | null>(null)
  const [applicationType, setApplicationType] =
    useState<ApplicationType | null>(null)
  const [duration, setDuration] = useState<string | null>(null)
  const [reason, setReason] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const addUniqueFiles = (newFiles: File[]) => {
    setFiles(prev => {
      const existingNames = new Set(prev.map(f => f.name))
      return [...prev, ...newFiles.filter(f => !existingNames.has(f.name))]
    })
  }

  const handleDrop: NonNullable<
    ComponentProps<typeof DropZone>['onDrop']
  > = async e => {
    const fileItems = e.items.filter(item => item.kind === 'file')
    const droppedFiles = await Promise.all(
      fileItems.map(item => item.getFile()),
    )
    addUniqueFiles(droppedFiles)
  }

  const handleDeleteFile = (name: string) => {
    setFiles(prev => prev.filter(f => f.name !== name))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    toastQueue.add(
      { type: 'success', message: 'Application submitted successfully' },
      { timeout: 5000 },
    )
    navigate('/applications')
  }

  const handleSaveAsDraft = () => {
    toastQueue.add(
      { type: 'info', message: 'Application saved as draft' },
      { timeout: 5000 },
    )
    navigate('/applications/drafts')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--midas-space-medium)',
      }}
    >
      <Breadcrumbs>
        <Breadcrumb>
          <Link
            as={RouterLink}
            to='/'
          >
            Home
          </Link>
        </Breadcrumb>
        <Breadcrumb>
          <Link
            as={RouterLink}
            to='/applications'
          >
            Applications
          </Link>
        </Breadcrumb>
        <Breadcrumb>New application</Breadcrumb>
      </Breadcrumbs>

      <Heading level={1}>New application</Heading>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--midas-space-large)',
        }}
      >
        <Heading level={2}>Personal information</Heading>

        <TextField
          label='First name'
          isRequired
          value={firstName}
          onChange={setFirstName}
        />
        <TextField
          label='Last name'
          isRequired
          value={lastName}
          onChange={setLastName}
        />
        <DatePicker
          label='Date of birth'
          isRequired
        />
        <ComboBox
          label='Country of citizenship'
          isRequired
          items={countries}
          value={country}
          onChange={setCountry}
          popover={{
            children:
              'If you hold dual citizenship, enter the country whose passport you will use for travel to Sweden.',
          }}
        >
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </ComboBox>

        <Heading level={2}>Application details</Heading>
        <Select
          label='Application type'
          isRequired
          items={applicationTypes}
          value={applicationType}
          onChange={key => setApplicationType(key as ApplicationType | null)}
        >
          {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
        </Select>
        <RadioGroup
          label='Intended duration'
          isRequired
          value={duration}
          onChange={setDuration}
        >
          <Radio value='temporary'>Temporary (up to 2 years)</Radio>
          <Radio value='permanent'>Permanent</Radio>
        </RadioGroup>
        <TextArea
          label='Reason for application'
          description='Describe the main reason for applying, including relevant personal circumstances.'
          isRequired
          value={reason}
          onChange={setReason}
          showCounter
          maxLength={500}
        />

        <Heading level={2}>Supporting documents</Heading>

        <DropZone onDrop={handleDrop}>
          <FileTrigger
            allowsMultiple
            acceptedFileTypes={['image/*', 'application/pdf']}
            onSelect={fileList =>
              addUniqueFiles(fileList ? Array.from(fileList) : [])
            }
          >
            <Button
              variant='secondary'
              icon={ArrowUpFromLine}
            >
              Choose files
            </Button>
          </FileTrigger>
          <Text slot='label'>or drag and drop PDF or image files here</Text>
        </DropZone>
        {files.length > 0 && (
          <FileList aria-label='Uploaded files'>
            {files.map(file => (
              <FileListItem
                key={file.name}
                fileName={file.name}
                fileSize={`${(file.size / 1024).toFixed(1)} KB`}
                onDelete={() => handleDeleteFile(file.name)}
              />
            ))}
          </FileList>
        )}

        <Heading level={2}>Declaration</Heading>

        <Checkbox isRequired>
          I confirm that the information provided is accurate and complete
        </Checkbox>
        <Checkbox isRequired>
          I have read and accept the terms and conditions
        </Checkbox>

        <div style={{ display: 'flex', gap: 'var(--midas-space-small)' }}>
          <Button type='submit'>Submit application</Button>
          <Button
            variant='secondary'
            type='button'
            onPress={handleSaveAsDraft}
          >
            Save as draft
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ApplicationsNew
