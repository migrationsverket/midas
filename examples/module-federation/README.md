# Module Federation + @midas-ds/components

Two apps on one page with [`@module-federation/vite`](https://module-federation.io/guide/basic/vite.html): a host (the shell) on port 5000, and a remote on port 5001 that exposes a widget with a `DatePicker`, a `Select` and a toast button. The host renders the widget on the page and inside a Midas `Modal`.

It follows the [micro frontends guide](https://designsystem.migrationsverket.se/dev/micro-frontends/):

- React, `@midas-ds/components`, `react-aria-components`, `react-aria` and `react-stately` are shared as singletons (`shared.ts`)
- only the host imports `default.css` and renders `I18nProvider` and `GlobalToastRegion`
- the remote imports `default.css` only in `standalone.tsx`, which is used when it runs on its own

## Run

```bash
npm install
npm start               # builds both apps, then serves them
```

Open http://localhost:5000. The remote's date field follows the host's locale (`ÅÅÅÅ-MM-DD`), its toasts show in the host's toast region, and its `Select` opens inside the host's modal.

To see what breaks when only React is shared:

```bash
npm run start:react-only
```

The remote then runs its own copy of Midas: its date field uses the browser's language, its toasts never show, and its `Select` doesn't open inside the modal. In development builds, Midas also warns in the console that several copies are running.

The remote alone is at http://localhost:5001.
