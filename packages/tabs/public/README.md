# Tabs

```bash
npm i @midas-ds/tabs
```

```tsx
import { Tabs } from '@midas-ds/tabs';

const tabs = {
    defaultSelected: 'Viktigt att veta',
    label: 'Följ processen',
    tabs: ['Processen', 'Viktigt att veta', 'Ansök'] as const,
}

<Tabs
    defaultSelected={tabs.defaultSelected}
    label={tabs.label}
    tabs={tabs.tabs}
>
    <div>
        Processen går till såhär Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Asperiores expedita, excepturi, hic modi tenetur
        maxime dicta omnis aliquam quas doloremque cumque repellendus iure.
        Eveniet reprehenderit sapiente quidem culpa nam? Vel?
    </div>
    <div>
        Det är viktigt att veta att Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum veritatis quisquam amet, rem aperiam error
        nostrum earum consequuntur quidem fugit. Blanditiis odit corrupti
        consequatur nam culpa nesciunt cupiditate autem suscipit.
    </div>
    <div>
        Ansök här
    </div>
</Tabs>
```
