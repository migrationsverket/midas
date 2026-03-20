import React, { type ReactNode, useState } from 'react'
import DocCardList from '@theme-original/DocCardList'
import type DocCardListType from '@theme/DocCardList'
import type { WrapperProps } from '@docusaurus/types'
import type { PropSidebarItemLink } from '@docusaurus/plugin-content-docs'
import { useDocById } from '@docusaurus/plugin-content-docs/client'
import Link from '@docusaurus/Link'
import { SearchField } from '@midas-ds/components'
import styles from './styles.module.css'
import { illustrations, FallbackIllustration } from './ComponentIllustrations'

type Props = WrapperProps<typeof DocCardListType>

const STATIC_GROUPS = ['Alla', 'Övrigt']

function isLinkItem(item: unknown): item is PropSidebarItemLink {
  return (item as PropSidebarItemLink)?.type === 'link'
}

function getGroups(item: PropSidebarItemLink): string[] {
  const props = item.customProps as { groups?: string[] }
  return props?.groups ?? ['Övrigt']
}

function ComponentCard({ item }: { item: PropSidebarItemLink }) {
  const doc = useDocById(item.docId ?? undefined)
  const description = item.description ?? doc?.description
  const Illustration = illustrations[item.label]
  return (
    <Link
      to={item.href}
      className={styles.card}
    >
      <div className={styles.cardIllustration}>
        {Illustration ? (
          <Illustration className={styles.illustration} />
        ) : (
          <FallbackIllustration className={styles.illustration} />
        )}
      </div>
      <div className={styles.cardBody}>
        <span className={styles.cardTitle}>{item.label}</span>
        {description && (
          <span className={styles.cardDescription}>{description}</span>
        )}
      </div>
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

  const foundGroups = linkItems.map(getGroups).flat().sort()

  const groups = Array.from(new Set([...STATIC_GROUPS, ...foundGroups]))

  const filtered = linkItems.filter(item => {
    if (search) return item.label.toLowerCase().includes(search.toLowerCase())
    return activeGroup === 'Alla' || getGroups(item).includes(activeGroup)
  })

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <SearchField
          placeholder='Sök komponent...'
          showButton={false}
          size='medium'
          value={search}
          onChange={val => {
            setSearch(val)
            setActiveGroup('Alla')
          }}
          onClear={() => setSearch('')}
          className={styles.search}
        />
        <div
          className={styles.groups}
          role='group'
          aria-label='Filtrera efter kategori'
        >
          {groups.map(group => (
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
      {filtered.length > 0 ? (
        <div className={styles.grid}>
          {filtered.map(item => (
            <ComponentCard
              key={item.href}
              item={item}
            />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>Inga komponenter hittades.</p>
      )}
    </div>
  )
}
