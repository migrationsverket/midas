import useGlobalData from '@docusaurus/useGlobalData'
import {
  Accordion,
  AccordionItem,
  DialogTrigger,
  Popover,
} from '@midas-ds/components'
import { ComponentDoc, Props } from 'react-docgen-typescript'
import styles from '../css/propstable.module.css'
import ReactMarkdown from 'react-markdown'
import Lowlight from 'react-lowlight'
import 'react-lowlight/common'
import { Pressable } from 'react-aria-components'
import { jsdocLinkToMarkdown } from '../utils/jsdocLinkToMarkdown'

// Helper function to parse union types into enum values
function parseEnumValues(typeString: string): Array<{ value: string }> | undefined {
  if (typeString && typeString.includes('|')) {
    const values = typeString
      .split('|')
      .map((v) => v.trim())
      .filter((v) => v.startsWith("'") || v.startsWith('"'));

    if (values.length > 0) {
      return values.map((v) => ({ value: v }));
    }
  }
  return undefined;
}

export const DisplayCompositeTypes = ({ props }: Props) => {
  switch (props.type.name) {
    case 'enum': {
      return (
        <DialogTrigger>
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
          <Popover>
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

  // Try new TypeDoc plugin first, fall back to old react-docgen plugin
  let props;

  // Check for new TypeDoc plugin data
  const typedocPlugin = globalData['@midas-ds/docusaurus-typedoc-plugin']?.['components'];

  console.log('PropTable debug:', {
    name,
    hasTypedocPlugin: !!typedocPlugin,
    hasApiData: !!typedocPlugin?.apiData,
    componentNames: typedocPlugin?.apiData ? Object.keys(typedocPlugin.apiData.components).slice(0, 10) : [],
    component: typedocPlugin?.apiData?.components[name],
    globalDataKeys: Object.keys(globalData),
  });

  if (typedocPlugin?.apiData) {
    const component = typedocPlugin.apiData.components[name];
    if (component && component.props) {
      // Convert TypeDoc format to react-docgen format
      props = {};
      for (const prop of component.props) {
        props[prop.name] = {
          type: {
            name: prop.type,
            raw: prop.type,
            value: parseEnumValues(prop.type),
          },
          required: prop.required,
          defaultValue: prop.defaultValue ? { value: prop.defaultValue } : undefined,
          description: prop.description || '',
        };
      }
    }
  } else {
    // Fall back to old plugin
    const ComponentsDocs = globalData['docusaurus-plugin-react-docgen-typescript']
      ?.default as ComponentDoc[];
    props = ComponentsDocs?.find(
      componentDoc => componentDoc.displayName === name,
    )?.props;
  }

  if (!props) {
    console.log('PropTable: No props found for', name);
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
                  <ReactMarkdown>
                    {jsdocLinkToMarkdown(props[key].description)}
                  </ReactMarkdown>
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
          hasBackground={false}
        >
          <Grid propGroup={rest} />
        </AccordionItem>
      )}
      {Object.getOwnPropertyNames(events).length !== 0 && (
        <AccordionItem
          id='events'
          title='Events'
          className={styles.accordionItem}
          hasBackground={false}
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
          hasBackground={false}
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
