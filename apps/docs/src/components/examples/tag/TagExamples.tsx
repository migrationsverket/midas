import { Tag, TagGroup, TagList, type TagProps } from '@midas-ds/components'

export const DynamicExample = () => {
  const items: { id: TagProps['color']; name: string }[] = [
    { id: 'sky', name: 'Sky' },
    { id: 'mint', name: 'Mint' },
    { id: 'cream', name: 'Cream' },
    { id: 'teal', name: 'Teal' },
    { id: 'lagoon', name: 'Lagoon' },
    { id: 'lavender', name: 'Lavender' },
    { id: 'peach', name: 'Peach' },
    { id: 'pippin', name: 'Pippin' },
  ]

  return (
    <div className='card'>
      <TagGroup aria-label='Taggar'>
        <TagList items={items}>
          {item => (
            <Tag
              id={item.id}
              color={item.id}
            >
              {item.name}
            </Tag>
          )}
        </TagList>
      </TagGroup>
    </div>
  )
}
