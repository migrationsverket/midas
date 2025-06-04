import type { Key, Selection } from '@react-types/shared'

/**
 * Find out if a `Selection` (`"all" | Set<Key>`) is `Set<Key>`
 */
export const isASetOfKeys = (keys: Selection): keys is Set<Key> =>
  keys !== 'all'

/**
 * Find out if a selection is an empty Set
 */
export const isSelectionEmpty = (keys: Selection): boolean =>
  isASetOfKeys(keys) && keys.size === 0
