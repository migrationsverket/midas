/**
 * A utility for making visual assertions in Storybook play tests based on the browsers "prefers-colors-scheme" setting
 */
export declare const lightDark: (light: string, dark: string, mode?: "light" | "dark") => string;
/**
 * Convert a CSS hex color to CSS rgb color
 * ```
 * '#f2f2f2' => 'rgb(242, 242, 242)'
 * ```
 */
export declare const hexToRgb: (hex: string) => string;
