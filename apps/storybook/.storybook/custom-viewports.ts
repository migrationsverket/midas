import { tokenDictionary } from '@midas-ds/theme'
const { windowSizes } = tokenDictionary

export const customViewports = {
  smallest: { name: 'Smallest', styles: { width: '320px', height: '568px' } },
  small: {
    name: 'Small',
    styles: {
      width: windowSizes.sm.$value, // 480px
      height: '100%',
    },
  },
  medium: {
    name: 'Medium',
    styles: {
      width: windowSizes.md.$value, // 768px
      height: '100%',
    },
  },
  large: {
    name: 'Large',
    styles: {
      width: windowSizes.lg.$value, // 1024px
      height: '100%',
    },
  },
  xLarge: {
    name: 'X-Large',
    styles: {
      width: windowSizes.xl.$value, // 1280px
      height: '100%',
    },
  },
}
