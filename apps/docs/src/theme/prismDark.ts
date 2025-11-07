import { themes, type PrismTheme } from 'prism-react-renderer'

const baseTheme = themes.oceanicNext

export default {
  ...baseTheme,
  plain: {
    ...baseTheme.plain,
    backgroundColor: '#202025',
  },
} satisfies PrismTheme
