import { type CSSProperties, useId, useState } from 'react'
import { clsx } from '@midas-ds/components'
import styles from './Compare.module.css'

interface ScreenshotProps {
  src: string | undefined
  label: string
  missingText?: string
  actualSize: boolean
}

export function Screenshot({
  src,
  label,
  missingText = `No ${label.toLowerCase()} image`,
  actualSize,
}: ScreenshotProps) {
  if (!src) return <div className={styles.missing}>{missingText}</div>
  return (
    <img
      className={clsx(styles.image, actualSize && styles.actualSize)}
      src={src}
      alt={label}
    />
  )
}

interface SideBySideProps {
  images: { label: string; src: string | undefined; missingText?: string }[]
  actualSize: boolean
}

export function SideBySide({ images, actualSize }: SideBySideProps) {
  return (
    <div
      className={styles.sideBySide}
      style={{ '--columns': images.length } as CSSProperties}
    >
      {images.map(image => (
        <figure
          key={image.label}
          className={styles.figure}
        >
          <figcaption className={styles.caption}>{image.label}</figcaption>
          <Screenshot
            {...image}
            actualSize={actualSize}
          />
        </figure>
      ))}
    </div>
  )
}

interface OverlayProps {
  reference: string
  actual: string
  actualSize: boolean
}

/** Actual on the left of the handle, reference on the right */
export function Slider({ reference, actual, actualSize }: OverlayProps) {
  const [position, setPosition] = useState(50)
  const id = useId()
  return (
    <div className={styles.overlay}>
      <div className={styles.stack}>
        <Screenshot
          src={reference}
          label='Reference'
          actualSize={actualSize}
        />
        <div
          className={styles.top}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Screenshot
            src={actual}
            label='Actual'
            actualSize={actualSize}
          />
        </div>
        <div
          className={styles.handle}
          style={{ insetInlineStart: `${position}%` }}
          aria-hidden
        />
      </div>
      <label
        className={styles.control}
        htmlFor={id}
      >
        Actual on the left, reference on the right
        <input
          id={id}
          type='range'
          min={0}
          max={100}
          value={position}
          onChange={event => setPosition(Number(event.target.value))}
        />
      </label>
    </div>
  )
}

/** Fades the actual screenshot in over the reference */
export function OnionSkin({ reference, actual, actualSize }: OverlayProps) {
  const [opacity, setOpacity] = useState(50)
  const id = useId()
  return (
    <div className={styles.overlay}>
      <div className={styles.stack}>
        <Screenshot
          src={reference}
          label='Reference'
          actualSize={actualSize}
        />
        <div
          className={styles.top}
          style={{ opacity: opacity / 100 }}
        >
          <Screenshot
            src={actual}
            label='Actual'
            actualSize={actualSize}
          />
        </div>
      </div>
      <label
        className={styles.control}
        htmlFor={id}
      >
        Fade from reference to actual
        <input
          id={id}
          type='range'
          min={0}
          max={100}
          value={opacity}
          onChange={event => setOpacity(Number(event.target.value))}
        />
      </label>
    </div>
  )
}
