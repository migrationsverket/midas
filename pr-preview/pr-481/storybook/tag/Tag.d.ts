import { default as React } from '../../../../node_modules/react';
import { TagGroupProps as AriaTagGroupProps, TagProps as AriaTagProps } from 'react-aria-components';
export interface TagGroupProp extends AriaTagGroupProps {
    children: React.ReactNode;
}
export interface TagProps extends AriaTagProps {
    children: React.ReactNode;
    dismissable?: boolean;
}
export declare const TagGroup: React.FC<TagGroupProp>;
export declare const Tag: React.FC<TagProps>;
