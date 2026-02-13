import {
  PanelBodyProps,
  CollapsePanel,
  CollapseTriggerProps,
  DismissPanel,
  DismissTriggerProps,
  PanelTitleProps,
} from './components'

export type PanelVariant = 'collapse' | 'dismiss' | undefined

export type PanelTriggerProps<T extends PanelVariant> = T extends 'collapse'
  ? CollapseTriggerProps
  : T extends 'dismiss'
    ? DismissTriggerProps
    : never

export type PanelProps<T extends PanelVariant = 'collapse'> = PanelBodyProps &
  Pick<PanelTitleProps, 'title'> &
  PanelTriggerProps<T> & {
    variant?: T
  }

export const Panel = <T extends PanelVariant = 'collapse'>({
  variant = 'collapse',
  ...rest
}: PanelProps<T>) => {
  if (variant === 'collapse') {
    return <CollapsePanel {...rest} />
  }

  if (variant === 'dismiss') {
    return <DismissPanel {...rest} />
  }

  return null
}
