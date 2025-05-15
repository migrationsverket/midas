'use client'

import * as React from 'react'
import {
  Disclosure,
  DisclosurePanel,
  DisclosureProps,
} from 'react-aria-components'
import { Button } from '../button'
import { Check, ChevronDown, AlertTriangle } from 'lucide-react'
import clsx from 'clsx'
import styles from './Accordion.module.css'
import { Heading, HeadingProps } from '../heading'

interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
  /** The text displayed in the collapsed state. If a ReactNode is proveded we're not adding a heading and you have to provide one yourself. */
  title?: string | React.ReactNode
  children?: React.ReactNode
  /** Adjust the titles heading level to your heading tag structure */
  headingLevel?: HeadingProps['elementType']
  /** Display an accordion item in different status states */
  type?: 'default' | 'success' | 'warning'
  /**
   * To not use white background in types
   * @default false
   **/
  hasWhiteBackground?: boolean
}

export const AccordionItem: React.FC<MidasAccordionItem> = ({
  title,
  children,
  className,
  headingLevel = 'h2',
  type,
  hasWhiteBackground = false,
  ...props
}) => {
  const titleIsReactNode = typeof title === 'object'

  const iconMap = {
    success: Check,
    warning: AlertTriangle,
    default: null,
  }

  const Icon = iconMap[type || 'default']
  const renderedIcon = Icon ? (
    <Icon
      size={20}
      className={styles.statusIcon}
    />
  ) : null

  return (
    <Disclosure
      {...props}
      className={clsx(
        styles.item,
        type === 'success' && styles.success,
        type === 'warning' && styles.warning,
        className,
      )}
    >
      <div className={styles.trigger}>
        <Button
          className={styles.triggerButton}
          slot='trigger'
          variant='icon'
        >
          <ChevronDown
            size={20}
            className={styles.chevronIcon}
          />
          <div className={styles.triggerMainContent}>
            {titleIsReactNode ? (
              title
            ) : (
              <Heading
                level={3}
                elementType={headingLevel}
                className={styles.triggerText}
              >
                {title}
              </Heading>
            )}
          </div>
          {renderedIcon}
        </Button>
      </div>
      <DisclosurePanel className={styles.panel}>
        <div
          className={clsx(
            styles.content,
            hasWhiteBackground && styles.hasWhiteBackground,
          )}
        >
          {children}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
