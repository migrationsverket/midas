import { useMemo } from 'react'
import {
  Accordion,
  AccordionItem,
  DialogTrigger,
  Popover,
} from '@midas-ds/components'
import type { ApiDoc, ApiProp } from '@midas-ds/docgen'
import styles from '../css/propstable.module.css'
import ReactMarkdown from 'react-markdown'
import Lowlight from 'react-lowlight'
import 'react-lowlight/common'
import { Pressable } from 'react-aria-components'
import { jsdocLinkToMarkdown } from '../utils/jsdocLinkToMarkdown'

interface TypeMember {
  name: string
  type: string
  description: string
  required: boolean
  members?: TypeMember[]
}

interface PropItem extends Omit<ApiProp, 'type'> {
  type: {
    name: string
    raw?: string
    value?: { value: string; members?: TypeMember[] }[]
    members?: TypeMember[]
  }
}

type Props = Record<string, PropItem>

/**
 * Generated docs store drill-down members once per file in `doc.types` and
 * refer to them by key. Resolves those references into nested `members`.
 */
function resolveProps(doc: ApiDoc): Props {
  const tables = new Map<string, TypeMember[]>()
  const resolve = (ref?: string): TypeMember[] | undefined => {
    if (!ref) return undefined
    if (!tables.has(ref)) {
      tables.set(
        ref,
        doc.types[ref].map(({ membersRef, ...member }) => ({
          ...member,
          members: resolve(membersRef),
        })),
      )
    }
    return tables.get(ref)
  }

  return Object.fromEntries(
    Object.entries(doc.props).map(([key, prop]) => {
      const { membersRef, value, ...type } = prop.type
      return [
        key,
        {
          ...prop,
          type: {
            ...type,
            value: value?.map(({ membersRef, ...entry }) => ({
              ...entry,
              members: resolve(membersRef),
            })),
            members: resolve(membersRef),
          },
        },
      ]
    }),
  )
}

function hasMembers(
  type: PropItem['type'],
): type is PropItem['type'] & { members: TypeMember[] } {
  return Array.isArray(type.members) && type.members.length > 0
}

/** Renders a type name — clickable with drill-down popover if it has members */
const DrillableType = ({
  typeStr,
  members,
}: {
  typeStr: string
  members?: TypeMember[]
}) => {
  if (members && members.length > 0) {
    return (
      <DialogTrigger>
        <Pressable>
          <span
            role='button'
            style={{ cursor: 'pointer' }}
          >
            <Lowlight
              value={typeStr}
              inline
              language='typescript'
              markers={[]}
            />
          </span>
        </Pressable>
        <Popover style={{ maxWidth: 'min(90vw, 800px)' }}>
          <MembersTable members={members} />
        </Popover>
      </DialogTrigger>
    )
  }
  return (
    <Lowlight
      value={typeStr}
      inline
      language='typescript'
      markers={[]}
    />
  )
}

const MembersTable = ({ members }: { members: TypeMember[] }) => (
  <div className={styles.membersTable}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {members.map(member => (
          <tr key={member.name}>
            <td>
              <Lowlight
                value={`${member.name}${member.required ? '' : '?'}`}
                inline
                language='typescript'
                markers={[]}
              />
            </td>
            <td>
              <DrillableType
                typeStr={member.type}
                members={member.members}
              />
            </td>
            <td>{member.description || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

export const DisplayCompositeTypes = ({ props }: { props: PropItem }) => {
  if (hasMembers(props.type)) {
    return (
      <DrillableType
        typeStr={props.type.name}
        members={props.type.members}
      />
    )
  }

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
              {props.type.value?.map(
                (r: { value: string; members?: TypeMember[] }, i: number) => {
                  return (
                    <span key={`${r.value}${i}`}>
                      {i === 0 ? ' ' : ' | '}
                      <DrillableType
                        typeStr={r.value.replace(/"/g, "'")}
                        members={r.members}
                      />
                    </span>
                  )
                },
              )}
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

/**
 * Props table for a component. Import the component's generated API doc in
 * the MDX file and pass it as `doc`:
 *
 * ```mdx
 * import ButtonApi from '@midas-ds/api/components/Button.json'
 *
 * <PropTable doc={ButtonApi} />
 * ```
 */
export const PropTable = ({
  doc,
  defaultOpen = true,
}: {
  doc: ApiDoc
  defaultOpen?: boolean
}) => {
  const props = useMemo(() => resolveProps(doc), [doc])

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
          <Grid
            propGroup={rest}
            props={props}
          />
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
            props={props}
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
            props={props}
            showDefault={false}
          />
        </AccordionItem>
      )}
    </Accordion>
  )
}

const Grid = ({
  propGroup,
  props,
  showDefault = true,
}: {
  propGroup: Record<string, PropItem>
  props: Props
  showDefault?: boolean
}) => {
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
