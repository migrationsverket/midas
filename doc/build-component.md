---
description: Praktiska tips för att komma igång med att bygga komponenter
---

# Bygg en komponent

## Förutsättningar

- Det finns en tydlig UX-specifikation och ett tillhörande prioriterat jira-ärende för komponenten som ska byggas
- En fungerande [lokal miljö](local-setup)

## Generera boilerplate

- Skapa en ny komponent via Nx:

```shell
nx g @nx/react:library ComponentName --publishable --importPath=@migrationsverket/component-name --bundler=vite --style=css --directory packages/component-name --projectNameAndRootFormat=as-provided
```

- Generera storybook stories med:

```shell
nx g @nx/react:stories
```

- Generera dokumentation via (komponenten måste finnas):

```shell
npm run plop docs
```

## Styleguide

- Som standard, exportera en komponent per fil
- React-filnamn i `PascalCase` som motsvarar komponenter
- Använd barrel-files i stil med `index.js` för att exportera hela mappar
- Formatera enligt [Prettier](https://prettier.io/) standard
- Kör nx format:check --project=komponentnamn för att kontrollera formatering [referens](https://nx.dev/nx-api/nx/documents/format-check)

## Importera headless-bibliotek

Komponenter ska i första hand byggas på [React Aria](https://react-spectrum.adobe.com/react-aria/getting-started.html)
och i andra hand på [Radix](https://www.radix-ui.com/primitives/docs/overview/introduction). Normalt specificeras detta
redan när ärendet skapas.

:::info
Alla avsteg från hur headless-biblioteken rekommenderar att komponenterna byggs upp bör undvikas. Målet är att minimera
risken att vi introducerar komplexitet eller gör avsteg från _best practice_ genom för mycket hemmasnickrande.
:::

## Styling

Applicera styles genom att använda [Stitches](https://stitches.dev/) och använd variabler och [tokens](../../basics/tokens).

:::info[Framtida CSS]
Stitches är [inte under aktiv utveckling](https://github.com/stitchesjs/stitches/discussions/1149#discussioncomment-6223090) sen
Juni 2023 och det beror på ändringar i React. Designsystemet jobbar på att hitta en lämplig ersättare.
:::

## Skriv enhetstester

Ur perspektivet att tillgänglighet är ett av designsystemets viktigaste fokusområden är det viktigt att vi regressionstestar.
Använd [axe-core](https://github.com/dequelabs/axe-core) för att fånga upp problem innan de blir buggar. Det finns inget
specificerat mål någon viss code coverage men ta inspiration från headless-biblioteken. Grundläggande funktion av komponenter
bör också täckas av enhetstester.

## Skapa stories

I utgångspunkt bör alla states finnas representerade i Storybook. Storybook är i första hand ett internt verktyg för
UX och utvecklare i designsystemet.

## Dokumentation

Komponenten dokumenteras på dokumentationswebben med lämpliga exempel, beskrivning och properties. Normalt plockas
properties upp från komponenten via [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript)
men om det har införts nya types eller interfaces kan de behöva specificeras enligt [JSDoc](https://jsdoc.app/).
