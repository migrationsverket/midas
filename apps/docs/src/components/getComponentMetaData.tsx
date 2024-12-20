import React from 'react'
import moment from 'moment'
import { Link } from '@midas-ds/link'
import { Flex, FlexItem } from '@midas-ds/flex'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { kebabCase } from 'lodash'

export const ComponentFooter = ({ info, children }) => {
  if (!info) return <></>

  return (
    <>
      <h2 id='dependencies'>Beroenden</h2>
      <ul style={{ marginBottom: 0 }}>
        {info?.dependencies &&
          Object.keys(info.dependencies).map((k, i) => (
            <li key={'dep' + i}>{`${k}@${info.dependencies[k]}`}</li>
          ))}
      </ul>
      <ul>
        {info?.peerDependencies &&
          Object.keys(info.peerDependencies).map((k, i) => (
            <li key={'dep' + i}>{`${k}@${info.peerDependencies[k]}`}</li>
          ))}
      </ul>
    </>
  )
}
export const ComponentHeader = ({
  name,
  info,
  friendlyName,
  overrideHeadlessLink
}: {
  name: string
  info: any
  friendlyName: string
  overrideHeadlessLink?: string
}) => {
  moment.locale('sv')

  const storybookLink =
    process.env.NODE_ENV === 'development'
      ? `http://localhost:4400/?path=/docs/components-${name.toLowerCase()}--docs`
      : useBaseUrl(
          `/storybook/?path=/docs/components-${name.toLowerCase()}--docs`
        )

  if (!info) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span className={'badge badge--secondary'}>Under utveckling</span>
        </div>
        <div style={{ display: 'flex', gap: '3px' }}>
          <a
            href={`https://react-spectrum.adobe.com/react-aria/${name}.html`}
            target='_blank'
          >
            <img
              alt='Static Badge'
              src='https://img.shields.io/badge/React%20Aria-FF0000?style=for-the-badge&logo=adobe&logoColor=white'
            />
          </a>
        </div>
      </div>
    )
  }

  return (
    <section style={{ marginBottom: 32, marginTop: -20 }}>
      <div style={{ marginBottom: 16 }}>
        <b>{friendlyName}</b>
      </div>
      <Flex fluid={true}>
        <FlexItem>Version: {info.version}</FlexItem>
        <FlexItem col='auto'>
          <Link
            href={`https://github.com/migrationsverket/midas/tree/main/packages/${kebabCase(name)}/CHANGELOG.md`}
            target='_blank'
            standalone
          >
            Versionslogg
          </Link>
        </FlexItem>
        <FlexItem col='auto'>
          <Link
            href={storybookLink}
            standalone
          >
            Storybook
          </Link>
        </FlexItem>
        <FlexItem col='auto'>
          {overrideHeadlessLink !== '' && (
            <Link
              href={
                overrideHeadlessLink
                  ? overrideHeadlessLink
                  : `https://react-spectrum.adobe.com/react-aria/${name}.html`
              }
              target='_blank'
              standalone
            >
              Referens
            </Link>
          )}
        </FlexItem>
      </Flex>
    </section>
  )
}
