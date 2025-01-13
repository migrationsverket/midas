import useGlobalData from '@docusaurus/useGlobalData';
import React from 'react';
import {Props, ComponentDoc} from "react-docgen-typescript";

export const PropTable = ({ name }) => {

  const globalData = useGlobalData();
  const ComponentsDocs = globalData['docusaurus-plugin-react-docgen-typescript']['default'] as ComponentDoc[];
  const props: Props = ComponentsDocs.find(componentDoc => componentDoc.displayName === name)?.props;

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
