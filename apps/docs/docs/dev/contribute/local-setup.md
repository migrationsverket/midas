# Bidra till komponentbiblioteket

- [Nx](https://nx.dev) installerat globalt `npm install --global nx@latest`
- Se till att rekomenderade extensions och inställningar för VS Code är tillämpade. Se till att du har motsvarande om du kör en annan IDE.
- En normalt fungerande WSL eller motsvarande setup med Node version >20.

```bash
npm install
```
## Snabbstart

### Starta DocWeb

Starta dokumentationen:

```bash
nx serve docs
```

### Starta Storybook

Starta storybook:

```bash
nx run components:storybook
```

### Starta Playground-appen (React)

React:

```bash
nx serve playground
```

Vi har även en remix och en next.js-app uppsatta - se NX

## Komponentbibliotek

Alla komponenter ligger under `/packages/components` och exporteras som ett npm-paket [`@midas-ds/components`](https://www.npmjs.com/package/@midas-ds/components).

- Kör enhetstester för alla komponenter

```bash
nx test components
```

## Dokumentationswebb

Dokumentationswebben ligger i `apps/docs` och är byggd med [Docusaurus](https://docusaurus.io/).

- Kör dokumentationen lokalt:

```bash
nx serve docs
```

### Bygg komponenter

Komponentbibliotek och appar kan byggas med:

```shell
nx build <namn>
```

och allt som byggs hamnar i `/dist`. Om du vill provköra går det att zippa med `npm pack` och installera i annan app med `npm install [sökväg]`.


### Nx Monorepo

Nx har funktioner för att hålla koll på byggen och tester samt beroenden mellan olika bibliotek och appar. För Nx-specifika frågon hänvisas till
uppdaterad information på den [officiella NX dokumentationen](https://nx.dev/getting-started/intro).

## Instruktioner för Git

### Branch

Branch namnges enligt `[feature|bugfix|hotfix|test]/[jira-ref]/[description]`, till exempel `feature/DS-1337/button`.

### Commit

Commits görs enligt [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary). Använd engelska,
imperativ form, definiera type `feat|docs|fix|refactor|test|ci` och scope `(button|etc...)` och lägg till referenser
till andra issues vid behov. För att göra det enkelt att göra det rätt finns ett script för commits som det är fritt att använda.

```bash
npm run commit
```

#### Varför conventional commits?

    - Generera automatisk CHANGELOG
    - Automatiskt bestämma `semantic version`
    - Kommunicera inom team och till andra intressenter vad förändringen gäller.
    - Trigga byggen och andra åtgärder.
    - Bidra till att hålla en konsekvent och strukturerad historik.

#### Commit message på en rad

`docs(lang): add Swedish language`

#### Commit message med header och body

```
fix: prevent red color on button hover

Introduce new css variable to automatically
select style based on input type

```


## Release & publish

Designsystemet använder Nx för versionshantering och release enligt [nx release](https://nx.dev/recipes/nx-release/get-started-with-nx-release)
och där hittar du all info om hur versionshantering och publicering är uppsatt i repot. Nx kommer uppdatera beroenden
på andra komponenter även om du bara har ändringar på en.

```bash
nx release --dry-run // remove dry-run when you know it works
```
