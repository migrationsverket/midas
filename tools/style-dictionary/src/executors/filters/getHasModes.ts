import { TransformedToken } from 'style-dictionary/types'
/**
 * @name getHasModes
 * @type filter
 * @description only returns tokens of that have $extensions -> modes
 * @returns filter function
 */
export const getHasModes =
  () =>
  (token: TransformedToken): boolean => {
    if (token === undefined) return false
    if (token.hasOwnProperty('$extensions')) {
      console.log('has extensions')
      if (token['$extensions'].hasOwnProperty('mode')) {
        console.log('has mode')
        if (
          'light' in token['$extensions']['mode'] &&
          'dark' in token['$extensions']['mode']
        ) {
          console.log('has light and dark mode')
          return true
        }
      }
    }
  }
