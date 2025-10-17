import { TransformedToken } from 'style-dictionary'
import { DesignToken, Transform } from 'style-dictionary/types'

export const dimensionToUnit: Transform = {
  name: `dimensionToUnit`,
  type: `value`,
  transitive: true,
  filter: (token: DesignToken) => token.$type === 'dimension',
  transform: (token: TransformedToken) => {
    const raw = (token as any).$value ?? (token as any).value
    if (raw && typeof raw === 'object') {
      const { value, unit } = raw
      return unit ? `${value}${unit}` : `${value}`
    }
    return String(raw ?? '')
  },
}
