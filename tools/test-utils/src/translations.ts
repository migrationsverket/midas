const REQUIRED_LOCALES = ['en', 'sv']

export type TranslationStrings = Record<string, string>
export type TranslationFile = Record<string, TranslationStrings>

export interface TranslationIssue {
  file: string
  message: string
}

/**
 * Validates a set of `intl/translations.json` files: every file must define
 * all required locales, every locale must define the same set of keys, and
 * no value may be empty.
 */
export function findTranslationIssues(
  files: Record<string, TranslationFile>,
): TranslationIssue[] {
  const issues: TranslationIssue[] = []

  for (const [file, locales] of Object.entries(files)) {
    for (const locale of REQUIRED_LOCALES) {
      if (!locales[locale]) {
        issues.push({ file, message: `missing required locale "${locale}"` })
      }
    }

    const [referenceLocale, ...otherLocales] = Object.keys(locales)
    const referenceKeys = new Set(Object.keys(locales[referenceLocale] ?? {}))

    for (const locale of otherLocales) {
      const keys = new Set(Object.keys(locales[locale]))

      for (const key of referenceKeys) {
        if (!keys.has(key)) {
          issues.push({
            file,
            message: `locale "${locale}" is missing key "${key}" (present in "${referenceLocale}")`,
          })
        }
      }

      for (const key of keys) {
        if (!referenceKeys.has(key)) {
          issues.push({
            file,
            message: `locale "${locale}" has extra key "${key}" not present in "${referenceLocale}"`,
          })
        }
      }
    }

    for (const [locale, strings] of Object.entries(locales)) {
      for (const [key, value] of Object.entries(strings)) {
        if (typeof value !== 'string' || value.trim() === '') {
          issues.push({ file, message: `"${locale}.${key}" is empty` })
        }
      }
    }
  }

  return issues
}
