import '@testing-library/jest-dom';
import { render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { ButtonProps } from 'react-aria-components';
import { Link } from './Link';
expect.extend(toHaveNoViolations);

describe('given a default link', () => {
  let rendered: RenderResult;
  let handleChange: jest.Mock;
  let link: HTMLElement;

  beforeEach(() => {
    rendered = render(<LinkTest onPress={handleChange}></LinkTest>);
    link = rendered.getByRole('link');
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

const LinkTest = (props: ButtonProps) => <Link {...props}>Click</Link>;
