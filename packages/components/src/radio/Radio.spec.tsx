import { render } from '@testing-library/react';
import { RadioGroup } from './';

describe('Radio', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioGroup label={'Välj ett av följande alternativ'}/>);
    expect(baseElement).toBeTruthy();
  });
});
