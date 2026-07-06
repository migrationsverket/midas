'use client'
import { forwardRef } from 'react'
import type { LucideProps } from 'lucide-react'

export const ContrastFilled = forwardRef<SVGSVGElement, LucideProps>(
  ({ size = 24, color = 'currentColor', strokeWidth = 2, className, ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
      className={className}
      {...rest}
    >
      <circle cx='12' cy='12' r='10' />
      <path d='M12 2a10 10 0 0 1 0 20Z' fill={color} stroke='none' />
    </svg>
  ),
)

ContrastFilled.displayName = 'ContrastFilled'
