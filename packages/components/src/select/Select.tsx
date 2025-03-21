import * as React from 'react'
import { Item, Section } from '@react-stately/collections'
import { MultiSelect } from './MultiSelect'
import { SelectContainerProps } from './types'
import { SingleSelect } from './SingleSelect'

export const Select = React.forwardRef<HTMLButtonElement, SelectContainerProps>(
  ({ options, selectionMode, ...props }, ref) =>
    selectionMode === 'multiple' ? (
      <MultiSelect
        selectionMode={selectionMode}
        {...props}
        items={options}
        ref={ref}
      >
        {section =>
          section.children ? (
            <Section
              key={section.name}
              items={section.children}
              title={section.name}
            >
              {item => <Item textValue={item.textValue}>{item.name}</Item>}
            </Section>
          ) : (
            <Item textValue={section.textValue}>{section.name}</Item>
          )
        }
      </MultiSelect>
    ) : (
      <SingleSelect
        selectionMode={selectionMode}
        {...props}
        items={options}
        ref={ref}
      >
        {section =>
          section.children ? (
            <Section
              key={section.name}
              items={section.children}
              title={section.name}
            >
              {item => <Item textValue={item.textValue}>{item.name}</Item>}
            </Section>
          ) : (
            <Item textValue={section.textValue}>{section.name}</Item>
          )
        }
      </SingleSelect>
    ),
)

Select.displayName = 'Select'
