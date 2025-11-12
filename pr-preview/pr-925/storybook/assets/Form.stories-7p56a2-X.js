import{j as e}from"./iframe-C4nZhlHp.js";import{$ as c}from"./Form-CWA6zdQ3.js";import{G as d}from"./Grid-DEiwLDm3.js";import{G as i}from"./GridItem-DafbzDyu.js";import{T as t}from"./TextField-WRu-aSie.js";import{S as l}from"./Select-CcA0_a04.js";import{B as a}from"./Button-Dfl_9rMf.js";import{R as x,a as u}from"./Radio-BqoG5rH5.js";import{C as I}from"./CheckboxGroup-C2ijNkwG.js";import{C as G}from"./Checkbox-DLTHBpF0.js";import{L as p}from"./ListBoxItem-CZ8VghOl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BThtOLN3.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CXbCMZ0J.js";import"./useFocusRing-CUt9jPRY.js";import"./index-CdzEK6sL.js";import"./index-Bcy_e8uM.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BMu_KigB.js";import"./TextField-Ba20M-_9.js";import"./FieldError-BIrWKztk.js";import"./Text-BtqzfC97.js";import"./Text-Bl0ISbQ7.js";import"./RSPContexts-WH4nMcxQ.js";import"./Group-CIB_c7rK.js";import"./Input-jD2wZ8AI.js";import"./Hidden-DGAgWOv2.js";import"./Button-BoerEFmi.js";import"./useLabels-DFzN42D5.js";import"./useButton-DpHHTz7A.js";import"./useTextField-CocPWATQ.js";import"./useControlledState-CJQYAY_g.js";import"./useField-B48LiqQ_.js";import"./TextField.module-1-_3qsJZ.js";import"./Label-nMZHoR1R.js";import"./Dialog-B3G-tmn3.js";import"./OverlayArrow-CKwxQumt.js";import"./useResizeObserver-CZeyxuFP.js";import"./Collection-BYOOna-_.js";import"./index-CrrCrdFV.js";import"./Separator-CH_H607m.js";import"./SelectionManager-QICQi-ba.js";import"./useEvent-BdTEiYUL.js";import"./scrollIntoView-DvFBFjjW.js";import"./SelectionIndicator-CvD-2Szl.js";import"./useDescription-C8Gi_2UD.js";import"./ListKeyboardDelegate-BH6lIL_e.js";import"./PressResponder-Bf9Ccmnl.js";import"./useLocalizedStringFormatter-6ucjq8Cp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CtN2yNgt.js";import"./VisuallyHidden-BNOgBQKx.js";import"./useLocalizedStringFormatter-CL3ousm2.js";import"./x-D5_o8_hp.js";import"./createLucideIcon-Cca3XJOR.js";import"./Heading-yb9MM0bb.js";import"./info-DMZ8PHWD.js";import"./Popover-DeuSIbOO.js";import"./Input-CTleftf6.js";import"./Select-BCvvcKa9.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CpWPfeDe.js";import"./DragAndDrop-CnGmJt8b.js";import"./inertValue-BnE_jhWK.js";import"./useListState-4S9342uF.js";import"./Tag-B8-ZZAaj.js";import"./useHighlightSelectionDescription-BaVtKeM-.js";import"./useUpdateEffect-hCD_cZ1i.js";import"./useHasTabbableChild-ChTFD93P.js";import"./chevron-down-178CZFT7.js";import"./Button.module-CtQ1deO8.js";import"./check-Brn6va9E.js";import"./useToggleState-BKAuuaZH.js";import"./Virtualizer-DeolSSCV.js";const ye={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
