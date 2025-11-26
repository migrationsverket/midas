# release-dry-run

A GitHub Action that runs `nx release --dry-run` and posts a formatted comment on pull requests showing which packages will be versioned and how.

## What It Does

This tool:
1. Runs `nx release --dry-run` to determine which packages would be released
2. Formats the version changes into a readable markdown report
3. Posts the report as a sticky comment on pull requests to `main`

## Example PR Comment

```markdown
## NX release report
:bug: **@midas-ds/button** was `1.0.0` and will be updated to `1.0.1`.
:sparkles: **@midas-ds/input** was `2.3.0` and will be updated to `2.4.0`.
:boom: **@midas-ds/theme** was `1.5.2` and will be updated to `2.0.0`.
```

### Version Bump Icons

- :bug: **Patch** (0.0.x) - Bug fixes and minor changes
- :sparkles: **Minor** (0.x.0) - New features, backwards compatible
- :boom: **Major** (x.0.0) - Breaking changes

If no packages will be versioned:
```markdown
## NX release report
No version bumps :disappointed:
```

## How It Works

The tool is a custom GitHub Action that:

1. **Analyzes Changes**: Uses NX's `releaseVersion()` API with `dryRun: true` to detect which projects have changes that would trigger a release
2. **Filters Projects**: Only includes projects with new versions (filters out unchanged projects)
3. **Formats Output**: Creates a markdown report with emojis indicating the bump type (patch/minor/major)
4. **Posts Comment**: Uses `marocchino/sticky-pull-request-comment` to post or update a single comment per PR

## GitHub Workflow

### Usage in Your Repository

To use this action in your own repository, create a workflow file at `.github/workflows/release-dry-run.yml`:

```yaml
name: 'NX release dry run'

on:
  pull_request:
    types:
      - opened
      - reopened
      - synchronize
    branches:
      - main

permissions:
  contents: read
  pull-requests: write

jobs:
  nx-release-dry-run:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v5
        with:
          fetch-depth: 0

      - name: Setup Node
        uses: actions/setup-node@v5
        with:
          node-version-file: '.nvmrc'
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build tool
        run: npx nx build release-dry-run

      - name: Run tool
        id: dry-run
        uses: ./dist/tools/release-dry-run

      - name: Leave a comment
        uses: marocchino/sticky-pull-request-comment@v2
        with:
          message: ${{ steps.dry-run.outputs.message }}
```

### Important Configuration Notes

1. **Permissions**: The workflow needs `pull-requests: write` to post comments
2. **Fetch Depth**: Use `fetch-depth: 0` to get full git history (required for NX release detection)
3. **Node Version**: Update `node-version-file` or use a specific version like `node-version: '20'`
4. **Build Step**: The tool must be built before running since GitHub Actions requires pre-built code
5. **Action Path**: The example above uses `./dist/tools/release-dry-run` which assumes the tool is built in your repository. If published as a standalone GitHub Action, the path would be `uses: owner/repo@version`

### Using as an External Action

If this tool is published to a separate repository or the GitHub Marketplace, users would reference it like:

```yaml
- name: Run NX release dry run
  id: dry-run
  uses: midas-ds/release-dry-run@v1
  # No build step needed - the action comes pre-built

- name: Leave a comment
  uses: marocchino/sticky-pull-request-comment@v2
  with:
    message: ${{ steps.dry-run.outputs.message }}
```

In this case, the build step is not needed since the published action includes pre-built code.

## Local Development

### Building

Build the action locally:

```bash
npx nx build release-dry-run
```

This compiles TypeScript and bundles the code into `dist/tools/release-dry-run/`.

### Testing

Run the test suite:

```bash
npx nx test release-dry-run
```

Run with coverage:

```bash
npx nx test release-dry-run --coverage
```

### Testing Locally

To test the dry run logic locally without running the full GitHub Action:

```bash
# Build the tool
npx nx build release-dry-run

# Run nx release dry-run directly
npx nx release --dry-run

# Or test the formatted output (requires mocking GitHub Actions context)
node dist/tools/release-dry-run/index.cjs.js
```

## Architecture

```
src/
├── index.ts                    # Main entry point (GitHub Action)
├── getAffectedProjects.ts      # Calls nx release --dry-run
├── getBumpMessage.ts           # Formats the markdown report
├── types.ts                    # TypeScript type definitions
└── action.yml                  # GitHub Action metadata
```

### Key Functions

**`getAffectedProjects()`**
- Calls `nx releaseVersion({ dryRun: true })`
- Filters projects to only those with `newVersion` set
- Returns array of `{ name, versionData }` objects

**`getBumpMessage(projects)`**
- Takes array of affected projects
- Determines bump type (patch/minor/major) using `semver.diff()`
- Returns formatted markdown string with icons

**`index.ts`**
- GitHub Action entry point
- Calls `getAffectedProjects()` and `getBumpMessage()`
- Sets output using `@actions/core.setOutput()`

## Dependencies

- **`nx`** - Used to run `releaseVersion()` with dry-run
- **`@actions/core`** - GitHub Actions toolkit for inputs/outputs
- **`semver`** - Semantic version comparison and diffing

## Configuration

The tool respects your NX release configuration in `nx.json`. It will detect version bumps based on:

- Conventional commits
- NX project dependencies
- Release configuration settings

## Troubleshooting

### Comment Not Appearing

Check that the workflow has the correct permissions:

```yaml
permissions:
  contents: read
  pull-requests: write
```

### Incorrect Version Detection

The tool relies on NX's release logic. Check:
1. Conventional commit format in the PR
2. NX release configuration in `nx.json`
3. Project dependencies in `project.json` files

### Build Errors

Ensure dependencies are installed:

```bash
npm install
```

If you see TypeScript errors, rebuild:

```bash
npx nx reset
npx nx build release-dry-run
```

## Contributing

When making changes to this tool:

1. Update the source files in `tools/release-dry-run/src/`
2. Write or update tests
3. Run tests: `npx nx test release-dry-run`
4. Build the action: `npx nx build release-dry-run`
5. The built files in `dist/` should be committed (GitHub Actions requires pre-built code)

## License

Part of the Midas Design System monorepo.
