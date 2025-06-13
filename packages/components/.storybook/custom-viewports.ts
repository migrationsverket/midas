import { windowSizes } from '../src/theme'

export const customViewports = {
  smallest: { name: 'Smallest', styles: { width: '320px', height: '568px' } },
  'x-small': {
    name: 'X-small',
    styles: {
      width: `${windowSizes.sm - 1}px`, // 479px
      height: '100%',
    },
  },
  small: {
    name: 'Small',
    styles: {
      width: `${windowSizes.sm}px`, // 480px
      height: '100%',
    },
  },
  medium: {
    name: 'Medium',
    styles: {
      width: `${windowSizes.md}px`, // 768px
      height: '100%',
    },
  },
  large: {
    name: 'Large',
    styles: {
      width: `${windowSizes.lg}px`, // 1024px
      height: '100%',
    },
  },
  xLarge: {
    name: 'X-Large',
    styles: {
      width: `${windowSizes.xl}px`, // 1280px
      height: '100%',
    },
  },
}
