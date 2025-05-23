import React from 'react'
import Head from '@docusaurus/Head'
import MDXCode from '@theme/MDXComponents/Code'
import MDXA from '@theme/MDXComponents/A'
import MDXPre from '@theme/MDXComponents/Pre'
import MDXDetails from '@theme/MDXComponents/Details'
import MDXHeading from '@theme/MDXComponents/Heading'
import MDXUl from '@theme/MDXComponents/Ul'
import MDXImg from '@theme/MDXComponents/Img'
import Admonition from '@theme/Admonition'
import Mermaid from '@theme/Mermaid'
import * as Components from '@site/src/components/mvdsExports'

const MDXComponents = {
  Head,
  details: MDXDetails,
  Details: MDXDetails,
  // This is a fix to allow for importing of our custom components in any code block
  // code: MDXCode,
  code: props => {
    const { children } = props

    const scope = {
      ...React,
      ...Components,
    }

    if (typeof children === 'string') {
      return (
        <MDXCode
          {...props}
          scope={scope}
        />
      )
    }
    return children
  },
  a: MDXA,
  pre: MDXPre,
  ul: MDXUl,
  img: MDXImg,
  h1: props => (
    <MDXHeading
      as='h1'
      {...props}
    />
  ),
  h2: props => (
    <MDXHeading
      as='h2'
      {...props}
    />
  ),
  h3: props => (
    <MDXHeading
      as='h3'
      {...props}
    />
  ),
  h4: props => (
    <MDXHeading
      as='h4'
      {...props}
    />
  ),
  h5: props => (
    <MDXHeading
      as='h5'
      {...props}
    />
  ),
  h6: props => (
    <MDXHeading
      as='h6'
      {...props}
    />
  ),
  admonition: Admonition,
  mermaid: Mermaid,
}
export default MDXComponents
