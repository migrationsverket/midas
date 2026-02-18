import{j as e}from"./iframe-Dv5oy3ex.js";import{$ as c}from"./Form-CgY4wC_i.js";import{G as d}from"./Grid-e4aD37ux.js";import{G as i}from"./GridItem-Dtq_kyyz.js";import{a as x,R as u}from"./Radio-C2wlIqU7.js";import{C as I}from"./CheckboxGroup-DVIJ0aC4.js";import{C as G}from"./Checkbox-07-wDHzH.js";import{T as t}from"./TextField-CV7az3BM.js";import{S as l}from"./Select-D9Gl7w9a.js";import{L as p}from"./ListBoxItem-D-7qW8yZ.js";import{B as a}from"./Button-DFKGQSYP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DqE5PILI.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DtuLUvaq.js";import"./useFocusRing-DFkj2PJJ.js";import"./index-COb2Vy-7.js";import"./index-IcK2KPt1.js";import"./clsx-Ciqy0D92.js";import"./Group-BAl4gbRE.js";import"./FieldError-CoMYK3IV.js";import"./Text-D7P0gU-S.js";import"./Text-BnCHL2hB.js";import"./Button-BH4eeu0k.js";import"./Hidden-CxtegDl0.js";import"./useLabels-Dt8q9qYY.js";import"./useButton-B42S7nFw.js";import"./SelectionIndicator-Cc32OT_a.js";import"./useField-Be9MSkin.js";import"./VisuallyHidden-ziZ6pEVt.js";import"./useControlledState-CnplxgpR.js";import"./Label-thI0xqCw.js";import"./Dialog-Bk8rq18R.js";import"./RSPContexts-Bum2SDPF.js";import"./OverlayArrow-Bu-qbdnc.js";import"./useResizeObserver-2uNCjIkJ.js";import"./Collection-Dzh3Awwz.js";import"./index-5xno2gQO.js";import"./Separator-CaS-v3a9.js";import"./SelectionManager-DSzDDqTJ.js";import"./useEvent-6NaHNc9j.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-R2YOgaZ4.js";import"./ListKeyboardDelegate-DbvsQKFt.js";import"./PressResponder-B8nhnZOL.js";import"./useLocalizedStringFormatter-Ci5_pA40.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-pEGSvzdu.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Uek5wc5v.js";import"./createLucideIcon-BqwtoRoR.js";import"./useLocalizedStringFormatter-BSci6oqP.js";import"./Heading-DF2Wpc2f.js";import"./info-DWVeCGy3.js";import"./Popover-DqyP9DKX.js";import"./check-lpzam653.js";import"./useToggleState-CvV8wTIt.js";import"./TextFieldBase-Dzar6V8Y.js";import"./Input-B2CQ3DFe.js";import"./useTextField-DBkUeFr0.js";import"./TextField.module-Cm6797Xw.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CTQTtKAw.js";import"./DragAndDrop-Cm7yzi8b.js";import"./inertValue-BaBSNch0.js";import"./useListState-CaEwzHY1.js";import"./TagGroup-DOQA6O45.js";import"./useHighlightSelectionDescription-DtrWHSnc.js";import"./useUpdateEffect-Bjz3LY87.js";import"./useHasTabbableChild-SkhW-OzA.js";import"./chevron-down-CG-QjFBE.js";import"./Virtualizer-YFDp5_U_.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Grid>
        <GridItem size={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </GridItem>
        <GridItem size={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </GridItem>
        <GridItem size={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' items={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
            {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
          </Select>
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    return <div>
        <Grid>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Namn' description='' />
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Personnummer' />
          </GridItem>

          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' items={ITEMS.map(i => ({
            name: i,
            id: i
          }))}>
              {item => <ListBoxItem {...item}>{item.name}</ListBoxItem>}
            </Select>
          </GridItem>
          <GridItem size={{
          xs: 12,
          sm: 6
        }}>
            <TextField label='Ärendekod' />
          </GridItem>

          <GridItem size='auto'>
            <Button>Sök</Button>
          </GridItem>
          <GridItem size='auto'>
            <Button variant='secondary'>Rensa</Button>
          </GridItem>
        </Grid>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const Le=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Le as __namedExportsOrder,Xe as default};
