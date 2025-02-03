# Utveckla

## Förutsättningar

- Det finns en tydlig UX-specifikation och ett tillhörande prioriterat jira-ärende för komponenten som ska byggas
- En fungerande [lokal miljö](local-setup.md)

## Styleguide

- Som standard, exportera en komponent per fil
- React-filnamn i `PascalCase` som motsvarar komponenter
- Använd barrel-files i stil med `index.ts` för att exportera hela mappar
- Formatera enligt [Prettier](https://prettier.io/) standard

## Importera headless-bibliotek

Komponenter ska i första hand byggas på [React Aria](https://react-spectrum.adobe.com/react-aria/getting-started.html)

:::info
Alla avsteg från hur headless-biblioteken rekommenderar att komponenterna byggs upp bör undvikas. Målet är att minimera
risken att vi introducerar komplexitet eller gör avsteg från _best practice_ genom för mycket hemmasnickrande.
:::

## Skriv enhetstester

Ur perspektivet att tillgänglighet är ett av designsystemets viktigaste fokusområden är det viktigt att vi regressionstestar.
Använd [axe-core](https://github.com/dequelabs/axe-core) för att fånga upp problem innan de blir buggar. Det finns inget
specificerat mål någon viss code coverage men ta inspiration från headless-biblioteken. Grundläggande funktion av komponenter
bör också täckas av enhetstester.

## Skapa stories

I utgångspunkt bör alla states finnas representerade som stories i Storybook. Storybook är i första hand ett internt verktyg för
UX och utvecklare i designsystemet.

## Dokumentation

Komponenten dokumenteras på dokumentationswebben med lämpliga exempel, beskrivning och properties. Normalt plockas
properties upp från komponenten via [react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript)
men om det har införts nya types eller interfaces kan de behöva specificeras enligt [JSDoc](https://jsdoc.app/).

