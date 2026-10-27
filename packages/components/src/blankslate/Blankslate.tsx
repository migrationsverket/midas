import React from 'react'
import styles from './Blankslate.module.css'
import clsx from '../utils/clsx'
import { Heading } from '../heading'
import type { HeadingProps } from '../heading'
import { Text } from '../text'
import type { TextProps } from '../text'

/**
 * Adapts its spacing to the width of its container rather than the viewport, so it fits both a full page and a small region such as a panel or card.
 */
export interface BlankslateProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export interface BlankslateVisualProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon or illustration to display. Use a Lucide icon at size 48, or a custom image. */
  children: React.ReactNode
}

export type BlankslateHeadingProps = HeadingProps

export type BlankslateDescriptionProps = TextProps

export interface BlankslateActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const BlankslateVisual = ({ children, className, ...rest }: BlankslateVisualProps) => (
  <div
    className={clsx(styles.visual, className)}
    {...rest}
  >
    {children}
  </div>
)
BlankslateVisual.displayName = 'BlankslateVisual'

export const BlankslateHeading = ({
  children,
  className,
  level = 2,
  ...rest
}: BlankslateHeadingProps) => (
  <Heading
    level={level}
    className={clsx(styles.heading, className)}
    {...rest}
  >
    {children}
  </Heading>
)
BlankslateHeading.displayName = 'BlankslateHeading'

export const BlankslateDescription = ({
  children,
  className,
  elementType = 'p',
  ...rest
}: BlankslateDescriptionProps) => (
  <Text
    elementType={elementType}
    className={clsx(styles.description, className)}
    {...rest}
  >
    {children}
  </Text>
)
BlankslateDescription.displayName = 'BlankslateDescription'

export const BlankslateActions = ({ children, className, ...rest }: BlankslateActionsProps) => (
  <div
    className={clsx(styles.actions, className)}
    {...rest}
  >
    {children}
  </div>
)
BlankslateActions.displayName = 'BlankslateActions'

export const Blankslate = ({ children, className, ...rest }: BlankslateProps) => (
  <div
    className={clsx(styles.blankslate, className)}
    {...rest}
  >
    <div className={styles.content}>{children}</div>
  </div>
)
Blankslate.displayName = 'Blankslate'
