import '@testing-library/jest-dom';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Card, { CardProps } from './Card';
expect.extend(toHaveNoViolations);

describe('given a default card', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <CardTest title={'Rubrik'} content={'Lorem ipsum'}></CardTest>
    );
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

describe('given a card with background', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <CardTest title={'Rubrik'} content={'Lorem ipsum'} background />
    );
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});

// TODO: maybe add proper image
describe('given a card with image', () => {
  let rendered: RenderResult;

  beforeEach(() => {
    rendered = render(
      <CardTest
        title={'Rubrik'}
        content={'Lorem ipsum'}
        image={{ source: '', description: '' }}
      />
    );
  });

  it('should have no accessibility violations', async () => {
    expect(await axe(rendered.container)).toHaveNoViolations();
  });
});
describe('given a clickable card', () => {
  let rendered: RenderResult;
  const handleClick = jest.fn();
  let card: HTMLElement;

  beforeEach(() => {
    rendered = render(
      <CardTest
        title={'Rubrik'}
        content={'Lorem ipsum'}
        onPress={handleClick}
      />
    );
    card = rendered.getByText('Rubrik');
    fireEvent.click(card);
  });

  it('should trigger function when card is clicked', async () => {
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

const CardTest = (props: CardProps) => <Card {...props} />;
