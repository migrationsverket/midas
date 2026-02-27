'use client'

import { use, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Heading,
  TextField,
  TextArea,
  Select,
  ListBoxItem,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  DatePicker,
  toastQueue,
} from '@midas-ds/components'
import { parseDate } from '@internationalized/date'
import { useAppStore } from '../../../../components/AppProvider/AppContext'
import styles from '../../new/page.module.css'

export default function EditDraft({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()

  const draft = useAppStore(s => s.drafts.find(d => d.id === id))
  const submitApplication = useAppStore(s => s.submitApplication)
  const updateDraft = useAppStore(s => s.updateDraft)
  const removeDraft = useAppStore(s => s.removeDraft)

  const [firstName, setFirstName] = useState(draft?.firstName ?? '')
  const [lastName, setLastName] = useState(draft?.lastName ?? '')
  const [dateOfBirth, setDateOfBirth] = useState(draft?.dateOfBirth ?? '')
  const [country, setCountry] = useState(draft?.country ?? '')
  const [applicationType, setApplicationType] = useState<string | null>(draft?.type ?? null)
  const [duration, setDuration] = useState(draft?.duration ?? '')
  const [reason, setReason] = useState(draft?.reason ?? '')

  if (!draft) {
    return (
      <div className={styles.page}>
        <Heading level={1}>Draft not found</Heading>
        <Button variant='secondary' onPress={() => router.push('/applications/drafts')}>Back to drafts</Button>
      </div>
    )
  }

  const formData = () => ({ firstName, lastName, dateOfBirth, country, type: applicationType ?? '', duration, reason })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    submitApplication(formData())
    removeDraft(id)
    toastQueue.add(
      { type: 'success', message: 'Application submitted successfully' },
      { timeout: 5000 },
    )
    router.push('/applications/sent')
  }

  const handleSaveAsDraft = () => {
    updateDraft(id, formData())
    toastQueue.add(
      { type: 'info', message: 'Draft updated' },
      { timeout: 5000 },
    )
    router.push('/applications/drafts')
  }

  return (
    <div className={styles.page}>
      <Heading level={1}>Edit draft</Heading>
      <form className={styles.form} onSubmit={handleSubmit}>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Personal information</legend>
          <TextField label='First name' isRequired value={firstName} onChange={setFirstName} />
          <TextField label='Last name' isRequired value={lastName} onChange={setLastName} />
          <DatePicker
            label='Date of birth'
            isRequired
            defaultValue={draft.dateOfBirth ? parseDate(draft.dateOfBirth) : undefined}
            onChange={val => setDateOfBirth(val?.toString() ?? '')}
          />
          <TextField label='Country of citizenship' isRequired value={country} onChange={setCountry} />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Application details</legend>
          <Select
            label='Application type'
            isRequired
            selectedKey={applicationType}
            onSelectionChange={key => setApplicationType(key as string)}
            items={[
              { id: 'residence', name: 'Residence permit' },
              { id: 'work', name: 'Work permit' },
              { id: 'study', name: 'Study permit' },
              { id: 'family', name: 'Family reunification' },
            ]}
          >
            {item => <ListBoxItem id={item.id}>{item.name}</ListBoxItem>}
          </Select>
          <RadioGroup label='Intended duration' isRequired defaultValue={draft.duration || undefined} onChange={setDuration}>
            <Radio value='temporary'>Temporary (up to 2 years)</Radio>
            <Radio value='permanent'>Permanent</Radio>
          </RadioGroup>
          <TextArea
            label='Reason for application'
            description='Briefly describe the reason for your application'
            isRequired
            value={reason}
            onChange={setReason}
          />
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Declaration</legend>
          <Checkbox isRequired>
            I confirm that the information provided is accurate and complete
          </Checkbox>
          <Checkbox isRequired>
            I have read and accept the terms and conditions
          </Checkbox>
        </fieldset>

        <div className={styles.actions}>
          <Button variant='secondary' type='button' onPress={handleSaveAsDraft}>Save draft</Button>
          <Button type='submit'>Submit application</Button>
        </div>
      </form>
    </div>
  )
}
