import { CalendarGridProps } from 'react-aria-components';
import * as React from 'react';
export interface CalendarHeaderProps {
    errorMessage?: string;
    weekdayStyle?: CalendarGridProps['weekdayStyle'];
}
export declare const CalendarHeader: React.FC;
