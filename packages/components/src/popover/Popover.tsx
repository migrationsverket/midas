import { forwardRef } from 'react'
import {
  composeRenderProps,
  OverlayArrow,
  Popover as AriaPopover,
  PopoverContext,
  PopoverProps as AriaPopoverProps,
  useContextProps,
} from 'react-aria-components'
import clsx from '../utils/clsx'
import styles from './Popover.module.css'

export interface PopoverProps extends AriaPopoverProps {
  hideArrow?: boolean
}

/**
 * @deprecated since v17.0.0 please use `PopoverProps` instead
 */
export type MidasPopoverProps = PopoverProps

export const Popover = forwardRef<HTMLElement, PopoverProps>((props, ref) => {
  const [mergedProps, mergedRef] = useContextProps(props, ref, PopoverContext)
  const { className, hideArrow = false, offset = 4, ...rest } = mergedProps

  return (
    <AriaPopover
      className={clsx(styles.popover, className)}
      offset={offset}
      ref={mergedRef}
      {...rest}
    >
      {composeRenderProps(mergedProps.children, children => (
        <>
          {!hideArrow && (
            <OverlayArrow className={styles.arrow}>
              <svg
                height={16}
                viewBox='0 0 16 16'
                width={16}
              >
                <path d='M0 0 L8 8 L16 0' />
              </svg>
            </OverlayArrow>
          )}
          {children}
        </>
      ))}
    </AriaPopover>
  )
})
