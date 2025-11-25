import { Focusable } from 'react-aria-components'
import {
  toastQueue,
  TooltipTrigger,
  Tooltip,
  Button,
} from '@midas-ds/components'

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
        <Button
          variant='tertiary'
          onClick={handleClick}
          style={{
            padding: 0,
            background: 'none',
            border: 'none',
            fontWeight: 400,
          }}
        >
          {name}
        </Button>
      </Focusable>
      <Tooltip>Klicka för att kopiera</Tooltip>
    </TooltipTrigger>
  )
}
