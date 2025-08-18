import * as React from 'react'
import { useContext, useEffect } from 'react'
import {
  Disclosure,
  DisclosurePanel,
  DisclosureProps,
} from 'react-aria-components'
import { Button } from '../button'
import {
  Check,
  ChevronDown,
  AlertTriangle,
  Info,
  AlertCircle,
} from 'lucide-react'
import clsx from 'clsx'
import itemStyles from './AccordionItem.module.css'
import { Heading, HeadingProps } from '../heading'
import { FeedbackStatus } from '../common/types'
import { AccordionContext } from './AccordionContext'

interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
  /** The text displayed in the collapsed state. If a ReactNode is provided, a heading will not be automatically added, and you must provide one yourself. */
  title?: string | React.ReactNode
  children?: React.ReactNode
  /** Adjust the heading level of the title to match your document's heading tag structure */
  headingLevel?: HeadingProps['elementType']
  /** Display an accordion item with different status styles. */
  status?: FeedbackStatus
  /**
   * Adds a background element to the content, set to false for a transparent look
   * @default true
   **/
  hasBackground?: boolean
  isContained?: boolean
}

export const AccordionItem: React.FC<MidasAccordionItem> = ({
  title,
  children,
  className,
  headingLevel = 'h2',
  status,
  hasBackground = true,
  isContained: isContainedFromProp,
  ...props
}) => {
  const context = useContext(AccordionContext)
  const isContained = isContainedFromProp ?? context?.isContained ?? false
  const titleIsReactNode = typeof title === 'object'

  useEffect(() => {
    if (status && !isContained) {
      console.warn(
        `AccordionItem: When 'status' is set, it is recommended to also set 'isContained' to true for visual consistency.`,
      );
    }
  }, [status, isContained]);

  const iconMap = {
    success: Check,
    warning: AlertTriangle,
    info: Info,
    important: AlertCircle,
  }

  const Icon = status ? iconMap[status] : null
  const renderedIcon = Icon ? (
    <Icon
      size={20}
      className={itemStyles.statusIcon}
    />
  ) : null

  return (
    <Disclosure
      {...props}
      className={clsx(
        itemStyles.item,
        status && itemStyles[status],
        isContained && itemStyles.contained,
        className,
      )}
    >
      <div className={itemStyles.trigger}>
        <Button
          className={itemStyles.triggerButton}
          slot='trigger'
          variant='icon'
        >
          <ChevronDown
            size={20}
            className={itemStyles.chevronIcon}
          />
          <div className={itemStyles.triggerMainContent}>
            {titleIsReactNode ? (
              title
            ) : (
              <Heading
                level={3}
                elementType={headingLevel}
                className={itemStyles.triggerText}
              >
                {title}
              </Heading>
            )}
          </div>
          {renderedIcon}
        </Button>
      </div>
      <DisclosurePanel className={itemStyles.panel}>
        <div
          className={clsx(
            itemStyles.content,
            hasBackground && itemStyles.hasBackground,
          )}
        >
          {children}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

