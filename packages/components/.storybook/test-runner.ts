import type { TestRunnerConfig } from '@storybook/test-runner'
import { getStoryContext } from '@storybook/test-runner'
import { injectAxe, checkA11y } from 'axe-playwright'

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await page.emulateMedia({
      colorScheme: (process.env.COLOR_SCHEME as 'light' | 'dark') || null,
    })
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
