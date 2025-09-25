import { tokenDictionary } from '@midas-ds/theme'
const { windowSizes } = tokenDictionary

export const customViewports = {
  smallest: { name: 'Smallest', styles: { width: '320px', height: '568px' } },
  'x-small': {
    name: 'X-small',
    styles: {
      width: `${windowSizes.sm.$value - 1}px`, // 479px
      height: '100%',
    },
  },
  small: {
    name: 'Small',
    styles: {
      width: `${windowSizes.sm.$value}px`, // 480px
      height: '100%',
    },
  },
  medium: {
    name: 'Medium',
    styles: {
      width: `${windowSizes.md.$value}px`, // 768px
      height: '100%',
    },
  },
  large: {
    name: 'Large',
    styles: {
      width: `${windowSizes.lg.$value}px`, // 1024px
      height: '100%',
    },
  },
  xLarge: {
    name: 'X-Large',
    styles: {
      width: `${windowSizes.xl.$value}px`, // 1280px
      height: '100%',
    },
  },
}
