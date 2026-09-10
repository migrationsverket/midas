import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { describe, expect, it } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import { Input, SearchField, type Key } from 'react-aria-components'
import { useKeyboard } from 'react-aria'
import { render } from '../../test-utils'
import { useTreeFocusBridge } from './useTreeFocusBridge'
import { Tree } from './Tree'
import { TreeItem } from './TreeItem'
import { Popover } from '../popover'

interface DemoNode {
  id: Key
  name: string
  children?: DemoNode[]
}

const demoItems: DemoNode[] = [
  { id: 'ananas', name: 'Ananas' },
  { id: 'banan', name: 'Banan' },
]

const renderDemoNode = (node: DemoNode) => (
  <TreeItem
    key={node.id}
    id={node.id}
    textValue={node.name}
    content={node.name}
  >
    {node.children?.map(renderDemoNode)}
  </TreeItem>
)

const FocusBridgeDemo = () => {
  const treeRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { inputKeyboardProps, treeKeyboardProps } = useTreeFocusBridge({
    treeRef,
    inputRef,
  })

  return (
    <>
      <SearchField aria-label='Filter'>
        <Input {...inputKeyboardProps} ref={inputRef} />
      </SearchField>
      <div {...treeKeyboardProps}>
        <Tree
          ref={treeRef}
          aria-label='Demo'
          selectionMode='none'
        >
          {demoItems.map(renderDemoNode)}
        </Tree>
      </div>
    </>
  )
}

// Stands in for a non-modal Popover: React portals the tree into a
// *different DOM subtree* than the input, same as an overlay portalled to
// document.body. `useTreeFocusBridge` doesn't rely on FocusScope/context, so
// a plain `treeRef.current?.focus()` should still reach across this boundary
// — unlike a `useFocusManager()`-based approach, which is scoped to whatever
// FocusScope contains the *caller*, not wherever `treeRef` happens to live.
const FocusBridgeDemoAcrossPortal = () => {
  const treeRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [portalTarget, setPortalTarget] = useState<HTMLDivElement | null>(
    null,
  )

  const { inputKeyboardProps, treeKeyboardProps } = useTreeFocusBridge({
    treeRef,
    inputRef,
  })

  return (
    <>
      <SearchField aria-label='Filter'>
        <Input {...inputKeyboardProps} ref={inputRef} />
      </SearchField>
      <div ref={setPortalTarget} />
      {portalTarget &&
        createPortal(
          <div {...treeKeyboardProps}>
            <Tree
              ref={treeRef}
              aria-label='Demo'
              selectionMode='none'
            >
              {demoItems.map(renderDemoNode)}
            </Tree>
          </div>,
          portalTarget,
        )}
    </>
  )
}

describe('given useTreeFocusBridge wired to a real input and Tree', async () => {
  it('moves real focus into the tree on ArrowDown from the input', async () => {
    const { getByRole } = await render(<FocusBridgeDemo />)

    const input = getByRole('searchbox')
    await input.click()
    await userEvent.keyboard('[ArrowDown]')

    await expect.element(page.getByRole('row', { name: 'Ananas' })).toHaveFocus()
  })

  it('lets Tree handle further navigation natively once focus is inside it', async () => {
    const { getByRole } = await render(<FocusBridgeDemo />)

    await getByRole('searchbox').click()
    await userEvent.keyboard('[ArrowDown]')
    // Settle on the first row before the second keypress — Tree's own
    // native handling only takes over once focus has actually landed there.
    await expect.element(page.getByRole('row', { name: 'Ananas' })).toHaveFocus()

    await userEvent.keyboard('[ArrowDown]')
    await expect.element(page.getByRole('row', { name: 'Banan' })).toHaveFocus()
  })

  it('returns focus to the input on Escape', async () => {
    const { getByRole } = await render(<FocusBridgeDemo />)

    const input = getByRole('searchbox')
    await input.click()
    await userEvent.keyboard('[ArrowDown]')
    await expect.element(page.getByRole('row', { name: 'Ananas' })).toHaveFocus()

    await userEvent.keyboard('[Escape]')
    await expect.element(input).toHaveFocus()
  })
})

describe('given useTreeFocusBridge with the tree portalled outside the input (e.g. a non-modal Popover)', async () => {
  it('still moves real focus into the tree on ArrowDown', async () => {
    const { getByRole } = await render(<FocusBridgeDemoAcrossPortal />)

    await getByRole('searchbox').click()
    await userEvent.keyboard('[ArrowDown]')

    await expect.element(page.getByRole('row', { name: 'Ananas' })).toHaveFocus()
  })
})

// The real composition (not a stand-in): a closed-by-default, non-modal
// Popover the input opens on ArrowDown. First ArrowDown press only opens it
// (matches derp's TreeComboBox — opening shouldn't also yank focus off the
// input mid-navigation); a second ArrowDown, once open, moves focus in.
const PopoverFocusBridgeDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const treeRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const { inputKeyboardProps, treeKeyboardProps } = useTreeFocusBridge({
    treeRef,
    inputRef,
  })

  const { keyboardProps: openOnArrowDownKeyboardProps } = useKeyboard({
    shortcuts: {
      ArrowDown: () => {
        if (!isOpen) setIsOpen(true)
      },
    },
  })

  return (
    <>
      <SearchField aria-label='Filter'>
        <Input
          ref={inputRef}
          onKeyDown={e => {
            openOnArrowDownKeyboardProps.onKeyDown?.(e)
            inputKeyboardProps.onKeyDown?.(e)
          }}
        />
      </SearchField>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(open => !open)}
      >
        Toggle
      </button>
      <Popover
        isNonModal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        triggerRef={triggerRef}
        hideArrow
      >
        <div {...treeKeyboardProps}>
          <Tree
            ref={treeRef}
            aria-label='Demo'
            selectionMode='none'
          >
            {demoItems.map(renderDemoNode)}
          </Tree>
        </div>
      </Popover>
    </>
  )
}

describe('given useTreeFocusBridge composed behind a real non-modal Popover', async () => {
  it('opens on the first ArrowDown without moving focus off the input', async () => {
    const { getByRole } = await render(<PopoverFocusBridgeDemo />)

    const input = getByRole('searchbox')
    await input.click()
    await userEvent.keyboard('[ArrowDown]')

    await expect.element(page.getByRole('treegrid')).toBeVisible()
    await expect.element(input).toHaveFocus()
  })

  it('moves focus into the tree on a second ArrowDown once open', async () => {
    const { getByRole } = await render(<PopoverFocusBridgeDemo />)

    await getByRole('searchbox').click()
    await userEvent.keyboard('[ArrowDown]')
    await expect.element(page.getByRole('treegrid')).toBeVisible()

    await userEvent.keyboard('[ArrowDown]')

    await expect.element(page.getByRole('row', { name: 'Ananas' })).toHaveFocus()
  })
})
