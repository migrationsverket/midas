import React from 'react';
// @ts-ignore
import { compareLoose, gt, gte, SemVer } from 'semver';
import moment from 'moment';

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
                k.startsWith('@mvds')
                  ? 'badge badge--primary'
                  : 'badge badge--secondary'
              }
            >{`${k}@${info.dependencies[k]}`}</span>
          ))}
        </span>
      </div>
    );
  }
};
export const ComponentHeader = ({ name, info, friendlyName }) => {
  moment.locale('sv');
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
    );
  }
  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <span className={'badge badge--secondary'}>
            Version: {info.version}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '3px' }}>
          <a
            href={`https://github.com/migrationsverket/midas/tree/main/packages/${name}`}
            target="_blank"
          >
            <img
              alt="Static Badge"
              src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white"
            />
          </a>
          <a href={info.dist.tarball}>
            <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white" />
          </a>
        </div>
      </div>
      <span style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ display: 'flex', alignItems: 'flex-start' }}>
          <h1>{friendlyName ? friendlyName : name}</h1>
          <span
            className={gte(info.version, '1.0.0') ? '' : 'badge badge--primary'}
          >
            {gte(info.version, '1.0.0') ? '' : 'beta'}
          </span>
        </span>
        <h6>Senast uppdaterad {moment(info.time[info.version]).fromNow()}</h6>
      </span>
    </section>
  );
};
