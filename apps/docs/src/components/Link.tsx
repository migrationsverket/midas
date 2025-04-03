import React from 'react'
import { Link as MidasLink, type LinkProps } from '@midas-ds/components'
import useBrokenLinks from '@docusaurus/useBrokenLinks'

/**
 * A wrapper to implement docusaurus broken link collector around Midas Link
 */
export const Link: React.FC<LinkProps<typeof MidasLink>> = props => {
  const brokenLinks = useBrokenLinks()

  // Only check internal links
  if (!props.href.includes('//')) {
    brokenLinks.collectLink(props.href)
  }

  return <MidasLink {...props} />
}
