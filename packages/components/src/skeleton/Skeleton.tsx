import * as React from 'react'
import styles from './Skeleton.module.css'
import clsx from 'clsx'

export interface SkeletonProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /**
   * Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units
   */
  width?: React.CSSProperties['width']
  /**
   * Use valid CSS [length](https://developer.mozilla.org/en-US/docs/Web/CSS/length) units
   */
  height?: React.CSSProperties['height']
  /**
   * Circular or rectangular Skeleton component. When using circle, only `width` is allowed to control size.
   */
  variant?: 'circle' | 'rectangle'
  /**
   * Displays the skeleton component with a wave animation
   * @default true
   */
  isAnimated?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangle',
  width,
  height,
  isAnimated = true,
  className,
  style,
  ...rest
}) => {
  if (variant === 'circle' && height !== undefined) {
    console.warn(
      'Height is not allowed when using circle, control size with width',
    )
  }
  const ref = React.useRef<HTMLDivElement>(null)
  const [isConflict, setIsConflict] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    function getVisibleBackground(element: HTMLElement | null): string | null {
      while (element) {
        const bg = getComputedStyle(element).backgroundColor

        if (bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
          return bg
        }
        element = element.parentElement
      }
      return null
    }

    if (node) {
      const visibleBg = getVisibleBackground(node.parentElement)

      if (visibleBg === 'rgb(242, 242, 242)') {
        setIsConflict(true)
      }
    }
  }, [])

  return (
    <div
      ref={ref}
      className={clsx(
        styles.skeleton,
        styles[variant],
        isAnimated && styles.wave,
        isConflict && styles.conflict,
        className,
      )}
      style={{ width, height, ...style }}
      {...rest}
    />
  )
}
