'use client'

import {
  FileTrigger as AriaFileTrigger,
  DropZone,
  Text,
} from 'react-aria-components'
import React, { FC, ReactNode } from 'react'
import { X } from 'lucide-react'
import styles from './FileUpload.module.css'
import { Button } from '../button'
import { InputWrapper } from '../textfield'
import { DropEvent } from 'react-aria'

export interface FileTriggerProps {
  /** Label for the file upload button */
  label?: string
  /**  Additional description field */
  description?: string
  /**  Use DropZone version */
  dropzone?: boolean
  /**
   * Specifies what mime type of files are allowed.
   */
  acceptedFileTypes?: Array<string>
  /**
   * Whether multiple files can be selected.
   */
  allowsMultiple?: boolean
  /**
   * Specifies the use of a media capture mechanism to capture the media on the spot.
   */
  defaultCamera?: 'user' | 'environment'
  /**
   * Handler when a user selects a file.
   */
  onSelect?: (files: FileList | null) => void
  /**
   * The children of the component.
   */
  children?: ReactNode
  /**
   * Enables the selection of directories instead of individual files.
   */
  acceptDirectory?: boolean
}

type FileState = File[] | null | undefined

export const FileUpload: FC<FileTriggerProps> = ({
  allowsMultiple,
  label,
  description,
  dropzone,
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
      <InputWrapper
        label={label}
        description={description}
      >
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
      </InputWrapper>
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
            size='small'
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
