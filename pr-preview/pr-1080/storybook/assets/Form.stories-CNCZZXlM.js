import{j as e}from"./iframe-CYrC2O7n.js";import{$ as c}from"./Form-B3TXkIwh.js";import{G as d}from"./Grid-C41HEI4D.js";import{G as i}from"./GridItem-CDaAhuwY.js";import{a as x,R as u}from"./Radio-COcUuHE6.js";import{C as I}from"./CheckboxGroup-CHHh9Qz5.js";import{C as G}from"./Checkbox-4UAcbmTD.js";import{T as t}from"./TextField-BHGhNS7O.js";import{S as l}from"./Select-DkWjgme3.js";import{L as p}from"./ListBoxItem-CCe6yVY0.js";import{B as a}from"./Button-OKR0VFLl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-W9KFSJyi.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CYVywKCd.js";import"./useFocusRing-DwhBMXNM.js";import"./index-Dd5lO-PO.js";import"./index-BE0HShMl.js";import"./clsx-Ciqy0D92.js";import"./Group-DcURj3h1.js";import"./FieldError-Co8p2V5G.js";import"./Text-kU8vQOsb.js";import"./Text-C6dUuRFD.js";import"./Button-BKTJlLGY.js";import"./Hidden-Cuqxaz-j.js";import"./useLabels-JnCkPdA7.js";import"./useButton-DzzAV_qM.js";import"./SelectionIndicator-BisZMVPl.js";import"./useField-BuQKvOvB.js";import"./VisuallyHidden-vjowbZXC.js";import"./useControlledState-CWVzqNB6.js";import"./Label-CXKF3Agi.js";import"./Dialog-BTKGCqJw.js";import"./RSPContexts-96m8ngxa.js";import"./OverlayArrow-gbdM9ti7.js";import"./useResizeObserver-C7khmZ6Y.js";import"./Collection-C0qlFWCq.js";import"./index-C6ZPDeAo.js";import"./Separator-Ou9floIC.js";import"./SelectionManager-C2qcIVnE.js";import"./useEvent-Cl9zlQud.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CS0207ko.js";import"./ListKeyboardDelegate-Cq5x0cfE.js";import"./PressResponder-HHm5zrGH.js";import"./useLocalizedStringFormatter-D52FmrAL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-IiM63RyR.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Bso_vTII.js";import"./createLucideIcon-B2v0PGO8.js";import"./useLocalizedStringFormatter-CEUvbGBF.js";import"./Heading-gejMn2xX.js";import"./info-CE9qWfQo.js";import"./Popover-xvlzBOBY.js";import"./check-C39w1yI0.js";import"./useToggleState-HgvMIhPN.js";import"./TextFieldBase-BGZ8qu_1.js";import"./Input-DhwYBGg5.js";import"./useTextField-BPInpXO5.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DmGFPSeD.js";import"./DragAndDrop-C59lz9Zb.js";import"./inertValue-Cik3Ufxv.js";import"./useListState-BaSlJMT7.js";import"./TagGroup-C9cAZuMs.js";import"./useHighlightSelectionDescription-QvNkI5Tj.js";import"./useUpdateEffect-BXzwZRRY.js";import"./useHasTabbableChild-DC70xHVy.js";import"./chevron-down-DZ6JK31e.js";import"./Virtualizer-nYLeYJYh.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
