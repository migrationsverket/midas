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
import {
  Card,
  CardContent,
  CardLink,
  CardTitle,
  Text,
} from '@midas-ds/components'
import { LivePreview } from './LivePreview'
import styles from './ComponentIndex.module.css'

type CardItem = PropSidebarItemLink | PropSidebarItemCategory

const isCardItem = (item: { type: string }): item is CardItem =>
  item.type === 'link' || item.type === 'category'

/**
 * A docs page, or a category such as Layout. A category links to its first
 * page and borrows that page's description, unless its _category_.json has
 * one of its own.
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
    description:
      (item.type === 'category' ? item.description : undefined) ??
      doc?.description,
    // From sidebar_custom_props in the page's frontmatter, or customProps in
    // a category's _category_.json
    story: item.customProps?.story as string | undefined,
  }
}

const ComponentCard = ({ item }: { item: CardItem }) => {
  const { title, href, description, story } = useCardData(item)
  if (!href) return null

  // A link card: CardLink stretches over the whole card. The preview isn't
  // inside the link, so links from stories like Breadcrumbs aren't nested
  return (
    <Card className={styles.card}>
      {/* Stories can touch window, so previews only render in the browser */}
      {story ? (
        <BrowserOnly fallback={<div className={styles.preview} />}>
          {() => <LivePreview story={story} />}
        </BrowserOnly>
      ) : (
        <div className={styles.preview} />
      )}
      <CardContent>
        <CardLink
          as={Link}
          to={href}
        >
          <CardTitle>{title}</CardTitle>
        </CardLink>
        {description && (
          <Text className={styles.description}>{description}</Text>
        )}
      </CardContent>
    </Card>
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
