# release-local

This tool enables end-to-end testing of package releases by publishing them to a local Verdaccio registry. This allows you to test the full package installation and import workflow in other projects before publishing to npm.

## Overview

The `release-local` executor automates the following steps:

1. **Ensures port 4873 is available** (kills any conflicting processes)
2. Clears local registry storage
3. Creates default Verdaccio authentication credentials
4. Starts Verdaccio on port 4873
5. Versions all packages as prerelease (e.g., `1.0.0-local.0`)
6. Publishes packages to the local registry
7. Cleans up and stops Verdaccio

## Key Features

✅ **Idempotent** - Can be run multiple times without port conflicts
✅ **Consistent** - Always uses port 4873
✅ **Automatic** - Handles authentication and cleanup automatically
✅ **Clean** - Stops Verdaccio and removes temporary config after completion

## Prerequisites

- No uncommitted changes required (the script uses `gitCommit: false`)
- Port 4873 must be available (script will kill conflicting processes)

**Note:** The `.verdaccio/htpasswd` file with test credentials is committed to the repository for convenience. This is safe since it's only used for local development (username: `test`, password: `test`).

## ⚠️ Important Warning

**DO NOT commit the package.json changes made by this script!**

The script modifies `package.json` files to create prerelease versions with the `-local.0` suffix (e.g., `15.2.7-local.0`). These are temporary development versions and should **never** be committed to the repository.

After running the script, you'll see changes like:
```diff
- "version": "15.2.6"
+ "version": "15.2.7-local.0"
```

**Always discard these changes:**
```bash
# Discard package.json changes after testing
git checkout -- packages/*/package.json

# Or use git restore
git restore packages/*/package.json
```

The script intentionally skips git operations (`gitCommit: false`) to prevent accidental commits, but you must manually reset the files.

## Usage

There are two workflows depending on your needs:

### Quick Start: Dev Workflow (Recommended)

**Single command that publishes and keeps registry running:**

```bash
nx run @midas-ds/source:release:local:dev
```

This command:
- **Kills any existing processes on port 4873** (ensures idempotency)
- Clears local registry storage
- Creates authentication credentials
- Starts Verdaccio on port 4873
- Versions and publishes all packages with `-local` preid
- **Keeps Verdaccio running** so you can immediately test

Perfect for development! Make changes to your source code, run this command, and your packages are published and ready to test. Press Ctrl+C when done.

**Remember:** After testing, discard the `package.json` version changes with `git checkout -- packages/*/package.json`

### CI/Automation Workflow

**For scripts where you want the registry to stop after publishing:**

```bash
# 1. Publish packages (stops after completion)
nx run @midas-ds/source:release:local

# 2. Restart registry to keep it running
nx run @midas-ds/source:local-registry
```

The `release:local` command does everything but stops Verdaccio at the end, requiring a manual restart.

### Install in another project

In your test project, install packages from the local registry using the `--registry` flag:

```bash
npm install @midas-ds/components@latest --registry=http://localhost:4873/
```

**Important:** Always use the `--registry` flag to avoid modifying your global npm configuration.

### 4. Test imports and functionality

Test that your packages work as expected:

```typescript
import { Button, Table } from '@midas-ds/components'

// Test your components...
```

## Configuration

The executor accepts the following options (configured in `project.json`):

- `registry` (string): Verdaccio registry URL (default: `http://localhost:4873/`)
- `skipGit` (boolean): Skip git operations (default: `true`)
- `skipPublish` (boolean): Skip publishing step (default: `true`)
- `runTests` (boolean): Run tests after publishing (default: `false`)
- `keepRunning` (boolean): Keep Verdaccio running after publishing (default: `false`)

### Available Tasks

**`release:local`** - Publish and stop (for CI/automation)
```json
{
  "continuous": false,
  "options": {
    "keepRunning": false
  }
}
```

**`release:local:dev`** - Publish and keep running (for development)
```json
{
  "continuous": true,
  "options": {
    "keepRunning": true
  }
}
```

## How it works

1. **Local Registry**: Uses Verdaccio, a lightweight npm registry proxy
2. **Versioning**: Uses `nx/release` API with `specifier: 'prerelease'` and `preid: 'local'`
3. **Publishing**: Uses `nx/release` publish API to push to the local registry
4. **Configuration**: Verdaccio config is at `.verdaccio/config.yml`
5. **Storage**: Local packages are stored in `tmp/local-registry/storage`

## Troubleshooting

**Port conflicts / inconsistent port usage:**
The script now automatically handles port conflicts. If port 4873 is already in use, it will:
- Kill any existing process on that port
- Wait for the port to be released
- Start fresh on port 4873

This ensures packages are always published to the expected port.

**Registry not accessible after publishing:**
After `release:local` completes, the registry stops automatically. Restart it with:
```bash
nx run @midas-ds/source:local-registry
```

**Packages not installing:**
- Verify packages were published: `npm view @midas-ds/components --registry=http://localhost:4873/`
- Ensure registry is running: Check if port 4873 is responding
- Check Verdaccio logs for errors

**Stale versions:**
- Clear the registry storage: The `release:local` target automatically depends on `local-registry-clear`
- Manually clear: `rm -rf tmp/local-registry/storage`

## Related Commands

```bash
# Start local registry without clearing
nx run @midas-ds/source:local-registry

# Start local registry with cleared storage (continuous)
nx run @midas-ds/source:local-registry-clear
```
