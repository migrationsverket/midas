import { LocalizedStrings } from '@internationalized/message';
export type FormatMessage = (key: string, variables?: {
    [key: string]: any;
}) => string;
/**
 * Handles formatting ICU Message strings to create localized strings for the current locale.
 * Automatically updates when the locale changes, and handles caching of messages for performance.
 * @param strings - A mapping of languages to strings by key.
 * @deprecated since v7.0.0 - use useLocalizedStringFormatter instead.
 */
export declare function useMessageFormatter(strings: LocalizedStrings): FormatMessage;
