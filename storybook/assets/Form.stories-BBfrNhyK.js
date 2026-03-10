import{j as e}from"./iframe-DR5TyuB-.js";import{$ as c}from"./Form-DQ5CyJFm.js";import{G as d}from"./Grid-CPMO-hkB.js";import{G as i}from"./GridItem-kpeRvSM8.js";import{a as x,R as u}from"./Radio-G2EsMU80.js";import{C as I}from"./CheckboxGroup-CzwTAId5.js";import{C as G}from"./Checkbox-hzYBE45D.js";import{T as t}from"./TextField-B5f5cNEO.js";import{S as l}from"./Select-jc62Y1gm.js";import{L as p}from"./ListBoxItem-BeWVTpKQ.js";import{B as a}from"./Button-C-s2hOqB.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bg7QEZnU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-1PHKSaOz.js";import"./useFocusRing-QfZ3-vOV.js";import"./index-D2JS04df.js";import"./index-LQ5iOOx9.js";import"./clsx-Ciqy0D92.js";import"./Group-D4aIFVHK.js";import"./FieldError-Cq9sQfrK.js";import"./Text-Bj_TB6m0.js";import"./Text-rstErEAJ.js";import"./Button-BmNGs9rp.js";import"./Hidden-BEv0etPG.js";import"./useLabels-C7LvHmcE.js";import"./useButton-DuR77GJR.js";import"./SelectionIndicator-Dt3rSARt.js";import"./useField-DdBHjb8J.js";import"./VisuallyHidden-BSWLvPww.js";import"./useControlledState-CZJBEfwd.js";import"./Label-vgyYy6G_.js";import"./Dialog-CZCTxdiY.js";import"./RSPContexts-DfXBv57K.js";import"./OverlayArrow-BasgrjKb.js";import"./useResizeObserver-DwI7ic6Q.js";import"./Collection-CXIrHqSI.js";import"./index-BuE7dfrX.js";import"./Separator-Dp3kX1lW.js";import"./SelectionManager-zatpPLut.js";import"./useEvent-CAO5kR0P.js";import"./scrollIntoView-BBNsC_WK.js";import"./useDescription-q7H7pmJx.js";import"./ListKeyboardDelegate-Bkc3dAxZ.js";import"./PressResponder-W9YtXPm7.js";import"./useLocalizedStringFormatter-CWc-yWtF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bt2nCOFM.js";import"./getScrollParent-DwvwwXDB.js";import"./x-Cyfs5BQi.js";import"./createLucideIcon-BIu09S4H.js";import"./useLocalizedStringFormatter-CkyMnK2W.js";import"./Heading-DeCIOYLm.js";import"./info-CizeJPsi.js";import"./Popover-D6PbhG8P.js";import"./check-ygnFdIWf.js";import"./useToggleState-w3v3WuFI.js";import"./TextFieldBase-BsoA0Gfs.js";import"./Input-BjntRvPO.js";import"./useTextField-BoXFmB-n.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BC3jqlq1.js";import"./DragAndDrop-Cbj-W5Wq.js";import"./inertValue-WBwM9Ucy.js";import"./useListState-UjYFuV1J.js";import"./TagGroup-DSFHQfMo.js";import"./useHighlightSelectionDescription-6vh6C2dA.js";import"./useUpdateEffect-XwIGNp_G.js";import"./useHasTabbableChild-BmWVzAf0.js";import"./chevron-down-8vkTTV36.js";import"./Virtualizer-DfwImvLO.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
