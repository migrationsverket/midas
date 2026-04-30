import { addons } from 'storybook/manager-api'
import {
  customLightTheme,
  customDarkTheme,
  getPreferredColorScheme,
} from './custom-theme'
import { version as componentsVersion } from '../../../packages/components/package.json'
import { version as layoutVersion } from '../../../packages/layout/package.json'

addons.setConfig({
  theme:
    getPreferredColorScheme() === 'dark' ? customDarkTheme : customLightTheme,
  sidebar: {
    showRoots: true,
    renderLabel: ({ name, depth }) => {
      if (depth !== 0) {
        return name
      }

      if (name === 'Components') {
        return `${name} - v.${componentsVersion}`
      }

      if (name === 'Layout') {
        return `${name} - v.${layoutVersion}`
      }

      return name
    },
  },
})
