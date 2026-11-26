import { describe, expect, it } from 'vitest'
import {
  duplicateInstanceWarning,
  registerInstance,
  type MidasInstance,
} from './duplicateInstance'

const instance = (version: string): MidasInstance => ({ version, token: {} })

describe('registerInstance', () => {
  it('registers the first copy without reporting anything', () => {
    const registry = {}

    expect(registerInstance(registry, instance('17.38.0'))).toBeUndefined()
  })

  it('reports nothing when the same copy registers again', () => {
    const registry = {}
    const only = instance('17.38.0')
    registerInstance(registry, only)

    expect(registerInstance(registry, only)).toBeUndefined()
  })

  it('reports the first copy when a second copy registers', () => {
    const registry = {}
    const first = instance('17.38.0')
    registerInstance(registry, first)

    expect(registerInstance(registry, instance('17.20.0'))).toBe(first)
  })

  it('reports a second copy of the same version', () => {
    const registry = {}
    const first = instance('17.38.0')
    registerInstance(registry, first)

    expect(registerInstance(registry, instance('17.38.0'))).toBe(first)
  })
})

describe('duplicateInstanceWarning', () => {
  it('names both versions and links to the guide', () => {
    const message = duplicateInstanceWarning('17.38.0', '17.20.0')

    expect(message).toContain('(17.38.0 and 17.20.0)')
    expect(message).toContain('/dev/micro-frontends/')
  })
})
