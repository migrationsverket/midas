import { useCallback, useEffect, useState } from 'react'
import type { VisualReport } from '@midas-ds/visual-report'
import { fetchReport, type ReportSource } from './report'

export type ReportState =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; report: VisualReport; url: URL }

export function useReport(source: ReportSource): ReportState {
  const [state, setState] = useState<ReportState>(
    'error' in source
      ? { status: 'error', message: source.error }
      : { status: 'loading' },
  )

  const url = 'url' in source ? source.url.href : undefined

  useEffect(() => {
    if (!url) return
    let cancelled = false
    fetchReport(new URL(url))
      .then(report => {
        if (!cancelled) setState({ status: 'ready', report, url: new URL(url) })
      })
      .catch((error: unknown) => {
        if (!cancelled) {
          setState({
            status: 'error',
            message:
              error instanceof Error ? error.message : 'Something went wrong.',
          })
        }
      })
    return () => {
      cancelled = true
    }
  }, [url])

  return state
}

const readHash = () => decodeURIComponent(window.location.hash.slice(1))

/** The selected screenshot, kept in the URL hash so it can be linked to */
export function useHashKey() {
  const [key, setKey] = useState(readHash)

  useEffect(() => {
    const onHashChange = () => setKey(readHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const select = useCallback((next: string) => {
    setKey(next)
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${encodeURIComponent(next).replace('%2F', '/')}`,
    )
  }, [])

  return [key, select] as const
}
