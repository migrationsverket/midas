'use client'

import React, {
  ElementType,
  HTMLAttributeAnchorTarget,
  ReactElement
} from 'react'
import { Link } from '@midas-ds/link'
import styles from './Card.module.css'
import clsx from 'clsx'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
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
  link: { href: string; title: string; target?: HTMLAttributeAnchorTarget }
  /** Tag to be used for the header
   *  @default 'h1'
   */
  headingTag?: ElementType
  /** Custom image component to be used instead of the default img tag */
  customImageComponent?: ReactElement
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
        href={link.href}
        target={link.target}
        standalone
        stretched
      >
        {link.title}
      </Link>
    </div>
  )
}
