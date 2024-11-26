---
title: Midas har nu öppen källkod
description: Designsystemet har nu öppen källkod och versionshanterat på GitHub. Detta för att vi enklare ska kunna dela med oss av vårt designsystem med andra myndigheter som också gått samma väg.
slug: midas-open-source
hide_table_of_contents: true
---

Designsystemet har nu öppen källkod och versionshanterat på GitHub. Detta för att vi enklare ska kunna dela med oss av vårt designsystem med andra myndigheter som också gått samma väg.

<!-- truncate -->

## Vad innebär det för mig?

De "gamla" komponenterna som hostades internt på verket hade namespacet @mvds, de nya har @midas-ds. Gör en search-and-replace i ditt projekt och kör `npm install`.

```bash npm2yarn
npm install @midas-ds/komponentnamn
```

## Finns det några breaking changes?

1. Komponenten `Link` har bytt namn till det mer passande namnet `LinkButton` för att ge plats för en vanlig länk. Det finns nu även en guide för när man ska använda `Button`, `LinkButton` respektive `Link`.

## Finns det något annat nytt?

Ja det finns nya komponenter. Dessa publiceras endast i nya repot för att underlätta underhåll. Dessa är:

1. [Breadcrumbs](/components/breadcrumbs)
2. [DatePicker](/components/date-picker)
3. [Link](/components/link)
4. [SearchField](/components/search-field)
5. [Spinner](/components/spinner)
6. [Tabs](/components/tabs)

## Från Stitches till CSS Modules

Hela komponentbiblioteket är också omskrivet. Tidigare byggdes komponenter upp med hjälp av Stitches. Detta är sedan tidigare deprecated och underhålls ej. Numera byggs komponenterna upp med hjälp av CSS Modules vilket är helt inbyggt i React.
