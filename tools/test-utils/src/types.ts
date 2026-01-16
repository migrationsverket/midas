import type { Key } from 'react-aria-components'

export type Fruit = {
  id: Key
  name: string
  description: string
  value: string
  image: string
  category: string
}

export type Category = {
  name: Key
  id: number
  children: Fruit[]
}
