
import styles from './app.module.css'
import {
  Button,
  SearchField,
  Logo,
  TextField,
  Skeleton,
  Accordion,
  AccordionItem,
  RadioGroup,
  Radio
} from '@midas-ds/components'
import React from 'react'

export function App() {
  const [bolle, setBolle] = React.useState<boolean>(false);
  return (
    <div className={styles.container}>

      <Accordion defaultExpandedKeys={['Två']} variant="contained">
        <AccordionItem id="Ett" title="En öppningsbar panel ett">
          Innehåll i öppningsbarpanel Ett Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci
          ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi
          beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
        </AccordionItem>
        <AccordionItem id="Två" title="En öppningsbar panel två">
          Innehåll i öppningsbarpanel Två Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci
          ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi
          beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
          <button onClick={() => setBolle(!bolle)}>Visa mer</button>
          {bolle && (
            <div>
              Innehåll i öppningsbarpanel Två Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in
              labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos
              accusantium voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur
              accusamus, illum consequuntur?
            </div>
          )}
        </AccordionItem>
        <AccordionItem id="Tre" title="En öppningsbar panel tre">
          Innehåll i öppningsbarpanel Tre Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in labore adipisci
          ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium voluptate eligendi
          beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum consequuntur?
        </AccordionItem>
        <AccordionItem id="Fyra" title="En öppningsbar panel fyra">
          Innehåll i öppningsbarpanel Fyra Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus perspiciatis officia, voluptate ratione quam nemo quod aut maiores animi nostrum, in
          labore adipisci ullam suscipit esse vel odit tenetur dicta. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Impedit dolorem tempora laboriosam asperiores eum dignissimos accusantium
          voluptate eligendi beatae vel quis rerum error dolore cum incidunt pariatur accusamus, illum
          consequuntur?
        </AccordionItem>
      </Accordion>
      <Button variant={'secondary'}>Secondary Button</Button>
      <Button>Primary Button</Button>
      <SearchField placeholder={'Search...'} />
      <Logo />
    </div>
  )
}

export default App
