import styles from './spikes.module.css'

/**
 * Story-only: what an example would cost to productise, shown below it.
 * What matters for Midas isn't size but whether something follows the
 * architecture (Midas components wrap React Aria) or breaks it. Hand-rolled
 * interaction is a one-off that nobody recognises, which is what hurts
 * maintainability. So every Midas item has a kind:
 * - `standard`: wraps React Aria (or is styling, docs, translations)
 * - `logic`: our own data logic, no keyboard, focus or ARIA handling
 * - `handrolled`: our own interaction, focus or ARIA, breaks the pattern
 */
export type MidasKind = 'standard' | 'logic' | 'handrolled'

export interface MidasItem {
  kind: MidasKind
  text: string
}

export interface Cost {
  verdict: string
  /** New or changed code Midas would own */
  midas: MidasItem[]
  /** What a consuming team writes themselves */
  consumer: string[]
  /** Existing Midas or React Aria parts used as they are */
  reuses: string[]
  caveats?: string[]
}

const scopeCost: Cost = {
  verdict: '',
  midas: [],
  consumer: [
    'Pre-filter: nothing in Midas. About 40 lines (two Selects plus an applyScope-style function), or their own filter or URL state',
  ],
  reuses: ['Select, ListBoxSection, ListBoxHeader for the two filter fields'],
}

const countsCost: Cost = {
  verdict: '',
  midas: [
    {
      kind: 'standard',
      text: 'Count pill: a count variant of Badge or a small new component. Badge today is a notification dot',
    },
  ],
  consumer: ['Count pill: one line per place it is shown'],
  reuses: [],
}

const summaryCost: Cost = {
  verdict: '',
  midas: [
    {
      kind: 'logic',
      text: 'Summarised selection: collapsing or grouping is pure functions (summary.ts) over the tree. The tags are the existing TagGroup',
    },
  ],
  consumer: ['Summarised selection: one prop on the selected list'],
  reuses: [],
  caveats: [
    'Removing a summary tag clears everything it stands for, which can be a whole region in one click',
  ],
}

const merge = (cost: Cost, extra: Cost): Cost => ({
  ...cost,
  midas: [...cost.midas, ...extra.midas],
  consumer: [...cost.consumer, ...extra.consumer],
  reuses: [...cost.reuses, ...extra.reuses],
  caveats: [...(cost.caveats ?? []), ...(extra.caveats ?? [])],
})

const kindLabels: Record<MidasKind, string> = {
  standard: 'React Aria standard',
  logic: 'Logic',
  handrolled: 'Hand-rolled, breaks the pattern',
}

const MidasList = ({ items }: { items: MidasItem[] }) =>
  items.length === 0 ? null : (
    <div>
      <div className={styles.costTitle}>Midas would own</div>
      <ul className={styles.costList}>
        {items.map(item => (
          <li key={item.text}>
            <span className={`${styles.kind} ${styles[item.kind]}`}>
              {kindLabels[item.kind]}
            </span>{' '}
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )

const List = ({ title, items }: { title: string; items: string[] }) =>
  items.length === 0 ? null : (
    <div>
      <div className={styles.costTitle}>{title}</div>
      <ul className={styles.costList}>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )

export const CostNote = ({
  cost: base,
  withScope,
  showCounts,
  summarised,
}: {
  cost: Cost
  /** Adds the pre-filter cost, so the note matches what's on screen */
  withScope?: boolean
  /** Adds the count pill cost */
  showCounts?: boolean
  /** Adds the summarised selection cost */
  summarised?: boolean
}) => {
  let cost = base
  if (withScope) cost = merge(cost, scopeCost)
  if (showCounts) cost = merge(cost, countsCost)
  if (summarised) cost = merge(cost, summaryCost)

  return (
    <aside
      className={styles.costNote}
      aria-label='Cost to productise'
    >
      <div className={styles.costVerdict}>{cost.verdict}</div>
      <div className={styles.costGrid}>
        <MidasList items={cost.midas} />
        <List
          title='Consumers write'
          items={cost.consumer}
        />
        <List
          title='Reused as is'
          items={cost.reuses}
        />
        <List
          title='Caveats'
          items={cost.caveats ?? []}
        />
      </div>
    </aside>
  )
}
