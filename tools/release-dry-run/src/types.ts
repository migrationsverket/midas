import { VersionDataEntry } from 'nx/src/command-line/release/utils/shared'

export interface Project {
  name: string
  versionData: VersionDataEntry
}
