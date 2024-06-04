import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox, CheckboxProps } from './Checkbox';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

describe('given a default Checkbox', () => {
  // setup
  let rendered: RenderResult;
  let checkbox: HTMLElement;

  beforeEach(() => {
    rendered = render(<CheckboxTest></CheckboxTest>);
    checkbox = rendered.getByRole('checkbox');
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

const CheckboxTest = (props: CheckboxProps) => (
  <Checkbox aria-label={'basic checkbox'} {...props}>
    Click
  </Checkbox>
);
