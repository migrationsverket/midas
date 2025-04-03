import clsx from 'clsx'
import styles from './Card.module.css'
import * as React from 'react'
import { Heading, HeadingProps } from '../heading'
import { Button, ButtonProps } from 'react-aria-components'

export interface MidasCard extends React.HTMLAttributes<HTMLDivElement> {
  /** Stack content in card vertical or horizontal */
  horizontal?: boolean
  /** Card status to showcase different senarios */
  status?: 'warning' | 'error' | 'success'
  state?: 'active' | 'edit'
  /** Card content, usually wrap with CardContent */
  children: React.ReactNode
}

export interface MidasCardContext {
  horizontal?: MidasCard['horizontal']
  status?: MidasCard['status']
  state?: MidasCard['state']
}

export interface MidasCardImage {
  /** Custom image component to be used instead of the default img tag */
  as?: React.ElementType
  className?: string
  [key: string]: unknown
}

const CardContext = React.createContext<MidasCardContext>({
  horizontal: undefined,
  status: undefined,
  state: undefined,
})

export const Card: React.FC<MidasCard> = ({
  horizontal,
  status,
  state,
  className,
  children,
  ...rest
}) => {
  return (
    <CardContext.Provider value={{ horizontal, status, state }}>
      <div
        {...rest}
        className={clsx(
          styles.card,
          horizontal && styles.horizontal,
          state === 'edit' && styles.cardEditable,
          status === 'success' && styles.cardSuccess,
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
}) => {
  const { horizontal } = React.useContext(CardContext)

  return (
    <div className={clsx(styles.cardContent, horizontal && styles.horizontal)}>
      {children}
    </div>
  )
}

export const CardTitle: React.FC<HeadingProps> = ({
  elementType = 'h2',
  children,
}) => {
  const { horizontal } = React.useContext(CardContext)

  return (
    <Heading
      level={horizontal ? 5 : 2}
      elementType={elementType}
      isExpressive={horizontal}
      className={clsx(styles.cardTitle, horizontal && styles.horizontal)}
    >
      {children}
    </Heading>
  )
}

export const CardActions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return <div className={styles.cardActions}>{children}</div>
}

export const CardActionArea: React.FC<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
> = ({ children, className, ...rest }) => {
  return (
    <Button
      {...rest}
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
      className={clsx(styles.cardImage, className)}
      {...rest}
    />
  )
}
