import type { TestRunnerConfig } from '@storybook/test-runner'

const config: TestRunnerConfig = {
  async postVisit(page, context) {
    await page.$eval('#dark', el => {
      console.log(el)
      el.style.backgroundColor = 'black'
    })
  },
}

export default config
