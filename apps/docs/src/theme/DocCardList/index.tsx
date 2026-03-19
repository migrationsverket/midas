import React, { type ReactNode, useState } from 'react'
import DocCardList from '@theme-original/DocCardList'
import type DocCardListType from '@theme/DocCardList'
import type { WrapperProps } from '@docusaurus/types'
import type { PropSidebarItemLink } from '@docusaurus/plugin-content-docs'
import Link from '@docusaurus/Link'
import styles from './styles.module.css'

type Props = WrapperProps<typeof DocCardListType>

const GROUPS = ['Alla', 'Formulär', 'Navigation', 'Feedback', 'Overlay', 'Layout', 'Typografi', 'Övrigt']

function isLinkItem(item: unknown): item is PropSidebarItemLink {
  return (item as PropSidebarItemLink)?.type === 'link'
}

function getGroup(item: PropSidebarItemLink): string {
  return (item.customProps as { group?: string })?.group ?? 'Övrigt'
}

function ComponentCard({ item }: { item: PropSidebarItemLink }) {
  return (
    <Link
      to={item.href}
      className={styles.card}
    >
      <span className={styles.cardTitle}>{item.label}</span>
      {item.description && (
        <span className={styles.cardDescription}>{item.description}</span>
      )}
    </Link>
  )
}

export default function DocCardListWrapper(props: Props): ReactNode {
  const [search, setSearch] = useState('')
  const [activeGroup, setActiveGroup] = useState('Alla')

  if (!props.items) {
    return <DocCardList {...props} />
  }

  const linkItems = props.items.filter(isLinkItem)

  const filtered = linkItems.filter(item => {
    if (search) return item.label.toLowerCase().includes(search.toLowerCase())
    return activeGroup === 'Alla' || getGroup(item) === activeGroup
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <input
          className={styles.search}
          type='search'
          placeholder='Sök komponent...'
          value={search}
          onChange={e => {
            setSearch(e.target.value)
            setActiveGroup('Alla')
          }}
          aria-label='Sök komponent'
        />
        <div
          className={styles.groups}
          role='group'
          aria-label='Filtrera efter kategori'
        >
          {GROUPS.map(group => (
            <button
              key={group}
              className={`${styles.groupButton} ${activeGroup === group && !search ? styles.active : ''}`}
              onClick={() => {
                setActiveGroup(group)
                setSearch('')
              }}
              aria-pressed={activeGroup === group && !search}
            >
              {group}
            </button>
          ))}
        </div>
      </div>
      {filtered.length > 0
        ? (
          <div className={styles.grid}>
            {filtered.map(item => (
              <ComponentCard
                key={item.href}
                item={item}
              />
            ))}
          </div>
          )
        : <p className={styles.empty}>Inga komponenter hittades.</p>
      }
    </div>
  )
}
