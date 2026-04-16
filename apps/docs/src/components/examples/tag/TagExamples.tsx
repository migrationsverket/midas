import { Tag, TagGroup, TagList, type TagProps } from '@midas-ds/components'

export const DynamicExample = () => {
  const items: { id: TagProps['color']; name: string }[] = [
    { id: 'blue', name: 'Blue' },
    { id: 'green', name: 'Green' },
    { id: 'lagoonblue', name: 'Lagoonblue' },
    { id: 'orange', name: 'Orange' },
    { id: 'purple', name: 'Purple' },
    { id: 'red', name: 'Red' },
    { id: 'teal', name: 'Teal' },
    { id: 'yellow', name: 'Yellow' },
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
