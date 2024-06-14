import { render } from '@testing-library/react';
import { RadioGroup } from './Radio';

describe('Radio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioGroup />);
    expect(baseElement).toBeTruthy();
  });
});
