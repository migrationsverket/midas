import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export const BasicHeaderExample: React.FC = () => {
  const url = useBaseUrl('/layout-examples/header')
  return (
    <div className='card'>
      <iframe
        title='Header example'
        style={{ width: '100%', height: 200, border: 'none' }}
        src={url}
      />
    </div>
  )
}

export const MobileHeaderExample: React.FC = () => {
  const url = useBaseUrl('/layout-examples/header-mobile')
  return (
    <div className='card'>
      <iframe
        title='Header with mobile menu example'
        style={{ width: '100%', height: 350, border: 'none' }}
        src={url}
      />
    </div>
  )
}

export const OverflowHeaderExample: React.FC = () => {
  const url = useBaseUrl('/layout-examples/header-overflow')
  return (
    <div className='card'>
      <iframe
        title='Header overflow menu example'
        style={{ width: '100%', height: 200, border: 'none' }}
        src={url}
      />
    </div>
  )
}
