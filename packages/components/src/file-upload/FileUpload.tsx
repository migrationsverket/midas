'use client'

import {
  FileTrigger as AriaFileTrigger,
  FileTriggerProps as AriaFileTriggerProps,
  DropZone,
  TextField,
} from 'react-aria-components'
import * as React from 'react'
import { X } from 'lucide-react'
import styles from './FileUpload.module.css'
import { Button } from '../button'
import { DropEvent, VisuallyHidden } from 'react-aria'
import { InfoPopoverProps, Label } from '../label'
import { Text } from '../text'
import { LabelWrapper } from '../label/LabelWrapper'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'
import clsx from 'clsx'

export interface FileTriggerProps extends AriaFileTriggerProps {
  /** Label for the file upload button */
  label?: string
  /**  Additional description field */
  description?: string
  /**  Use DropZone version */
  dropzone?: boolean
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popover?: InfoPopoverProps
  className?: string
}

type FileState = File[] | null | undefined

export const FileUpload: React.FC<FileTriggerProps> = ({
  allowsMultiple,
  label,
  description,
  dropzone,
  popover,
  className,
  ...rest
}) => {
  const [files, setFiles] = React.useState<FileState>(null)
  const strings = useLocalizedStringFormatter(messages)

  const handleUpload = (files: FileList | null) => {
    if (rest.onSelect) {
      rest.onSelect(files)
    }
    setFiles(files !== null ? Array.from(files) : [])
    // TODO: actually handle files?
  }

  const handleDrop = async (e: DropEvent) => {
    const filePromises = e.items
      .filter(file => file.kind === 'file')
      .map(file => file.getFile())

    const resolvedFiles: File[] = await Promise.all(filePromises)
    setFiles(resolvedFiles)
  }

  if (dropzone)
    return (
      <div className={clsx(styles.container, className)}>
        <DropZone
          onDrop={handleDrop}
          className={styles.dropzone}
        >
          <Text
            slot='description'
            style={{ display: 'block' }}
          >
            {strings.format('dragAndDrop')}
          </Text>
        </DropZone>
        {files && (
          <FileList
            files={files}
            setFiles={setFiles}
          />
        )}
      </div>
    )

  return (
    <TextField className={clsx(styles.container, className)}>
      <LabelWrapper popover={popover}>
        {label && <Label>{label}</Label>}
      </LabelWrapper>
      {description && <Text slot='description'>{description}</Text>}
      <AriaFileTrigger
        {...rest}
        allowsMultiple={allowsMultiple}
        onSelect={files => handleUpload(files)}
      >
        <Button
          variant='secondary'
          className={styles.input}
        >
          {allowsMultiple
            ? strings.format('chooseFiles')
            : strings.format('chooseFile')}
        </Button>
      </AriaFileTrigger>
      {files && (
        <FileList
          files={files}
          setFiles={setFiles}
        />
      )}
    </TextField>
  )
}

interface FileListProps {
  files: File[]
  setFiles: React.Dispatch<React.SetStateAction<FileState>>
}

const FileList: React.FC<FileListProps> = ({ files, setFiles }) => {
  const strings = useLocalizedStringFormatter(messages)

  const handleRemove = (index: number) => {
    setFiles(files?.filter((f, i) => i !== index))
  }

  return (
    <ul className={styles.list}>
      {files.map((file, index) => (
        <li
          key={index}
          className={styles.box}
        >
          <span>{file.name}</span>
          <Button
            variant='icon'
            size='medium'
            onPress={() => handleRemove(index)}
          >
            <X
              size={20}
              aria-hidden
            />
            <VisuallyHidden>{strings.format('removeFile')}</VisuallyHidden>
          </Button>
        </li>
      ))}
    </ul>
  )
}
