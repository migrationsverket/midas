'use client'

import {
  PanelBodyProps,
  CollapsePanel,
  CollapseTriggerProps,
  DismissPanel,
  DismissTriggerProps,
  PanelTitleProps,
} from './components'
import { PanelContext } from './PanelContext'

export type PanelVariant = 'collapse' | 'dismiss' | undefined

export type PanelTriggerProps<T extends PanelVariant> = T extends 'collapse'
  ? CollapseTriggerProps
  : T extends 'dismiss'
    ? DismissTriggerProps
    : never

export type PanelProps<T extends PanelVariant> = PanelBodyProps &
  Pick<PanelTitleProps, 'title'> &
  PanelTriggerProps<T> & {
    variant?: T
  }

export const Panel = <T extends PanelVariant>({
  variant = 'collapse',
  ...rest
}: PanelProps<T>) => {
  if (variant === 'collapse') {
    return (
      <PanelContext.Provider value={{ variant }}>
        <CollapsePanel {...rest} />
      </PanelContext.Provider>
    )
  }

  if (variant === 'dismiss') {
    return (
      <PanelContext.Provider value={{ variant }}>
        <DismissPanel {...rest} />
      </PanelContext.Provider>
    )
  }

  return null
}
