import * as React from 'react'
import {
  DateSegment as AriaDateSegment,
  type DateSegmentProps,
} from 'react-aria-components'
import { clsx } from '@midas-ds/utils'
import styles from './DateSegment.module.css'

export type { DateSegmentProps }

export const DateSegment: React.FC<DateSegmentProps> = ({
  className,
  ...rest
}) => (
  <AriaDateSegment
    className={clsx(styles.dateSegment, className)}
    {...rest}
  />
)
