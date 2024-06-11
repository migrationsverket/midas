import { ReactNode } from 'react';
import { styled } from '@mvds/theme';

export interface GridProps {
  /** Använd "grid-column: span $antalKollumner';" för att låta en child växa över fler kolumner. */
  children: ReactNode;
}

const StyledGrid = styled('div', {
  $$columns: '1',
  $$margin: '1rem',
  $$gutter: '1rem',

  paddingRight: '$$margin',
  paddingLeft: '$$margin',

  display: 'grid',
  gap: '$$gutter',
  gridTemplate: 'auto / repeat($$columns, minmax(0, 1fr))',

  '@md': {
    $$columns: '12',
    $$margin: '2rem',
  },

  '@lg': {
    $$gutter: '1.5rem',
  },

  '@xl': {
    $$margin: 0,
  },
});

const Container = styled('div', {
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@xl': {
    maxWidth: 1368,
  },
});

/**
 * Grid baserat på display: grid;
 * Använder grid-template för att bygga rätt antal kolumner per breakpoint.
 *
 * ### Children
 * Använd "grid-column: span $antalKollumner';" för att låta en child växa över flera kolumner.
 */

export function Grid(props: GridProps) {
  return (
    <Container>
      <StyledGrid>{props.children}</StyledGrid>
    </Container>
  );
}

export default Grid;
