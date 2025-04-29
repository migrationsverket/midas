module.exports = {
  rules: {
    'handle-deprecated-comments': {
      meta: {
        type: 'suggestion',
        docs: {
          description:
            'A hint that the source code exports deprecated features',
        },
      },
      create(context) {
        const sourceCode = context.getSourceCode()

        function processComment(comment) {
          if (comment && comment.value.includes('@deprecated')) {
            context.report({
              loc: comment.loc,
              message: 'Consider removing this code',
              node: null,
            })
          }
        }

        return {
          Program() {
            const comments = sourceCode.getAllComments()
            comments.forEach(processComment)
          },
        }
      },
    },
  },
}
