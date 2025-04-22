import useGlobalData from '@docusaurus/useGlobalData'
import { Accordion, AccordionItem } from '@midas-ds/components'
import { ComponentDoc } from 'react-docgen-typescript'
import styles from '../css/propstable.module.css'
import ReactMarkdown from 'react-markdown'

export const PropTable = ({ name, defaultOpen = true }) => {
  const globalData = useGlobalData()

  const ComponentsDocs = globalData['docusaurus-plugin-react-docgen-typescript']
    .default as ComponentDoc[]

  const props = ComponentsDocs.find(
    componentDoc => componentDoc.displayName === name,
  )?.props

  if (!props) {
    return null
  }

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
    { events: {}, accessibility: {}, rest: {} },
  )

  const Table = ({ propGroup, showDefault = true }) => {
    return (
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Name</th>
            <th>Type</th>
            {showDefault && <th>Default</th>}
            <th>Description</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {Object.keys(propGroup).map(key => {
            return (
              <tr key={key}>
                <td>
                  {key} {props[key].required && ' *'}
                </td>
                <td>
                  <code>{props[key].type?.name}</code>
                </td>
                {showDefault && (
                  <td>
                    {props[key].defaultValue ? (
                      <code>{props[key].defaultValue.value}</code>
                    ) : (
                      '-'
                    )}
                  </td>
                )}
                <td>
                  <ReactMarkdown>{props[key].description}</ReactMarkdown>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  return (
    <Accordion
      className={styles.accordion}
      type='multiple'
      defaultExpandedKeys={defaultOpen ? ['props'] : []}
    >
      {Object.getOwnPropertyNames(rest).length !== 0 && (
        <AccordionItem
          id='props'
          title='Props'
        >
          <Table propGroup={rest} />
        </AccordionItem>
      )}
      {Object.getOwnPropertyNames(events).length !== 0 && (
        <AccordionItem
          id='events'
          title='Events'
        >
          <Table
            propGroup={events}
            showDefault={false}
          />
        </AccordionItem>
      )}
      {Object.getOwnPropertyNames(accessibility).length !== 0 && (
        <AccordionItem
          id='accessibility'
          title='Tillgänglighet'
        >
          <Table
            propGroup={accessibility}
            showDefault={false}
          />
        </AccordionItem>
      )}
    </Accordion>
  )
}
