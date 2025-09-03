import { DesignToken } from 'style-dictionary/types'
export const Token = ({token}: DesignToken) => {
  console.log(token)
  return <div>
    {JSON.stringify(token)}
    <div>name of token: {token.name}</div>
    <div>value of token: {token.$value}</div>
    <div>value of token: {token.$description}</div>
  </div>
}

export const TokenList = ({tokens}) => {

  const sections = Object.keys(tokens);

  return (
    <div>
      {sections.map(section => (
        <>
          <h3>{section}</h3>
          {Object.entries(tokens[section]).map(([key, value]) => (
            <div key={key}>
              {key}
              {(tokens[section][key].$value)}
              {(tokens[section][key].$description)}
              {(tokens[section][key].$name)}
            </div>
          ))}
          <div>{tokens[section].name}</div>
          <div>{tokens[section].$value}</div>
          <div>{tokens[section].$description}</div>
        </>
      ))}
      <pre>{JSON.stringify(tokens)}</pre>
    </div>
  )
}
