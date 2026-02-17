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
  color?: 'green' | 'blue' | 'yellow' | 'red'
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
  isDismissable = false,
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
          [styles.green]: color === 'green' || (!color && type === 'success'),
          [styles.blue]: color === 'blue' || (!color && type === 'info'),
          [styles.yellow]:
            color === 'yellow' || (!color && type === 'important'),
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
