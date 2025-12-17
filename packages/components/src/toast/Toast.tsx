'use client'

import { Button } from '../button'
import {
  AriaToastProps,
  AriaToastRegionProps,
  useToast,
  useToastRegion,
} from 'react-aria'
import {
  QueuedToast,
  ToastQueue,
  ToastState,
  ToastStateProps,
  useToastQueue,
  useToastState,
} from 'react-stately'
import React from 'react'
import { createPortal, flushSync } from 'react-dom'
import styles from './Toast.module.css'
import { X } from 'lucide-react'
import clsx from '../utils/clsx'

import { FeedbackStatusIcon } from '../common/FeedbackStatusIcon'
import { FeedbackStatus } from '../common/types'

export interface MidasToast {
  message: string
  type: FeedbackStatus
  children?: React.ReactNode
}

export interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>
  className?: string
}

export interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>
  toast: QueuedToast<T>
  children?: React.ReactNode
  className?: string
}

export interface ToastProviderProps extends AriaToastRegionProps {
  children?:
    | ((state: ToastState<MidasToast>) => React.ReactNode)
    | React.ReactNode
  className?: string
}

const toastStateProps: ToastStateProps = {
  wrapUpdate(fn) {
    if ('startViewTransition' in document) {
      document.startViewTransition(() => {
        flushSync(fn)
      })
    } else {
      fn()
    }
  },
  maxVisibleToasts: 5,
}

export { useToastState }

export const toastQueue = new ToastQueue<MidasToast>(toastStateProps)

export const GlobalToastRegion = (props: ToastProviderProps) => {
  const state = useToastQueue(toastQueue)

  return state.visibleToasts.length > 0
    ? createPortal(
        <ToastRegion
          {...props}
          state={state}
        />,
        document.body,
      )
    : null
}

export const ToastProvider = ({ children, ...props }: ToastProviderProps) => {
  const state = useToastState<MidasToast>(toastStateProps)

  return (
    <>
      {typeof children === 'function' ? children(state) : children}
      {state.visibleToasts.length > 0 && (
        <ToastRegion
          {...props}
          state={state}
        />
      )}
    </>
  )
}

export function ToastRegion<T extends MidasToast>({
  state,
  className,
  ...props
}: ToastRegionProps<T>) {
  const ref = React.useRef(null)
  const { regionProps } = useToastRegion(props, state, ref)

  return (
    <div
      {...regionProps}
      ref={ref}
      className={clsx(styles.toastRegion, className)}
    >
      {state.visibleToasts.map(toast => (
        <Toast
          key={toast.key}
          toast={toast}
          state={state}
        />
      ))}
    </div>
  )
}

export function Toast<T extends MidasToast>({
  state,
  className,
  ...props
}: ToastProps<T>) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { toastProps, contentProps, titleProps, closeButtonProps } = useToast(
    props,
    state,
    ref,
  )

  return (
    <div
      {...toastProps}
      ref={ref}
      className={clsx(
        styles.toast,
        styles[props.toast.content.type],
        className,
      )}
      style={{ viewTransitionName: props.toast.key }}
    >
      <div
        {...contentProps}
        className={clsx(styles.toastContent, contentProps.className)}
      >
        <FeedbackStatusIcon
          aria-hidden
          className={styles.icon}
          status={props.toast.content.type}
        />
        <div>
          <p
            className={styles.toastMessage}
            {...titleProps}
          >
            {props.toast.content.message}
          </p>
          {props.toast.content.children}
        </div>
      </div>
      <Button
        variant='icon'
        {...closeButtonProps}
      >
        <X
          size={20}
          aria-hidden
        />
      </Button>
    </div>
  )
}
