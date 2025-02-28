import type { TestRunnerConfig } from '@storybook/test-runner'
import { getStoryContext } from '@storybook/test-runner'

import { injectAxe, checkA11y } from 'axe-playwright'

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page)
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context)

    // Do not run a11y tests on disabled stories.
    if (storyContext.parameters?.a11y?.disable) {
      return
    }

    await checkA11y(page, 'body', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      axeOptions: {
        ...storyContext?.parameters?.a11y?.options,
        rules: {
          // axe finds a a11y violation in almost every story that storybook UI don't complain about
          region: { enabled: false },
          ...storyContext?.parameters?.a11y?.options?.rules,
        },
      },
    })
  },
}

export default config
