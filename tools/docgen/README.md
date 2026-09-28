# @midas-ds/docgen

Nx executor that generates API docs (component props) for a package with
[react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript).

It writes one JSON file per component to `dist/api/<project>/`, plus an
`index.json`. The docs app imports those files directly:

```mdx
import ButtonApi from '@midas-ds/api/components/Button.json'

<PropTable doc={ButtonApi} />
```

Targets (configured in `nx.json` `targetDefaults`):

- `nx docgen <project>`: generate once (cached)
- `nx docgen-watch <project>`: regenerate on change (used by `nx serve docs`)
