import { AccordionItem, Accordion } from '@midas-ds/components'
import React from 'react'
import { Key } from 'react-aria-components'

export const AccordionExample = (
  props: typeof AccordionItem & typeof Accordion,
) => {
  return (
    <div className={'card'}>
      <Accordion {...props}>
        <AccordionItem
          {...props}
          id={'mandarin'}
          title={'Mandarin'}
        >
          Liten orange citrusfrukt
        </AccordionItem>
        <AccordionItem
          id={'sharon'}
          title={'Sharon'}
        >
          Persikoliknande frukt med fast kött
        </AccordionItem>
        <AccordionItem
          id={'watermelon'}
          title={'Vattenmelon'}
        >
          Stor frukt med rött, saftigt kött
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export const AccordionExampleControlled = (props: typeof Accordion) => {
  const [expandedKeys, setExpandedKeys] = React.useState<Set<Key>>(
    new Set(['mandarin']),
  )
  return (
    <div
      className={'card'}
      style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
    >
      <Accordion
        {...props}
        expandedKeys={expandedKeys}
        onExpandedChange={setExpandedKeys}
      >
        <AccordionItem
          {...props}
          id={'mandarin'}
          title={'Mandarin'}
        >
          Liten orange citrusfrukt
        </AccordionItem>
        <AccordionItem
          id={'sharon'}
          title={'Sharon'}
        >
          Persikoliknande frukt med fast kött
        </AccordionItem>
        <AccordionItem
          id={'watermelon'}
          title={'Vattenmelon'}
        >
          Stor frukt med rött, saftigt kött
        </AccordionItem>
      </Accordion>
      <pre>
        Följande AccordionItems är öppna: {Array.from(expandedKeys).join(', ')}
      </pre>
    </div>
  )
}
