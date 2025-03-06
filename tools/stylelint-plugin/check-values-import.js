const stylelint = require('stylelint')
const fs = require('fs')
const path = require('path')

const ruleName = 'plugin/check-values-import'
const messages = stylelint.utils.ruleMessages(ruleName, {
  missingImport: value => `Missing @value import for "${value}"`,
  invalidImport: value => `"${value}" is not a valid token`,
})

const meta = {
  fixable: false,
}

const ruleFunction = (primaryOption, secondaryOptionObject) => {
  return (postcssRoot, postcssResult) => {
    const validOptions = stylelint.utils.validateOptions(
      postcssResult,
      ruleName,
      {
        actual: primaryOption,
      },
    )

    if (!validOptions) {
      return
    }

    const importedValues = new Set()
    const usedValues = new Map()
    const tokensFilePath = path.resolve(
      __dirname,
      '../../packages/components/src/theme/tokens.css',
    )
    const tokensContent = fs.readFileSync(tokensFilePath, 'utf-8')
    const tokenValues = new Set()

    tokensContent.replace(/@value\s+(--[\w-]+):/g, (_, value) => {
      tokenValues.add(value)
    })

    let valueAtRule = null

    postcssRoot.walkAtRules('value', atRule => {
      const matches = atRule.params.match(
        /(--[\w-]+(?:,\s*--[\w-]+)*)\s+from\s+tokens/,
      )
      if (matches) {
        valueAtRule = atRule
        matches[1].split(',').forEach(value => {
          importedValues.add(value.trim())
        })
        // Report invalid imports
        matches[1].split(',').forEach(value => {
          if (!tokenValues.has(value.trim())) {
            stylelint.utils.report({
              ruleName,
              result: postcssResult,
              message: messages.invalidImport(value.trim()),
              node: atRule,
            })
          }
        })
      }
    })

    postcssRoot.walkDecls(decl => {
      const matches = decl.value.match(/(--[\w-]+)/g)
      if (matches) {
        matches.forEach(value => {
          // Ignore variables inside var() function
          if (!decl.value.includes(`var(${value})`)) {
            usedValues.set(value, decl)
          }
        })
      }
    })

    // Report missing imports and add fixes
    usedValues.forEach((decl, value) => {
      if (!importedValues.has(value)) {
        stylelint.utils.report({
          ruleName,
          result: postcssResult,
          message: messages.missingImport(value),
          node: decl,
          word: value,
        })
      }
    })
  }
}

ruleFunction.ruleName = ruleName
ruleFunction.messages = messages
ruleFunction.meta = meta

module.exports = stylelint.createPlugin(ruleName, ruleFunction)
