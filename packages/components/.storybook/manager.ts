import { addons } from 'storybook/manager-api'
import {
  customLightTheme,
  customDarkTheme,
  getPreferredColorScheme,
} from './custom-theme'
import { version } from '../package.json'

addons.setConfig({
  theme:
    getPreferredColorScheme() === 'dark' ? customDarkTheme : customLightTheme,
  sidebar: {
    showRoots: true,
    renderLabel: item => {
      if (item.name === 'Components') {
        return `Components – v.${version}`
      }

      return item.name
    },
  },
})
