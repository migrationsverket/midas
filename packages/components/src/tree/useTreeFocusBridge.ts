import type { RefObject } from 'react'
import { useKeyboard } from 'react-aria'

export interface UseTreeFocusBridgeOptions {
  /** Ref to the tree's root element (e.g. `<Tree ref={treeRef}>`). */
  treeRef: RefObject<HTMLElement | null>
  /** Ref to the search input. */
  inputRef: RefObject<HTMLInputElement | null>
}

export interface UseTreeFocusBridgeResult {
  /** Spread onto the search input. */
  inputKeyboardProps: ReturnType<typeof useKeyboard>['keyboardProps']
  /** Spread onto the tree's root element (or a wrapper around it). */
  treeKeyboardProps: ReturnType<typeof useKeyboard>['keyboardProps']
}

/**
 * Moves real DOM focus between a search input and a `Tree`, since RAC's
 * `<Autocomplete>`/`<ComboBox>` — which use `aria-activedescendant` and
 * "virtual" focus instead — don't support `Tree` as a collection (checked
 * against react-aria-components 1.20.0: `shouldUseVirtualFocus` isn't wired
 * into any of Tree's internals, unlike ListBox/Menu/GridList/Table; see the
 * plan linked from Tree.stories.tsx). Once focus is actually inside `Tree`,
 * every other keyboard behavior — arrows, Home/End, typeahead, Left/Right
 * expand/collapse — is `Tree`'s own existing, unmodified native handling.
 *
 * Entering the tree is just `treeRef.current?.focus()` — Tree's root carries
 * `tabindex="0"` until a row has been focused (confirmed empirically: RAC
 * hands real DOM focus straight to the first *focusable* row, correctly
 * skipping a disabled one, via its own roving-tabindex bookkeeping, the same
 * thing that already powers Tab-into-Tree). No `focusManager`/`FocusScope`
 * needed for this — which also means it isn't limited to one shared
 * `FocusScope`: `treeRef` is a plain DOM ref, so this still works when
 * `Tree` is mounted inside a portalled overlay (e.g. a non-modal `Popover`)
 * that the input sits outside of.
 *
 * Built from `useKeyboard` rather than a raw `onKeyDown` chain — the same
 * primitive `useSelectableCollection` itself uses internally for collection
 * keyboard handling.
 *
 * Doesn't touch filtering or popover chrome (open/close state, outside-click
 * dismissal) — compose with `useFilteredTree` and your own trigger/popover
 * as needed.
 */
export const useTreeFocusBridge = ({
  treeRef,
  inputRef,
}: UseTreeFocusBridgeOptions): UseTreeFocusBridgeResult => {
  const { keyboardProps: inputKeyboardProps } = useKeyboard({
    shortcuts: {
      ArrowDown: e => {
        e.preventDefault()
        treeRef.current?.focus()
      },
    },
  })

  const { keyboardProps: treeKeyboardProps } = useKeyboard({
    shortcuts: {
      Escape: () => inputRef.current?.focus(),
    },
  })

  return { inputKeyboardProps, treeKeyboardProps }
}
