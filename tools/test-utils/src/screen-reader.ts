import { virtual } from '@guidepup/virtual-screen-reader'

// Helpers for screen reader regression tests. They use a simulated screen
// reader built on the ARIA specs, not NVDA, so they catch changes in what is
// exposed (names, descriptions, states, reading order, live regions), not how
// a specific screen reader phrases it. See docs/screen-reader-testing-plan.md

/** A walk that never wraps back to the start stops here instead of looping */
const MAX_STEPS = 500

/** How long to wait for live region announcements to stop coming in */
const SETTLE_MS = 150
const SETTLE_TIMEOUT_MS = 2000

/**
 * Reads everything in `container` with "next item", the way a screen reader
 * user in browse mode would, and returns what is said, one phrase per item
 */
export async function readAll(container: HTMLElement): Promise<string[]> {
  await virtual.start({ container })
  try {
    // A node can be read twice ("listitem" and "end of listitem"), so the
    // start is matched on node and phrase
    const firstNode = virtual.activeNode
    const firstPhrase = await virtual.lastSpokenPhrase()

    for (let step = 0; step < MAX_STEPS; step++) {
      await virtual.next()
      if (
        virtual.activeNode === firstNode &&
        (await virtual.lastSpokenPhrase()) === firstPhrase
      ) {
        // The last phrase is the first item again, read after wrapping
        return (await virtual.spokenPhraseLog()).slice(0, -1)
      }
    }

    throw new Error(
      `readAll: the screen reader didn't wrap back to the start within ${MAX_STEPS} steps`,
    )
  } finally {
    await virtual.stop()
  }
}

/**
 * Runs `action` and returns the live region announcements it causes, e.g.
 * `['polite: Uppladdning klar: resume.pdf']`. Only announcements, not what
 * the user navigates to
 */
export async function collectAnnouncements(
  container: HTMLElement,
  action: () => unknown,
): Promise<string[]> {
  await virtual.start({ container })
  try {
    const before = (await virtual.spokenPhraseLog()).length
    await action()
    const log = await settle()
    return log.slice(before).filter(isAnnouncement)
  } finally {
    await virtual.stop()
  }
}

const isAnnouncement = (phrase: string) =>
  phrase.startsWith('polite: ') || phrase.startsWith('assertive: ')

/** Waits until no new phrases have come in for a while */
async function settle() {
  const deadline = Date.now() + SETTLE_TIMEOUT_MS
  let log = await virtual.spokenPhraseLog()
  while (Date.now() < deadline) {
    await new Promise(resolve => setTimeout(resolve, SETTLE_MS))
    const next = await virtual.spokenPhraseLog()
    if (next.length === log.length) return next
    log = next
  }
  return log
}
