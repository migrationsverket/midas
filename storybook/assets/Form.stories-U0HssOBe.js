import{j as e}from"./iframe-BQhS1Nl-.js";import{$ as c}from"./Form-DH-AzjSt.js";import{G as d}from"./Grid-Bzh-muaG.js";import{G as i}from"./GridItem--cOtFLni.js";import{a as x,R as u}from"./Radio-DJvh4y1n.js";import{C as I}from"./CheckboxGroup-Csejo8sr.js";import{C as G}from"./Checkbox-B_8H1U10.js";import{T as t}from"./TextField-BKWt1pFF.js";import{S as l}from"./Select-DUHtcFOM.js";import{L as p}from"./ListBoxItem-d9F27-Fg.js";import{B as a}from"./Button-DJ5OBxjs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DX-1lbRH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Yft9brF2.js";import"./useFocusRing-C7eLc3ua.js";import"./index-BaCUsZ-2.js";import"./index-DPBbUFQF.js";import"./clsx-Ciqy0D92.js";import"./Group-CcVnSgnY.js";import"./FieldError-CJdO8pv6.js";import"./Text-tc6oiTHM.js";import"./Text-C6md5qJ5.js";import"./Button-Dr48bfBY.js";import"./Hidden-XO9eD8nd.js";import"./useLabels-DSkvQYsZ.js";import"./useButton-28B5gFXv.js";import"./SelectionIndicator-B9HbQ8qQ.js";import"./useField-CGoqZBDN.js";import"./VisuallyHidden-DxSkEFyH.js";import"./useControlledState-DF0fFfyv.js";import"./Label-B_zbNnlI.js";import"./Dialog-CybleB_G.js";import"./RSPContexts-C79IcF5o.js";import"./OverlayArrow-B0oGNqhn.js";import"./useResizeObserver-BVGCHz9Q.js";import"./Collection-CQ7e8hLV.js";import"./index-DS-ZCqJe.js";import"./Separator-B19MFsL4.js";import"./SelectionManager-CviCT7_t.js";import"./useEvent-DDuhPEOD.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-IaZzTqIH.js";import"./ListKeyboardDelegate-ClvxKoY7.js";import"./PressResponder-TdTl1-2R.js";import"./useLocalizedStringFormatter-B1JkIDRF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUk09Tif.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-CxrMIGYH.js";import"./createLucideIcon-DJtzdfmE.js";import"./useLocalizedStringFormatter-BsVfwROU.js";import"./Heading-CYCNNzFN.js";import"./info-DdbuJ4zn.js";import"./Popover-DZWNjICi.js";import"./check-B4iuAmEF.js";import"./useToggleState-DT4lhJIb.js";import"./TextFieldBase-BBs_f7yV.js";import"./Input-CMR2IZPj.js";import"./useTextField-BRi9-jgA.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-g-wxuoPW.js";import"./DragAndDrop-zJcDPgbb.js";import"./inertValue-g7JSoCQl.js";import"./useListState-D015GmaO.js";import"./TagGroup-Bmg2HNuU.js";import"./useHighlightSelectionDescription-CFkYJ2K5.js";import"./useUpdateEffect-dcu9jAP6.js";import"./useHasTabbableChild-5rwNBZQf.js";import"./chevron-down-1scpauCY.js";import"./Virtualizer-B6dwrT6W.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
