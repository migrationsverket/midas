import React from 'react'
import { Link as MidasLink, type LinkProps } from '@midas-ds/components'
import DocusaurusLink from '@docusaurus/Link'

/**
 * A wrapper to implement docusaurus broken link collector around Midas Link
 */
export const Link: React.FC<LinkProps<typeof DocusaurusLink>> = props => (
  <MidasLink
    as={DocusaurusLink}
    {...props}
  />
)
