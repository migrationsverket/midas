import type { TestRunnerConfig } from '@storybook/test-runner'
import { getStoryContext } from '@storybook/test-runner'
import { injectAxe, checkA11y } from 'axe-playwright'

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  // prepare method might change in the future: https://github.com/storybookjs/test-runner/blob/next/src/setup-page.ts#L12
  async prepare({ page, browserContext, testRunnerConfig }) {
    const targetURL = process.env.TARGET_URL
    const iframeURL = new URL('iframe.html', targetURL).toString()

    if (testRunnerConfig?.getHttpHeaders) {
      const headers = await testRunnerConfig.getHttpHeaders(iframeURL)
      await browserContext.setExtraHTTPHeaders(headers)
    }

    await page.goto(iframeURL, { waitUntil: 'load' }).catch(err => {
      if (err.message?.includes('ERR_CONNECTION_REFUSED')) {
        const errorMessage = `Could not access the Storybook instance at ${targetURL}. Are you sure it's running?\n\n${err.message}`
        throw new Error(errorMessage)
      }

      throw err
    })

    if (process.env.COLOR_SCHEME) {
      await page.emulateMedia({
        colorScheme: process.env.COLOR_SCHEME as 'light' | 'dark',
      })
    }
  },
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context)

    // Skip uncompleted stories.
    if (storyContext.parameters?.a11y?.test === 'todo') {
      return
    }

    await checkA11y(page, '#storybook-root', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      verbose: false,
      axeOptions: {
        ...storyContext?.parameters?.a11y?.options,
      },
    })
  },
}

export default config
