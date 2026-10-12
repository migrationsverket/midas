import { DesignToken } from 'style-dictionary/types'
import { CopyButton } from '@site/src/components/CopyButton'
import { getCSSVariableName } from './utils'
import styles from './Tokens.module.css'
import { Stack } from '@midas-ds/components'

export const Token = ({ token }: { token: DesignToken }) => {
  const isColor = token.$type === 'color'
  const isLightDark =
    typeof token.$value === 'string' && token.$value.startsWith('light-dark(')
  const isCompositeTypography = token.$type === 'typography'
  const isTypography = [
    'fontFamily',
    'fontSize',
    'fontWeight',
    'lineHeight',
  ].includes(token.$type)
  const isDimension = token.$type === 'dimension'
  const isWindowSize = token.path.includes('windowSizes')
  const isDuration = token.$type === 'duration'
  const isTransition = token.$type === 'transition'
  const isBoxShadow =
    token.path?.includes('state') &&
    typeof token.$value === 'string' &&
    token.$value.includes('0 0 0')

  const renderExtraInfo = () => {
    if (isCompositeTypography && typeof token.$value === 'object') {
      const { fontFamily, fontSize, fontWeight, lineHeight } = token.$value
      return (
        <Stack
          spacing='xsmall'
          className={styles.compositeTypographyDetails}
        >
          <Stack direction='row'>
            <strong>Font Family:</strong> {fontFamily}
          </Stack>
          <Stack direction='row'>
            <strong>Font Size:</strong> {fontSize}
          </Stack>
          <Stack direction='row'>
            <strong>Font Weight:</strong> {fontWeight}
          </Stack>
          <Stack direction='row'>
            <strong>Line Height:</strong> {lineHeight}
          </Stack>
        </Stack>
      )
    }
    return null
  }

  const renderValue = () => {
    if (isDuration) {
      const durationMatch =
        typeof token.$value === 'string' &&
        token.$value.match(/^([\d.]+)(s|ms)$/)

      if (durationMatch) {
        const [, value, unit] = durationMatch
        const durationMs =
          unit === 's' ? parseFloat(value) * 1000 : parseFloat(value)

        return (
          <Stack
            alignItems='end'
            className={styles.durationContainer}
          >
            <div className={styles.durationValue}>{token.$value}</div>
            <div
              className={styles.durationBarContainer}
              title='Hover to see animation'
              style={
                {
                  '--duration': `${durationMs}ms`,
                } as React.CSSProperties
              }
            >
              <div className={styles.durationBar} />
            </div>
          </Stack>
        )
      }

      return <div className={styles.genericValue}>{String(token.$value)}</div>
    }

    if (isCompositeTypography && typeof token.$value === 'object') {
      const { fontFamily, fontSize, fontWeight, lineHeight } = token.$value
      return (
        <div
          className={styles.compositeTypographyPreview}
          style={{
            fontFamily,
            fontSize,
            fontWeight,
            lineHeight,
          }}
        >
          The quick brown fox jumps over the lazy dog
        </div>
      )
    }

    if (isLightDark) {
      const values = token.$value
        .replace('light-dark(', '')
        .replace(')', '')
        .split(', ')
      const lightValue = values[0]
      const darkValue = values[1]

      return (
        <Stack
          direction='row'
          alignItems='center'
          className={styles.colorSwatchContainer}
        >
          <div
            className={styles.colorSwatch}
            style={{ backgroundColor: lightValue }}
            title={`Light: ${lightValue}`}
          />
          <div
            className={styles.colorSwatch}
            style={{ backgroundColor: darkValue }}
            title={`Dark: ${darkValue}`}
          />
        </Stack>
      )
    }

    if (isColor) {
      return (
        <div
          className={styles.colorSwatch}
          style={{ backgroundColor: token.$value }}
          title={token.$value}
        />
      )
    }

    if (isTypography) {
      const style = {
        fontSize: token.$type === 'fontSize' ? token.$value : 'inherit',
        fontWeight: token.$type === 'fontWeight' ? token.$value : 'inherit',
        fontFamily: token.$type === 'fontFamily' ? token.$value : 'inherit',
        lineHeight: token.$type === 'lineHeight' ? token.$value : 'inherit',
      }
      return (
        <div
          className={styles.typographyPreview}
          style={style}
        >
          The quick brown fox jumps over the lazy dog
        </div>
      )
    }

    if (isWindowSize) {
      const value = parseInt(token.$value, 10)
      const percentage = (value / 1920) * 100
      return (
        <div className={styles.windowSizeContainer}>
          <div
            className={styles.windowSizeBar}
            style={{ width: `${percentage}%` }}
          />
          <div className={styles.windowSizeValue}>{token.$value}</div>
        </div>
      )
    }

    if (isDimension) {
      return (
        <Stack
          direction='row'
          alignItems='center'
          className={styles.dimensionContainer}
        >
          <div
            className={styles.dimensionBar}
            style={{ width: token.$value }}
          />
          <div className={styles.dimensionValue}>{token.$value}</div>
        </Stack>
      )
    }

    if (isBoxShadow) {
      return (
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          className={styles.statePreviewContainer}
        >
          <div
            className={styles.statePreview}
            style={{ boxShadow: `var(${getCSSVariableName(token)})` }}
          />
        </Stack>
      )
    }

    if (isTransition) {
      const displayValue =
        typeof token.$value === 'object'
          ? JSON.stringify(token.$value)
          : String(token.$value)

      return <div className={styles.genericValue}>{displayValue}</div>
    }

    const displayValue =
      typeof token.$value === 'object'
        ? JSON.stringify(token.$value)
        : String(token.$value)

    return <div className={styles.genericValue}>{displayValue}</div>
  }

  const cssVarName = getCSSVariableName(token)

  return (
    <div className={styles.tokenContainer}>
      <Stack className={styles.tokenInfo}>
        <div>
          <div className={styles.tokenName}>{token.name}</div>
          <div className={styles.tokenVariable}>
            <CopyButton text={cssVarName} />
          </div>
        </div>
        {token.$description && (
          <div className={styles.tokenDescription}>{token.$description}</div>
        )}
        {renderExtraInfo()}
      </Stack>

      <div className={styles.tokenPreview}>{renderValue()}</div>
    </div>
  )
}

const sortEntries = (entries: [string, any][]) =>
  [...entries].sort(([a], [b]) => {
    const numA = Number(a)
    const numB = Number(b)
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB
    return a.localeCompare(b)
  })

const renderTokens = (tokens, level = 0) => {
  const entries = sortEntries(Object.entries(tokens))

  const compositeTokens = entries.filter(
    ([, value]) => value.$value && typeof value.$value === 'object',
  )
  const primitiveTokens = entries.filter(
    ([, value]) => value.$value && typeof value.$value !== 'object',
  )
  const nestedObjects = entries.filter(
    ([, value]) => !value.$value && typeof value === 'object',
  )

  return (
    <>
      {compositeTokens.length > 0 && (
        <div className={styles.tokenSection}>
          {level <= 1 && (
            <>
              <div className={styles.sectionHeader}>Composite Tokens</div>
              <div className={styles.usageExample}>
                <div className={styles.usageTitle}>Usage:</div>
                <code>
                  .my-element {'{'} font: var(--midas-typography-body); {'}'}
                </code>
              </div>
            </>
          )}
          <Stack className={styles.tokenGroup}>
            {compositeTokens.map(([key, value]) => (
              <Token
                key={key}
                token={value}
              />
            ))}
          </Stack>
        </div>
      )}

      {nestedObjects.map(([key, value]) => (
        <div
          key={key}
          className={styles.tokenSection}
          style={{ marginTop: level === 0 ? '1rem' : '0.5rem' }}
        >
          <div
            className={
              level === 0 ? styles.sectionHeader : styles.subsectionHeader
            }
          >
            {key}
          </div>
          {value.$description && (
            <div className={styles.groupDescription}>{value.$description}</div>
          )}
          <Stack className={styles.tokenGroup}>
            {renderTokens(value, level + 1)}
          </Stack>
        </div>
      ))}

      {primitiveTokens.map(([key, value]) => (
        <Token
          key={key}
          token={value}
        />
      ))}
    </>
  )
}

export const TokenList = ({ tokens, filter }) => {
  const filteredTokens = filter ? { [filter]: tokens[filter] } : tokens

  return (
    <Stack className={styles.tokenListContainer}>
      {renderTokens(filteredTokens)}
    </Stack>
  )
}
