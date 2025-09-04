import * as tokens_legacy from './tokens'
import tokens from './generated-object'
import * as variables from './generated-tokens'
export { tokens }
export { variables }

export * from './tokens'
export const theme = { ...tokens_legacy }
