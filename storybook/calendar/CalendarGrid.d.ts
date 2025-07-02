import { CalendarGridProps as AriaCalendarGridProps } from 'react-aria-components';
import * as React from 'react';
export interface CalendarGridProps {
    weekdayStyle?: AriaCalendarGridProps['weekdayStyle'];
    isRange?: boolean;
}
export declare const CalendarGrid: React.FC<CalendarGridProps>;
