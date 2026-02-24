import { Tag, TagGroup, TagList } from '@midas-ds/components'

export const DynamicExample = () => {
  const items = [
    { id: 'green', name: 'Green' },
    { id: 'blue', name: 'Blue' },
    { id: 'yellow', name: 'Yellow' },
    { id: 'red', name: 'Red' },
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
