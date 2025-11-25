import { Focusable } from 'react-aria-components'
import { toastQueue, TooltipTrigger, Tooltip, Text } from '@midas-ds/components'

export interface IconCopyProps {
  name: string
}

export function IconCopy({ name }: IconCopyProps) {
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(name)
      toastQueue.add(
        {
          type: 'success',
          message: `Kopierade "${name}"`,
        },
        { timeout: 5000 },
      )
    } catch (error) {
      toastQueue.add(
        {
          type: 'warning',
          message: `Misslyckades att kopiera "${name}", ${error}`,
        },
        { timeout: 5000 },
      )
    }
  }

  return (
    <TooltipTrigger>
      <Focusable>
        <button
          onClick={handleClick}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <Text>{name}</Text>
        </button>
      </Focusable>
      <Tooltip>Klicka för att kopiera</Tooltip>
    </TooltipTrigger>
  )
}
