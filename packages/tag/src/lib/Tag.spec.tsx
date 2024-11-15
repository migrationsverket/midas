import { render } from '@testing-library/react'

import { Tag, TagGroup } from './Tag'

describe('Tag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TagGroup>
         <Tag>Item A</Tag>
      </TagGroup>
       
     
    )
    expect(baseElement).toBeTruthy()
  })
})
