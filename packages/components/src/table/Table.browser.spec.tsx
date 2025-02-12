import { render } from '@testing-library/react';

describe('A test div', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<div>test!</div>);
    expect(baseElement).toBeTruthy();
  });
});
