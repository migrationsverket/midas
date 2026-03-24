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

### 🐳 Docker (Rekommenderat)

Det snabbaste sättet att komma igång - inga lokala beroenden krävs.

```bash
docker compose up -d
```

Detta startar:

- **Storybook** på http://localhost:4400
- **Dokumentation** på http://localhost:3000
- **Playground** på http://localhost:4200

> 💡 Första uppstarten tar några minuter. Följ processen med `docker compose logs -f`

### 💻 Lokal installation

Kräver Node.js `^24` och [Nx](https://nx.dev).

```bash
npm install --global nx@latest
npm install
nx serve storybook
```

## 📦 Paket

| Paket                                                                                    | Version                                                                                                                       | Beskrivning                  |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| [@midas-ds/components](https://www.npmjs.com/package/@midas-ds/components)               | [![npm](https://img.shields.io/npm/v/@midas-ds/components)](https://www.npmjs.com/package/@midas-ds/components)               | React-komponenter            |
| [@midas-ds/theme](https://www.npmjs.com/package/@midas-ds/theme)                         | [![npm](https://img.shields.io/npm/v/@midas-ds/theme)](https://www.npmjs.com/package/@midas-ds/theme)                         | Design tokens och CSS        |
| [@midas-ds/datepicker-styles](https://www.npmjs.com/package/@midas-ds/datepicker-styles) | [![npm](https://img.shields.io/npm/v/@midas-ds/datepicker-styles)](https://www.npmjs.com/package/@midas-ds/datepicker-styles) | Styling för react-datepicker |
| [@midas-ds/select-styles](https://www.npmjs.com/package/@midas-ds/select-styles)         | [![npm](https://img.shields.io/npm/v/@midas-ds/select-styles)](https://www.npmjs.com/package/@midas-ds/select-styles)         | Styling för react-select     |
| [@midas-ds/table-styles](https://www.npmjs.com/package/@midas-ds/table-styles)           | [![npm](https://img.shields.io/npm/v/@midas-ds/table-styles)](https://www.npmjs.com/package/@midas-ds/table-styles)           | Styling för TanStack Table   |

## 🤝 Bidra

Vi välkomnar bidrag! Läs vår [guide för att bidra](https://designsystem.migrationsverket.se/get-started/contribute/) för att komma igång.

## 📄 Licens

[MIT](LICENSE)
