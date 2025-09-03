import * as tokens from './tokens'
import * as gen from './generated-object'
import * as gen2 from './generated-tokens'

export const tokenObject = gen.default
export const flat = gen2

export * from './tokens'
export const theme = { ...tokens }
