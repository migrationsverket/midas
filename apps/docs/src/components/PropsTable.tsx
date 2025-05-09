import useGlobalData from '@docusaurus/useGlobalData'
import { Accordion, AccordionItem } from '@midas-ds/components'
import { ComponentDoc, Props } from 'react-docgen-typescript'
import styles from '../css/propstable.module.css'
import ReactMarkdown from 'react-markdown'
import Lowlight from 'react-lowlight'
import 'react-lowlight/common'
import { DialogTrigger, Popover, Pressable } from 'react-aria-components'
import { semantic } from '@midas-ds/components/theme'

export const DisplayCompositeTypes = ({ props }: Props) => {
  switch (props.type.name) {
    case 'enum': {
      return (
        <DialogTrigger>
          <Pressable>
            <span
              role={'button'}
              style={{ cursor: 'pointer' }}
            >
              <Lowlight
                value={props.type.raw as string}
                inline
                language={'typescript'}
                markers={[]}
              />
            </span>
          </Pressable>
          <Popover
            style={{
              background: semantic.background,
              padding: '0.5rem',
              margin: '2rem',
              border: `1px solid ${semantic.textPrimary}`,
            }}
            placement={'top'}
          >
            <span className={'hljs-code'}>
              {props.type.value.map((r: Record<'value', string>, i: number) => {
                return (
                  <span key={`${r.value}${i}`}>
                    {i === 0 ? ' ' : ' | '}
                    <Lowlight
                      value={r.value.replace(/"/g, "'")}
                      inline
                      language={'typescript'}
                      markers={[]}
                    />
                  </span>
                )
              })}
            </span>
          </Popover>
        </DialogTrigger>
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
                  <Lowlight
                    value={key}
                    inline
                    language={'typescript'}
                    markers={[]}
                  />
                  {props[key].required && ' *'}
                </td>
                <td>
                  <DisplayCompositeTypes props={props[key]} />
                </td>
                {showDefault && (
                  <td>
                    {props[key].defaultValue ? (
                      <Lowlight
                        value={props[key].defaultValue.value}
                        inline
                        language={'typescript'}
                        markers={[]}
                      />
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
      allowsMultipleExpanded
      defaultExpandedKeys={defaultOpen ? ['props'] : []}
    >
      {Object.getOwnPropertyNames(rest).length !== 0 && (
        <AccordionItem
          id='props'
          title='Props'
          className={styles.accordionItem}
        >
          <Table propGroup={rest} />
        </AccordionItem>
      )}
      {Object.getOwnPropertyNames(events).length !== 0 && (
        <AccordionItem
          id='events'
          title='Events'
          className={styles.accordionItem}
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
          className={styles.accordionItem}
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
