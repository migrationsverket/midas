import { useState, type ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useTreeData, type Key } from 'react-aria-components'
import { optionsWithSections } from '@midas-ds/test-utils'
import { TreeComboBox } from './TreeComboBox'

interface DemoNode {
  id: Key
  name: string
  children?: DemoNode[]
}

const categories = optionsWithSections.slice(0, 4).map(category => ({
  id: category.id,
  name: String(category.name),
  children: category.children.map(fruit => ({
    id: fruit.id,
    name: fruit.name,
  })),
}))

const treeItems: DemoNode[] = [
  { id: 'umbrella-1', name: 'Grupp A', children: categories.slice(0, 2) },
  { id: 'umbrella-2', name: 'Grupp B', children: categories.slice(2, 4) },
]

// RAC's defaultExpandedKeys has no "all" shortcut — branches must be listed
// explicitly, or nested rows (and their checkboxes) stay collapsed until a
// user expands them via the chevron.
const allBranchKeys: Key[] = [
  ...treeItems.map(item => item.id),
  ...categories.map(category => category.id),
]

export default {
  component: TreeComboBox,
  title: 'Components/TreeComboBox',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'A combobox-style field whose popover hosts a real, collapsible Tree with cascading tri-state checkbox selection — not a flattened list. Because react-aria-components’ ComboBox is architecturally hardcoded to a flat listbox (see the component’s own doc comment for the full explanation), this is a custom composite built directly on `Tree`/`useTreeSelection`, not a variant of `ComboBox`.',
      },
    },
  },
} satisfies Meta<typeof TreeComboBox>

type Story = StoryObj<typeof TreeComboBox>

const TreeComboBoxDemo = ({
  defaultCheckedKeys,
  disabledKeys,
  defaultExpandedKeys,
  ...rest
}: {
  defaultCheckedKeys?: Iterable<Key>
  disabledKeys?: Iterable<Key>
  defaultExpandedKeys?: Iterable<Key>
  label?: string
  description?: string
  errorMessage?: string
  isInvalid?: boolean
  isRequired?: boolean
  isDisabled?: boolean
}) => {
  const tree = useTreeData<DemoNode>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  return (
    <TreeComboBox<DemoNode>
      tree={tree}
      getTextValue={item => item.name}
      label='Kategorier'
      placeholder='Sök kategorier'
      defaultCheckedKeys={defaultCheckedKeys}
      disabledKeys={disabledKeys}
      defaultExpandedKeys={defaultExpandedKeys}
      {...rest}
    />
  )
}

export const Primary: Story = {
  render: () => <TreeComboBoxDemo />,
}

export const DefaultCheckedKeys: Story = {
  render: () => (
    <TreeComboBoxDemo
      description='Ananas och Kiwi är förvalda'
      defaultCheckedKeys={['ananas', 'kiwi']}
    />
  ),
}

export const PartiallyCheckedInitialState: Story = {
  render: () => (
    <TreeComboBoxDemo
      description='En av två frukter i "Tropiska frukter" är förvald — kategorin visas som delvis vald'
      defaultCheckedKeys={categories[0].children.slice(0, 1).map(f => f.id)}
      defaultExpandedKeys={allBranchKeys}
    />
  ),
}

export const WithClearAll: Story = {
  render: () => (
    <TreeComboBoxDemo
      description='Fältet visar en räkning när inmatningen är tom och ofökuserad, med en knäpp för att rensa allt'
      defaultCheckedKeys={categories.flatMap(c => c.children.map(f => f.id))}
    />
  ),
}

export const DisabledNode: Story = {
  render: () => (
    <TreeComboBoxDemo
      description='En frukt är inaktiverad — kan varken väljas direkt eller via kategorins kryssruta'
      disabledKeys={
        categories[0].children[0] ? [categories[0].children[0].id] : []
      }
      defaultExpandedKeys={allBranchKeys}
    />
  ),
}

export const Required: Story = {
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: { chromatic: { disableSnapshot: true } },
  render: () => (
    <TreeComboBoxDemo
      isRequired
      description='Presentational only — isInvalid is set manually by the consumer, there is no built-in form validation'
    />
  ),
}

export const Invalid: Story = {
  render: () => (
    <TreeComboBoxDemo
      isInvalid
      errorMessage='Välj minst en kategori'
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <TreeComboBoxDemo
      isDisabled
      defaultCheckedKeys={['ananas']}
    />
  ),
}

const ControlledCheckedKeysDemo = () => {
  const [checkedKeys, setCheckedKeys] = useState<Set<Key>>(new Set())

  const tree = useTreeData<DemoNode>({
    initialItems: treeItems,
    getKey: item => item.id,
    getChildren: item => item.children ?? [],
  })

  const renderCheckedCount = (): ReactNode => (
    <p>Valda lövnoder: {checkedKeys.size}</p>
  )

  return (
    <>
      {renderCheckedCount()}
      <TreeComboBox<DemoNode>
        tree={tree}
        getTextValue={item => item.name}
        label='Kategorier'
        placeholder='Sök kategorier'
        checkedKeys={checkedKeys}
        onCheckedChange={setCheckedKeys}
        defaultExpandedKeys={allBranchKeys}
      />
    </>
  )
}

export const ControlledCheckedKeys: Story = {
  render: () => <ControlledCheckedKeysDemo />,
}
