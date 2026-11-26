/**
 * Puts children back into the code of a Storybook snippet. Storybook leaves
 * out children that are a function, e.g. the `item => <ListBoxItem />` of a
 * collection, so the snippet doesn't render anything when copied. The
 * children go into the first `<tag />` of the snippet that has none.
 */
export const insertChildren = (code: string, tag: string, children: string) => {
  const lines = code.split('\n')
  const start = lines.findIndex(line =>
    new RegExp(`^\\s*<${tag}(\\s|/>|$)`).test(line),
  )
  if (start === -1) return code

  const indent = lines[start].match(/^\s*/)?.[0] ?? ''
  const body = [
    ...children.split('\n').map(line => `${indent}  ${line}`),
    `${indent}</${tag}>`,
  ]

  if (lines[start].trimEnd().endsWith('/>')) {
    lines.splice(start, 1, lines[start].replace(/\s*\/>\s*$/, '>'), ...body)
    return lines.join('\n')
  }

  // The props are indented deeper than the end of the tag
  for (let i = start + 1; i < lines.length; i++) {
    const depth = lines[i].length - lines[i].trimStart().length
    if (depth > indent.length + 1) continue
    if (lines[i].trim() === '/>') {
      lines.splice(i, 1, `${indent}>`, ...body)
      return lines.join('\n')
    }
    // It has children of its own
    return code
  }
  return code
}

/**
 * Story parameters that put the code of a function as children back into
 * the snippet of `<tag />`, e.g.
 * `childrenSource('Menu', '{item => <MenuItem>{item.name}</MenuItem>}')`
 */
export const childrenSource = (tag: string, children: string) => ({
  docs: {
    source: {
      transform: (code: string) => insertChildren(code, tag, children),
    },
  },
})
