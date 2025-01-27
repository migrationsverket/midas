import { render } from '@testing-library/react'
import { FlexItem, Flex } from './'

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
