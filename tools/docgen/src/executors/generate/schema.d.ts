export interface GenerateExecutorSchema {
  tsConfig?: string
  include: string[]
  exclude: string[]
  outputPath?: string
  watch: boolean
}
