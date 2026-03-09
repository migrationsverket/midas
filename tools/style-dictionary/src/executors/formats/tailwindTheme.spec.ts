import { TransformedToken } from 'style-dictionary'
import { describe, expect, it } from 'vitest'
import { tailwindTheme } from './tailwindTheme'

const makeToken = (name: string, value: string, description?: string): TransformedToken => ({
  name,
  value,
  $value: value,
  original: { $value: value, $description: description },
  $description: description,
  path: name.split('-'),
  filePath: 'tokens/test.json',
  isSource: true,
})

const runFormat = async (tokens: TransformedToken[]) => {
  const result = await tailwindTheme.format({
    dictionary: {
      allTokens: tokens,
      tokens: {},
      tokenMap: new Map(),
    },
    file: {},
    options: { outputReferences: false },
    platform: {},
  } as any)
  return result
}

describe('tailwindTheme format', () => {
  it('includes regular tokens', async () => {
    const output = await runFormat([
      makeToken('color-blue-100', '#0055cc'),
      makeToken('space-medium', '1rem'),
    ])
    expect(output).toContain('--color-blue-100: #0055cc')
    expect(output).toContain('--space-medium: 1rem')
  })

  it('excludes deprecated tokens', async () => {
    const output = await runFormat([
      makeToken('color-blue-100', '#0055cc'),
      makeToken('spacing-small', '0.5rem', '@deprecated Use space.small instead'),
    ])
    expect(output).toContain('--color-blue-100')
    expect(output).not.toContain('--spacing-small')
  })

  it('excludes numeric spacing tokens that conflict with Tailwind scale', async () => {
    const output = await runFormat([
      makeToken('color-blue-100', '#0055cc'),
      makeToken('spacing-30', '0.5rem'),
      makeToken('spacing-90', '2rem'),
    ])
    expect(output).not.toContain('--spacing-30')
    expect(output).not.toContain('--spacing-90')
  })

  it('keeps named spacing tokens', async () => {
    const output = await runFormat([
      makeToken('spacing-xsmall', '0.25rem'),
      makeToken('spacing-small', '0.5rem'),
      makeToken('spacing-medium', '1rem'),
      makeToken('spacing-large', '1.5rem'),
      makeToken('spacing-xlarge', '2rem'),
    ])
    expect(output).toContain('--spacing-xsmall')
    expect(output).toContain('--spacing-small')
    expect(output).toContain('--spacing-medium')
    expect(output).toContain('--spacing-large')
    expect(output).toContain('--spacing-xlarge')
  })

  it('wraps output in @theme block', async () => {
    const output = await runFormat([makeToken('color-blue-100', '#0055cc')])
    expect(output).toMatch(/@theme \{[\s\S]+\}/)
  })
})
