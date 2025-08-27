import { TagGroupProps as AriaTagGroupProps, TagProps as AriaTagProps } from 'react-aria-components';
import { FeedbackStatus } from '../common/types';
import * as React from 'react';
export interface TagGroupProp extends AriaTagGroupProps {
    children: React.ReactNode;
}
export interface TagProps extends AriaTagProps {
    children: React.ReactNode;
    dismissable?: boolean;
    type?: FeedbackStatus;
}
export declare const TagGroup: React.FC<TagGroupProp>;
export declare const Tag: React.FC<TagProps>;
