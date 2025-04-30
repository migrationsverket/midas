module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'A hint that the source code exports deprecated features',
    },
  },
  create(context) {
    const version = context?.options?.[0]?.version

    const getSemver = str => str.match(new RegExp(/\d\.\d\.\d/))

    const getMajor = matchArray => parseInt(matchArray[0][0], 10)

    const processComment = comment => {
      if (
        !comment ||
        (comment && !comment.value.includes('@deprecated')) ||
        typeof version === 'undefined'
      ) {
        return
      }

      const currentVersion = getSemver(version)
      const deprecatedVersion = getSemver(comment.value)

      if (currentVersion && deprecatedVersion) {
        const currentMajor = getMajor(currentVersion)
        const deprecatedMajor = getMajor(deprecatedVersion)

        if (deprecatedMajor < currentMajor) {
          return context.report({
            loc: comment.loc,
            message: `You can remove this deprecated code, it has been around since version ${deprecatedMajor}, next major version will be ${currentMajor + 1}`,
            node: null,
          })
        }
        return
      }

      return context.report({
        loc: comment.loc,
        message:
          'Please provide a semantic version to this comment "@deprecated since vn.n.n"',
        node: null,
      })
    }

    return {
      Program() {
        const sourceCode = context.getSourceCode()
        const comments = sourceCode.getAllComments()
        comments.forEach(processComment)
      },
    }
  },
}
