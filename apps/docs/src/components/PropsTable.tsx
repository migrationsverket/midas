import useGlobalData from '@docusaurus/useGlobalData'
import { Accordion, AccordionItem, TooltipTrigger } from '@midas-ds/components'
import { ComponentDoc, Props } from 'react-docgen-typescript'
import styles from '../css/propstable.module.css'
import ReactMarkdown from 'react-markdown'
import Lowlight from 'react-lowlight'
import 'react-lowlight/common'
import { Tooltip } from '@midas-ds/components'
import { Pressable } from 'react-aria-components'
import { semantic } from '@midas-ds/components/theme'

export const DisplayCompositeTypes = ({ props }: Props) => {
  switch (props.type.name) {
    case 'enum': {
      return (
        <TooltipTrigger>
          <Pressable>
            <span
              role='button'
              style={{ cursor: 'pointer' }}
            >
              <Lowlight
                value={props.type.raw as string}
                inline
                language='typescript'
                markers={[]}
              />
            </span>
          </Pressable>
          <Tooltip
            style={{
              backgroundColor: semantic.background,
              border: `1px solid ${semantic.borderSecondary}`,
            }}
          >
            <span className='hljs-code'>
              {props.type.value.map((r: Record<'value', string>, i: number) => {
                return (
                  <span key={`${r.value}${i}`}>
                    {i === 0 ? ' ' : ' | '}
                    <Lowlight
                      value={r.value.replace(/"/g, "'")}
                      inline
                      language='typescript'
                      markers={[]}
                    />
                  </span>
                )
              })}
            </span>
          </Tooltip>
        </TooltipTrigger>
      )
    }
    default:
      return (
        <Lowlight
          value={props.type.name}
          inline
          language='typescript'
          markers={[]}
        />
      )
  }
}

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

  const Grid = ({ propGroup, showDefault = true }) => {
    return (
      <div className={styles.propsGridTable}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>{showDefault && 'Default'}</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(propGroup).map(key => (
              <tr key={key}>
                <td data-title='Name'>
                  <Lowlight
                    value={key}
                    inline
                    language='typescript'
                    markers={[]}
                  />
                  {props[key].required && ' *'}
                </td>
                <td data-title='Type'>
                  <DisplayCompositeTypes props={props[key]} />
                </td>
                {showDefault ? (
                  <td data-title='Default'>
                    {props[key].defaultValue ? (
                      <Lowlight
                        value={props[key].defaultValue.value}
                        inline
                        language='typescript'
                        markers={[]}
                      />
                    ) : (
                      '-'
                    )}
                  </td>
                ) : (
                  <td />
                )}
                <td data-title='Description'>
                  <ReactMarkdown>{props[key].description}</ReactMarkdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <Accordion
      className={styles.accordion}
      allowsMultipleExpanded
      defaultExpandedKeys={defaultOpen ? ['props'] : []}
    >
      {Object.getOwnPropertyNames(rest).length !== 0 && (
        <AccordionItem
          id='props'
          title='Props'
          className={styles.accordionItem}
        >
          <Grid propGroup={rest} />
        </AccordionItem>
      )}
      {Object.getOwnPropertyNames(events).length !== 0 && (
        <AccordionItem
          id='events'
          title='Events'
          className={styles.accordionItem}
        >
          <Grid
            propGroup={events}
            showDefault={false}
          />
        </AccordionItem>
      )}
      {Object.getOwnPropertyNames(accessibility).length !== 0 && (
        <AccordionItem
          id='accessibility'
          title='Tillgänglighet'
          className={styles.accordionItem}
        >
          <Grid
            propGroup={accessibility}
            showDefault={false}
          />
        </AccordionItem>
      )}
    </Accordion>
  )
}
