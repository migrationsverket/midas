import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { join } from 'node:path'
import type { ApiDoc, ApiIndexEntry } from './types.js'

export interface WriteResult {
  written: string[]
  removed: string[]
}

const SAFE_FILE_NAME = /^[A-Za-z0-9_$.-]+$/

const serialize = (data: unknown) => `${JSON.stringify(data, null, 2)}\n`

/**
 * Writes one JSON file per doc plus index.json. Unchanged files aren't
 * touched, so a dev server only reloads pages whose docs actually changed.
 * Files are written to a temp file and renamed, so a watcher never reads a
 * half-written file. JSON files that no longer correspond to a component are
 * removed.
 */
export function writeApiDocs(
  outputPath: string,
  docs: Map<string, ApiDoc>,
): WriteResult {
  const files = new Map<string, string>()
  const index: ApiIndexEntry[] = []

  for (const [displayName, doc] of docs) {
    if (!SAFE_FILE_NAME.test(displayName) || displayName === 'index') {
      throw new Error(`Can't use "${displayName}" as a file name`)
    }
    files.set(`${displayName}.json`, serialize(doc))
    index.push({ displayName, sourceFile: doc.sourceFile })
  }
  files.set('index.json', serialize(index))

  mkdirSync(outputPath, { recursive: true })
  const result: WriteResult = { written: [], removed: [] }

  for (const [fileName, content] of files) {
    const path = join(outputPath, fileName)
    if (existsSync(path) && readFileSync(path, 'utf8') === content) continue
    const tempPath = `${path}.${process.pid}.tmp`
    writeFileSync(tempPath, content)
    renameSync(tempPath, path)
    result.written.push(fileName)
  }

  for (const fileName of readdirSync(outputPath)) {
    if (fileName.endsWith('.json') && !files.has(fileName)) {
      rmSync(join(outputPath, fileName))
      result.removed.push(fileName)
    }
  }

  return result
}
