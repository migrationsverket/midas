import { act as reactAct } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { renderHook } from 'vitest-browser-react'
import { useCopyToClipboard } from './useCopyToClipboard'

/** A writeText call that finishes when the test says so */
const deferred = () => {
  let resolve!: () => void
  let reject!: (error: unknown) => void
  const promise = new Promise<void>((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

let writeText: ReturnType<typeof vi.fn>

/**
 * React's act(), flagged as a test environment while it runs, like
 * vitest-browser-react does around its own renders but doesn't export
 */
const act = async (callback: () => unknown) => {
  const env = globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }
  env.IS_REACT_ACT_ENVIRONMENT = true
  try {
    await reactAct(async () => {
      await callback()
    })
  } finally {
    env.IS_REACT_ACT_ENVIRONMENT = false
  }
}

beforeEach(() => {
  writeText = vi.fn().mockResolvedValue(undefined)
  vi.spyOn(navigator, 'clipboard', 'get').mockReturnValue({
    writeText,
  } as unknown as Clipboard)
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
})

describe('given useCopyToClipboard', () => {
  it('says copied even if onCopy throws, and passes the error on', async () => {
    const error = new Error('Analytics is down')
    const { result } = await renderHook(() =>
      useCopyToClipboard({
        onCopy: () => {
          throw error
        },
      }),
    )

    await act(() => expect(result.current.copy('1234')).rejects.toBe(error))

    expect(result.current.status).toBe('copied')
  })

  it('shows the latest copy, even when an earlier one finishes after it', async () => {
    const first = deferred()
    const second = deferred()
    writeText
      .mockReturnValueOnce(first.promise)
      .mockReturnValueOnce(second.promise)
    const { result } = await renderHook(() => useCopyToClipboard())

    await act(async () => {
      const copies = [result.current.copy('1'), result.current.copy('2')]
      second.resolve()
      first.reject(new DOMException('Denied', 'NotAllowedError'))
      await Promise.all(copies)
    })

    expect(result.current.status).toBe('copied')
  })

  it("doesn't let an earlier copy's timer cut the latest one short", async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] })
    const second = deferred()
    writeText
      .mockResolvedValueOnce(undefined)
      .mockReturnValueOnce(second.promise)
    const { result } = await renderHook(() =>
      useCopyToClipboard({ resetAfter: 1000 }),
    )

    let latest!: Promise<void>
    await act(async () => {
      const earlier = result.current.copy('1')
      latest = result.current.copy('2')
      await earlier
    })
    await act(async () => {
      vi.advanceTimersByTime(600)
      second.resolve()
      await latest
    })
    // 1100 ms after the first copy, 500 ms after the latest finished
    await act(() => vi.advanceTimersByTime(500))

    expect(result.current.status).toBe('copied')
  })

  it('leaves no timer behind when unmounted before the copy finishes', async () => {
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] })
    const write = deferred()
    writeText.mockReturnValueOnce(write.promise)
    const { result, unmount } = await renderHook(() => useCopyToClipboard())

    const copy = result.current.copy('1234')
    await unmount()
    write.resolve()
    await copy

    expect(vi.getTimerCount()).toBe(0)
  })
})
