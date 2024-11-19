# select

```bash
npm i @midas-ds/multi-select
```

```tsx
import { MultiSelect } from '@midas-ds/multi-select';

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

<MultiSelect
  label="Välj en eller flera frukter"
  items={options}
/>
```
