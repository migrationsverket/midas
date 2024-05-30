import { theme } from './stitches.config';
import {
  TriangleAlert,
  Info,
  CircleAlert,
  CircleCheckIcon,
} from 'lucide-react';

export const Icon = (toast: any) => {
  switch (toast.type) {
    case 'success':
      return (
        <CircleCheckIcon
          color={`${theme.colors['signalGreen100']}`}
          height={16}
          width={16}
        />
      );
    case 'info':
      return (
        <Info
          color={`${theme.colors['signalBlue100']}`}
          height={16}
          width={16}
        />
      );
    case 'important':
      return (
        <CircleAlert
          color={`${theme.colors['signalYellow100']}`}
          height={16}
          width={16}
        />
      );
    case 'warning':
      return (
        <TriangleAlert
          color={`${theme.colors['signalRed100']}`}
          height={16}
          width={16}
        />
      );
    default:
      return <></>;
  }
};
