# Toast

```bash
npm i @midas-ds/toast
```

```tsx
import { Toast } from '@midas-ds/toast'
import { Button } from '@midas-ds/button'
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
