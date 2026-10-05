import { useEffect, useMemo, useState } from 'react'
import type { VisualReport } from '@midas-ds/visual-report'
import {
  ColorSchemeSwitch,
  Heading,
  InfoBanner,
  Link,
  Radio,
  RadioGroup,
  SearchField,
  Spinner,
  Text,
} from '@midas-ds/components'
import { FailureList } from './FailureList'
import { FailureView } from './FailureView'
import { useHashKey, useReport } from './hooks'
import {
  filterItems,
  groupItems,
  resolveReportSource,
  type StatusFilter,
  toItems,
} from './report'
import styles from './App.module.css'

const plural = (count: number, word: string) =>
  `${count} ${word}${count === 1 ? '' : 's'}`

export function App() {
  const source = useMemo(
    () => resolveReportSource(window.location.href, import.meta.env.DEV),
    [],
  )
  const state = useReport(source)

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Heading level={1}>Visual regression</Heading>
        <ColorSchemeSwitch />
      </header>
      {state.status === 'loading' && (
        <div className={styles.center}>
          <Spinner />
        </div>
      )}
      {state.status === 'error' && (
        <InfoBanner
          type='warning'
          title="Couldn't show the report"
          message={state.message}
        />
      )}
      {state.status === 'ready' && (
        <ReportView
          report={state.report}
          url={state.url}
        />
      )}
    </div>
  )
}

interface ReportViewProps {
  report: VisualReport
  url: URL
}

function ReportView({ report, url }: ReportViewProps) {
  const items = useMemo(() => toItems(report, url), [report, url])
  const [status, setStatus] = useState<StatusFilter>('all')
  const [query, setQuery] = useState('')
  const [hashKey, select] = useHashKey()

  const groups = useMemo(
    () => groupItems(filterItems(items, { status, query })),
    [items, status, query],
  )
  // In the order they're listed, for previous/next
  const visible = useMemo(() => groups.flatMap(group => group.items), [groups])
  const selected = visible.find(item => item.key === hashKey) ?? visible[0]
  const index = selected ? visible.indexOf(selected) : -1

  const selectOffset = (offset: number) => {
    const next = visible[index + offset]
    if (next) select(next.key)
  }

  // j/k like in GitHub's file list, unless typing in a field
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.altKey ||
        target.closest('input, textarea, [contenteditable="true"]')
      ) {
        return
      }
      const offset = { j: 1, k: -1 }[event.key]
      const next = offset && visible[index + offset]
      if (next) select(next.key)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [visible, index, select])

  const { summary } = report

  if (items.length === 0) {
    return (
      <InfoBanner
        type='success'
        title='No visual changes'
        message={`All ${plural(summary.total, 'screenshot')} match their baselines.`}
      />
    )
  }

  return (
    <>
      <Text className={styles.summary}>
        {[
          summary.changed > 0 && plural(summary.changed, 'changed screenshot'),
          summary.new > 0 && plural(summary.new, 'new screenshot'),
        ]
          .filter(Boolean)
          .join(', ')}{' '}
        of {summary.total} compared.
        {report.runUrl && (
          <>
            {' '}
            <Link href={report.runUrl}>CI run</Link>
          </>
        )}
      </Text>
      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <SearchField
            label='Search'
            placeholder='Story name'
            showButton={false}
            value={query}
            onChange={setQuery}
          />
          <RadioGroup
            label='Show'
            orientation='horizontal'
            value={status}
            onChange={value => setStatus(value as StatusFilter)}
          >
            <Radio value='all'>All ({items.length})</Radio>
            <Radio value='changed'>Changed ({summary.changed})</Radio>
            <Radio value='new'>New ({summary.new})</Radio>
          </RadioGroup>
          <FailureList
            groups={groups}
            selectedKey={selected?.key}
            onSelect={select}
          />
        </aside>
        <main className={styles.main}>
          {selected ? (
            <FailureView
              key={selected.key}
              item={selected}
              position={index + 1}
              count={visible.length}
              onPrevious={() => selectOffset(-1)}
              onNext={() => selectOffset(1)}
            />
          ) : (
            <Text>No screenshots match the filters.</Text>
          )}
        </main>
      </div>
    </>
  )
}
