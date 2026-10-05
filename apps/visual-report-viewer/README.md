# visual-report-viewer

Viewer for the visual regression reports built by [`tools/visual-report`](../../tools/visual-report). It's a static React app using Midas components, deployed with the docs at `/visual-report/`, and loads a report at runtime:

| URL                                      | Report                                                   |
| ---------------------------------------- | -------------------------------------------------------- |
| `/visual-report/?pr=123`                 | `/pr-preview/visual/pr-123/report.json`, published by CI |
| `/visual-report/?data=/path/report.json` | Any report.json on the same site                         |
| `nx run visual-report-viewer:serve`      | The last local run, `dist/visual-report-site/`           |

The hash selects a screenshot (`#components/3`), so comments can link straight to it. In the viewer, `j` and `k` move to the next and previous screenshot.

Reports are only loaded from the same site, and image paths that point anywhere else are dropped. React escapes all text from the report.

```bash
npx nx run visual-report-viewer:serve
npx nx run visual-report-viewer:test
npx nx run visual-report-viewer:build   # dist/apps/visual-report-viewer, relative paths
```
