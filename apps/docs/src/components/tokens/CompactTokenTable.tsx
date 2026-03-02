import { DesignToken } from 'style-dictionary/types'
import { CopyButton } from '@site/src/components/CopyButton'
import { getCSSVariableName } from './utils'
import styles from './CompactTokenTable.module.css'

const sortEntries = (entries: [string, any][]) =>
  [...entries].sort(([a], [b]) => {
    const numA = Number(a)
    const numB = Number(b)
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB
    return a.localeCompare(b)
  })

const flattenTokens = (obj: any): DesignToken[] => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return []

  // obj itself is a leaf token
  if (obj.$value !== undefined) {
    return obj.path ? [obj as DesignToken] : []
  }

  const result: DesignToken[] = []
  for (const [key, value] of sortEntries(Object.entries(obj))) {
    if (key.startsWith('$')) continue
    if (!value || typeof value !== 'object' || Array.isArray(value)) continue
    if (value.$value !== undefined) {
      if (value.path) result.push(value as DesignToken)
    } else {
      result.push(...flattenTokens(value))
    }
  }
  return result
}

const Preview = ({ token }: { token: DesignToken }) => {
  const value = token.$value as string

  if (
    token.$type === 'color' ||
    (typeof value === 'string' &&
      (value.startsWith('#') ||
        value.startsWith('oklch') ||
        value.startsWith('rgb')))
  ) {
    return (
      <span
        className={styles.colorDot}
        style={{ backgroundColor: value }}
        title={value}
      />
    )
  }

  if (
    token.$type === 'dimension' &&
    typeof value === 'string' &&
    value.endsWith('rem')
  ) {
    const rem = parseFloat(value)
    const pct = Math.min((rem / 3) * 100, 100)
    return (
      <span
        className={styles.dimBar}
        style={{ width: `${Math.max(pct, 2)}%` }}
      />
    )
  }

  if (token.$type === 'fontWeight') {
    return (
      <span
        className={styles.weightPreview}
        style={{ fontWeight: Number(value) }}
      >
        Aa
      </span>
    )
  }

  return null
}

export const CompactTokenTable = ({
  tokens,
  filter,
}: {
  tokens: any
  filter?: string
}) => {
  const source = filter ? tokens[filter] : tokens
  if (!source) return null

  const rows = flattenTokens(source)

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Token</th>
          <th>CSS-variabel</th>
          <th>Värde</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {rows.map(token => {
          const cssVar = getCSSVariableName(token)
          const path = token.path?.join('.') ?? token.name
          const valueStr =
            typeof token.$value === 'object'
              ? JSON.stringify(token.$value)
              : String(token.$value)

          return (
            <tr key={cssVar}>
              <td className={styles.tokenPath}>{path}</td>
              <td className={styles.cssVar}>
                <CopyButton text={cssVar} />
              </td>
              <td className={styles.value}>
                <code>{valueStr}</code>
                {token.$description && (
                  <div className={styles.desc}>{token.$description}</div>
                )}
              </td>
              <td className={styles.preview}>
                <Preview token={token} />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
