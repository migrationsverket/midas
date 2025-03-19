'use client'

import * as React from 'react'
import {
  Disclosure,
  DisclosurePanel,
  DisclosureProps,
  HeadingProps,
} from 'react-aria-components'
import { Button } from '../button'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import styles from './Accordion.module.css'
import { Heading } from '../heading'

interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
  /** The text displayed in the collapsed state. If a ReactNode is proveded we're not adding a heading and you have to provide one yourself. */
  title?: string | React.ReactNode
  children?: React.ReactNode
  /** Adjust the titles heading level to your heading tag structure */
  headingLevel?: HeadingProps['level']
}

export const AccordionItem: React.FC<MidasAccordionItem> = ({
  title,
  children,
  className,
  headingLevel = 3,
  ...props
}) => {
  const panelRef = React.useRef<HTMLDivElement>(null)
  const [panelHeight, setPanelHeight] = React.useState(0)

  const titleIsReactNode = typeof title === 'object'

  /**
   * There might be a better way to do this.
   * Normally this shouldn't be used without a dependency array
   * we found no way to get around it without doing like this.
   */
  // eslint-disable-next-line
  React.useLayoutEffect(() => {
    if (panelRef.current) {
      setPanelHeight(panelRef.current.clientHeight)
    }
  })

  return (
    <Disclosure
      {...props}
      className={clsx(styles.item, className)}
    >
      {titleIsReactNode ? (
        <div className={styles.trigger}>
          <Button
            slot='trigger'
            variant='icon'
          >
            <ChevronDown
              size={20}
              className={styles.icon}
            />
            {title}
          </Button>
        </div>
      ) : (
        <Heading
          level={headingLevel}
          className={styles.trigger}
        >
          <Button
            slot='trigger'
            variant='icon'
          >
            <ChevronDown
              size={20}
              className={styles.icon}
            />
            <span className={styles.triggerText}>{title}</span>
          </Button>
        </Heading>
      )}
      <DisclosurePanel
        style={{ '--panel-height': `${panelHeight}px` } as React.CSSProperties}
        className={clsx(styles.panel, panelHeight === 0 && styles.panel0)}
      >
        <div
          ref={panelRef}
          className={styles.content}
        >
          {children}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
