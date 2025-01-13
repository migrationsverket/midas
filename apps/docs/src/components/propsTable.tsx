// @ts-ignore
import {useDynamicImport} from 'docusaurus-plugin-react-docgen-typescript/useDynamicImport'
import React from 'react'

export const PropTable = ({ name }) => {

  const props = useDynamicImport(name)

  if (!props) {
    return null
  }

  return (
    <>
      <table style={{'fontSize':'small'}}>
        <thead style={{'textAlign':'left'}}>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default Value</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody style={{'fontSize':'small'}}>
          {Object.keys(props).map((key) => {
            return (
              <tr key={key}>
                <td>
                  <p>{key}</p>
                </td>
                <td>
                  <p>{props[key].type?.name}</p>
                </td>
                <td>
                  {props[key].defaultValue && (
                    <p>{props[key].defaultValue.value}</p>
                  )}
                </td>
                <td>{props[key].required ? 'Yes' : 'No'}</td>
                <td style={{ width: '30%' }}>{props[key].description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
