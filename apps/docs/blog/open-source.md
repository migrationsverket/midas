---
title: MIDAS går Open Source
description: This is the way.
slug: midas-open-source
authors:
  - name: Wilhelm Hjelm
    title: Frontendutvecklare
tags: [midas]
hide_table_of_contents: true
---

Designsystemet är nu open sourced och versionshanterat på GitHub. Detta för att vi enklare ska kunna dela med oss av vårt designsystem med andra myndigheter som också gått samma väg.

<!-- truncate -->

## Vad innebär det för mig?

De "gamla" komponenterna som hostades internt på verket hade namespacet @midas, de nya har @migrationsverket. Gör en search-and-replace i ditt projekt och kör `npm install`.

```bash npm2yarn
npm install @migrationsverket/komponentnamn
```
