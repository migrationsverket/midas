import { AriaCheckboxProps, CheckboxAria, FocusRingAria, HoverResult, PressResult } from 'react-aria';
import { SlotProps } from 'react-aria-components';
import { CheckboxGroupState } from 'react-stately';
export type CheckboxProps = AriaCheckboxProps & SlotProps & {
    className?: string;
};
export interface CheckboxComponentProps extends CheckboxProps {
    focusRingAria: FocusRingAria;
    pressResult: PressResult;
    hoverResult: HoverResult;
    inputRef: React.RefObject<HTMLInputElement>;
}
export interface CheckboxGroupItemProps extends CheckboxComponentProps {
    state: CheckboxGroupState;
}
export type CheckboxInnerProps = CheckboxComponentProps & CheckboxAria;
