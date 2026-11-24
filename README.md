[![NX Release](https://img.shields.io/github/actions/workflow/status/migrationsverket/midas/release.yml?logo=nx&label=NX%20Release)](https://github.com/migrationsverket/midas/actions/workflows/release.yml)
[![Publish Docs](https://img.shields.io/github/actions/workflow/status/migrationsverket/midas/publish-docs.yml?logo=docusaurus&label=Publish%20Docs)](https://github.com/migrationsverket/midas/actions/workflows/publish-docs.yml)
[![PR Checks](https://github.com/migrationsverket/midas/actions/workflows/pr-checks.yml/badge.svg)](https://github.com/migrationsverket/midas/actions/workflows/pr-checks.yml)
[![Visual Testing](https://img.shields.io/github/actions/workflow/status/migrationsverket/midas/visual-testing.yml?logo=storybook&label=Visual%20Testing)](https://github.com/migrationsverket/midas/actions/workflows/visual-testing.yml)
[![npm - theme](https://img.shields.io/npm/v/@midas-ds/theme?logo=npm&label=Theme)](https://www.npmjs.com/package/@midas-ds/theme)
[![npm - components](https://img.shields.io/npm/v/@midas-ds/components?logo=npm&label=Components)](https://www.npmjs.com/package/@midas-ds/components)

# Midas

Midas är Migrationsverkets designsystem för att skapa användarvänliga, tillgängliga och enhetliga tjänster och produkter. Det innehåller designkomponenter, kod och riktlinjer som underlättar utveckling och design.

📚 **Dokumentation:** [https://designsystem.migrationsverket.se](https://designsystem.migrationsverket.se)

## 🚀 Kom igång

Kräver Node.js 24.

```bash
npm ci
npx playwright install chromium
npx nx serve storybook
```

Mer om utvecklingsmiljön finns i [bidragsguiden](https://designsystem.migrationsverket.se/get-started/contribute/coding/).

## 📦 Paket

| Paket                                                                                    | Version                                                                                                                       | Beskrivning                  |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [@midas-ds/components](https://www.npmjs.com/package/@midas-ds/components)               | [![npm](https://img.shields.io/npm/v/@midas-ds/components)](https://www.npmjs.com/package/@midas-ds/components)               | React-komponenter            |
| [@midas-ds/layout](https://www.npmjs.com/package/@midas-ds/layout)                       | [![npm](https://img.shields.io/npm/v/@midas-ds/layout)](https://www.npmjs.com/package/@midas-ds/layout)                       | Layoutkomponenter för React  |
| [@midas-ds/theme](https://www.npmjs.com/package/@midas-ds/theme)                         | [![npm](https://img.shields.io/npm/v/@midas-ds/theme)](https://www.npmjs.com/package/@midas-ds/theme)                         | Design tokens och CSS        |
| [@midas-ds/datepicker-styles](https://www.npmjs.com/package/@midas-ds/datepicker-styles) | [![npm](https://img.shields.io/npm/v/@midas-ds/datepicker-styles)](https://www.npmjs.com/package/@midas-ds/datepicker-styles) | Styling för react-datepicker |
| [@midas-ds/select-styles](https://www.npmjs.com/package/@midas-ds/select-styles)         | [![npm](https://img.shields.io/npm/v/@midas-ds/select-styles)](https://www.npmjs.com/package/@midas-ds/select-styles)         | Styling för react-select     |
| [@midas-ds/table-styles](https://www.npmjs.com/package/@midas-ds/table-styles)           | [![npm](https://img.shields.io/npm/v/@midas-ds/table-styles)](https://www.npmjs.com/package/@midas-ds/table-styles)           | Styling för TanStack Table   |

## 🤝 Bidra

Vi välkomnar bidrag av alla slag: buggar, idéer, kod och dokumentation.

- 🐛 **Hittat en bugg eller har ett förslag?** Öppna ett [Issue](https://github.com/migrationsverket/midas/issues/new/choose)
- 💻 **Bidra med kod?** Klona repot, skapa en branch och öppna en Pull Request

Läs vår fullständiga [bidragsguide](https://designsystem.migrationsverket.se/get-started/contribute/) för mer information.

## 📄 Licens

[MIT](LICENSE)
