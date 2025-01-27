import React from 'react';
import Layout from '@theme/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Checkbox,
  Select,
  Button,
  Radio,
  RadioGroup,
  TextField,
  Logo,
} from '@midas-ds/components';
import styles from '@site/src/css/playground.module.css';


export default function Playground() {
  return (
    <Layout title="Playground" description="Playground page for components">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '10px',
          fontSize: '12px',
        }}
      >
        <p>
          Edit <code>pages/playground.js</code> and save to reload.
        </p>
      </div>
      <div className={styles['container']}>
        <div>
          <h2>Components</h2>
          <div className={styles['component']}>
            <h3>TextField</h3>
            <TextField label={'Label'} description={'Description'}></TextField>
          </div>
          <div className={styles['component']}>
            <h3>Logo</h3>
            <Logo primary />
            <Logo primary background />
            <Logo background dark />
          </div>
          <div className={styles['component']}>
            <h3>Accordion</h3>
            <Accordion type={'multiple'}>
              <AccordionItem value={'x'}>
                <AccordionTrigger>Rubrik</AccordionTrigger>
                <AccordionContent>
                  Du som ska studera vid ett unions-program eller ett
                  multilateralt program som innefattar rörlighetsåtgärder, och
                  som ska påbörja dina studier på programmet i Sverige, kan
                  ansöka om uppehållstillstånd för högre utbildning i Sverige
                  för hela programmet.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value={'y'}>
                <AccordionTrigger>
                  En annan rubrik som är lite längre
                </AccordionTrigger>
                <AccordionContent>Mer innehåll</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className={styles['component']}>
            <h3>Checkbox</h3>
            <Checkbox onCheckedChange={(v) => console.log(v)}>
              Check or not to check
            </Checkbox>
            <Checkbox
              onCheckedChange={(v) => console.log(v)}
              checked={'indeterminate'}
            >
              Indeterminate
            </Checkbox>
          </div>
          <div className={styles['component']}>
            <h3>Button</h3>
            <Button>Button</Button>
            <Button variant={'secondary'}>Secondary Button</Button>
            <Button size={'small'} variant={'secondary'}>
              Small Secondary
            </Button>
            <Button disabled>Disabled</Button>
          </div>
          <div className={styles['component']}>
            <h3>Radio</h3>
            <RadioGroup
              orientation={'vertical'}
              label={'Radio'}
              onChange={(value) => console.log('change radio', value)}
            >
              <Radio value={'hallå'}>Hej</Radio>
              <Radio value={'goodbye'}>Hejdå</Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
    </Layout>
  );
}
