import { defineConfig } from '@terrazzo/cli';
import css from '@terrazzo/plugin-css';
import js from '@terrazzo/plugin-js';
import tailwind from '@terrazzo/plugin-tailwind';
import fg from 'fast-glob';
const tokenFiles = fg.sync('./packages/theme/tokens/*.json');
export default defineConfig({
  tokens: tokenFiles,
  plugins: [
    css({
      filename: 'tokens.css',
      variableName: (token) => `--midas-${token.id.replace(/\./g, "-")}`,
      baseSelector: ":root",
      baseScheme: "light dark",
      modeSelectors: [
        {
          mode: "light",
          selectors: [
            "@media (prefers-color-scheme: light)",
            '[data-mode="light"]',
          ],
          scheme: "light", // Optional: set color-scheme for this mode
        },
        {
          mode: "dark",
          selectors: [
            "@media (prefers-color-scheme: dark)",
            '[data-mode="dark"]',
          ],
          scheme: "dark", // Optional: set color-scheme for this mode
        },
        { mode: "mobile", selectors: ["@media (width < 600px)"] },
        { mode: "desktop", selectors: ["@media (width >= 600px)"] },
        {
          mode: "reduced-motion",
          selectors: ["@media (prefers-reduced-motion)"],
        },
      ],
    }),
    js(),
    // tailwind(),
  ],
  outDir: './dist/',
  lint: {
    /** @see https://terrazzo.app/docs/cli/lint */
  },
});
