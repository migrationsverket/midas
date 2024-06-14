import React from 'react';
import * as Aria from 'react-aria-components';
import { styled } from '@mvds/theme';
import { TriangleAlert } from 'lucide-react';

interface MVDSRadioGroupProps extends Omit<Aria.RadioGroupProps, 'children'> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: Aria.ValidationResult) => string);
}

export function RadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MVDSRadioGroupProps) {
  return (
    <StyledRadioGroup {...props}>
      <Label>{label}</Label>
      {description && <Text slot="description">{description}</Text>}
      {children}
      <FieldError>
        <>
          <TriangleAlert height={16} width={16} />
          {errorMessage}
        </>
      </FieldError>
    </StyledRadioGroup>
  );
}

/**
 * Radio item
 * */
export const Radio = styled(Aria.Radio, {
  fontSize: '$inputLabel',
  paddingBottom: 9,
  display: 'flex',
  alignItems: 'center',
  gap: '0.5625rem',
  color: '$inputText',
  '&:before': {
    content: '',
    display: 'block',
    width: '1rem',
    height: '1rem',
    boxSizing: 'border-box',
    border: '1px solid $black',
    borderRadius: '1.286rem',
    transition: 'all 200ms',
  },
  '&[data-pressed]:before': {
    borderColor: '#B3B3B3',
  },
  '&[data-selected]': {
    '&:before': {
      padding: '3px',
      borderWidth: '0.1rem',
      background: `$blue150 50% 50% no-repeat content-box`,
    },
    '&[data-pressed]:before': {
      borderColor: '$Gray60',
      background: `$Gray60 50% 50% no-repeat content-box`,
    },
  },
  '&[data-focus-visible]:before': {
    '@md': {
      outlineOffset: '1px',
      outline: '2px solid black',
    },
  },
  '&[data-invalid]': {
    '&:before': {},
  },
  '&[data-disabled]': {
    opacity: '50%',
  },
  '@sm': {
    // height: '2rem',
    // padding: '1rem',
    // border: '1px solid $gray40',
    marginTop: '8px',
    '&[data-focus-visible]': {
      // outline: '2px solid black',
      // outlineOffset: '2px',
      // border: '1px solid black',
    },
  },
});

export const StyledRadioGroup = styled(Aria.RadioGroup, {
  '@sm': {
    paddingLeft: '16px',
    paddingRight: '10%',
    paddingBottom: '16px',
    paddingTop: '16px',
    '&[data-invalid]': {
      backgroundColor: '$signalRed10',
    },
  },
  '@md & @lg': {
    //TODO
  },
  display: 'flex',
  flexDirection: 'column',
  '&[data-disabled]': {
    opacity: '50%',
  },
  '&[data-invalid]': {
    paddingLeft: '1rem',
    borderLeft: '3px solid $signalRed100',
    '@sm': {
      borderLeft: 'none',
    },
  },
});

const FieldError = styled(Aria.FieldError, {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '14px',
  color: '$signalRed100',
  '@sm': {
    marginTop: '0.5rem',
  },
});

export const Label = styled(Aria.Label, {
  fontSize: '$inputLabel',
  fontWeight: '$medium',
  color: '$gray150',
  paddingBottom: 8,
});
const Text = styled(Aria.Text, {
  fontSize: '14px', //hmm
  fontWeight: '$regular',
  paddingBottom: 8,
});
Radio.displayName = 'Radio';
