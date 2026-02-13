import {
  ListBoxSection as AriaListBoxSection,
  type ListBoxSectionProps,
} from 'react-aria-components'

export type { ListBoxSectionProps }

export const ListBoxSection = <T extends object>(
  props: ListBoxSectionProps<T>,
) => <AriaListBoxSection {...props} />
