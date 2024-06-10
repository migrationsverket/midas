import { render } from '@testing-library/react';

import Flex from './Flex';
import FlexItem from './FlexItem';

describe('Flex', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Flex>
        <FlexItem>Item</FlexItem>
      </Flex>
    );
    expect(baseElement).toBeTruthy();
  });
});
