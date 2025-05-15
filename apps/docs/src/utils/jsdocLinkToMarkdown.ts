export const jsdocLinkToMarkdown = (jsdocLink: string) => {
  if (!jsdocLink.includes('@link')) {
    return jsdocLink
  }
  const textBefore = jsdocLink
    .substring(0, jsdocLink.indexOf('{@link'))
    .replace(/@\S*/g, '')
  const url = jsdocLink.substring(
    jsdocLink.indexOf('http'),
    jsdocLink.lastIndexOf('/'),
  )
  const linkText = jsdocLink.substring(
    jsdocLink.lastIndexOf('/') + 2,
    jsdocLink.lastIndexOf('}'),
  )
  return `${textBefore}. See [${linkText}](${url}).`
}
