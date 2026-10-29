export interface BuildTokensExecutorSchema {
  /** Globs of the token files, relative to the workspace root */
  source: string[]
  /** Folder to write the generated files to, relative to the workspace root */
  buildPath: string
}
