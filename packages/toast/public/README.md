# Toast

```bash
npm i @migrationsverket/toast
```

```tsx
import { Toast } from '@migrationsverket/toast'
import { Button } from '@migrationsverket/button'
;

<GlobalToastRegion />
<Button
onPress={() =>
    toastQueue.add({ type: 'success', message: 'Allt funkar som det ska!' }, {
    timeout: 2000,
    })
}
>
    Tryck här för en notifiering
</Button>
```
