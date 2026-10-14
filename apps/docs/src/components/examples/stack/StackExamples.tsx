import { Stack, type StackProps } from '@midas-ds/components'

const Boxes = () =>
  ['Första', 'Andra', 'Tredje'].map(label => (
    <div
      key={label}
      style={{
        padding: 'var(--midas-space-small) var(--midas-space-medium)',
        backgroundColor: 'var(--midas-layer-02-base)',
        border: '1px solid var(--midas-border-color-subtle)',
      }}
    >
      {label}
    </div>
  ))

export const StackExample = (props: Omit<StackProps, 'children'>) => (
  <div className='card'>
    <Stack {...props}>
      <Boxes />
    </Stack>
  </div>
)
