import { ReactNode } from 'react';
import { styled } from '@mvds/theme';

export interface FlexProps {
  children: ReactNode;
}

const StyledFlex = styled('div', {
  $$columns: '1',
  $$margin: '1rem',
  $$gutter: '1rem',

  paddingRight: '$$margin',
  paddingLeft: '$$margin',

  display: 'flex',
  flexFlow: 'row wrap',
  gap: '$gap',

  '> *': {
    flex: '0 0 auto',
    width: 'calc((100% / $$columns) - $$gutter + ($$gutter / $$columns))',
  },

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
  marginRight: 'auto',
  marginLeft: 'auto',
  '@xl': {
    maxWidth: 1368,
  },
});

/**
 * Grid baserat på display: flex;
 * Använder en uträkning i flex för att få rätt antal kolumner per breakpoint.
 *
 * ### Children
 * Utan ytterligare flex-regler lägger sig childs efter 12 kolumner men 1 i mobilt läge.
 * Använd komponenten FlexItem för att hantera objekt i olika kolumner. FlexItem accepterar värden från 1 - 12 och auto. Dessa räknas sedan ut beroende på bestämmelser kring kolumner i olika breakpoints.
 */

export function Flex(props: FlexProps) {
  return (
    <Container>
      <StyledFlex>{props.children}</StyledFlex>
    </Container>
  );
}

export default Flex;
