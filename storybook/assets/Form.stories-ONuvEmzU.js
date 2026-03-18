import{j as e}from"./iframe-C7t9iVAP.js";import{$ as c}from"./Form-BzvUvODL.js";import{G as d}from"./Grid-BvXIH8FN.js";import{G as i}from"./GridItem-bRPkwOPV.js";import{a as x,R as u}from"./Radio-BzWH-0TD.js";import{C as I}from"./CheckboxGroup-CAz5PvGl.js";import{C as G}from"./Checkbox-LLzLILRU.js";import{T as t}from"./TextField-Dr-YDCdw.js";import{S as l}from"./Select-DKD88pUE.js";import{L as p}from"./ListBoxItem-D_dNpiR3.js";import{B as a}from"./Button-DtM-QtSV.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DHL4vNoB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DY--XCK0.js";import"./useFocusRing-BBkvSuUI.js";import"./index-D_TWd0tg.js";import"./index-C8AjsPH3.js";import"./clsx-Ciqy0D92.js";import"./Group-B5Ege5NN.js";import"./FieldError-D02kFtkC.js";import"./Text-DHSnms-3.js";import"./Text-DLwF4mI3.js";import"./Button-DR73eWoN.js";import"./Hidden-DFB5LB9u.js";import"./useLabels-DBb3W9ZQ.js";import"./useButton-CqHRV2Gu.js";import"./SelectionIndicator-BUBEQaAn.js";import"./useField-_wTvKlys.js";import"./VisuallyHidden-DGjmnIGg.js";import"./useControlledState-yNJAK2-f.js";import"./Label-CHpT_Yip.js";import"./Dialog-DYaKrU3e.js";import"./RSPContexts-CMbSZKKN.js";import"./OverlayArrow-BR0NntZm.js";import"./useResizeObserver-B6trb6hQ.js";import"./Collection-BHety989.js";import"./index-BCuOjvAT.js";import"./Separator-4FC5CAWE.js";import"./SelectionManager-Dz4ocvIO.js";import"./useEvent-DKYdhuF3.js";import"./scrollIntoView-CXA6LuS7.js";import"./useDescription-CcHmFyqs.js";import"./ListKeyboardDelegate-DdrIfvWn.js";import"./PressResponder-BbhTJQ72.js";import"./useLocalizedStringFormatter-CVtX0aD4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DDaYTRoZ.js";import"./getScrollParent-DLQAjZDh.js";import"./x-PvqyWiho.js";import"./createLucideIcon-CJwkvU5U.js";import"./useLocalizedStringFormatter-CR-t_tu1.js";import"./Heading-b7FJGH1A.js";import"./info-DkwQ1_T2.js";import"./Popover-DZDS7sIy.js";import"./check-DOGLP-EO.js";import"./useToggleState-sf9OhJyc.js";import"./TextFieldBase-DxnyzWWJ.js";import"./Input-Ccr9h2jE.js";import"./useTextField-C3oOI1qI.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B9kxwg6d.js";import"./DragAndDrop-Bvk20IFk.js";import"./inertValue-miid3rOn.js";import"./useListState-CwzFzeiS.js";import"./TagGroup-XKCck1KE.js";import"./useHighlightSelectionDescription-CSLAMWA_.js";import"./useUpdateEffect-CTQToTt9.js";import"./useHasTabbableChild-Bgd1MbAO.js";import"./chevron-down-H-ZyH8P5.js";import"./Virtualizer-D7z4x921.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
