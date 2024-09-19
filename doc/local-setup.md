# Lokal setup

## Förutsättningar

---

- Node ≥20 är ett krav, använd [NVM](https://github.com/nvm-sh/nvm) om du behöver växla mellan olika versioner.

- [Python](https://www.python.org/downloads/) behöver vara installerat för att installera nx-dependencies. Python ingår i Ubuntu så om du kör WSL funkar det lika bra.

* Installera [Nx](https://nx.dev) globalt:

```shell
npm install --global nx@latest
```

## Hämta och installera

---

- Klona repot (du behöver SSH-nyckel mot GitHub):

```
git clone git@github.com:migrationsverket/midas.git
```

- Installera dependencies:

```
npm install
```

## Komponentbibliotek

---

Komponenterna är separata och publicerbara paket som ligger under `/packages`. Det finns en app för att testköra kod `nx serve playground` samt [Storybook](https://storybook.js.org/)
för mer strukturerad test- och utvecklingsmiljö. Alla komponenter exporteras som separata npm-paket.

- Starta upp Storybook lokalt:

```
nx storybook ui
```

- Kör enhetstester för alla komponenter

```
nx run-many -t test
```

## Dokumentationswebb

---

Dokumentationswebben ligger i `apps/docs` och är byggd med [Docusaurus](https://docusaurus.io/).

- Kör dokumentationen lokalt:

```
nx serve docs
```

- Hämta hem senaste publicerade info från NPM:

```
nx run-many -t info
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
