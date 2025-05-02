import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export const BasicExample: React.FC = props => {
  const layoutExampleUrl = useBaseUrl('/layout-examples/layout')

  return (
    <div className='card'>
      <iframe
        title='Layout example'
        style={{ width: '100%', height: 500, border: 'none' }}
        src={layoutExampleUrl}
      />
    </div>
  )
}

export const ExternalExample: React.FC = props => {
  const layoutExampleUrl = useBaseUrl('/layout-examples/layout-external')

  return (
    <div className='card'>
      <iframe
        title='Layout external example'
        style={{ width: '100%', height: 500, border: 'none' }}
        src={layoutExampleUrl}
      />
    </div>
  )
}
