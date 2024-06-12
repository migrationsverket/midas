import {
  Link as AriaLink,
  LinkProps,
  RouterProvider,
} from 'react-aria-components';
import { styled } from '@mvds/theme';

/**
 * Link will take you anywhere
 * */
const StyledLink = styled(AriaLink, {
  all: 'unset',
  display: 'inline-block',
  boxSizing: 'border-box',
  textAlign: 'center',
  textDecoration: 'none',
  lineHeight: '48px',
  fontFamily: '$display',
  fontSize: '$type-body-font-size-desktop',
  margin: 0,
  minHeight: '48px', // axe
  paddingLeft: '2rem',
  paddingRight: '2rem',
  fontWeight: '$fontWeight$regular',
  backgroundColor: '$blue150',
  border: 'solid 0.0625rem transparent',
  color: '$white',
  cursor: 'pointer',
  opacity: '1',
  outline: 'none',
  '&:hover': {
    backgroundColor: '$blue130',
    textDecoration: 'none',
    color: '$white',
  },
  '&[data-pressed]': {
    backgroundColor: '$blue90',
    outline: 'none',
  },
  '&[data-focus-visible]': {
    outline: '2px solid black',
    outlineOffset: '2px',
  },
  variants: {
    /** Primary or secondary color
     * @default primary
     * */
    variant: {
      primary: {
        '&[data-disabled]': {
          color: '$gray50',
          pointerEvents: 'none',
          backgroundColor: '$gray10',
        },
      },
      secondary: {
        color: '$blue150',
        backgroundColor: '$white',
        border: '0.063rem solid $blue150',
        fontWeight: '$medium',
        opacity: '1',
        '&:hover': { backgroundColor: '$gray10', color: '$blue150' },
        '&[data-disabled]': {
          color: '$gray50',
          pointerEvents: 'none',
          backgroundColor: '$white',
          border: '0.063rem solid',
        },
        '&[data-pressed]': {
          backgroundColor: '$gray20',
          border: '1px solid $blue150',
        },
        '&[data-focus-visible]': {
          outline: '2px solid $blue150',
          outlineOffset: '2px',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
  '@sm': {
    width: '100%',
    minWidth: '100%',
    maxWidth: '90%',
  },
});

export const Link = (
  props: LinkProps & {
    /** Link button color
     *  @default "primary"
     *  */
    variant?: 'primary' | 'secondary';
  }
) => <StyledLink {...props} />;

export { RouterProvider };
