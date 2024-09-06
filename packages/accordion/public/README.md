# accordion

```bash
npm i @migrationsverket/accordion
```

```tsx
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@migrationsverket/accordion'

;<Accordion
  collapsible
  headingTag="h3"
  type="single"
>
  <AccordionItem value="Ett">
    <AccordionTrigger>Trigger Ett</AccordionTrigger>
    <AccordionContent>Content Ett</AccordionContent>
  </AccordionItem>
  <AccordionItem value="Två">
    <AccordionTrigger>Trigger Två</AccordionTrigger>
    <AccordionContent>Content Två</AccordionContent>
  </AccordionItem>
  <AccordionItem value="Tre">
    <AccordionTrigger>Trigger Tre</AccordionTrigger>
    <AccordionContent>Content Tre</AccordionContent>
  </AccordionItem>
  <AccordionItem value="Fyra">
    <AccordionTrigger>Trigger Fyra</AccordionTrigger>
    <AccordionContent>Content Fyra</AccordionContent>
  </AccordionItem>
</Accordion>
```
