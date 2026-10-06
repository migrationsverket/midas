import { createContext, useContext, useMemo, type ReactNode } from 'react'
import type { Decorator } from '@storybook/react-vite'
import { caseTypes, flattenLeaves, type CaseTypeNode, type Leaf } from './data'
import { organisation } from './organisation'
import { CostNote, type Cost } from './CostNote'

export type DatasetId = 'organisation' | 'arendetyper'

/** The texts that differ between datasets */
export interface DatasetLabels {
  /** The field label, e.g. "Ärendetyper" */
  field: string
  searchPlaceholder: string
  selected: string
  empty: string
  /** Dialog title and trigger, e.g. "Välj ärendetyper" */
  choose: string
  add: string
  level1: string
  level1Plural: string
  level1All: string
  level2: string
  level2All: string
}

export interface Dataset {
  id: DatasetId
  nodes: CaseTypeNode[]
  leaves: Leaf[]
  /** Level 2 as sections, for the two-level Select */
  sections: CaseTypeNode[]
  /** Large lists need virtualization, small ones are easier to test without */
  isLarge: boolean
  labels: DatasetLabels
}

const build = (
  id: DatasetId,
  nodes: CaseTypeNode[],
  labels: DatasetLabels,
): Dataset => {
  const leaves = flattenLeaves(nodes)
  return {
    id,
    nodes,
    leaves,
    sections: nodes.flatMap(node => node.children ?? []),
    isLarge: leaves.length > 200,
    labels,
  }
}

export const datasets: Record<DatasetId, Dataset> = {
  arendetyper: build('arendetyper', caseTypes, {
    field: 'Ärendetyper',
    searchPlaceholder: 'Sök ärendetyp',
    selected: 'Valda ärendetyper',
    empty: 'Inga ärendetyper matchar',
    choose: 'Välj ärendetyper',
    add: 'Lägg till ärendetyp',
    level1: 'Verksamhetsområde',
    level1Plural: 'Verksamhetsområden',
    level1All: 'Alla verksamhetsområden',
    level2: 'Ärendeområde',
    level2All: 'Alla ärendeområden',
  }),
  organisation: build('organisation', organisation, {
    field: 'Avdelningar',
    searchPlaceholder: 'Sök avdelning eller enhet',
    selected: 'Valda avdelningar',
    empty: 'Inga avdelningar matchar',
    choose: 'Välj avdelningar',
    add: 'Lägg till avdelning',
    level1: 'Region',
    level1Plural: 'Regioner',
    level1All: 'Alla regioner',
    level2: 'Enhet',
    level2All: 'Alla enheter',
  }),
}

const DatasetContext = createContext<Dataset>(datasets.arendetyper)

export const useDataset = () => useContext(DatasetContext)

export const DatasetProvider = ({
  id,
  children,
}: {
  id: DatasetId
  children: ReactNode
}) => {
  const dataset = useMemo(() => datasets[id], [id])
  return (
    <DatasetContext.Provider value={dataset}>
      {children}
    </DatasetContext.Provider>
  )
}

/**
 * Every spike story: provides the dataset from the `dataset` arg and renders
 * the cost note (`parameters.cost`) below the story. The pre-filter and count
 * pill costs are added when `withScope` or `showCounts` is on.
 */
export const withSpike: Decorator = (Story, context) => {
  const id = (context.args.dataset as DatasetId | undefined) ?? 'arendetyper'
  const cost = context.parameters.cost as Cost | undefined

  return (
    <DatasetProvider
      // Remount when switching, so no selection carries over between datasets
      key={id}
      id={id}
    >
      <Story />
      {cost && (
        <CostNote
          cost={cost}
          withScope={Boolean(context.args.withScope)}
          showCounts={Boolean(context.args.showCounts)}
          summarised={
            context.args.selectedDisplay !== undefined &&
            context.args.selectedDisplay !== 'leaves'
          }
        />
      )}
    </DatasetProvider>
  )
}

/** How the list of what's selected is shown, for stories with a list */
export const selectedDisplayArg = {
  args: { selectedDisplay: 'leaves' as const, groupLevel: 1 },
  argTypes: {
    selectedDisplay: {
      control: 'inline-radio' as const,
      options: ['leaves', 'collapsed', 'grouped'],
    },
    groupLevel: { control: 'inline-radio' as const, options: [1, 2] },
  },
}

/** The `dataset` arg every spike story gets */
export const datasetArg = {
  args: { dataset: 'organisation' as DatasetId },
  argTypes: {
    dataset: {
      control: 'inline-radio' as const,
      options: ['organisation', 'arendetyper'],
    },
  },
}
