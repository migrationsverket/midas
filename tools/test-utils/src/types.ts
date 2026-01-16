import type { Key } from 'react-aria-components'

export type Fruit = {
  id: Key
  name: string
  description: string
  value: string
  image: string
  category: string
}

export type FruitCategory = {
  name: Key
  id: number
  children: Fruit[]
}

export type Department =
  | 'Engineering'
  | 'Finance'
  | 'HR'
  | 'Marketing'
  | 'Sales'

export type Status = 'Active' | 'Inactive' | 'Pending'

export type Employee = {
  id: string
  firstName: string
  lastName: string
  email: string
  department: Department
  status: Status
}
