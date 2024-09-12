import React from 'react'
import { theme } from '@midas-ds/theme'

export const TokensTable = () => {
  return (
    <>
      {Object.keys(theme)
        .sort((a, b) => {
          if (a.includes('Color') && !b.includes('Color')) {
            return -1
          }
          if (!a.includes('Color') && b.includes('Color')) {
            return 1
          }
          return 0
        })
        .map((themeKey) => {
          return (
            <div key={themeKey}>
              <h2>{themeKey}</h2>

              <table className={'token-table'}>
                <thead>
                  <tr>
                    <th style={{ flexBasis: '40%' }}>Name</th>
                    <th style={{ flexBasis: '20%' }}>Value</th>
                    <th style={{ flexBasis: '40%' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(theme[themeKey]).map(
                    (
                      e: { token: string; value: string }[] | unknown,
                      index
                    ) => {
                      return (
                        <tr key={index}>
                          <td style={{ flexBasis: '40%' }}>{e[0]}</td>
                          <td style={{ flexBasis: '20%' }}>{e[1]}</td>
                          <td
                            style={{
                              backgroundColor: e[1],
                              flexBasis: '40%',
                            }}
                          ></td>
                        </tr>
                      )
                    }
                  )}
                </tbody>
              </table>
            </div>
          )
        })}
    </>
  )
}
