import { AriaToastProps, useToast } from '@react-aria/toast';
import { AriaToastRegionProps } from '@react-aria/toast';
import {
  ToastQueue,
  ToastState,
  useToastQueue,
  useToastState,
} from '@react-stately/toast';
import { useToastRegion } from '@react-aria/toast';
import React from 'react';
import { Button } from '@mvds/button';
import { styled, theme } from '@mvds/theme';
import { createPortal } from 'react-dom';
import { keyframes } from '@stitches/react';
import {
  CircleAlert,
  CircleCheckIcon,
  Info,
  TriangleAlert,
  X,
} from 'lucide-react';

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + 16px))` },
  to: { transform: `translateX(0)` },
});
const fadeIn = keyframes({
  from: { transform: `opacity: 0` },
  to: { transform: `opacity: 1` },
});
const slideOut = keyframes({
  from: { transform: `translateX(0%)`, opacity: 1 },
  to: { transform: `translateX(calc(100% + 16px))`, opacity: 0 },
});
interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>;
}

export function ToastProvider({ children, ...props }: any) {
  const state = useToastState<MidasToast>({
    maxVisibleToasts: 5,
    hasExitAnimation: true,
  });

  return (
    <>
      {children(state)}
      {state.visibleToasts.length > 0 && (
        <ToastRegion {...props} state={state} />
      )}
    </>
  );
}

function ToastRegion({ state, ...props }: ToastRegionProps<MidasToast>) {
  const ref = React.useRef(null);
  const { regionProps } = useToastRegion(props, state, ref);

  return (
    <StyledToastRegion {...regionProps} ref={ref}>
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </StyledToastRegion>
  );
}
export type MidasToastState = ToastState<MidasToast>;
export interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>;
}

export function Toast({ state, ...props }: ToastProps<MidasToast>) {
  const ref = React.useRef(null);
  const { toastProps, closeButtonProps } = useToast(props, state, ref);

  return (
    <StyledToast
      {...toastProps}
      ref={ref}
      type={props.toast.content.type}
      data-animation={props.toast.animation}
      onAnimationEnd={() => {
        // Remove the toast when the exiting animation completes.
        if (props.toast.animation === 'exiting') {
          state.remove(props.toast.key);
        }
      }}
    >
      <div>
        <Icon type={props.toast.content.type} />
        {props.toast.content.message}
      </div>
      <Button {...closeButtonProps}>
        <X height={16} width={16} />
      </Button>
    </StyledToast>
  );
}

type MidasToast = {
  message: string;
  type: 'success' | 'info' | 'warning' | 'important';
};

// Create a global toast queue.
export const toastQueue = new ToastQueue<MidasToast>({
  maxVisibleToasts: 5,
  hasExitAnimation: true,
});

export function GlobalToastRegion(props: any) {
  // Subscribe to it.
  const state = useToastQueue(toastQueue);

  // Render toast region.
  return state.visibleToasts.length > 0
    ? createPortal(
        <ToastRegion {...props} state={state} type={props} />,
        document.body
      )
    : null;
}
//

const StyledToastRegion = styled('div', {
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  border: 'none',
  '&:focus-visible': {
    outline: 'none',
  },
});

const StyledToast = styled('div', {
  // animate
  '&[data-animation=entering]': {
    animation: `${slideIn} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-animation=exiting]': {
    animation: `${slideOut} 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-animation=queued]': {
    animation: `${fadeIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  variants: {
    type: {
      success: {
        background: '$signalGreen10',
        borderLeft: '3px solid $signalGreen100',
      },
      info: {
        background: '$signalBlue10',
        borderLeft: '3px solid $signalBlue100',
      },
      important: {
        background: '$signalYellow10',
        borderLeft: '3px solid $signalYellow100',
      },
      warning: {
        background: '$signalRed10',
        borderLeft: '3px solid $signalRed100',
      },
    },
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  background: 'white',
  color: 'black',
  paddingLeft: '19px',
  '& div': {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  '& button': {
    background: 'none',
    appearance: 'none',
    height: '10px',
    width: '10px',
    color: '$gray150',
    marginRight: '17px',
    padding: 0,
    '&:focus-visible': {
      outline: 'none',
    },
    '&:active': {
      background: 'none',
      color: 'black',
    },
    '&:hover': {
      background: 'none',
    },
  },
});

// icon

const Icon = (toast: any) => {
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
