export interface DevServerExecutorSchema {
  port: number
  host: string
  hotOnly: boolean
  open: boolean
  /**
   * Skip collecting typescript types for component prop tables.
   * Improves the startup time of the development server.
   */
  hideApi: boolean
}
