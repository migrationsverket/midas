// url=https://www.figma.com/design/Zc41jDwx13L2bVECCQlsfN/MIDAS-UI-Kit?node-id=19510-312
// source=packages/components/src/color-scheme-switch/ColorSchemeSwitch.tsx
// component=ColorSchemeSwitch
import figma from 'figma'

const instance = figma.selectedInstance
const defaultScheme = instance.getEnum('mode', {
  light: 'light',
  dark: 'dark',
  system: 'light dark',
})
const component = instance.getEnum('variant', {
  full: 'ColorSchemeSwitch',
  compact: 'ColorSchemeSwitchMenu',
})

export default {
  example: figma.code`<${component} defaultScheme="${defaultScheme}" />`,
  imports: [
    "import { ColorSchemeSwitch, ColorSchemeSwitchMenu } from '@midas-ds/components'",
  ],
  id: 'midas-color-scheme-switch',
  metadata: {
    nestable: true,
  },
}
