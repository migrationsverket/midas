import { clsx, Text, TextProps } from '@midas-ds/components'
import styles from './PanelTitle.module.css'

export interface PanelTitleProps extends TextProps {
  title?: string
}

export const PanelTitle = ({ className, title, ...rest }: PanelTitleProps) => (
  <Text
    className={clsx(className, styles.panelTitle)}
    {...rest}
  >
    {title}
  </Text>
)
