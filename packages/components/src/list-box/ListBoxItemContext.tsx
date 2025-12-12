import { createContext } from 'react'
import { ListBoxItemProps } from './ListBoxItem'

export type ListBoxItemContextValue<T extends object> = Pick<
  ListBoxItemProps<T>,
  'size'
>

export const ListBoxItemContext = createContext<
  ListBoxItemContextValue<object>
>({
  size: 'large',
})
