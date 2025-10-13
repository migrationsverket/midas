import type {ListBoxItemProps, SelectProps, ValidationResult} from 'react-aria-components';
import {FieldError, Text, Select, Label, SelectValue, Button,ListBox, ListBoxItem, Popover} from 'react-aria-components';
import {ChevronDown} from 'lucide-react';

interface RacSelectProps<T extends object, M extends 'single' | 'multiple'>
  extends Omit<SelectProps<T, M>, 'children'> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

export function RacSelect<
  T extends object,
  M extends 'single' | 'multiple' = 'single'
>(
  { label, description, errorMessage, children, items, ...props }:
  RacSelectProps<T, M>
) {
  return (
    <Select {...props}>
      <Label>{label}</Label>
      <Button>
        <SelectValue />
        <span aria-hidden="true">
          <ChevronDown size={16} />
        </span>
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox items={items}>
          {children}
        </ListBox>
      </Popover>
    </Select>
  );
}

export function RacItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        `my-item ${isFocused ? 'focused' : ''} ${isSelected ? 'selected' : ''}`}
    />
  );
}
