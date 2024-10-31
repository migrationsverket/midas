# Lokal setup

## Quickstart

### Dependencies

- Klona repot `git clone git@github.com:migrationsverket/midas.git`
- Node ≥20 är ett krav, använd [NVM](https://github.com/nvm-sh/nvm) om du behöver växla mellan olika versioner.
- [Python](https://www.python.org/downloads/) behöver vara installerat för att installera nx-dependencies. Python ingår i Ubuntu så om du kör WSL funkar det lika bra.
- [Nx](https://nx.dev) installerat globalt `npm install --global nx@latest`
- Se till att rekomenderade extensions och inställningar för VS Code är tillämpade. Se till att du har motsvarande om du kör en annan IDE.

```bash
npm install
```

### Starta DocWeb

Starta dokumentationen:

```bash
nx serve docs
```

### Starta Storybook

Starta storybook:

```bash
nx run ui:storybook
```

### Starta Playground-appen (React)

React:

```bash
nx serve playground
```

Vi har även en remix och en next.js-app uppsatta - se NX

## Komponentbibliotek

Komponenterna är separata och publicerbara paket som ligger under `/packages`. Alla komponenter exporteras som separata npm-paket.

- Kör enhetstester för alla komponenter

```bash
nx run-many -t test
```

## Dokumentationswebb

Dokumentationswebben ligger i `apps/docs` och är byggd med [Docusaurus](https://docusaurus.io/).

- Kör dokumentationen lokalt:

```bash
nx serve docs
```

- Hämta hem senaste publicerade info från NPM:

```
nx run docs:generate-info
```

## Bygga och publicera

---

### Bygg komponenter

Alla komponenter och appar kan byggas med:

```shell
nx build <namn>
```

och allt som byggs hamnar i `/dist`. Om du vill provköra går det att zippa med `npm pack` och installera i annan app med `npm install [sökväg]`

### Bygg Storybook

Bygg Storybook för produktion:

```
nx build-storybook ui
```

För att testa att bygget funkar lokalt:

```
npx http-server ./dist/storybook/storybook-host
```

### Bygg dokumentation

```
nx build docs
```

### Publicera komponenter

Instruktioner för att publicera komponentbiblioteket hittar du på sidan [publicera komponenter](publish).
Designsystemet använder Nx för versionshantering och
publicering. Versionshantering bygger på Conventional Commits, se [instruktioner för git](git) och det är ett
medvetet val att inte tvinga fram nya versioner eller publicering i byggkedjan.

### Nx Monorepo

Nx har bra funktioner för att hålla koll på byggen och tester samt beroenden mellan olika bibliotek och appar. Det går att köra multipla processer via
`nx run-many -t build,lint,test`. I övrigt hänvisas till Nx [officiella dokumentation](https://nx.dev/getting-started/intro).
