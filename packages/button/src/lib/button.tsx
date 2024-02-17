import { Button as AriaButton, ButtonProps } from 'react-aria-components'
import styled from 'styled-components';

const StyledButton = styled(AriaButton)`
  color: white;
  background: deeppink;
  border: 1px solid lightpink;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px 10px;
  text-decoration: none;

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background: hotpink;
    border-color: lightpink;
  }

  &[data-focus-visible] {
    outline: 2px solid darkgray;
    outline-offset: -1px;
  }

  &[data-disabled]{
    border-color: gray;
    color: dimgray;
  }
`;

export const Button = (props: ButtonProps) => {
  return (
    <StyledButton {...props}/>
  );
}
