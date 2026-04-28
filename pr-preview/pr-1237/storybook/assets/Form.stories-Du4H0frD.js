import{j as e}from"./iframe-4jp4gloH.js";import{c}from"./Form-CIwvIR5N.js";import{G as d}from"./Grid-DgqGuY9i.js";import{G as i}from"./GridItem-DV27Mj7l.js";import{a as x,R as u}from"./Radio-DJ4ahMi_.js";import{C as I}from"./CheckboxGroup-kBBdUTU2.js";import{C as G}from"./Checkbox-pONn179C.js";import{T as t}from"./TextField-DQas1iY6.js";import{S as l}from"./Select-B8jQcMsz.js";import{L as p}from"./ListBoxItem-Bkn1gfsY.js";import{B as a}from"./Button-CeMvvwss.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-CHjnTN6p.js";import"./utils-VVEWI3IK.js";import"./clsx-B-dksMZM.js";import"./index-BZ8dxgHN.js";import"./index-Ba_IRaMO.js";import"./clsx-Ciqy0D92.js";import"./Group-Cv7i4TUW.js";import"./FieldError-D-ucO46w.js";import"./Text-DKG8In0g.js";import"./Text-CaWuTb4e.js";import"./Button-BmPmOVkQ.js";import"./Hidden-uxp9aDmP.js";import"./useLabel-BAWcaNxa.js";import"./useLabels-BIxc1erV.js";import"./useButton-Cnbi6eSC.js";import"./SelectionIndicator-DERD32HY.js";import"./useField-C6NTEJ5-.js";import"./VisuallyHidden-CwExooWt.js";import"./useControlledState-C8OaseGF.js";import"./Label-Bn89WDN5.js";import"./Dialog-DRahsqTG.js";import"./RSPContexts-C_Tj-sgU.js";import"./OverlayArrow-DHc0EFKa.js";import"./useResizeObserver-C3Vw2coy.js";import"./Collection-D6gGdmWj.js";import"./index-GU77QnNE.js";import"./Separator-C8wUcFi5.js";import"./SelectionManager-qtDdSSC6.js";import"./useEvent-BSjWwKyO.js";import"./scrollIntoView-LVymhG08.js";import"./useDescription-Ca_N61mq.js";import"./ListKeyboardDelegate-BU755iyf.js";import"./PressResponder-BpN-lFO9.js";import"./useLocalizedStringFormatter-DPlQOnfn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CZi5NauF.js";import"./getScrollParent-lyddzNLU.js";import"./ModalOverlay-TllZkSy1.js";import"./x-C0TcUHvQ.js";import"./createLucideIcon-BGZ9Sagt.js";import"./useLocalizedStringFormatter-BH6_V3D9.js";import"./Heading-CE_cjqfz.js";import"./info-Cg34k-x-.js";import"./Popover-BJTZb_ez.js";import"./check--2MCwuKZ.js";import"./useToggleState-D7VvvSbM.js";import"./TextFieldBase-cEc7UVYu.js";import"./Input-DBjxQExL.js";import"./useTextField-DUCQouM-.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-FyABN4oj.js";import"./DragAndDrop-C5-l-n2k.js";import"./inertValue-GoLX_OEB.js";import"./useListState-aSGGmQW-.js";import"./TagGroup-BBGZNEdH.js";import"./useHighlightSelectionDescription-CJdLPThH.js";import"./useUpdateEffect-BRfG-lBP.js";import"./useHasTabbableChild-CTCRMb5c.js";import"./chevron-down-C02DRHCh.js";import"./Virtualizer-BWlUD5Ep.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
