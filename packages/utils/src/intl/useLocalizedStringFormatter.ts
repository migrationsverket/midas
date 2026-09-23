/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {
  LocalizedString,
  LocalizedStringDictionary,
  LocalizedStringFormatter,
  LocalizedStrings,
} from '@internationalized/string'
import { useMemo } from 'react'
import { useLocale, I18nProvider } from 'react-aria-components'

const DEFAULT_LANGUAGE = 'sv'

const cache = new WeakMap()
function getCachedDictionary<K extends string, T extends LocalizedString>(
  strings: LocalizedStrings<K, T>,
): LocalizedStringDictionary<K, T> {
  let dictionary = cache.get(strings)
  if (!dictionary) {
    dictionary = new LocalizedStringDictionary(strings, DEFAULT_LANGUAGE)
    cache.set(strings, dictionary)
  }

  return dictionary
}

/**
 * Returns a cached LocalizedStringDictionary for the given strings.
 */
export function useLocalizedStringDictionary<
  K extends string = string,
  T extends LocalizedString = string,
>(
  strings: LocalizedStrings<K, T>,
  packageName?: string,
): LocalizedStringDictionary<K, T> {
  return (
    (packageName &&
      LocalizedStringDictionary.getGlobalDictionaryForPackage(packageName)) ||
    getCachedDictionary(strings)
  )
}

/**
 * Provides localized string formatting for the current locale. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers. Automatically updates when the locale changes.
 * @param strings - A mapping of languages to localized strings by key.
 */
export function useLocalizedStringFormatter<
  K extends string = string,
  T extends LocalizedString = string,
>(
  strings: LocalizedStrings<K, T>,
  packageName?: string,
): LocalizedStringFormatter<K, T> {
  if (
    !strings ||
    typeof strings !== 'object' ||
    !(DEFAULT_LANGUAGE in strings)
  ) {
    throw new Error(
      `useLocalizedStringFormatter: Default language "${DEFAULT_LANGUAGE}" must be defined in dictionary.`,
    )
  }

  const { locale } = useLocale()
  const dictionary = useLocalizedStringDictionary(strings, packageName)

  return useMemo(
    () => new LocalizedStringFormatter(locale, dictionary),
    [dictionary, locale],
  )
}

export { I18nProvider }
