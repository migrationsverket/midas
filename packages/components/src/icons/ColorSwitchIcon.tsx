import * as React from 'react'

export const ColorSwitchIcon = React.forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement>
>((props, ref) => (
  <svg
    ref={ref}
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='currentColor'
    preserveAspectRatio='xMidYMid meet'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M9.16602 0C14.2284 0.000175801 18.3328 4.10366 18.333 9.16602C18.3328 14.2284 14.2284 18.3328 9.16602 18.333C4.10366 18.3328 0.000175805 14.2284 0 9.16602C0.000175755 4.10366 4.10366 0.000175751 9.16602 0ZM9.16602 1.66602C5.02414 1.66619 1.66619 5.02414 1.66602 9.16602C1.66619 13.1783 4.81696 16.455 8.7793 16.6562L9.16602 16.666V1.66602Z' />
  </svg>
))
