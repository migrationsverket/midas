import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { CardTitle } from '../Card'
import { HeadingProps } from '../../heading'
import { Text } from '../../text'
import clsx from '../../utils/clsx'
import styles from './CardHeader.module.css'

export type CardHeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  heading: string
  headingLevel?: HeadingProps['elementType']
  subHeading?: string
}

export const CardHeader = ({
  children,
  className,
  heading,
  headingLevel,
  subHeading,
  ...rest
}: CardHeaderProps) => (
  <div
    className={clsx(className, styles.cardHeader)}
    {...rest}
  >
    <div className={styles.textContainer}>
      <CardTitle elementType={headingLevel}>{heading}</CardTitle>
      {subHeading && (
        <Text
          slot='description'
          className={styles.subHeading}
        >
          {subHeading}
        </Text>
      )}
    </div>
    {children}
  </div>
)
