import { CalendarGridProps } from 'react-aria-components';
import * as React from 'react';
export interface CalendarContentProps {
    weekdayStyle?: CalendarGridProps['weekdayStyle'];
    errorMessage?: string;
}
export declare const CalendarContent: React.FC<CalendarContentProps>;
