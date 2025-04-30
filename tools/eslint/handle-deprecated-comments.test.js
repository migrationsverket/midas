const { RuleTester } = require('eslint')
const rule = require('./handle-deprecated-comments')

const ruleTester = new RuleTester()

ruleTester.run('handle-deprecated-comments', rule, {
  valid: [
    {
      options: [{ version: '8.0.0' }],
      code: '// @deprecated since v8.0.0',
    },
    {
      code: '// @deprecated should pass if no version was configured',
    },
    {
      code: '// any comment',
    },
  ],
  invalid: [
    {
      options: [{ version: '8.0.0' }],
      code: '// @deprecated since v5.0.0',
      errors: [
        'You can remove this deprecated code, it has been around since version 5, next major version will be 9',
      ],
    },
    {
      options: [{ version: '8.2.0' }],
      code: '// @deprecated derp',
      errors: [
        'Please provide a semantic version to this comment "@deprecated since vn.n.n"',
      ],
    },
  ],
})

console.log('All tests passed!')
