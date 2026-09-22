import { describe, expect, it } from 'vitest'
import { findTranslationIssues, type TranslationFile } from '@midas-ds/test-utils'

const modules = import.meta.glob<{ default: TranslationFile }>(
  './**/intl/translations.json',
  { eager: true },
)

const files = Object.fromEntries(
  Object.entries(modules).map(([path, mod]) => [path, mod.default]),
)

describe('component translations', () => {
  it('have every required locale, matching keys, and no empty values', () => {
    const issues = findTranslationIssues(files)

    expect(
      issues,
      issues.map(issue => `${issue.file}: ${issue.message}`).join('\n'),
    ).toEqual([])
  })
})
