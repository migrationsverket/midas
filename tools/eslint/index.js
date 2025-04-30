const handleDeprecatedComments = require('./handle-deprecated-comments')

const plugin = {
  rules: { 'handle-deprecated-comments': handleDeprecatedComments },
}

module.exports = plugin
