import { addons } from '@storybook/manager-api'
import {
  customLightTheme,
  customDarkTheme,
  getPreferredColorScheme,
} from './custom-theme'
import { version } from '../package.json'
import { API_HashEntry } from '@storybook/core/types'

addons.setConfig({
  theme:
    getPreferredColorScheme() === 'dark' ? customDarkTheme : customLightTheme,
  sidebar: {
    showRoots: true,
    renderLabel: (item: API_HashEntry) => {
      if (item.name === 'Components') {
        return `Components – v.${version}`
      }

      return item.name
    },
  },
})
