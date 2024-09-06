'use client'

import {
  FileTrigger as AriaFileTrigger,
  FileTriggerProps as AriaFileTriggerProps,
  DropZone,
  Label,
  Text,
} from 'react-aria-components'
import React from 'react'
import { X } from 'lucide-react'
import styles from './FileUpload.module.css'
import { Button } from '@migrationsverket/button'

export interface FileTriggerProps extends AriaFileTriggerProps {
  /** Label for the file upload button */
  label?: string
  /**  Additional description field */
  description?: string
  /**  Use DropZone version */
  dropzone?: boolean
}

type FileState = File[] | null | undefined

export const FileUpload: React.FC<FileTriggerProps> = ({
  allowsMultiple,
  label,
  description,
  dropzone,
}) => {
  const [files, setFiles] = React.useState<FileState>(null)

  const handleUpload = (files: FileList | null) => {
    setFiles(files !== null ? Array.from(files) : [])
    // TODO: actually handle files?
  }

  const handleDrop = async (e: any) => {
    const filePromises = e.items
      .filter((file: any) => file.kind === 'file')
      .map((file: any) => file.getFile())

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
            slot="label"
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
      <AriaFileTrigger
        allowsMultiple={allowsMultiple}
        onSelect={(files) => handleUpload(files)}
      >
        <Label
          className={styles.label}
          aria-label="fileUpload"
        >
          {label}
        </Label>
        <Text
          className={styles.text}
          slot="description"
        >
          {description}
        </Text>
        {/* TODO: check labels */}
        <Button
          variant="secondary"
          aria-labelledby="fileUpload"
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
          {file.name}
          <button onClick={() => handleRemove(index)}>
            <X
              height={16}
              width={16}
            />
          </button>
        </li>
      ))}
    </ul>
  )
}
