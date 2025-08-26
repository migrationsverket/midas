import { default as React } from '../../../../node_modules/react';
import { InfoPopoverProps } from './InfoPopover';
export interface LabelWrapperContextValue {
    popoverId?: string;
}
export declare const LabelWrapperContext: React.Context<LabelWrapperContextValue | undefined>;
export declare const useLabelWrapperContext: () => LabelWrapperContextValue | undefined;
export declare const LabelWrapper: React.FC<{
    children: React.ReactNode;
    popover?: InfoPopoverProps;
}>;
