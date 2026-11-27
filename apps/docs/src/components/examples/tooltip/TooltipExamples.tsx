import {
  Button,
  Tooltip,
  TooltipTrigger,
  Focusable,
} from '@midas-ds/components'
import React from 'react'

export const TooltipDelay = () => {
  return (
    <div
      className='card'
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        gap: '1rem',
      }}
    >
      <TooltipTrigger delay={600}>
        <Button variant='secondary'>Hover me first</Button>
        <Tooltip>Första Tooltip som hovras visas efter fördröjning.</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger delay={600}>
        <Button variant='primary'>Hover later</Button>
        <Tooltip>Och nästa Tooltip visas då snabbare!</Tooltip>
      </TooltipTrigger>
    </div>
  )
}

export const ControlledTooltip = () => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <>
      <TooltipTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
        delay={500}
      >
        <Button>Hover me</Button>
        <Tooltip>
          Enligt botanisk definition räknas bananer faktiskt som bär, medan
          jordgubbar inte gör det.
        </Tooltip>
      </TooltipTrigger>
      <pre>Tooltip {isOpen ? 'visas' : 'visas inte'}</pre>
    </>
  )
}

export const CustomTriggerTooltip = () => {
  return (
    <TooltipTrigger>
      <Focusable>
        <span role='button'>Trigger</span>
      </Focusable>
      <Tooltip>
        Med hjälp av Focusable kan vilket element som helst bli en trigger!
      </Tooltip>
    </TooltipTrigger>
  )
}
