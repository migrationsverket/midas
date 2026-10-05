import type { CaseTypeNode } from './data'

/**
 * A pre-filter that narrows the hierarchy before any free-text search:
 * verksamhetsområden (level 1) and/or ärendeområden (level 2). Empty means no
 * restriction on that level. Pure data, so the same scope can feed a Select,
 * an Autocomplete list or a Tree.
 */
export interface Scope {
  areas: string[]
  categories: string[]
}

export const emptyScope: Scope = { areas: [], categories: [] }

/** Level 1 nodes, limited to the chosen areas (all of them if none is chosen) */
const getAreas = (nodes: CaseTypeNode[], areas: string[]) =>
  areas.length === 0 ? nodes : nodes.filter(node => areas.includes(node.id))

/** The scoped tree. Returns the input unchanged when nothing is chosen */
export const applyScope = (
  nodes: CaseTypeNode[],
  { areas, categories }: Scope,
): CaseTypeNode[] => {
  if (areas.length === 0 && categories.length === 0) return nodes

  return getAreas(nodes, areas)
    .map(area => ({
      ...area,
      children:
        categories.length === 0
          ? area.children
          : area.children?.filter(category => categories.includes(category.id)),
    }))
    .filter(area => (area.children?.length ?? 0) > 0)
}

/** The ärendeområden to offer in the level 2 filter, grouped by level 1 */
export const getCategoryOptions = (nodes: CaseTypeNode[], areas: string[]) =>
  getAreas(nodes, areas)

/** Drops chosen ärendeområden that no longer belong to a chosen area */
export const pruneCategories = (
  nodes: CaseTypeNode[],
  { areas, categories }: Scope,
): Scope => {
  const allowed = new Set(
    getAreas(nodes, areas).flatMap(
      area => area.children?.map(child => child.id) ?? [],
    ),
  )
  return { areas, categories: categories.filter(id => allowed.has(id)) }
}
