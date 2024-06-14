import { render } from '@testing-library/react';
import { Select } from './select';

describe('Select', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Select placeholder={''} />);
    expect(baseElement).toBeTruthy();
  });
});
