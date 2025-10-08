import { TransformedToken } from 'style-dictionary'
import { Transform } from 'style-dictionary/types'
import { getHasAttribute, getHasAttributeValue, getHasModes } from '../filters'

export const modeToLightDark: Transform = {
  name: `modeToLightDark`,
  type: `value`,
  transitive: true,
  filter: getHasModes(),
  transform: (token: TransformedToken) => {
    console.log(token)
    // return token.$value
    console.log(
      `light-dark(${token.$extensions.mode.light}, ${token.$extensions.mode.dark})`,
    )
    return `light-dark(var(${token.$extensions.mode.light}), var(${token.$extensions.mode.dark}))`
  },
}
