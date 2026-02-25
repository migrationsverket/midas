import{j as e}from"./iframe-BIYycVtF.js";import{$ as c}from"./Form-CvaXZ-x_.js";import{G as d}from"./Grid-Bmrfa4d9.js";import{G as i}from"./GridItem-DEZoCAjJ.js";import{a as x,R as u}from"./Radio-Ds_gfYuA.js";import{C as I}from"./CheckboxGroup-C-lLE7QG.js";import{C as G}from"./Checkbox-tgrDSnbu.js";import{T as t}from"./TextField-DO_I9G1D.js";import{S as l}from"./Select-D_bIhAJb.js";import{L as p}from"./ListBoxItem-3waAAIj8.js";import{B as a}from"./Button-D9Any6-B.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CQyQJNz7.js";import"./useObjectRef-Dnttuos9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CJX6c1NG.js";import"./useFocusRing-_u8e-JUw.js";import"./useFocusable-DRoMEDqQ.js";import"./index-CH0u5tNJ.js";import"./index-Dx5ixs9i.js";import"./clsx-Ciqy0D92.js";import"./Group-1K9N6LGR.js";import"./FieldError-BsWqYage.js";import"./Text-A1nWhzuO.js";import"./Text-B1YyVTq1.js";import"./Button-xCxR0kSd.js";import"./Hidden-AGqSstUV.js";import"./useLabels-DC_FEenW.js";import"./useButton-BNdOFr74.js";import"./SelectionIndicator-qZAjNlSO.js";import"./useField-BJy-oEwD.js";import"./VisuallyHidden-CK9a4W9O.js";import"./useControlledState-C6aaDo-s.js";import"./Label-DYI4Hi0v.js";import"./Dialog-7czyXmUB.js";import"./RSPContexts-B6TKKvZV.js";import"./OverlayArrow-DFDW9jlO.js";import"./useResizeObserver-eM6IJa4E.js";import"./Collection-emX73nrZ.js";import"./CollectionBuilder-5cVLOiMR.js";import"./index-2x7kCp5n.js";import"./Separator-CalRW1Eu.js";import"./SelectionManager-EfHU5LpS.js";import"./useEvent-B9CnIbJl.js";import"./scrollIntoView-Bo1Xab6M.js";import"./useDescription-DVfA0GtU.js";import"./ListKeyboardDelegate-C3gxtFmw.js";import"./PressResponder-B9WZc19F.js";import"./useLocalizedStringFormatter-BW8yoNsi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bwz2spCR.js";import"./getScrollParent-BVUiVP-B.js";import"./x-CohE59zs.js";import"./createLucideIcon-S6aGlHi1.js";import"./useLocalizedStringFormatter-BKDdPfco.js";import"./Heading-BG47WcTa.js";import"./info-CPdajoQQ.js";import"./Popover-DvmrTdrb.js";import"./check-CRNy0lPB.js";import"./useToggleState-BNEroOSs.js";import"./TextFieldBase-G56p2Ym_.js";import"./Input-CWPgjlDo.js";import"./useTextField-D41AFEDa.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CvscF64P.js";import"./DragAndDrop-G6PSS7RK.js";import"./inertValue-DZywz7RT.js";import"./useListState-C8nsGEF8.js";import"./TagGroup-8Fqd9vSW.js";import"./useHighlightSelectionDescription-Dt6VdG4k.js";import"./useUpdateEffect-BXnz-Ik9.js";import"./useHasTabbableChild-CudXizk7.js";import"./chevron-down-BUwuLp8R.js";import"./Virtualizer-Cl2L0xB4.js";import"./Button.module-D_C6WeTN.js";const Ke={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Oe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Oe as __namedExportsOrder,Ke as default};
