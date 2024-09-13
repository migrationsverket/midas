'use client'

import React, { ElementType, ReactElement } from 'react'
import { ArrowRight } from 'lucide-react'
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
  onPress?: () => void
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
  onPress,
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
      <button
        className={styles.button}
        onClick={onPress}
        role="link"
        aria-label={title}
      >
        {customImageComponent
          ? customImageComponent
          : image?.source && (
              <img
                src={image.source}
                alt={image.description}
                className={styles.image}
              />
            )}
        <HeadingTag className={styles.heading}>
          {title}
          <ArrowRight
            className={styles.arrowIcon}
            aria-hidden={true}
            size={32}
            strokeWidth={1.5}
          />
        </HeadingTag>
        <p className={styles.text}>{content}</p>
      </button>
    </div>
  )
}
