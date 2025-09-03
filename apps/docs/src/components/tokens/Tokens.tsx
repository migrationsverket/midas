import { DesignToken } from 'style-dictionary/types'

export const Token = ({token}: {token: DesignToken}) => {
  const isColor = token.$type === 'color';
  const isLightDark = typeof token.$value === 'string' && token.$value.startsWith('light-dark(');
  const isTypography = ['fontFamily', 'fontSize', 'fontWeight', 'lineHeight'].includes(token.$type);
  const isDimension = token.$type === 'dimension';
  const isWindowSize = token.path.includes('windowSizes');

  const renderValue = () => {
    if (isLightDark) {
      const values = token.$value.replace('light-dark(', '').replace(')', '').split(', ');
      const lightValue = values[0];
      const darkValue = values[1];

      return (
        <div style={{display: 'flex', gap: '1rem'}}>
          <div>
            <div>Light:</div>
            <div style={{width: '3rem', height: '3rem', backgroundColor: lightValue, border: '1px solid #ccc'}}></div>
            <div>{lightValue}</div>
          </div>
          <div>
            <div>Dark:</div>
            <div style={{width: '3rem', height: '3rem', backgroundColor: darkValue, border: '1px solid #ccc'}}></div>
            <div>{darkValue}</div>
          </div>
        </div>
      )
    }

    if (isColor) {
      return (
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <div style={{width: '3rem', height: '3rem', backgroundColor: token.$value, border: '1px solid #ccc'}}></div>
          <div>{token.$value}</div>
        </div>
      )
    }

    if (isTypography) {
      const style = {
        fontSize: token.$type === 'fontSize' ? token.$value : 'inherit',
        fontWeight: token.$type === 'fontWeight' ? token.$value : 'inherit',
        fontFamily: token.$type === 'fontFamily' ? token.$value : 'inherit',
        lineHeight: token.$type === 'lineHeight' ? token.$value : 'inherit',
      }
      return <div style={style}>The quick brown fox jumps over the lazy dog</div>
    }

    if (isWindowSize) {
      const value = parseInt(token.$value, 10);
      const percentage = (value / 1920) * 100;
      return (
        <div>
          <div style={{width: `${percentage}%`, height: '1rem', backgroundColor: '#ccc'}}></div>
          <div>Value: {token.$value}</div>
        </div>
      )
    }

    if (isDimension) {
      return (
        <div>
          <div style={{width: token.$value, height: '1rem', backgroundColor: '#ccc'}}></div>
          <div>Value: {token.$value}</div>
        </div>
      )
    }

    return <div>Value: {token.$value}</div>
  }

  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', width: '300px', border: '1px solid #eee', padding: '1rem'}}>
      <div>
        <div style={{fontWeight: 'bold'}}>{token.name}</div>
        {renderValue()}
        {token.$description && <div>Description: {token.$description}</div>}
      </div>
    </div>
  )
}

const renderTokens = (tokens) => {
  return Object.entries(tokens).map(([key, value]) => {
    if (value.$value) {
      return <Token key={key} token={value} />
    }

    if (typeof value === 'object') {
      return (
        <div key={key} style={{width: '100%'}}>
          <h4>{key}</h4>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
            {renderTokens(value)}
          </div>
        </div>
      )
    }

    return null
  })
}

export const TokenList = ({tokens, filter}) => {
  const filteredTokens = filter ? {[filter]: tokens[filter]} : tokens;

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
      {renderTokens(filteredTokens)}
    </div>
  )
}
