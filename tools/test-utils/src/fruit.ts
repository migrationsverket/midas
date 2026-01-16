import type { Fruit, Category } from './types'
import { fruit } from './data'

export const options = fruit.map(({ id, name }: Fruit) => ({ id, name }))

export const optionsWithSections = fruit.reduce<Category[]>(
  (categories, currentFruit, index) => {
    const foundCategory = categories.find(
      ({ name }) => name === currentFruit.category,
    )

    if (foundCategory) {
      foundCategory.children.push(currentFruit)
    }

    if (!foundCategory) {
      categories.push({
        children: [currentFruit],
        id: index,
        name: currentFruit.category,
      })
    }

    return categories
  },
  [],
)
