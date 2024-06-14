import {
  TextField as AriaTextField,
  Label,
  Input,
  FieldError,
  Text,
  TextFieldProps as AriaTextFieldProps,
  ValidationResult,
} from 'react-aria-components';
import { styled, theme } from '@mvds/theme';
import TriangleAlert from './triangle-alert.svg';
import { useState } from 'react';

export interface TextFieldProps extends AriaTextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

const StyledTextField = styled(AriaTextField, {
  display: 'flex',
  flexDirection: 'column-reverse', // better sibling selections with reverse
  '&[data-invalid]': {
    backgroundColor: '$signalRed10',
  },
  padding: '16px',
  '&[data-disabled]': {
    color: '$gray10',
    backgroundColor: '$gray10',
    pointerEvents: 'none',
    '& input': {
      border: 'none',
    },
    '& *': {
      color: '$gray10',
      opacity: '0.7',
    },
  },
});
const StyledInput = styled(Input, {
  all: 'unset',
  borderBottom: '1px solid black',
  marginTop: '5px',
  height: '48px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  paddingLeft: '1rem',
  lineHeight: 1,
  backgroundColor: '$gray10',
  boxShadow: `0 ${theme.borderWidths['xs']} 0 0 ${theme.colors['black']}`,
  borderRadius: 0,
  boxSizing: 'border-box',
  width: '100%',
  // animate
  transitionDelay: 0,
  transitionProperty:
    'box-shadow, border-color, background-color, outline-offset, border, outline',
  transitionTimingFunction: 'ease-in-out, ease-in-out',
  transitionDuration: '0.15s, 0.15s',
  // states
  '&:hover': {
    backgroundColor: '#E6E6E6',
  },
  '&[data-focused]': {
    outlineOffset: '2px',
    border: 'none',
    outline: '1px solid black',
  },
  '&[data-invalid]': {
    boxShadow: `0 0 0 2px ${theme.colors['signalRed100']}`,
  },
});
const StyledFieldError = styled(FieldError, {
  fontSize: '0.875rem',
  display: 'flex',
  alignItems: 'end',
  columnGap: '5px',
  color: `${theme.colors['signalRed100']}`,
  marginTop: '5px',
  '&:before': {
    alignSelf: 'center',
    content: `url(${TriangleAlert})`,
    height: '0.875rem',
    width: '0.875rem',
  },
});

const StyledLabel = styled(Label, {
  color: '#1F1F1F',
  fontWeight: '$medium',
});
const StyledText = styled(Text, {
  fontSize: '14px',
  fontWeight: '$regular',
});

export const TextField = ({
  label,
  description,
  errorMessage,
  ...props
}: TextFieldProps) => {
  const [type, setType] = useState(props.type);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(props.type !== 'password');
  console.log(type);
  return (
    <StyledTextField {...props}>
      <StyledFieldError>{errorMessage}</StyledFieldError>
      {props.type === 'password' ? (
        <StyledPasswordLabel>
          {password !== '' ? (showPassword ? 'Dölj' : 'Visa') : ' '}
          <input
            type="checkbox"
            checked={showPassword}
            value={password}
            onChange={() => {
              setShowPassword((prev) => !prev);
              setType('text');
            }}
          />
        </StyledPasswordLabel>
      ) : (
        <></>
      )}

      <StyledInput
        type={showPassword ? type : 'password'}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      {description && <StyledText slot="description">{description}</StyledText>}
      <StyledLabel>{label}</StyledLabel>
    </StyledTextField>
  );
};

const StyledPasswordLabel = styled('label', {
  position: 'relative',
  width: 'max-content',
  height: 0,
  right: 'calc(-100% + 48px)',
  bottom: '34px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: '$medium',
  pointerEvents: 'auto',
  '&:hover': {},
  '& input': {
    display: 'none',
    padding: 0,
  },
});
