import { Select, SelectProps } from '@midas-ds/components'

export const BasicExample: React.FC<Partial<SelectProps>> = props => (
  <Select
    label='Favoritfrukt'
    description='Välj vilken du vill'
    placeholder='Välj en frukt'
    selectionMode='single'
    options={[
      { id: 'apelsin', name: 'Apelsin' },
      { id: 'banan', name: 'Banan' },
      { id: 'citron', name: 'Citron' },
      { id: 'dadel', name: 'Dadel' },
      { id: 'fikon', name: 'Fikon' },
    ]}
    {...props}
  />
)
