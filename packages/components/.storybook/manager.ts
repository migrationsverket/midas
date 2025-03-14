import { addons } from '@storybook/manager-api'
import {
  customLightTheme,
  customDarkTheme,
  getPreferredColorScheme,
} from './custom-theme'

addons.setConfig({
  theme:
    getPreferredColorScheme() === 'dark' ? customDarkTheme : customLightTheme,
})
