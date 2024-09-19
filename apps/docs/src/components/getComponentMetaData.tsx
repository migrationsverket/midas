import React from 'react'
import { gte } from 'semver'
import moment from 'moment'

export const ComponentFooter = ({ info }) => {
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
  overrideHeadlessLink,
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
            target="_blank"
          >
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/React%20Aria-FF0000?style=for-the-badge&logo=adobe&logoColor=white"
            />
          </a>
        </div>
      </div>
    )
  }

  return (
    <section style={{ marginBottom: 48 }}>
      <div style={{ marginBottom: 24 }}>
        <b>{friendlyName}</b>
      </div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          <span className={'badge badge--secondary'}>
            Version: {info.version}
          </span>
          <span
            className={gte(info.version, '1.0.0') ? '' : 'badge badge--primary'}
          >
            {gte(info.version, '1.0.0') ? '' : 'beta'}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <a
              href={`https://migrationsverket.github.io/midas/storybook/?path=/docs/${name.toLowerCase()}--docs`}
            >
              <img
                style={{ borderRadius: '0.4rem' }}
                alt="Storybook"
                src="https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=storybook&logoColor=white"
              />
            </a>
            <a
              href={`https://github.com/migrationsverket/midas/tree/main/packages/${name.toLowerCase()}`}
              target="_blank"
            >
              <img
                style={{ borderRadius: '0.4rem' }}
                alt="GitHub"
                src="https://img.shields.io/badge/github-100000.svg?style=for-the-badge&logo=github&logoColor=white"
              />
            </a>
            {overrideHeadlessLink !== '' && (
              <a
                href={
                  overrideHeadlessLink
                    ? overrideHeadlessLink
                    : `https://react-spectrum.adobe.com/react-aria/${name}.html`
                }
                target="_blank"
              >
                <img
                  style={{ borderRadius: '0.4rem' }}
                  alt="Static Badge"
                  src="https://img.shields.io/badge/Headless-2e7ca5?style=for-the-badge&logo=headlessui&logoColor=white"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
