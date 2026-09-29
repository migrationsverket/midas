import { describe, expect, it } from 'vitest'
import { normalizeUnion, splitTopLevelUnion } from './normalize.js'

describe('splitTopLevelUnion', () => {
  it('splits top-level members only', () => {
    expect(
      splitTopLevelUnion('"a" | (B | C) | Array<D | E> | { x: F | G }'),
    ).toEqual(['"a"', '(B | C)', 'Array<D | E>', '{ x: F | G }'])
  })

  it('ignores pipes inside string literals', () => {
    expect(splitTopLevelUnion(`"a | b" | 'c | d' | \`e | f\``)).toEqual([
      '"a | b"',
      "'c | d'",
      '`e | f`',
    ])
  })

  it('keeps arrow functions inside parentheses intact', () => {
    expect(splitTopLevelUnion('((value: A | B) => void) | undefined')).toEqual([
      '((value: A | B) => void)',
      'undefined',
    ])
  })

  it("doesn't split a function whose return type is a union", () => {
    expect(splitTopLevelUnion('(value: string) => "a" | "b"')).toEqual([
      '(value: string) => "a" | "b"',
    ])
  })

  it("doesn't split conditional types", () => {
    expect(splitTopLevelUnion('T extends string ? "a" | "b" : "c"')).toEqual([
      'T extends string ? "a" | "b" : "c"',
    ])
  })
})

describe('normalizeUnion', () => {
  it('sorts members, with null and undefined last', () => {
    expect(normalizeUnion('undefined | "top" | null | "bottom"')).toBe(
      '"bottom" | "top" | null | undefined',
    )
  })

  it('gives the same result regardless of input order', () => {
    expect(normalizeUnion('"menu" | "listbox" | boolean')).toBe(
      normalizeUnion('boolean | "listbox" | "menu"'),
    )
  })

  it('drops a top-level undefined when asked', () => {
    expect(normalizeUnion('"a" | undefined | "b"', true)).toBe('"a" | "b"')
    expect(normalizeUnion('(() => A | undefined) | "b"', true)).toBe(
      '"b" | (() => A | undefined)',
    )
  })

  it('returns non-unions unchanged', () => {
    expect(normalizeUnion('ReactNode')).toBe('ReactNode')
    expect(normalizeUnion('(event: PressEvent) => void')).toBe(
      '(event: PressEvent) => void',
    )
  })
})
