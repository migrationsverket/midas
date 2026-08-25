'use client'

import {
  FileTrigger as AriaFileTrigger,
  type FileTriggerProps,
} from 'react-aria-components'
import * as React from 'react'

export const FileTrigger: React.FC<FileTriggerProps> = props => {
  return <AriaFileTrigger {...props} />
}
