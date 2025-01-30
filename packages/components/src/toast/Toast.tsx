'use client'

import { Button } from '../button'
import {
  AriaToastProps,
  AriaToastRegionProps,
  useToast,
  useToastRegion
} from '@react-aria/toast'
import {
  QueuedToast,
  ToastQueue,
  ToastState,
  useToastQueue,
  useToastState
} from '@react-stately/toast'
import React from 'react'
import { createPortal } from 'react-dom'
import styles from './Toast.module.css'
import {
  CircleAlert,
  CircleCheckIcon,
  Info,
  TriangleAlert,
  X
} from 'lucide-react'
import clsx from 'clsx'

export interface MidasToast {
  message: string
  type: 'success' | 'info' | 'warning' | 'important'
  children?: React.ReactNode
}

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>
}

export interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>
  toast: QueuedToast<T>
  children?: React.ReactNode
}

interface ToastProviderProps extends AriaToastRegionProps {
  children?:
    | ((state: ToastState<MidasToast>) => React.ReactNode)
    | React.ReactNode
}

const iconMap = {
  success: CircleCheckIcon,
  info: Info,
  important: CircleAlert,
  warning: TriangleAlert
}

export const toastQueue = new ToastQueue<MidasToast>({
  maxVisibleToasts: 5,
  hasExitAnimation: true
})

export const GlobalToastRegion = (props: ToastProviderProps) => {
  const state = useToastQueue(toastQueue)

  return state.visibleToasts.length > 0
    ? createPortal(
        <ToastRegion
          {...props}
          state={state}
        />,
        document.body
      )
    : null
}

export const ToastProvider = ({ children, ...props }: ToastProviderProps) => {
  const state = useToastState<MidasToast>({
    maxVisibleToasts: 5,
    hasExitAnimation: true
  })

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
  ...props
}: ToastRegionProps<T>) {
  const ref = React.useRef(null)
  const { regionProps } = useToastRegion(props, state, ref)

  return (
    <div
      {...regionProps}
      ref={ref}
      className={styles.toastRegion}
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
  ...props
}: ToastProps<T>) {
  const ref = React.useRef<HTMLDivElement>(null)
  const { toastProps, contentProps, titleProps, closeButtonProps } = useToast(
    props,
    state,
    ref
  )
  const Icon = iconMap[props.toast.content.type]

  return (
    <div
      {...toastProps}
      ref={ref}
      className={clsx(styles.toast, styles[props.toast.content.type])}
      data-animation={props.toast.animation}
      onAnimationEnd={() => {
        if (props.toast.animation === 'exiting') {
          state.remove(props.toast.key)
        }
      }}
    >
      <div
        className={styles.toastContent}
        {...contentProps}
      >
        <Icon
          className={styles.icon}
          size={20}
          aria-hidden
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
