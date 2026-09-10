import type { RefObject } from 'react'
import { useFocusManager, useKeyboard } from 'react-aria'

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
 * Built from `useKeyboard`/`useFocusManager` rather than a raw
 * `onKeyDown`/`querySelector` — the same primitives `useSelectableCollection`
 * itself uses internally for collection keyboard handling.
 *
 * Requires a `<FocusScope>` ancestor (for `useFocusManager`). Doesn't touch
 * filtering, open/close state, or popover chrome — compose with
 * `useFilteredTree` and your own trigger/popover as needed.
 */
export const useTreeFocusBridge = ({
  treeRef,
  inputRef,
}: UseTreeFocusBridgeOptions): UseTreeFocusBridgeResult => {
  const focusManager = useFocusManager()

  const { keyboardProps: inputKeyboardProps } = useKeyboard({
    shortcuts: {
      ArrowDown: e => {
        e.preventDefault()
        // focusFirst() ignores `from` entirely (only focusNext/focusPrevious
        // accept it) and always jumps to the absolute first focusable element
        // in the whole FocusScope — the search input itself, since it comes
        // first in DOM order. focusNext({ from: treeRef.current }) walks
        // forward *from* the tree's own root instead, landing on its first row.
        focusManager?.focusNext({
          from: treeRef.current ?? undefined,
          tabbable: false,
        })
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
