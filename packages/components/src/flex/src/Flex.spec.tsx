import { render } from '@testing-library/react'

import { Flex } from 'packages/components/src/flex/src/Flex'
import { FlexItem } from 'packages/components/src/flex/src/FlexItem'

describe('Flex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Flex>
        <FlexItem>Item</FlexItem>
      </Flex>
    )
    expect(baseElement).toBeTruthy()
  })
})
