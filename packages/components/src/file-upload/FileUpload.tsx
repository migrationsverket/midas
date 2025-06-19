'use client'

import {
  FileTrigger as AriaFileTrigger,
  FileTriggerProps as AriaFileTriggerProps,
  DropZone,
} from 'react-aria-components'
import * as React from 'react'
import { X } from 'lucide-react'
import styles from './FileUpload.module.css'
import { Button } from '../button'
import { DropEvent } from 'react-aria'
import { Label } from '../label'
import { Text } from '../text'

export interface FileTriggerProps extends AriaFileTriggerProps {
  /** Label for the file upload button */
  label?: string
  /**  Additional description field */
  description?: string
  /**  Use DropZone version */
  dropzone?: boolean
  /** An assistive text that helps the user understand the field better. Will be hidden in a popover with an info icon button. */
  popoverContent?: React.ReactNode
}

type FileState = File[] | null | undefined

export const FileUpload: React.FC<FileTriggerProps> = ({
  allowsMultiple,
  label,
  description,
  dropzone,
  popoverContent,
  ...rest
}) => {
  const [files, setFiles] = React.useState<FileState>(null)

  const handleUpload = (files: FileList | null) => {
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
      <div className={styles.container}>
        <DropZone
          onDrop={handleDrop}
          className={styles.dropzone}
        >
          <Text
            slot='description'
            style={{ display: 'block' }}
          >
            Dra och släpp en fil inuti det streckade området
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
    <div className={styles.container}>
      {label && <Label popoverContent={popoverContent}>{label}</Label>}
      {description && <Text slot='description'>{description}</Text>}
      <AriaFileTrigger
        allowsMultiple={allowsMultiple}
        onSelect={files => handleUpload(files)}
        {...rest}
      >
        <Button
          variant='secondary'
          aria-labelledby='fileUpload'
          className={styles.input}
        >
          {allowsMultiple ? 'Välj filer' : 'Välj fil'}
        </Button>
      </AriaFileTrigger>
      {files && (
        <FileList
          files={files}
          setFiles={setFiles}
        />
      )}
    </div>
  )
}

interface FileListProps {
  files: File[]
  setFiles: React.Dispatch<React.SetStateAction<FileState>>
}

const FileList: React.FC<FileListProps> = ({ files, setFiles }) => {
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
          </Button>
        </li>
      ))}
    </ul>
  )
}
