import { TransformedToken } from 'style-dictionary/types'

/**
 * @description Returns only tokens that have both light and dark modes defined under `$extensions.mode`
 */
export const hasLightAndDarkModes =
  () =>
  (token: TransformedToken): boolean => {
    const modes = token?.$extensions?.mode
    return Boolean(modes?.light && modes?.dark)
  }
