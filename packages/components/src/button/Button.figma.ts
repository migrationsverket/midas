// url=https://www.figma.com/design/Zc41jDwx13L2bVECCQlsfN/MIDAS-UI-Kit?node-id=59-70
// source=packages/components/src/button/Button.tsx
// component=Button
import figma from 'figma'

const instance = figma.selectedInstance
const label = instance.getString('label')
const size = instance.getEnum('size', {
  large: 'large',
  medium: 'medium',
})
const variant = instance.getEnum('variant', {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  danger: 'danger',
})
const state = instance.getEnum('state', {
  enabled: 'enabled',
  hover: 'hover',
  active: 'active',
  disabled: 'disabled',
  skeleton: 'skeleton',
})
const iconPlacement = instance.getEnum('iconPlacement', {
  left: 'left',
  right: 'right',
})
const isPending = instance.getEnum('isPending', {
  false: false,
  true: true,
})

export default {
  example: figma.code`<Button
  size="${size}"
  variant="${variant}"
  iconPlacement="${iconPlacement}"
  isPending={${isPending}}
  ${state === 'disabled' ? 'isDisabled' : ''}
>
  ${label}
</Button>`,
  imports: ["import { Button } from '@midas-ds/components'"],
  id: 'midas-button',
  metadata: {
    nestable: true,
  },
}
