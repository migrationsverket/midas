'use client'

import React from 'react'
import {
  AriaToastProps,
  useToast,
  AriaToastRegionProps,
  useToastRegion
} from '@react-aria/toast'
import {
  ToastQueue,
  ToastState,
  useToastQueue,
  useToastState
} from '@react-stately/toast'
import { createPortal } from 'react-dom'
import clsx from 'clsx'
import { Button } from '@midas-ds/button'
import {
  CircleAlert,
  CircleCheckIcon,
  Info,
  TriangleAlert,
  X
} from 'lucide-react'
import styles from './Toast.module.css'

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>
}

export function ToastProvider({ children, ...props }: any) {
  const state = useToastState<MidasToast>({
    maxVisibleToasts: 5,
    hasExitAnimation: true
  })

  return (
    <>
      {children(state)}
      {state.visibleToasts.length > 0 && (
        <ToastRegion
          {...props}
          state={state}
        />
      )}
    </>
  )
}

function ToastRegion({ state, ...props }: ToastRegionProps<MidasToast>) {
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

export type MidasToastState = ToastState<MidasToast>
export interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>
}

export function Toast({ state, ...props }: ToastProps<MidasToast>) {
  const ref = React.useRef(null)
  const { toastProps, closeButtonProps } = useToast(props, state, ref)
  const Icon = iconMap[props.toast.content.type]

  return (
    <div
      {...toastProps}
      ref={ref}
      className={clsx(styles.toast, styles[props.toast.content.type])}
      data-animation={props.toast.animation}
      onAnimationEnd={() => {
        // Remove the toast when the exiting animation completes.
        if (props.toast.animation === 'exiting') {
          state.remove(props.toast.key)
        }
      }}
    >
      <div>
        <Icon
          className={styles.icon}
          size={20}
          aria-hidden
        />
        {props.toast.content.message}
      </div>
      <Button {...closeButtonProps}>
        <X
          size={20}
          aria-hidden
        />
      </Button>
    </div>
  )
}

type MidasToast = {
  message: string
  type: 'success' | 'info' | 'warning' | 'important'
}

// Create a global toast queue.
export const toastQueue = new ToastQueue<MidasToast>({
  maxVisibleToasts: 5,
  hasExitAnimation: true
})

export function GlobalToastRegion(props: any) {
  // Subscribe to it.
  const state = useToastQueue(toastQueue)

  // Render toast region.
  return state.visibleToasts.length > 0
    ? createPortal(
        <ToastRegion
          {...props}
          state={state}
          type={props}
        />,
        document.body
      )
    : null
}

const iconMap = {
  success: CircleCheckIcon,
  info: Info,
  important: CircleAlert,
  warning: TriangleAlert
}
