import React from 'react'
import { themes as prismThemes } from 'prism-react-renderer'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import styles from './styles.module.css'
import { fruits } from '../examples/fruits'

declare global {
  interface Array<T> {
    shuffled(count?: number): Array<T>
  }
}

Array.prototype.shuffled = function (count = 5) {
  const result = this.sort(() => Math.random() - Math.random()).slice(0, count)
  return count === 1 ? result[0] : result
}

function Playground({ children, transformCode, ...props }) {
  const theme = usePrismTheme()
  const scope = { fruits, ...props.scope }

  return (
    <LiveProvider
      code={children.replace(/\n$/, '')}
      transformCode={transformCode || ((code) => `${code};`)}
      theme={theme}
      {...props}
      scope={scope}
    >
      <div className={styles.playgroundEditor}>
        <LiveEditor />
      </div>
      <div className={styles.playgroundPreview}>
        <LivePreview />
        <LiveError />
      </div>
    </LiveProvider>
  )
}

export default Playground

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const usePrismTheme = () => {
  const {
    siteConfig: {
      themeConfig: { prism = {} },
    },
  } = useDocusaurusContext()
  const prismTheme = prismThemes.github

  return prismTheme
}
