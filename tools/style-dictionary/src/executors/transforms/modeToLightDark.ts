import { TransformedToken } from 'style-dictionary'
import { Transform } from 'style-dictionary/types'
import { usesReferences } from 'style-dictionary/utils';
import { hasLightAndDarkModes } from '../filters'

export const modeToLightDark: Transform = {
  name: `modeToLightDark`,
  type: `value`,
  transitive: true,
  filter: hasLightAndDarkModes(),
  transform: (token: TransformedToken) => {
    const light = token.$extensions.mode.light
    const dark = token.$extensions.mode.dark
    console.log(`[modeToLightDark] Transforming token ${token.name}`)
    return `light-dark(${light}, ${dark})`
  },
}
