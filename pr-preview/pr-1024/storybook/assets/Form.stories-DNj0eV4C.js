import{j as e}from"./iframe-DsUbAoSq.js";import{$ as c}from"./Form-BfBWKEHX.js";import{G as d}from"./Grid-Dc7jYx9B.js";import{G as i}from"./GridItem-vqclSzqQ.js";import{T as t}from"./TextField-CPDacf5Y.js";import{S as l}from"./Select-BOJNgimx.js";import{B as a}from"./Button-pix4LUFA.js";import{R as x,a as u}from"./Radio-C8QdS99E.js";import{C as I}from"./CheckboxGroup-GFKqCYLK.js";import{C as G}from"./Checkbox-G7VAJ7WE.js";import{L as p}from"./ListBoxItem-B1n6C5g9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CItAFvY_.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CLj26moS.js";import"./useFocusRing-ClDYXhda.js";import"./index-ZLozb24P.js";import"./index-BR563_q3.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-Apy9leHO.js";import"./TextField-D0HmvqnY.js";import"./FieldError-ekmgTayW.js";import"./Text-Bd-2tMqu.js";import"./Text-zFFTMSPY.js";import"./RSPContexts-GvaUrLm8.js";import"./Group-DHAwZv9l.js";import"./Input-B-VLloMm.js";import"./Hidden-B6jIkc3U.js";import"./Button-D9RawpLu.js";import"./useLabels-CUikAVDR.js";import"./useButton-ota4yok-.js";import"./useTextField-DxaA-EvC.js";import"./useControlledState-DI4_-MQt.js";import"./useField-B-KRuKWC.js";import"./TextField.module-1fNSVGjT.js";import"./Label-CZrRAjsT.js";import"./Dialog-HmLVov3g.js";import"./OverlayArrow-CMGgcRPr.js";import"./useResizeObserver-CBF1A0dl.js";import"./Collection-C9tiANbY.js";import"./index-C-JsD-TI.js";import"./Separator-DyqAvtne.js";import"./SelectionManager-Pml6f90q.js";import"./useEvent-CgdlAV5M.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CV-tS1Al.js";import"./useDescription-DayPqPx3.js";import"./ListKeyboardDelegate-Bh2C9Qia.js";import"./PressResponder-DuBPcQr9.js";import"./useLocalizedStringFormatter-CqRU1qss.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTsFJrsB.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BNJ8vALJ.js";import"./x-CVUBtniR.js";import"./createLucideIcon-hAagXGW6.js";import"./useLocalizedStringFormatter-DFjihYlH.js";import"./Heading-Bh0pg882.js";import"./info-Dg0JjAHd.js";import"./Popover-Dgwqhbyi.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BYOhR2RH.js";import"./DragAndDrop-BbYDBCW9.js";import"./inertValue-D6de8QU8.js";import"./useListState-B-XmhoNG.js";import"./Tag-_2eaSSIX.js";import"./useHighlightSelectionDescription-f24xukg8.js";import"./useUpdateEffect-C5KRfSGn.js";import"./useHasTabbableChild-CtJmaXqT.js";import"./chevron-down-K4Bv9S65.js";import"./Button.module-Co5e5YHp.js";import"./check-D7c3kwss.js";import"./useToggleState-FHIEluIy.js";import"./Virtualizer-CLU8-2sl.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const ye=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,ye as __namedExportsOrder,Le as default};
