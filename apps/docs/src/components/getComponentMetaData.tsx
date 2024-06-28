import React from 'react'
import { compareLoose, gt, gte, SemVer } from 'semver'
import moment from 'moment'

export const ComponentFooter = ({ info }) => {
  if (info) {
    return (
      <div>
        <span
          style={{
            display: 'flex',
            justifyContent: 'start',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          {Object.keys(info.dependencies).map((k) => (
            <span
              key={k}
              className={
                k.startsWith('@migrationsverket')
                  ? 'badge badge--primary'
                  : 'badge badge--secondary'
              }
            >{`${k}@${info.dependencies[k]}`}</span>
          ))}
        </span>
      </div>
    )
  }
}
export const ComponentHeader = ({ name, info, friendlyName }) => {
  moment.locale('sv')
  if (!info) {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span className={'badge badge--secondary'}>Under utveckling</span>
        </div>
        <div style={{ display: 'flex', gap: '3px' }}>
          <a
            href={`https://github.com/migrationsverket/midas/tree/main/packages/${name}`}
          >
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white"
            />
          </a>
        </div>
      </div>
    )
  }
  return (
    <section style={{ marginBottom: 48 }}>
      <h1>{friendlyName ? friendlyName : name}</h1>

      <div
        style={{
          display: 'flex',
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
              href={`https://github.com/migrationsverket/midas/tree/main/packages/${name}`}
              target="_blank"
            >
              <img
                alt="Storybook"
                src="https://img.shields.io/badge/Storybook-FF4785.svg?style=for-the-badge&logo=storybook&logoColor=white"
              />
            </a>
            <a
              href={`https://github.com/migrationsverket/midas/tree/main/packages/${name}`}
              target="_blank"
            >
              <img
                alt="GitHub"
                src="https://img.shields.io/badge/github-100000.svg?style=for-the-badge&logo=github&logoColor=white"
              />
            </a>
            <a
              href={info.dist.tarball}
              target="_blank"
            >
              <img
                alt="NPM"
                src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
