import { useRef } from 'react'
import { describe, expect, it } from 'vitest'
import { page, userEvent } from 'vitest/browser'
import { FocusScope } from 'react-aria'
import { Input, SearchField, type Key } from 'react-aria-components'
import { render } from '../../test-utils'
import { useTreeFocusBridge } from './useTreeFocusBridge'
import { Tree } from './Tree'
import { TreeItem } from './TreeItem'

interface DemoNode {
  id: Key
  name: string
  children?: DemoNode[]
}

const demoItems: DemoNode[] = [
  { id: 'ananas', name: 'Ananas' },
  { id: 'banan', name: 'Banan' },
]

// useFocusManager() reads a context set up by <FocusScope>'s own children —
// it must be called from a component nested *inside* FocusScope, not the
// component that renders FocusScope itself (that component sits outside its
// own provider in the tree). Mirrors Tree.stories.tsx's FilterableTree.
const FocusBridgeDemoContent = () => {
  const treeRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { inputKeyboardProps, treeKeyboardProps } = useTreeFocusBridge({
    treeRef,
    inputRef,
  })

  const renderNode = (node: DemoNode) => (
    <TreeItem
      key={node.id}
      id={node.id}
      textValue={node.name}
      content={node.name}
    >
      {node.children?.map(renderNode)}
    </TreeItem>
  )

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
          {demoItems.map(renderNode)}
        </Tree>
      </div>
    </>
  )
}

const FocusBridgeDemo = () => (
  <FocusScope>
    <FocusBridgeDemoContent />
  </FocusScope>
)

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
