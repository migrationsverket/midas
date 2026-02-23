export const jsdocLinkToMarkdown = (comment: string): string =>
  // {@link URL|Text} or {@link URL Text} format (JSDoc style)
  comment
    .replace(
      /\{@link\s+([^|\s}]+)\s*\|?\s*([^}]+)\}/g,
      (match, url, text) => `[${text.trim()}](${url})`,
    )
    // Replace @see with "See " at the beginning of lines
    .replace(/^\s*@see\s+/gm, 'See ')
    // Remove @link tags from the beginning of lines (but keep the markdown link)
    .replace(/^\s*@link\s+/gm, '')
    // Remove any extra @link tags that might be inline
    .replace(/\s*@link\s+/g, ' ')
