import React from 'react'
import { themes as prismThemes } from 'prism-react-renderer'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import styles from './styles.module.css'
import { fruits } from '../examples/fruits'
import { Accordion, AccordionItem } from '@midas-ds/components'
import clsx from 'clsx'

declare global {
  interface Array<T> {
    shuffled(count?: number): Array<T>
  }
}

Array.prototype.shuffled = function (count = 5) {
  const result = this.sort(() => Math.random() - Math.random()).slice(0, count)
  return count === 1 ? result[0] : result
}

const columns = [
  { name: 'Namn', id: 'name', isRowHeader: true },
  { name: 'Beskrivning', id: 'desc' }
]

const rows = fruits.shuffled(7).map(fruit => {
  return {
    id: fruit.value,
    name: fruit.name,
    desc: fruit.description
  }
})

const Playground = ({
  children,
  transformCode,
  hideCode,
  hideExample,
  ...props
}) => {
  const theme = usePrismTheme()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const scope = { columns, rows, fruits, ...props.scope, isOpen, setIsOpen }

  return (
    <LiveProvider
      code={children.replace(/\n$/, '')}
      transformCode={transformCode || (code => `${code};`)}
      theme={theme}
      {...props}
      scope={scope}
    >
      {!hideExample && (
        <div className={styles.playgroundPreview}>
          <LivePreview />
          <LiveError />
        </div>
      )}
      <div
        className={clsx(
          styles.playgroundEditor,
          !hideCode && styles.borderBottom
        )}
      >
        {!hideCode && (
          <Accordion>
            <AccordionItem
              id='example'
              title='Exempelkod'
            >
              <LiveEditor />
            </AccordionItem>
          </Accordion>
        )}
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
      themeConfig: { prism = {} }
    }
  } = useDocusaurusContext()
  const prismTheme = prismThemes.github

  return prismTheme
}
