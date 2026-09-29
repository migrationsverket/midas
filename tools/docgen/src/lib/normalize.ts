/**
 * TypeScript prints union members in type-creation order, which depends on
 * which other files are part of the program and in what order they're checked.
 * Top-level unions (a prop's type, a member's type) are sorted so the order
 * in the prop tables doesn't shift when unrelated components change.
 *
 * Unions nested deeper, e.g. in a callback's parameters, keep TypeScript's
 * order. That's still deterministic, because a package is always generated
 * as a whole from the same program, also in watch mode.
 */

const OPENING = new Set(['(', '[', '{', '<'])
const CLOSING = new Set([')', ']', '}', '>'])
const LAST = ['null', 'undefined']

/** Code-point order, so the result doesn't depend on the machine's locale */
export const compareStrings = (a: string, b: string) =>
  a < b ? -1 : a > b ? 1 : 0

/** `null` and `undefined` go last, everything else in code-point order */
export const compareUnionMembers = (a: string, b: string) =>
  LAST.indexOf(a) - LAST.indexOf(b) || compareStrings(a, b)

/**
 * Splits `A | (B | C) | D` into `['A', '(B | C)', 'D']`.
 *
 * Function and conditional types are returned whole: in `(v: T) => A | B` or
 * `T extends U ? A | B : C` the top-level `|` belongs to the return type or a
 * branch, not to a union of the whole type.
 */
export function splitTopLevelUnion(type: string): string[] {
  const parts: string[] = []
  let depth = 0
  let quote: string | null = null
  let start = 0

  for (let i = 0; i < type.length; i++) {
    const char = type[i]

    if (quote) {
      if (char === '\\') i++
      else if (char === quote) quote = null
      continue
    }

    if (
      depth === 0 &&
      (type.startsWith('=>', i) || type.startsWith(' extends ', i))
    )
      return [type]

    if (char === '"' || char === "'" || char === '`') quote = char
    else if (OPENING.has(char)) depth++
    // The `>` in an arrow function (`=>`) doesn't close a generic
    else if (CLOSING.has(char) && !(char === '>' && type[i - 1] === '='))
      depth--
    else if (depth === 0 && type.startsWith(' | ', i)) {
      parts.push(type.slice(start, i))
      start = i + 3
      i += 2
    }
  }

  parts.push(type.slice(start))
  return parts
}

/**
 * Sorts the top-level members of a union type string. Non-union strings are
 * returned as is. `dropUndefined` removes a top-level `undefined` member, for
 * optional props where it's implied.
 */
export function normalizeUnion(type: string, dropUndefined = false): string {
  let parts = splitTopLevelUnion(type)
  if (parts.length < 2) return type
  if (dropUndefined) parts = parts.filter(part => part !== 'undefined')
  return parts.sort(compareUnionMembers).join(' | ')
}
