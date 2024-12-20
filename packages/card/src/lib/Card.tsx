'use client'

import React, { ElementType, ReactElement } from 'react'
import { Link, LinkProps, RouterProvider } from '@midas-ds/link'
import styles from './Card.module.css'
import clsx from 'clsx'

export interface CardProps<C extends ElementType = typeof Link>
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional image displayed at the top of card */
  image?: { source: string; description: string }
  /** Sets background to predetermined color
   *  @default false
   * */
  background?: boolean

  /** Header as h1 for the component @default false rendered at top or below image is there is one */
  title: string
  /** Content as p element for the component rendered at the bottom */
  content: string
  /** Handler for when card element is clicked */
  link: LinkProps<C>
  /** Tag to be used for the header
   *  @default 'h1'
   */
  headingTag?: ElementType
  /** Custom image component to be used instead of the default img tag */
  customImageComponent?: ReactElement
  customLinkComponent?: ElementType
}

/**
 * This component renders a card with optional image, title, content.
 */
export const Card: React.FC<CardProps> = ({
  image,
  background,
  title,
  content,
  link,
  headingTag: HeadingTag = 'h1',
  customImageComponent,
  customLinkComponent: CustomLinkComponent,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.card,
        background && styles.background,
        rest.className
      )}
      {...rest}
    >
      <div className={styles.content}>
        {customImageComponent
          ? customImageComponent
          : image?.source && (
              <img
                src={image.source}
                alt={image.description}
                className={styles.image}
              />
            )}
        <HeadingTag className={styles.heading}>{title}</HeadingTag>
        <p className={styles.text}>{content}</p>
      </div>
      <Link
        {...link}
        standalone
        stretched
        as={CustomLinkComponent}
      />
    </div>
  )
}

export { RouterProvider }
