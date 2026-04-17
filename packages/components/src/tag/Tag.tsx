import {
  Tag as AriaTag,
  TagProps as AriaTagProps,
  composeRenderProps,
} from 'react-aria-components'
import { X } from 'lucide-react'
import { Button } from '../button'
import clsx from '../utils/clsx'
import { FeedbackStatus } from '../common/types'
import styles from './Tag.module.css'

export interface TagProps extends AriaTagProps {
  /**
   * Sets the background and border color of the tag
   */
  color?:
    | 'sky'
    | 'mint'
    | 'cream'
    | 'teal'
    | 'lagoon'
    | 'lavender'
    | 'peach'
    | 'pippin'
    | 'blue'
    | 'green'
    | 'lagoonblue'
    | 'orange'
    | 'purple'
    | 'red'
    | 'yellow'
  /**
   * Add a button for dismissing the tab
   * @deprecated since v17.0.0 please use `isDismissable` instead
   */
  dismissable?: boolean
  /**
   * Add a button for dismissing the tab
   */
  isDismissable?: boolean
  /**
   * @deprecated since v17.0.0 please use the prop `color` instead
   */
  type?: FeedbackStatus
}

export const Tag = ({
  className,
  color,
  dismissable = false,
  isDismissable,
  type,
  ...props
}: TagProps) => {
  const isTagDismissable =
    isDismissable || (typeof isDismissable === 'undefined' && dismissable)

  return (
    <AriaTag
      className={clsx(
        styles.tag,
        isTagDismissable && styles.dismissable,
        {
          [styles.sky]: color === 'sky',
          [styles.blue]: color === 'blue' || (!color && type === 'info'),
          [styles.mint]: color === 'mint',
          [styles.green]: color === 'green' || (!color && type === 'success'),
          [styles.cream]: color === 'cream',
          [styles.yellow]: color === 'yellow' || (!color && type === 'important'),
          [styles.teal]: color === 'teal',
          [styles.lagoon]: color === 'lagoon',
          [styles.lagoonblue]: color === 'lagoonblue',
          [styles.lavender]: color === 'lavender',
          [styles.purple]: color === 'purple',
          [styles.peach]: color === 'peach',
          [styles.orange]: color === 'orange',
          [styles.pippin]: color === 'pippin',
          [styles.red]: color === 'red' || (!color && type === 'warning'),
        },
        className,
      )}
      {...props}
      textValue={
        props.textValue ||
        (typeof props.children === 'string' ? props.children : undefined)
      }
    >
      {composeRenderProps(props.children, children => (
        <>
          <div className={styles.tagText}>{children}</div>
          {isTagDismissable && (
            <Button
              variant='icon'
              size='medium'
              className={styles.button}
              slot='remove'
            >
              <X size={20} />
            </Button>
          )}
        </>
      ))}
    </AriaTag>
  )
}
