import * as tokens_legacy from './tokens'
import tokens from  './generated-object'
import * as gen2 from './generated-tokens'
export { tokens }

export const flat = gen2

export * from './tokens'
export const theme = { ...tokens_legacy, ...flat }
