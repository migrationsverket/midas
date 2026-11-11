import Link from '@docusaurus/Link'
import BrowserOnly from '@docusaurus/BrowserOnly'
import {
  filterDocCardListItems,
  findFirstSidebarItemLink,
  useCurrentSidebarCategory,
  useDocById,
} from '@docusaurus/plugin-content-docs/client'
import type {
  PropSidebarItemCategory,
  PropSidebarItemLink,
} from '@docusaurus/plugin-content-docs'
import Heading from '@theme/Heading'
import { LivePreview } from './LivePreview'
import styles from './ComponentIndex.module.css'

type CardItem = PropSidebarItemLink | PropSidebarItemCategory

const isCardItem = (item: { type: string }): item is CardItem =>
  item.type === 'link' || item.type === 'category'

/**
 * A docs page, or a category such as Layout. A category links to its first
 * page and borrows that page's description.
 */
const useCardData = (item: CardItem) => {
  const docId =
    item.type === 'link'
      ? item.docId
      : item.items.find(child => child.type === 'link')?.docId
  const doc = useDocById(docId ?? undefined)

  return {
    title: item.label,
    href:
      item.type === 'category'
        ? (item.href ?? findFirstSidebarItemLink(item))
        : item.href,
    description: doc?.description,
  }
}

const ComponentCard = ({ item }: { item: CardItem }) => {
  const { title, href, description } = useCardData(item)
  if (!href) return null

  // Only the title is a link, stretched over the card with CSS. Wrapping the
  // whole card in a link would nest links from stories like Breadcrumbs
  return (
    <div className={styles.card}>
      {/* Stories can touch window, so previews only render in the browser */}
      <BrowserOnly fallback={<div className={styles.preview} />}>
        {() => <LivePreview title={title} />}
      </BrowserOnly>
      <div className={styles.body}>
        <Heading
          as='h2'
          className={styles.title}
        >
          <Link
            className={styles.link}
            to={href}
          >
            {title}
          </Link>
        </Heading>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  )
}

/** Cards for every page in the current sidebar category, with a live preview of each component */
export const ComponentIndex = () => {
  const category = useCurrentSidebarCategory()

  return (
    <div className={styles.grid}>
      {filterDocCardListItems(category.items)
        .filter(isCardItem)
        .map(item => (
          <ComponentCard
            key={item.type === 'link' ? item.href : item.label}
            item={item}
          />
        ))}
    </div>
  )
}
