# Instruktioner för Git

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
    - Förenkla för externa parter att bidra genom att hålla en konsekvent och strukturerad historik.

#### Commit message på en rad

`docs(lang): add Swedish language`

#### Commit message med header och body

```
fix: prevent red color on button hover

Introduce new css variable to automatically select style based on input type

```
