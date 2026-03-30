import { Button, Tooltip, TooltipTrigger } from '@midas-ds/components'

export const InactiveExample = () => {
  return (
    <div className='card'>
      <TooltipTrigger shouldCloseOnPress={false}>
        <Button isInactive>Lägg beställning</Button>
        <Tooltip>Knappen är inte tillgänglig pga xyz</Tooltip>
      </TooltipTrigger>
    </div>
  )
}
