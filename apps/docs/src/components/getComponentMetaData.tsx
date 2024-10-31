import React from 'react'
import moment from 'moment'
import { LinkButton } from '@midas-ds/link-button'
import { Bookmark, FileCode2, Logs } from 'lucide-react'
import { Flex, FlexItem } from '@midas-ds/flex'

export const ComponentFooter = ({ info, children }) => {
  if (!info || !info.dependencies) return <></>

  return (
    <ul>
      {Object.keys(info.dependencies).map((k, i) => (
        <li key={'dep' + i}>{`${k}@${info.dependencies[k]}`}</li>
      ))}
    </ul>
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
      <Flex
        fluid={true}
        className='button-row'
      >
        <FlexItem>Version: {info.version}</FlexItem>
        <FlexItem col='auto'>
          <LinkButton
            href={`https://github.com/migrationsverket/midas/tree/main/packages/${name.toLowerCase()}/CHANGELOG.md`}
            target='_blank'
            variant='tertiary'
            icon={Logs}
          >
            Versionslogg
          </LinkButton>
        </FlexItem>
        <FlexItem col='auto'>
          <LinkButton
            href={`https://designsystem.migrationsverket.se/storybook/?path=/docs/components-${name.toLowerCase()}--docs`}
            variant='tertiary'
            icon={Bookmark}
          >
            Storybook
          </LinkButton>
        </FlexItem>
        <FlexItem col='auto'>
          {overrideHeadlessLink !== '' && (
            <LinkButton
              href={
                overrideHeadlessLink
                  ? overrideHeadlessLink
                  : `https://react-spectrum.adobe.com/react-aria/${name}.html`
              }
              target='_blank'
              variant='tertiary'
              icon={FileCode2}
            >
              Referens
            </LinkButton>
          )}
        </FlexItem>
      </Flex>
    </section>
  )
}
