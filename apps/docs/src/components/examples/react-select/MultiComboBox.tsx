import Select, { CSSObjectWithLabel, MultiValueProps } from 'react-select'
import { Label, Text } from '@midas-ds/components'
import { variables } from '@midas-ds/theme'
import '@midas-ds/select-styles/lib/react-select.css'

import { mockPersonData } from '../mockData'

type MultiComboBoxProps = { id?: string; className?: string }

export const MultiComboBox = ({
  id = 'basic-example',
  className = 'select',
}: MultiComboBoxProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Label htmlFor={id}>Select employee</Label>
      <Text slot='description'>Employees from all departments</Text>
      <Select
        className={className}
        classNamePrefix='midas'
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        inputId={id}
        isMulti
        isSearchable
        noOptionsMessage={() => 'No match'}
        options={mockPersonData.map(({ id, firstName, lastName }) => ({
          value: id,
          label: [firstName, lastName].join(' '),
        }))}
        placeholder='Select an employee'
        styles={{
          multiValue: (
            provided: CSSObjectWithLabel,
            { isFocused }: MultiValueProps,
          ) => ({
            ...provided,
            boxShadow: isFocused ? variables.stateFocus : undefined,
          }),
        }}
        unstyled
      />
    </div>
  )
}
