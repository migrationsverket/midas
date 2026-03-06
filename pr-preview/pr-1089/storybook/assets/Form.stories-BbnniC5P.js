import{j as e}from"./iframe-CXiR3iKp.js";import{$ as c}from"./Form-DKaWK_r_.js";import{G as d}from"./Grid-BIItwkmM.js";import{G as i}from"./GridItem--oWq89u-.js";import{a as x,R as u}from"./Radio-B1XDwC7z.js";import{C as I}from"./CheckboxGroup-C32PvB42.js";import{C as G}from"./Checkbox-BX63tR06.js";import{T as t}from"./TextField-CaEZiost.js";import{S as l}from"./Select-CVtCKxCS.js";import{L as p}from"./ListBoxItem-D1d_ZQIe.js";import{B as a}from"./Button-6_2D52en.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bp_8F4M1.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-1zZirEp8.js";import"./useFocusRing-DoagLvTG.js";import"./index-BVvfbKRI.js";import"./index-DLJWMq1n.js";import"./clsx-Ciqy0D92.js";import"./Group-BkJoy3vB.js";import"./FieldError-DhN8Qwjc.js";import"./Text-VVcfFgTz.js";import"./Text-DQ2_N-F1.js";import"./Button-DQDqzjOI.js";import"./Hidden-l5OStL3l.js";import"./useLabels-hiXhHu80.js";import"./useButton-DoaLh7Qx.js";import"./SelectionIndicator-DTH59uWk.js";import"./useField-DlTgCsXO.js";import"./VisuallyHidden-QuqGTMLw.js";import"./useControlledState-D8SfxPND.js";import"./Label-Dga4mRfK.js";import"./Dialog-90d5LqQ1.js";import"./RSPContexts-BzUEWbO_.js";import"./OverlayArrow-BuEOYobt.js";import"./useResizeObserver-Dh_BagkN.js";import"./Collection-DOgSX1Rr.js";import"./index-BnfzSOVc.js";import"./Separator-03-x-_Sf.js";import"./SelectionManager-Cg-LEXRR.js";import"./useEvent-CYUKjQ_Y.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CwhQFL3q.js";import"./ListKeyboardDelegate-xGHUZWyo.js";import"./PressResponder-BB0iuKRP.js";import"./useLocalizedStringFormatter-oYkQuV-6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTKnXGEx.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-B58mgY9H.js";import"./createLucideIcon-D8BZH6VC.js";import"./useLocalizedStringFormatter-0YZmeDYQ.js";import"./Heading-CV0Qf8hu.js";import"./info-Dpef2w5o.js";import"./Popover-DkEvv8Au.js";import"./check-DLQ3AuH2.js";import"./useToggleState-ZTrJpODp.js";import"./TextFieldBase-DQYlgacB.js";import"./Input-vwwvPHfR.js";import"./useTextField-CLj7IyXn.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-m8KOZZSe.js";import"./DragAndDrop-C_P2nBMo.js";import"./inertValue-CnRoh7Hr.js";import"./useListState-DXPWl2dU.js";import"./TagGroup-DOxPUvGe.js";import"./useHighlightSelectionDescription-CKi9zI1O.js";import"./useUpdateEffect-DEC8FpN1.js";import"./useHasTabbableChild-DpreqHai.js";import"./chevron-down-BqsPx-lg.js";import"./Virtualizer-Cn5HNLZ5.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
