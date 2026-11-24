import { VERSION } from '../version'

/**
 * Warns, in development, when more than one copy of @midas-ds/components is
 * running on the same page.
 *
 * Each copy has its own module-scope state, and so does each copy of
 * react-aria that comes with it: toasts added in one copy don't show up in
 * another copy's toast region, an I18nProvider or RouterProvider from one copy
 * doesn't reach the other's components, and overlays from one copy break
 * focus containment in the other's modals. Nothing errors, so without this
 * warning the cause is hard to find. It typically happens with Module
 * Federation or other micro-frontend setups that don't share Midas as a
 * singleton, or when a package manager installs two versions.
 */

export interface MidasInstance {
  version: string
  token: object
}

type Registry = Record<symbol, MidasInstance | undefined>

// Symbol.for is shared by every module copy on the page, so every copy of
// Midas finds the same registry slot
const REGISTRY_KEY = Symbol.for('@midas-ds/components/instance')

/**
 * Registers `instance` in `registry`, unless another copy got there first.
 * Returns that other copy, or undefined if `instance` is the only one
 */
export const registerInstance = (
  registry: Registry,
  instance: MidasInstance,
): MidasInstance | undefined => {
  const existing = registry[REGISTRY_KEY]
  if (!existing) {
    registry[REGISTRY_KEY] = instance
    return undefined
  }
  return existing.token === instance.token ? undefined : existing
}

export const duplicateInstanceWarning = (first: string, second: string) =>
  `Several copies of @midas-ds/components are running on this page (${first} and ${second}). ` +
  'Each copy has its own toasts, providers and overlay handling, so components from different copies ' +
  "don't work together. Make sure only one copy is loaded, e.g. share @midas-ds/components, " +
  'react-aria-components, react-aria and react-stately as singletons in Module Federation. ' +
  'See: https://designsystem.migrationsverket.se/dev/micro-frontends/'

// Unique to this copy of the module
const thisInstance: MidasInstance = { version: VERSION, token: {} }

let checked = false

export const checkForDuplicateInstance = () => {
  if (checked || process.env.NODE_ENV !== 'development') return
  checked = true

  const other = registerInstance(globalThis as Registry, thisInstance)
  if (other) {
    console.warn(duplicateInstanceWarning(other.version, VERSION))
  }
}
