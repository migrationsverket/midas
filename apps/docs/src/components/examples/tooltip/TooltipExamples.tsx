import {
  Button,
  Stack,
  Tooltip,
  TooltipTrigger,
  Text,
} from '@midas-ds/components'
import { ArrowUp, ArrowLeft, Save } from 'lucide-react'
import React from 'react'
import { Focusable } from 'react-aria-components'

export const SimpleExample = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing='medium'
      className='card'
    >
      <Text>Hovra över ikonen för att visa tooltip</Text>
      <TooltipTrigger>
        <Button
          variant='icon'
          aria-label='Spara'
        >
          <Save />
        </Button>
        <Tooltip>Spara</Tooltip>
      </TooltipTrigger>
    </Stack>
  )
}
export const TooltipDelay = () => {
  return (
    <Stack
      direction='row'
      spacing='medium'
      className='card'
    >
      <TooltipTrigger delay={600}>
        <Button variant='secondary'>Hover me first</Button>
        <Tooltip>Första Tooltip som hovras visas efter fördröjning.</Tooltip>
      </TooltipTrigger>
      <TooltipTrigger delay={600}>
        <Button variant='primary'>Hover later</Button>
        <Tooltip>Och nästa Tooltip visas då snabbare!</Tooltip>
      </TooltipTrigger>
    </Stack>
  )
}

export const TooltipPlacement = () => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      spacing='medium'
      className='card'
    >
      <TooltipTrigger delay={600}>
        <Button>
          <ArrowLeft />
        </Button>
        <Tooltip placement='left'>
          Tooltip visas till vänster om trigger-elementet
        </Tooltip>
      </TooltipTrigger>
      <TooltipTrigger delay={600}>
        <Button>
          <ArrowUp />
        </Button>
        <Tooltip placement='top'>
          Tooltip visas på ovansidan av trigger-elementet
        </Tooltip>
      </TooltipTrigger>
    </Stack>
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
