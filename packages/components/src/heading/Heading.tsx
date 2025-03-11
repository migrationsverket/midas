import * as React from 'react'
import clsx from 'clsx'
import { isSemanticElement } from './isSemanticElement'
import styles from './Heading.module.css'

export type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export interface HeadingProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  children: React.ReactNode
  /**
   * The heading element to render
   */
  variant?: Variant
  /**
   * Override the semantic element of the component but keep the look of the variant property
   */
  component?: Variant
  /**
   * Use the external/expressive look
   */
  isExternal?: boolean
}

export const Heading: React.FC<HeadingProps> = ({ children, ...rest }) => {
  return <Element {...rest}>{children}</Element>
}

const Element: React.FC<HeadingProps> = ({
  component,
  children,
  className,
  variant = 'h3',
  isExternal = false,
  ...rest
}) => {
  const classNames = {
    h1: isExternal ? styles.h1External : styles.h1,
    h2: isExternal ? styles.h2External : styles.h2,
    h3: isExternal ? styles.h3External : styles.h3,
    h4: isExternal ? styles.h4External : styles.h4,
    h5: isExternal ? styles.h5External : styles.h5,
  }

  const classes = clsx(classNames[variant], className)

  if (
    isSemanticElement({
      component,
      variant,
      element: 'h1',
    })
  ) {
    return (
      <h1
        className={classes}
        {...rest}
      >
        {children}
      </h1>
    )
  }

  if (
    isSemanticElement({
      component,
      variant,
      element: 'h2',
    })
  ) {
    return (
      <h2
        className={classes}
        {...rest}
      >
        {children}
      </h2>
    )
  }

  if (
    isSemanticElement({
      component,
      variant,
      element: 'h3',
    })
  ) {
    return (
      <h3
        className={classes}
        {...rest}
      >
        {children}
      </h3>
    )
  }

  if (
    isSemanticElement({
      component,
      variant,
      element: 'h4',
    })
  ) {
    return (
      <h4
        className={classes}
        {...rest}
      >
        {children}
      </h4>
    )
  }

  if (
    isSemanticElement({
      component,
      variant,
      element: 'h5',
    })
  ) {
    return (
      <h5
        className={classes}
        {...rest}
      >
        {children}
      </h5>
    )
  }

  return null
}
