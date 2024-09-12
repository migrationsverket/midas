# select

```bash
npm i @midas-ds/select
```

```tsx
import { Select, Item } from '@midas-ds/select';

const options = [
  { id: 'apple', name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Kiwi' },
  { id: 4, name: 'Elderflower' },
  { id: 5, name: 'Nectarine' },
  { id: 6, name: 'Watermelon' },
  { id: 7, name: 'Pineapple' },
  { id: 8, name: 'Apricot' },
  { id: 9, name: 'Cloudberry' },
]

<Select
  label="Välj en frukt"
  items={options}
>
  {(item) => <Item>{item.name}</Item>}
</Select>
```
