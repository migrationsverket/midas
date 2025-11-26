import { toastQueue, TooltipTrigger, Tooltip, Text } from '@midas-ds/components'
import { Copy } from 'lucide-react'
import { variables } from '@midas-ds/theme'

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
    <button
      onClick={handleClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        gap: '0.5rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Text>{name}</Text>
      <Copy
        size={16}
        color={variables.iconSecondary}
      />
    </button>
  )
}
