import{j as e}from"./iframe-b0nZhEJS.js";import{c}from"./Form-BYDskUyn.js";import{G as d}from"./Grid-tL7u_J9u.js";import{G as i}from"./GridItem-DZiQjYkU.js";import{a as x,R as u}from"./Radio-Cb2NBYfd.js";import{C as I}from"./CheckboxGroup-C6Yyan_x.js";import{C as G}from"./Checkbox-CbqlCbr8.js";import{T as t}from"./TextField-C5A17bmX.js";import{S as l}from"./Select-CW-00LKt.js";import{L as p}from"./ListBoxItem-B_BxBaFI.js";import{B as a}from"./Button-BHZxE8mE.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CFZ-IXl8.js";import"./utils-Czy4cRiY.js";import"./clsx-B-dksMZM.js";import"./index-DA1-9aBn.js";import"./index-DV7yp0R8.js";import"./clsx-Ciqy0D92.js";import"./Group-DtLMGfSw.js";import"./FieldError-CFDpOADY.js";import"./Text-CKTyuYl3.js";import"./Text-PpOivcva.js";import"./Button-W8LmO0wX.js";import"./Hidden-CZ6waCzP.js";import"./useLabel-DnRB1mu0.js";import"./useLabels-D0XwDCFR.js";import"./useButton-CdJ6_dC8.js";import"./SelectionIndicator-B6azs_Wj.js";import"./useField-Bee8Za-k.js";import"./VisuallyHidden-BU0juR5g.js";import"./useControlledState-s-wNeubv.js";import"./Label-Drh-gs1K.js";import"./Dialog-Bgvt-Ohb.js";import"./RSPContexts-BwF7V3QB.js";import"./OverlayArrow-TISIefmd.js";import"./useResizeObserver-C9tbqStX.js";import"./Collection-DnjoQvxt.js";import"./index-D6FvMNA4.js";import"./Separator-D-sB3bC9.js";import"./SelectionManager-_cFQFdJX.js";import"./useEvent-D9RmNfeT.js";import"./scrollIntoView-BA0MjwzP.js";import"./useDescription-CGMez1fw.js";import"./ListKeyboardDelegate-Z109lLwT.js";import"./PressResponder-CFMuyrEs.js";import"./useLocalizedStringFormatter-C8ETTJnR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkbuoI5o.js";import"./getScrollParent-C1OYKDte.js";import"./ModalOverlay-CIKlr_28.js";import"./x-BKNFSSsH.js";import"./createLucideIcon-t4UVlQbW.js";import"./useLocalizedStringFormatter-B84UWKXC.js";import"./Heading-BHoXnOGe.js";import"./info-c9P-7NOY.js";import"./Popover-B5It236L.js";import"./check-BG4OFa83.js";import"./useToggleState-DursVYwC.js";import"./TextFieldBase-Al83lvXo.js";import"./Input-Cdwbflk7.js";import"./useTextField-BenCDeqQ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BZgeko7-.js";import"./DragAndDrop-DwE6qnlO.js";import"./inertValue-DV0WTJTV.js";import"./useListState-DhFm-J-Z.js";import"./TagGroup-Cw3v8HSG.js";import"./useHighlightSelectionDescription-xmtTXEou.js";import"./useUpdateEffect-RoMvZwP5.js";import"./useHasTabbableChild-BkJL5c95.js";import"./chevron-down-CxDg9lQd.js";import"./Virtualizer-Bt1xlM-6.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
