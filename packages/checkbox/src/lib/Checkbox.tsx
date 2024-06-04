import React from 'react';
import { styled, theme } from '@mvds/theme';
import type { CheckboxProps as AriaCheckboxProps } from 'react-aria-components';
import { Checkbox as AriaCheckbox } from 'react-aria-components';

export interface CheckboxProps extends Omit<AriaCheckboxProps, 'children'> {
  children?: React.ReactNode;
}

export const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return (
    <StyledAriaCheckbox {...props}>
      {({ isIndeterminate }) => (
        <>
          <StyledDiv aria-hidden="true">
            <svg viewBox="0 0 18 18" role={'img'}>
              {isIndeterminate ? (
                <rect x={2} y={8} width={14} height={2} />
              ) : (
                <polyline points="2 9 7 14 16 4" />
              )}
            </svg>
          </StyledDiv>
          {children}
        </>
      )}
    </StyledAriaCheckbox>
  );
};

// "box"
const StyledDiv = styled('div', {
  width: '1.125rem',
  height: '1.125rem',
  boxSizing: 'border-box',
  border: '1px solid black',
  transition: 'all 200ms',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'red',
  forcedColorAdjust: 'none',
  display: 'flex',
  '& svg': {
    width: '1rem',
    height: '1rem',
    fill: 'none',
    stroke: '$$checkmarkColor',
    strokeWidth: '2px',
    strokeDasharray: '22',
    strokeDashoffset: 66,
    transition: 'all 200ms',
  },
});

// wrapper
const StyledAriaCheckbox = styled(AriaCheckbox, {
  $$borderColorPressed: '#b1b0b0',
  $$focusRingColor: theme.colors['black'],
  $$selectedColor: theme.colors['primaryBackground'],
  $$selectedPressed: theme.colors['blue80'],
  $$selectedHover: theme.colors['blue130'],
  $$invalidColor: theme.colors['signalRed100'],
  $$invalidPressed: theme.colors['signalRed130'],
  $$checkmarkColor: theme.colors['white'],

  '@sm': {
    border: '1px solid $gray40',
    '&[data-invalid]': {
      borderColor: 'red',
    },
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '14px',
    paddingBottom: '14px',
    minWidth: '198px',
    '&[data-focus-visible]': {
      outline: '2px solid black', //  this might be needed or not, depending on how we validate group vs individual checkbox
      outlineOffset: '2px',
    },
  },
  gap: '0.571rem',
  alignItems: 'center',
  fontSize: '14px',
  forcedColorAdjust: 'none',
  display: 'flex',
  '&:hover': {
    '& div': {
      borderColor: '$gray100',
    },
  },
  '&[data-pressed]': {
    '& div': {
      borderColor: '$$borderColorPressed',
    },
  },
  '&[data-focus-visible]': {
    '& div': {
      outline: '1px solid $$focusRingColor',
      outlineOffset: '2px',
      '@sm': {
        outline: 'none',
      },
    },
  },
  '&[data-selected], &[data-indeterminate]': {
    '& div': {
      background: '$$selectedColor',
      borderColor: '$$selectedColor',
      '&:hover': {
        background: '$$selectedHover',
        borderColor: '$$selectedHover',
      },
    },
    '&[data-pressed]': {
      '& div': {
        borderColor: '$blue100',
        background: '$blue100',
      },
    },
    '& svg': {
      strokeDashoffset: 44,
    },
  },
  '&[data-indeterminate]': {
    '& svg': {
      stroke: 'none',
      fill: '$$checkmarkColor',
    },
  },
  '&[data-invalid]': {
    '& div': {
      border: '2px solid $signalRed100',
      '@sm': {
        border: '1px solid black',
      },
      '&:hover': {
        opacity: '0.5',
        borderColor: '$$invalidColor',
      },
    },
    '&[data-pressed]': {
      '& div': {
        borderColor: '$$invalidPressed',
      },
    },
  },
  '&[data-disabled]': {
    color: '$gray50',
    '& div': {
      pointerEvents: 'none',
      border: `1px solid $gray20`,
      background: '$gray20',
    },
  },
});
