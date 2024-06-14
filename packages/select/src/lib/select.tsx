import type {
  ListBoxItemProps,
  SelectProps as AriaSelectProps,
  ValidationResult,
} from 'react-aria-components';
import {
  FieldError,
  Text,
  Select as AriaSelect,
  Label,
  Button,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
} from 'react-aria-components';
import React from 'react';
import { styled } from '@mvds/theme';
import { TriangleAlert } from 'lucide-react';

export interface SelectProps<T extends object>
  extends Omit<AriaSelectProps<T>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function Select<T extends object>({
  label,
  description,
  errorMessage,
  children,
  items,
  isDisabled,
  ...props
}: SelectProps<T>) {
  return (
    <StyledAriaSelect {...props}>
      <Label>{label}</Label>
      {description && <Text slot="description">{description}</Text>}
      <StyledButton>
        <SelectValue />
        <span aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height={'12'}
            fill={isDisabled ? '#BFBFBF' : '#000000'}
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </span>
      </StyledButton>
      <StyledFieldError>
        <>
          <TriangleAlert height={16} width={16} />
          {errorMessage}
        </>
      </StyledFieldError>
      <StyledPopover offset={0}>
        <ListBox items={items}>{children}</ListBox>
      </StyledPopover>
    </StyledAriaSelect>
  );
}

export function Item(props: ListBoxItemProps) {
  return <StyledListBoxItem {...props} />;
}

const StyledAriaSelect = styled(AriaSelect, {
  '@sm': {
    padding: '1rem',
    // width: '100%'
  },
  display: 'flex',
  flexDirection: 'column',
  '.react-aria-Text': {
    // description
    fontSize: '14px',
  },
  '.react-aria-FieldError': {
    color: 'red',
    fontSize: '14px',
    paddingTop: '8px',
  },
  '&[data-disabled]': {
    '.react-aria-Label': {
      color: '#BFBFBF',
    },
    '.react-aria-Text': {
      color: '#BFBFBF',
    },
  },
  '&[data-invalid]': {
    '& button': {
      border: '2px solid #E62323',
    },
    '@sm': {
      background: '#FFDFDF',
    },
  },
});

const StyledButton = styled(Button, {
  border: 'none',
  borderRadius: '0',
  fontSize: '1rem',
  color: '$black',
  display: 'flex',
  justifyContent: 'space-between',
  height: '48px',
  alignItems: 'center',
  paddingLeft: '16px',
  paddingRight: '16px',
  marginTop: '8px',
  backgroundColor: '#F2F2F2',
  '&:focus': {
    outline: 'none',
  },
  '&:hover': {
    backgroundColor: '#E6E6E6',
  },
  '&[data-focus-visible]': {
    outline: 'none',
    borderRadius: '0px',
    border: '1px solid black',
  },
  '&[data-disabled]': {
    background: '#F2F2F2',
    color: '#BFBFBF',
  },
});

const StyledPopover = styled(Popover, {
  outline: '1px solid black',
  width: 'var(--trigger-width)',
  background: 'white',
  overflowY: 'auto',
});

const StyledFieldError = styled(FieldError, {
  marginTop: 10,
  display: 'flex',
  color: '$signalRed130',
  gap: 10,
  fontSize: 14,
});

const StyledListBoxItem = styled(ListBoxItem, {
  unset: 'all',
  margin: 'auto',
  paddingLeft: '1rem',
  paddingTop: '14px',
  height: '38px',
  lineHeight: '18px',
  backgroundColor: 'white',
  outline: 'none',
  cursor: 'default',
  color: 'black',
  fontSize: '1rem',
  position: 'relative',
  '&[data-selected=true]': {
    background: '#F2F2F2',
  },
  '&[data-focused=true]': {
    background: 'rgba(201,201,201,0.72)', // TODO: fix
  },
});
