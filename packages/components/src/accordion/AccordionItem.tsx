'use client'

import * as React from 'react'
import {
  Disclosure,
  DisclosurePanel,
  DisclosureProps,
  Heading,
  HeadingProps
} from 'react-aria-components'
import { Button } from '../button'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'
import styles from './Accordion.module.css'

interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
  /** The text displayed in the collapsed state */
  title?: string
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

  React.useLayoutEffect(() => {
    if (panelRef.current) {
      setPanelHeight(panelRef.current.clientHeight)
    }
  }, [])

  return (
    <Disclosure
      {...props}
      className={clsx(styles.item, className)}
    >
      <Heading
        level={headingLevel}
        className={styles.trigger}
      >
        <Button
          slot='trigger'
          variant='icon'
        >
          <ChevronDown size={20} />
          <span className={styles.triggerText}>{title}</span>
        </Button>
      </Heading>
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
