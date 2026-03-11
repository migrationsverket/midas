'use client'

import { type CollapseTriggerProps, CollapsePanel } from './collapse-panel'
import { type DismissTriggerProps, DismissPanel } from './dismiss-panel'
import { type PanelBodyProps } from './panel-body'
import { type PanelTitleProps } from './panel-title'
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
}: PanelProps<T>) => (
  <PanelContext.Provider value={{ variant }}>
    {variant === 'collapse' && <CollapsePanel {...rest} />}
    {variant === 'dismiss' && <DismissPanel {...rest} />}
  </PanelContext.Provider>
)
