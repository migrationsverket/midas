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

interface CSSPropertiesWithVars extends React.CSSProperties {
  '--content-height': string
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

  React.useEffect(() => {
    if (panelRef.current) {
      setPanelHeight(panelRef.current.clientHeight)
    }
  }, [children])

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
        style={
          { '--content-height': `${panelHeight}px` } as CSSPropertiesWithVars
        }
        className={styles.panel}
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
