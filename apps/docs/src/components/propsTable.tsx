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

  const ComponentsDocs = globalData[
    'docusaurus-plugin-react-docgen-typescript'
  ]['default'] as ComponentDoc[]
  const props: Props = ComponentsDocs.find(
    componentDoc => componentDoc.displayName === name
  )?.props

  const { events, accessibility, rest } = Object.entries(props).reduce(
    (acc, [key, value]) => {
      if (key.startsWith('on')) {
        acc.events[key] = value
      } else if (key.startsWith('aria-')) {
        acc.accessibility[key] = value
      } else {
        acc.rest[key] = value
      }
      return acc
    },
    { events: {}, accessibility: {}, rest: {} }
  )

  if (!props) {
    return null
  }

  return (
    <>
      <table>
        <thead style={{ textAlign: 'left' }}>
          <tr>
            <th>Namn</th>
            <th>Typ</th>
            <th>Default</th>
            <th>Obligatorisk</th>
            <th>Beskrivning</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: '0.875rem' }}>
          {Object.keys(rest).map(key => {
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
                  {props[key].required && 'Ja'}
                </td>
                <td style={{ verticalAlign: 'top' }}>
                  {props[key].description}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <Accordion
        headingTag='h3'
        type='multiple'
      >
        <AccordionItem value='events'>
          <AccordionTrigger>Events</AccordionTrigger>
          <AccordionContent style={{ padding: 0 }}>
            <table>
              <thead style={{ textAlign: 'left' }}>
                <tr>
                  <th>Namn</th>
                  <th>Typ</th>
                  <th>Default</th>
                  <th>Beskrivning</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '0.875rem' }}>
                {Object.keys(events).map(key => {
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
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='accessibility'>
          <AccordionTrigger>Tillgänglighet</AccordionTrigger>
          <AccordionContent style={{ padding: 0 }}>
            <table>
              <thead style={{ textAlign: 'left' }}>
                <tr>
                  <th>Namn</th>
                  <th>Typ</th>
                  <th>Default</th>
                  <th>Beskrivning</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: '0.875rem' }}>
                {Object.keys(accessibility).map(key => {
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
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )
}
