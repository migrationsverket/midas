import useGlobalData from '@docusaurus/useGlobalData'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@midas-ds/accordion'
import React from 'react'
import { Props, ComponentDoc } from 'react-docgen-typescript'

export const PropTable = ({ name }) => {
  const globalData = useGlobalData()

  console.log(globalData)

  const ComponentsDocs = globalData[
    'docusaurus-plugin-react-docgen-typescript'
  ]['default'] as ComponentDoc[]
  const props: Props = ComponentsDocs.find(
    componentDoc => componentDoc.displayName === name
  )?.props

  if (!props) {
    return null
  }

  return (
    <Accordion
      headingTag='h3'
      type='multiple'
    >
      <AccordionItem value={'docs'}>
        <AccordionTrigger>Visa props</AccordionTrigger>
        <AccordionContent style={{ padding: 0 }}>
          <table>
            <thead style={{ textAlign: 'left' }}>
              <tr>
                <th>Namn</th>
                <th>Typ</th>
                <th>Default</th>
                <th>Beskrivning</th>
                <th>Obligatorisk</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '0.875rem' }}>
              {Object.keys(props).map(key => {
                return (
                  <tr key={key}>
                    <td style={{ verticalAlign: 'top' }}>
                      <p>{key}</p>
                    </td>
                    <td style={{ verticalAlign: 'top' }}>
                      <p>{props[key].type?.name}</p>
                    </td>
                    <td style={{ verticalAlign: 'top' }}>
                      {props[key].defaultValue && (
                        <p>{props[key].defaultValue.value}</p>
                      )}
                    </td>
                    <td style={{ verticalAlign: 'top' }}>
                      {props[key].description}
                    </td>
                    <td style={{ verticalAlign: 'top' }}>
                      {props[key].required && 'Nej'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
