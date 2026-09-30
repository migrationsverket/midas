import React, { ReactNode, HTMLAttributes } from 'react';
import styles from './Stack.module.css';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  spacing?: 0 | 5 | 10 | 30 | 50 | 60 | 70 | 75 | 90 | 130 | 150 | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | string;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
}

export const Stack = ({
  children,
  direction = 'column',
  spacing = 0,
  alignItems = 'stretch',
  justifyContent = 'start',
  wrap = false,
  className = '',
  style,
  ...rest
}: StackProps) => {
  
  const classes = [
    styles.stack,
    styles[`direction-${direction}`],
    styles[`align-${alignItems}`],
    styles[`justify-${justifyContent}`],
    className
  ].filter(Boolean).join(' ');

  let gapStyle = '';
  if (spacing === 0) {
    gapStyle = '0px';
  } else if (typeof spacing === 'number' || ['xsmall', 'small', 'medium', 'large', 'xlarge'].includes(spacing)) {
    gapStyle = `var(--midas-space-${spacing})`;
  } else {
    gapStyle = spacing;
  }

  const combinedStyle: React.CSSProperties = {
    gap: gapStyle,
    flexWrap: wrap ? 'wrap' : 'nowrap',
    ...style
  };

  return (
    <div className={classes} style={combinedStyle} {...rest}>
      {children}
    </div>
  );
};
