import { useState } from 'react'
import { DesignToken } from 'style-dictionary/types'
import { Copy, Check } from 'lucide-react'
import { getCSSVariableName } from './utils'
import styles from './ColorPaletteTable.module.css'

const getLuminance = (hex: string): number => {
  let clean = hex.replace('#', '')
  if (clean.length === 3)
    clean = clean
      .split('')
      .map(c => c + c)
      .join('')

  // 8-digit hex has alpha — composite against white before computing luminance
  let alpha = 1
  if (clean.length === 8) {
    alpha = parseInt(clean.slice(6, 8), 16) / 255
    clean = clean.slice(0, 6)
  }

  const r = parseInt(clean.slice(0, 2), 16) / 255
  const g = parseInt(clean.slice(2, 4), 16) / 255
  const b = parseInt(clean.slice(4, 6), 16) / 255

  // composite: channel * alpha + white * (1 - alpha)
  const rc = r * alpha + (1 - alpha)
  const gc = g * alpha + (1 - alpha)
  const bc = b * alpha + (1 - alpha)

  const lin = (c: number) =>
    c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  return 0.2126 * lin(rc) + 0.7152 * lin(gc) + 0.0722 * lin(bc)
}

const isLight = (value: string): boolean => {
  if (!value.startsWith('#')) return true
  return getLuminance(value) > 0.35
}

const sortEntries = (entries: [string, any][]) =>
  [...entries].sort(([a], [b]) => {
    const numA = Number(a)
    const numB = Number(b)
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB
    return a.localeCompare(b)
  })

const getFamilyTokens = (family: any): DesignToken[] =>
  sortEntries(Object.entries(family))
    .filter(([k, v]) => !k.startsWith('$') && v?.$value !== undefined)
    .map(([, v]) => v as DesignToken)

const Swatch = ({ token }: { token: DesignToken }) => {
  const [copied, setCopied] = useState(false)
  const cssVar = getCSSVariableName(token)
  const value = token.$value as string
  const step = token.path?.[token.path.length - 1]
  const light = isLight(value)
  const labelColor = light ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.8)'

  const handleClick = async () => {
    await navigator.clipboard.writeText(cssVar)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      className={`${styles.swatch} ${copied ? styles.copied : ''}`}
      style={{ backgroundColor: value }}
      onClick={handleClick}
      title={`${cssVar}\n${value}`}
      aria-label={`Copy ${cssVar}`}
    >
      <span className={styles.copyIcon} style={{ color: labelColor }}>
        {copied ? <Check size={12} /> : <Copy size={12} />}
      </span>
      <span className={styles.step} style={{ color: labelColor }}>{step}</span>
    </button>
  )
}

export const ColorPaletteTable = ({ tokens }: { tokens: any }) => {
  const families = sortEntries(
    Object.entries(tokens).filter(([k]) => !k.startsWith('$')),
  )

  return (
    <div className={styles.container}>
      {families.map(([familyName, family]) => {
        const swatches = getFamilyTokens(family)
        if (swatches.length === 0) return null
        return (
          <div key={familyName} className={styles.row}>
            <div className={styles.familyName}>{familyName}</div>
            <div className={styles.swatches}>
              {swatches.map(token => (
                <Swatch key={getCSSVariableName(token)} token={token} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
