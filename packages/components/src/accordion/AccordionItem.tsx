import { iconMap } from '../common/icon-map'
import * as React from 'react'
import { useContext, useEffect } from 'react'
import {
  Disclosure,
  DisclosurePanel,
  DisclosureProps,
} from 'react-aria-components'
import { Button } from '../button'
import { ChevronDown } from 'lucide-react'
import clsx from '../utils/clsx'
import itemStyles from './AccordionItem.module.css'
import { Heading, HeadingProps } from '../heading'
import { FeedbackStatus, Size } from '../common/types'
import { AccordionContext } from './AccordionContext'
import { useLocalizedStringFormatter } from '../utils/intl'
import messages from './intl/translations.json'

interface MidasAccordionItem extends Omit<DisclosureProps, 'children'> {
  /** The text displayed in the collapsed state. If a ReactNode is provided, a heading will not be automatically added, and you must provide one yourself. */
  title?: string | React.ReactNode
  children?: React.ReactNode
  /** Adjust the heading level of the title to match your document's heading tag structure */
  headingLevel?: HeadingProps['elementType']
  /** Display an accordion item with different type styles. */
  type?: FeedbackStatus
  /**
   * Adds a background element to the content, set to false for a transparent look
   * @default true
   **/
  hasBackground?: boolean
  isContained?: boolean
  /** Component size when used with `isContained`  (large: height 48px, medium: height 40px)
   *  @default 'large'
   **/
  size?: Size
  /**
   * Change the aria-label of the status icon shown when defining the `type`
   */
  iconAriaLabel?: string
}

export const AccordionItem: React.FC<MidasAccordionItem> = ({
  title,
  children,
  className,
  headingLevel = 'h2',
  type,
  hasBackground = true,
  size = 'large',
  isContained: isContainedFromProp,
  iconAriaLabel,
  ...props
}) => {
  const context = useContext(AccordionContext)
  const strings = useLocalizedStringFormatter(messages)
  const isContained = isContainedFromProp ?? context?.isContained ?? false
  const titleIsReactNode = typeof title === 'object'

  useEffect(() => {
    if (type && !isContained) {
      console.warn(
        `AccordionItem: When 'type' is set, it is recommended to also set 'isContained' to true for visual consistency.`,
      )
    }
  }, [type, isContained])

  const Icon = type ? iconMap[type] : null

  const iconAriaLabelMap: Record<FeedbackStatus, string> = {
    success: strings.format('ok'),
    info: strings.format('information'),
    important: strings.format('importantInformation'),
    warning: strings.format('warning'),
  }

  const renderedIcon =
    type && Icon ? (
      <Icon
        aria-label={iconAriaLabel || iconAriaLabelMap[type]}
        size={20}
        className={itemStyles.statusIcon}
      />
    ) : null

  return (
    <Disclosure
      {...props}
      className={clsx(
        itemStyles.item,
        type && itemStyles[type],
        (size === 'medium' || context?.size === 'medium') && itemStyles.medium,
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
