import{j as e}from"./iframe-BooRIkJT.js";import{$ as c}from"./Form-lu2e_-CI.js";import{G as d}from"./Grid-DbH2_fmz.js";import{G as i}from"./GridItem-7WZZAmqW.js";import{a as x,R as u}from"./Radio-fbvWS8-J.js";import{C as I}from"./CheckboxGroup-DkoJCvYN.js";import{C as G}from"./Checkbox-BbZvhlDh.js";import{T as t}from"./TextField-CvlE70Tl.js";import{S as l}from"./Select-C0tBFSF-.js";import{L as p}from"./ListBoxItem-BN0RogRU.js";import{B as a}from"./Button-t6IXiYo0.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-744b8K7d.js";import"./useObjectRef-C69ZsrXw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C73jfdEu.js";import"./useFocusRing-zUWJjsLd.js";import"./useFocusable-7IfmtKEg.js";import"./index-DuCxnP6U.js";import"./index-DKsPf0BO.js";import"./clsx-Ciqy0D92.js";import"./Group-CSJbziv0.js";import"./FieldError-B9tJyWw2.js";import"./Text-BN2_aXJR.js";import"./Text-EWpD-_jr.js";import"./Button-BqahGGDP.js";import"./Hidden-KVVrjxXu.js";import"./number-DfkVkf0F.js";import"./useLabels-DEfOhxO2.js";import"./useButton-Dvy7NbEr.js";import"./SelectionIndicator-C9RAn77b.js";import"./useField-DaTFMrNe.js";import"./VisuallyHidden-DQnrbbQ6.js";import"./useControlledState-BubjIjDe.js";import"./Label-DgdpX6TQ.js";import"./Dialog-BTC-_GDP.js";import"./RSPContexts-DW-eESO9.js";import"./OverlayArrow-gMNeP8g9.js";import"./useResizeObserver-PuSMNmf3.js";import"./Collection-DURp8c-8.js";import"./CollectionBuilder-ljaGCZ4i.js";import"./index-B__T8vyM.js";import"./Separator-C0Ght5Sg.js";import"./SelectionManager-D1jwCzet.js";import"./useEvent-DMEFFZ8b.js";import"./scrollIntoView-BCltoq3s.js";import"./useDescription-yfp6cPtE.js";import"./ListKeyboardDelegate-CE4VHnG8.js";import"./PressResponder-G8aGvnJM.js";import"./useLocalizedStringFormatter-DhPS3rKr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C2SbqVTa.js";import"./getScrollParent-GNvtAy2u.js";import"./x-Cy8qabpY.js";import"./createLucideIcon-CtYgVG1u.js";import"./useLocalizedStringFormatter-hCEexaXZ.js";import"./Heading-Cm_OjdTp.js";import"./info-CLONA53z.js";import"./Popover-wdM7J1SK.js";import"./check-CH5de5PO.js";import"./useToggleState-Be0mdiha.js";import"./TextFieldBase-DWgLDj4L.js";import"./Input-oa8hKKVZ.js";import"./useTextField-CPZmhmLY.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-CsY9LkbZ.js";import"./DragAndDrop-DFjizKSS.js";import"./inertValue-CY-Arwor.js";import"./useListState-C2_WAOnE.js";import"./TagGroup-di9INhhD.js";import"./useHighlightSelectionDescription-Sea_kkHm.js";import"./useUpdateEffect-Cu3ftdOW.js";import"./useHasTabbableChild-B6u7sHG4.js";import"./chevron-down-BsBFOwOD.js";import"./Virtualizer-BHNz5Hig.js";import"./Button.module-D_C6WeTN.js";const Oe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Pe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Pe as __namedExportsOrder,Oe as default};
