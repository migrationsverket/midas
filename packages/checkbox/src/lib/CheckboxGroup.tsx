import { styled } from '@mvds/theme';
import {
  CheckboxGroup as AriaCheckboxGroup,
  CheckboxGroupProps as AriaCheckboxGroupProps,
  FieldError,
  Text,
  ValidationResult,
} from 'react-aria-components';
import React from 'react';
import { TriangleAlert } from 'lucide-react';

export interface CheckboxGroupProps
  extends Omit<AriaCheckboxGroupProps, 'children'> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export const CheckboxGroup = ({
  label,
  description,
  errorMessage,
  children,
  ...props
}: CheckboxGroupProps) => {
  return (
    <StyledAriaCheckboxGroup {...props}>
      {({ isInvalid }) => (
        <>
          {label}
          {description && <Text slot="description">{description}</Text>}
          {children}
          <span>
            {isInvalid ? (
              <TriangleAlert width={16} height={16} color={'#e62323'} />
            ) : (
              <span></span>
            )}
            <FieldError className={'field-error'}>{errorMessage}</FieldError>
          </span>
        </>
      )}
    </StyledAriaCheckboxGroup>
  );
};

FieldError.toString = () => '.field-error';
const StyledAriaCheckboxGroup = styled(AriaCheckboxGroup, {
  '@sm': {
    paddingLeft: '1rem',
    paddingRight: '10%',
    paddingBottom: '1rem',
    paddingTop: '1rem',
    '&[data-invalid]': {
      backgroundColor: '$signalRed10',
    },
  },
  '& span': {
    display: 'flex',
    alignItems: 'center',
    gap: '9px',
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  fontWeight: '$medium',
  fontSize: '1rem',
  '& FieldError': {
    color: 'green',
  },
  '[slot=description]': {
    fontSize: '14px',
  },
  '&[data-invalid]': {
    paddingLeft: '1rem',
    borderLeft: '3px solid $signalRed100',
    '@sm': {
      borderLeft: 'none',
    },
  },
  '&[data-disabled]': {
    color: '$gray50',
  },
  [`& ${FieldError}`]: {
    fontSize: '14px',
    color: '$signalRed100',
  },
});
