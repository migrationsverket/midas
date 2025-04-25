import clsx from 'clsx'
import styles from './Card.module.css'
import * as React from 'react'
import { Heading, HeadingProps } from '../heading'
import { Button, ButtonProps } from 'react-aria-components'

export interface MidasCard extends React.HTMLAttributes<HTMLDivElement> {
  /** Stack content in card vertical or horizontal */
  horizontal?: boolean
  /** Card content, usually wrap with CardContent */
  children: React.ReactNode
}

export interface MidasCardContext {
  horizontal?: MidasCard['horizontal']
  titleId?: string
}

export interface MidasCardImage {
  /** Custom image component to be used instead of the default img tag */
  as?: React.ElementType
  className?: string
  [key: string]: unknown
}

const CardContext = React.createContext<MidasCardContext>({
  horizontal: undefined,
  titleId: undefined,
})

export const Card: React.FC<MidasCard> = ({
  horizontal,
  className,
  children,
  ...rest
}) => {
  const id = React.useId()
  const titleId = `card-title-${id}`

  return (
    <CardContext.Provider value={{ horizontal, titleId }}>
      <div
        {...rest}
        className={clsx(
          styles.card,
          horizontal && styles.horizontal,
          className,
        )}
      >
        {children}
      </div>
    </CardContext.Provider>
  )
}

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  const { horizontal } = React.useContext(CardContext)

  return (
    <div
      {...rest}
      className={clsx(styles.cardContent, horizontal && styles.horizontal)}
    >
      {children}
    </div>
  )
}

export const CardTitle: React.FC<HeadingProps> = ({
  elementType = 'h2',
  children,
}) => {
  const { horizontal, titleId } = React.useContext(CardContext)

  return (
    <Heading
      level={horizontal ? 5 : 2}
      elementType={elementType}
      isExpressive={horizontal}
      className={clsx(styles.cardTitle, horizontal && styles.horizontal)}
      id={titleId}
    >
      {children}
    </Heading>
  )
}

export const CardActions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => {
  const { horizontal } = React.useContext(CardContext)

  return (
    <div
      {...rest}
      className={clsx(styles.cardActions, horizontal && styles.horizontal)}
    >
      {children}
    </div>
  )
}

export const CardActionArea: React.FC<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> = ({ children, className, ...rest }) => {
  const { titleId } = React.useContext(CardContext)

  return (
    <Button
      {...rest}
      aria-labelledby={titleId}
      className={clsx(styles.cardActionArea, className)}
    >
      {children}
    </Button>
  )
}

export const CardImage: React.FC<MidasCardImage> = ({
  as: ImageComponent = 'img',
  className,
  ...rest
}) => {
  return (
    <ImageComponent
      {...rest}
      className={clsx(styles.cardImage, className)}
    />
  )
}
