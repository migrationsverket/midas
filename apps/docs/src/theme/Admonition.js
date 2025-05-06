import React from 'react'
import { InfoBanner } from '@midas-ds/components'

export default function Admonition(props) {
  console.log(props)
  const typeMapping = {
    tip: 'success',
    note: 'info',
    info: 'info',
    warning: 'important',
    danger: 'warning',
  }

  const bannerType = typeMapping[props.type] || 'info'

  return (
    <InfoBanner
      className='no-margin-children'
      type={bannerType}
      title={props.title}
    >
      {props.children}
    </InfoBanner>
  )
}
