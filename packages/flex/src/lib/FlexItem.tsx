import { styled } from '@mvds/theme';
import { ReactNode } from 'react';
import type * as Stitches from '@stitches/react';

export interface FlexItemProps
  extends Stitches.VariantProps<typeof StyledFlexItem> {
  children: ReactNode;
}

const StyledFlexItem = styled('div', {
  $$column: 6,
  $$gutter: '1rem',

  flex: '1 0 0%',

  variants: {
    col: {
      1: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '8.3333333%',
        },
      },
      2: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '16.6666667%',
        },
      },
      3: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '25%',
        },
      },
      4: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '33.33333333%',
        },
      },
      5: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '41.66666667%',
        },
      },
      6: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '50%',
        },
      },
      7: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '58.33333333%',
        },
      },
      8: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '66.66666667%',
        },
      },
      9: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '75%',
        },
      },
      10: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '83.3333333%',
        },
      },
      11: {
        flex: '0 0 auto',
        width: '100%',
        '@md': {
          width: '91.66666667%',
        },
      },
      12: {
        flex: '0 0 auto',
        width: '100%',
      },
      auto: {
        flex: '0 0 auto',
        width: 'auto',
      },
    },
  },
});

export function FlexItem(props: FlexItemProps) {
  return <StyledFlexItem>{props.children}</StyledFlexItem>;
}

export default FlexItem;
