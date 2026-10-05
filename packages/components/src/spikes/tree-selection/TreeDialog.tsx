import { useMemo, useState } from 'react'
import type { Key } from 'react-aria-components'
import { Button } from '../../button'
import { DialogTrigger, Modal } from '../../modal'
import { SearchField } from '../../search-field'
import { caseTypes, flattenLeaves, type CaseTypeNode } from './data'
import { SearchPanel } from './SearchPanel'
import { SelectedList } from './SelectedList'
import { SpikeTree } from './SpikeTree'
import { useFilteredTree } from './useFilteredTree'
import { ScopeFilter, useScope } from './ScopeFilter'
import { CountPill } from './CountPill'
import styles from './spikes.module.css'

/**
 * - `tree`: only the tree, no search (A's "browse the whole structure")
 * - `autocomplete`: B1, the Autocomplete feel. An empty query shows the tree,
 *   typing switches to the flat result list with paths
 * - `filtered`: B2, the search field filters the tree itself
 */
export type TreeDialogVariant = 'tree' | 'autocomplete' | 'filtered'

export interface TreeDialogProps {
  variant: TreeDialogVariant
  selected: ReadonlySet<string>
  onSelectedChange: (selected: Set<string>) => void
  triggerLabel: string
  triggerVariant?: 'primary' | 'secondary' | 'tertiary'
  /** Pills with the number selected, on the trigger, the branches and the list */
  showCounts?: boolean
  /** The tree to show, e.g. already narrowed by a pre-filter outside the dialog */
  nodes?: CaseTypeNode[]
  /** A pre-filter (verksamhetsområde, ärendeområde) inside the dialog */
  withScope?: boolean
}

interface BodyProps {
  nodes: CaseTypeNode[]
  draft: Set<string>
  setDraft: (selected: Set<string>) => void
  showCounts?: boolean
}

const AutocompleteBody = ({
  nodes,
  draft,
  setDraft,
  showCounts,
}: BodyProps) => {
  const [query, setQuery] = useState('')
  const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(new Set())
  const leaves = useMemo(() => flattenLeaves(nodes), [nodes])

  return (
    <div className={styles.stack}>
      <SearchPanel
        label='Sök eller bläddra'
        leaves={leaves}
        selected={draft}
        onSelectedChange={setDraft}
        inputValue={query}
        onInputChange={setQuery}
        hideResultsWhenEmpty
      />
      {query.trim() === '' && (
        <SpikeTree
          aria-label='Ärendetyper'
          showCounts={showCounts}
          nodes={nodes}
          selected={draft}
          onSelectedChange={setDraft}
          expandedKeys={expandedKeys}
          onExpandedChange={setExpandedKeys}
        />
      )}
    </div>
  )
}

const FilteredBody = ({ nodes, draft, setDraft, showCounts }: BodyProps) => {
  const [query, setQuery] = useState('')
  const filtered = useFilteredTree(nodes, query)

  return (
    <div className={styles.stack}>
      <SearchField
        label='Filtrera'
        placeholder='Filtrera ärendetyper'
        showButton={false}
        value={query}
        onChange={setQuery}
      />
      <SpikeTree
        aria-label='Ärendetyper'
        showCounts={showCounts}
        nodes={filtered.nodes}
        selected={draft}
        onSelectedChange={setDraft}
        expandedKeys={filtered.expandedKeys}
        onExpandedChange={filtered.onExpandedChange}
      />
    </div>
  )
}

const TreeOnlyBody = ({ nodes, draft, setDraft, showCounts }: BodyProps) => {
  const [expandedKeys, setExpandedKeys] = useState<Set<Key>>(new Set())

  return (
    <SpikeTree
      aria-label='Ärendetyper'
      showCounts={showCounts}
      nodes={nodes}
      selected={draft}
      onSelectedChange={setDraft}
      expandedKeys={expandedKeys}
      onExpandedChange={setExpandedKeys}
    />
  )
}

const bodies = {
  autocomplete: AutocompleteBody,
  filtered: FilteredBody,
  tree: TreeOnlyBody,
}

/** The dialog's main area, with or without its own pre-filter on top */
const DialogBody = ({
  variant,
  withScope,
  ...props
}: BodyProps & { variant: TreeDialogVariant; withScope?: boolean }) => {
  const scope = useScope(props.nodes)
  const Body = bodies[variant]

  if (!withScope) return <Body {...props} />

  return (
    <div className={styles.stack}>
      <ScopeFilter scope={scope} />
      <Body
        {...props}
        nodes={scope.scopedNodes}
      />
    </div>
  )
}

/**
 * The tree in a dialog with a running list of what's selected. Changes are
 * made on a draft, "Klar" commits it and "Avbryt" throws it away. Ärendetyper
 * outside the pre-filter stay selected.
 */
export const TreeDialog = ({
  variant,
  selected,
  onSelectedChange,
  triggerLabel,
  triggerVariant = 'secondary',
  showCounts,
  nodes = caseTypes,
  withScope,
}: TreeDialogProps) => {
  const [isOpen, setOpen] = useState(false)
  const [draft, setDraft] = useState<Set<string>>(new Set(selected))

  const handleOpenChange = (open: boolean) => {
    if (open) setDraft(new Set(selected))
    setOpen(open)
  }

  return (
    <DialogTrigger
      isOpen={isOpen}
      onOpenChange={handleOpenChange}
    >
      <Button variant={triggerVariant}>
        {triggerLabel}
        {showCounts && (
          <CountPill
            count={selected.size}
            tone={triggerVariant === 'primary' ? 'inverse' : 'default'}
          />
        )}
      </Button>
      <Modal title='Välj ärendetyper'>
        <div className={styles.dialogLayout}>
          <DialogBody
            variant={variant}
            withScope={withScope}
            nodes={nodes}
            draft={draft}
            setDraft={setDraft}
            showCounts={showCounts}
          />
          <SelectedList
            selected={draft}
            onSelectedChange={setDraft}
            showCount={showCounts}
          />
        </div>
        <div className={styles.actions}>
          <Button
            onPress={() => {
              onSelectedChange(draft)
              setOpen(false)
            }}
          >
            Klar
          </Button>
          <Button
            variant='secondary'
            onPress={() => setOpen(false)}
          >
            Avbryt
          </Button>
        </div>
      </Modal>
    </DialogTrigger>
  )
}
