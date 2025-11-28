import { DesignToken } from 'style-dictionary/types'

const transitionAnimationStyles = `
  @keyframes fillBar {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  .duration-bar {
    animation-play-state: paused;
  }
  .duration-bar-container:hover .duration-bar {
    animation-play-state: running !important;
  }
`

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

  const renderValue = () => {
    if (isDuration) {
      const durationMatch = typeof token.$value === 'string' && token.$value.match(/^([\d.]+)(s|ms)$/)

      if (durationMatch) {
        const [, value, unit] = durationMatch
        const durationMs = unit === 's' ? parseFloat(value) * 1000 : parseFloat(value)

        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
            <div style={{
              fontSize: '0.875rem',
              fontFamily: 'monospace',
            }}>
              {token.$value}
            </div>
            <div
              className="duration-bar-container"
              style={{
                width: '120px',
                height: '20px',
                backgroundColor: 'var(--ifm-color-emphasis-200)',
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
              }}
              title="Hover to see animation"
            >
              <div
                className="duration-bar"
                style={{
                  height: '100%',
                  backgroundColor: 'var(--ifm-color-primary)',
                  animation: `fillBar ${durationMs}ms ease-out infinite paused`,
                }}
              />
            </div>
          </div>
        )
      }

      const displayValue = typeof token.$value === 'object'
        ? JSON.stringify(token.$value)
        : String(token.$value)

      return (
        <div style={{
          fontSize: '0.875rem',
          fontFamily: 'monospace',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}>
          {displayValue}
        </div>
      )
    }
    if (isCompositeTypography && typeof token.$value === 'object') {
      const { fontFamily, fontSize, fontWeight, lineHeight } = token.$value
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.875rem', wordBreak: 'break-word' }}>
            <div><strong>Font Family:</strong> {fontFamily}</div>
            <div><strong>Font Size:</strong> {fontSize}</div>
            <div><strong>Font Weight:</strong> {fontWeight}</div>
            <div><strong>Line Height:</strong> {lineHeight}</div>
          </div>
          <div
            style={{
              fontFamily,
              fontSize,
              fontWeight,
              lineHeight,
              padding: '0.5rem',
              border: '1px solid #eee',
              borderRadius: '4px',
              backgroundColor: 'var(--ifm-background-surface-color)',
              wordBreak: 'break-word',
              maxWidth: '100%',
            }}
          >
            The quick brown fox jumps over the lazy dog
          </div>
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
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              backgroundColor: lightValue,
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '4px',
              flexShrink: 0,
            }}
            title={`Light: ${lightValue}`}
          ></div>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              backgroundColor: darkValue,
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '4px',
              flexShrink: 0,
            }}
            title={`Dark: ${darkValue}`}
          ></div>
        </div>
      )
    }

    if (isColor) {
      return (
        <div
          style={{
            width: '2rem',
            height: '2rem',
            backgroundColor: token.$value,
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '4px',
            flexShrink: 0,
          }}
          title={token.$value}
        ></div>
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
        <div style={style}>The quick brown fox jumps over the lazy dog</div>
      )
    }


    if (isWindowSize) {
      const value = parseInt(token.$value, 10)
      const percentage = (value / 1920) * 100
      return (
        <div>
          <div
            style={{
              width: `${percentage}%`,
              height: '1rem',
              backgroundColor: '#ccc',
              maxWidth: '100%',
            }}
          ></div>
          <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', marginTop: '0.25rem' }}>{token.$value}</div>
        </div>
      )
    }

    if (isDimension) {
      return (
        <div>
          <div
            style={{
              width: token.$value,
              height: '1rem',
              backgroundColor: '#ccc',
              maxWidth: '100%',
            }}
          ></div>
          <div style={{ fontSize: '0.875rem', fontFamily: 'monospace', marginTop: '0.25rem' }}>{token.$value}</div>
        </div>
      )
    }

    if (isTransition) {
      const displayValue = typeof token.$value === 'object'
        ? JSON.stringify(token.$value)
        : String(token.$value)

      return (
        <div style={{
          fontSize: '0.875rem',
          fontFamily: 'monospace',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}>
          {displayValue}
        </div>
      )
    }

    // Default fallback for any other type
    const displayValue = typeof token.$value === 'object'
      ? JSON.stringify(token.$value)
      : String(token.$value)

    return (
      <div style={{
        wordBreak: 'break-word',
        overflowWrap: 'break-word',
        fontSize: '0.875rem',
        fontFamily: 'monospace',
      }}>
        {displayValue}
      </div>
    )
  }

  const cssVarName = `--midas-${token.path.join('-')}`

  return (
    <>
      {(isDuration || isTransition) && <style>{transitionAnimationStyles}</style>}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '0.5rem',
          border: '1px solid #eee',
          padding: '1rem',
          width: '100%',
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
      <div style={{ minWidth: '200px', flex: '0 0 auto', overflow: 'hidden' }}>
        <div style={{ fontWeight: 'bold', wordBreak: 'break-word' }}>{token.name}</div>
        <div style={{
          fontSize: '0.75rem',
          color: 'var(--ifm-color-emphasis-600)',
          fontFamily: 'monospace',
          marginTop: '0.25rem',
          wordBreak: 'break-all',
          overflowWrap: 'break-word',
        }}>
          {cssVarName}
        </div>
        {token.$description && <div style={{ wordBreak: 'break-word' }}>{token.$description}</div>}
      </div>
      <div style={{ flex: '0 0 auto', maxWidth: '300px', overflow: 'hidden' }}>
        {renderValue()}
      </div>
    </div>
    </>
  )
}

const renderTokens = (tokens, level = 0) => {
  const entries = Object.entries(tokens)

  // Separate composite tokens from nested objects
  const compositeTokens = entries.filter(([, value]) => value.$value && typeof value.$value === 'object')
  const primitiveTokens = entries.filter(([, value]) => value.$value && typeof value.$value !== 'object')
  const nestedObjects = entries.filter(([, value]) => !value.$value && typeof value === 'object')

  return (
    <>
      {/* Render composite tokens first */}
      {compositeTokens.length > 0 && (
        <div style={{ width: '100%', marginBottom: '1rem' }}>
          {level <= 1 && (
            <>
              <div style={{
                fontWeight: 600,
                fontSize: '1.1rem',
                marginBottom: '0.5rem',
                color: 'var(--ifm-color-primary)',
              }}>
                Composite Tokens
              </div>
              <div style={{
                fontSize: '0.875rem',
                padding: '0.75rem',
                backgroundColor: 'var(--ifm-code-background)',
                borderRadius: '4px',
                fontFamily: 'monospace',
                marginBottom: '1rem',
              }}>
                <div style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Usage:</div>
                <code>.my-element {'{'} font: var(--midas-typography-body); {'}'}</code>
              </div>
            </>
          )}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {compositeTokens.map(([key, value]) => (
              <Token key={key} token={value} />
            ))}
          </div>
        </div>
      )}

      {/* Render nested objects as sections */}
      {nestedObjects.map(([key, value]) => (
        <div
          key={key}
          style={{ width: '100%', marginTop: level === 0 ? '1rem' : '0.5rem' }}
        >
          <div style={{
            fontWeight: 600,
            fontSize: level === 0 ? '1.1rem' : '1rem',
            marginBottom: '0.5rem',
            color: 'var(--ifm-color-primary)',
            textTransform: 'capitalize'
          }}>
            {key}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {renderTokens(value, level + 1)}
          </div>
        </div>
      ))}

      {/* Render primitive tokens */}
      {primitiveTokens.map(([key, value]) => (
        <Token key={key} token={value} />
      ))}
    </>
  )
}

export const TokenList = ({ tokens, filter }) => {
  const filteredTokens = filter ? { [filter]: tokens[filter] } : tokens

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {renderTokens(filteredTokens)}
    </div>
  )
}
