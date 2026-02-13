import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  GlobalToastRegion,
  MidasToast,
  Toast,
  ToastProvider,
  ToastRegion,
  toastQueue,
} from './Toast'
import { Button } from '../button'

type Story = StoryObj<typeof meta>

const meta = {
  component: GlobalToastRegion,
  subcomponents: {
    ToastProvider: ToastProvider as React.ComponentType<unknown>,
    ToastRegion: ToastRegion as React.ComponentType<unknown>,
    Toast: Toast as React.ComponentType<unknown>,
  },
  title: 'Components/Toast',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          `Toast visar korta, tillfälliga meddelanden om åtgärder, fel eller andra händelser. Det finns två sätt att använda toast: **globalt** med \`toastQueue\` eller **lokalt** med \`ToastProvider\`.

### MidasToast

Objektet som skickas till \`.add()\`:

| Egenskap | Typ | Beskrivning |
|----------|-----|-------------|
| \`message\` | \`string\` | Meddelandetext |
| \`type\` | \`'success' \\| 'info' \\| 'important' \\| 'warning'\` | Variant |
| \`children\` | \`ReactNode\` | Valfritt extra innehåll |

### ToastState / toastQueue

Metoderna som finns på \`state\` (från \`ToastProvider\`) och \`toastQueue\` (global):

| Metod | Returtyp | Beskrivning |
|-------|----------|-------------|
| \`.add(content, options?)\` | \`string\` | Lägger till en toast, returnerar en nyckel |
| \`.close(key)\` | \`void\` | Stänger en toast programmatiskt |
| \`.visibleToasts\` | \`QueuedToast[]\` | Lista av synliga toasts |

Options till \`.add()\`: \`{ timeout?: number, onClose?: () => void }\``,
      },
    },
  },
} satisfies Meta

export default meta

export const Global: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Använd `GlobalToastRegion` och `toastQueue` för en global kö. Placera `<GlobalToastRegion />` någonstans i appen och anropa `toastQueue.add()` var som helst.',
      },
      source: {
        code: `import { GlobalToastRegion, toastQueue } from '@midas-ds/components'

<GlobalToastRegion />

<Button
  onPress={() =>
    toastQueue.add(
      { type: 'success', message: 'Toasten är klar' },
      { timeout: 5000 },
    )
  }
>
  Visa toast
</Button>`,
      },
    },
  },
  render: () => (
    <>
      <GlobalToastRegion />
      <Button
        onPress={() =>
          toastQueue.add(
            { type: 'success', message: 'Toasten är klar' },
            { timeout: 5000 },
          )
        }
      >
        Visa toast
      </Button>
    </>
  ),
}

export const Local: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Använd `ToastProvider` för en lokal kö. Providern ger tillgång till `state` via render props, och toast-regionen renderas automatiskt intill innehållet.',
      },
      source: {
        code: `import { ToastProvider } from '@midas-ds/components'

<ToastProvider>
  {state => (
    <Button
      onPress={() =>
        state.add(
          { type: 'success', message: 'Lokalt meddelande' },
          { timeout: 5000 },
        )
      }
    >
      Visa lokal toast
    </Button>
  )}
</ToastProvider>`,
      },
    },
  },
  render: () => (
    <div style={{ height: 200 }}>
      <ToastProvider>
        {state => (
          <Button
            onPress={() =>
              state.add(
                { type: 'success', message: 'Lokalt meddelande' },
                { timeout: 5000 },
              )
            }
          >
            Visa lokal toast
          </Button>
        )}
      </ToastProvider>
    </div>
  ),
}

export const Variants: Story = {
  name: 'Varianter',
  parameters: {
    docs: {
      description: {
        story:
          'Toast har fyra varianter: `success`, `info`, `important` och `warning`.',
      },
      source: {
        code: `toastQueue.add({ type: 'success', message: '...' })
toastQueue.add({ type: 'info', message: '...' })
toastQueue.add({ type: 'important', message: '...' })
toastQueue.add({ type: 'warning', message: '...' })`,
      },
    },
  },
  render: () => {
    const types: MidasToast['type'][] = [
      'success',
      'info',
      'important',
      'warning',
    ]
    return (
      <>
        <GlobalToastRegion />
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {types.map(type => (
            <Button
              key={type}
              onPress={() =>
                toastQueue.add(
                  { type, message: `Detta är en ${type}-toast` },
                  { timeout: 5000 },
                )
              }
            >
              {type}
            </Button>
          ))}
        </div>
      </>
    )
  },
}

export const ProgrammaticClose: Story = {
  name: 'Programmatisk stängning',
  parameters: {
    docs: {
      description: {
        story:
          '`.add()` returnerar en nyckel som kan användas för att stänga en toast med `.close()`. Callbacken `onClose` triggas oavsett om toasten stängs manuellt eller via timeout.',
      },
      source: {
        code: `const key = toastQueue.add(
  { type: 'info', message: 'Bearbetar...' },
)

// Stäng toasten programmatiskt
toastQueue.close(key)

// Eller med onClose-callback
toastQueue.add(
  { type: 'success', message: 'Filen sparades' },
  {
    timeout: 5000,
    onClose: () => console.log('Toasten stängdes'),
  },
)`,
      },
    },
  },
  render: () => {
    let currentKey: string | undefined
    return (
      <>
        <GlobalToastRegion />
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button
            onPress={() => {
              currentKey = toastQueue.add({
                type: 'info',
                message: 'Denna toast stängs inte automatiskt',
              })
            }}
          >
            Visa toast
          </Button>
          <Button
            onPress={() => {
              if (currentKey) toastQueue.close(currentKey)
            }}
          >
            Stäng programmatiskt
          </Button>
        </div>
      </>
    )
  },
}
