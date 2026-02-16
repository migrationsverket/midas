import{j as e}from"./iframe-UW8vLm1f.js";import{$ as c}from"./Form-bRhU2Psn.js";import{G as d}from"./Grid-B1UkKlLv.js";import{G as i}from"./GridItem-jOGbUVbD.js";import{a as x,R as u}from"./Radio-DvGj4QTE.js";import{C as I}from"./CheckboxGroup-CMVMUOpY.js";import{C as G}from"./Checkbox-BxzX1ex_.js";import{T as t}from"./TextField-Bf8yW4Mq.js";import{S as l}from"./Select-BmmMS-1t.js";import{L as p}from"./ListBoxItem-CqPp-d7F.js";import{B as a}from"./Button-Bq-BzB1-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CLOZA6Qr.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CCF-9150.js";import"./useFocusRing-CMx22NqV.js";import"./index-Cq0AMSqT.js";import"./index-TM4f8tXD.js";import"./clsx-Ciqy0D92.js";import"./Group-CNvFiWZZ.js";import"./FieldError-2Or80766.js";import"./Text-Dog5UxXw.js";import"./Text-B07qXiJx.js";import"./Button-7au76wYW.js";import"./Hidden-BxY2u9UP.js";import"./useLabels-DT0_oM0p.js";import"./useButton-DHMLeTON.js";import"./SelectionIndicator-CqMYmib_.js";import"./useField-C9XmYr2d.js";import"./VisuallyHidden-D55BsDJa.js";import"./useControlledState-DrPYTGHy.js";import"./Label-DDcH675p.js";import"./Dialog-DuyYu8CN.js";import"./RSPContexts-YZOHPwcP.js";import"./OverlayArrow-DPUo3fC4.js";import"./useResizeObserver-BcqkGcmz.js";import"./Collection-Cq3rGgRd.js";import"./index-Cs4cHTgU.js";import"./Separator-CYUS-T7f.js";import"./SelectionManager-DVFtTB8Q.js";import"./useEvent-Bfb0EIZl.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Cf2Sv6pY.js";import"./ListKeyboardDelegate-LAGyR_aw.js";import"./PressResponder-ClYP-ws4.js";import"./useLocalizedStringFormatter-ILC68sUH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Celvu16M.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-tk0MJ5Od.js";import"./createLucideIcon-D1-wdHpr.js";import"./useLocalizedStringFormatter-B2qxmHUY.js";import"./Heading-C_hAtKHU.js";import"./info-BAzgAVug.js";import"./Popover-DKCElpqt.js";import"./check-B4ze5XD5.js";import"./useToggleState-BsElWDIx.js";import"./TextFieldBase-qksagpHU.js";import"./Input-2lfndvCU.js";import"./useTextField-BxaRiYVo.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-IlAP3ynR.js";import"./DragAndDrop-BTVdI2Iy.js";import"./inertValue-2uTtVCCz.js";import"./useListState-QVJF9Efm.js";import"./TagGroup-BU9wXyM5.js";import"./useHighlightSelectionDescription-Dp2BMQpi.js";import"./useUpdateEffect-Dre1Tddy.js";import"./useHasTabbableChild-DpsDMLtB.js";import"./chevron-down-PnLDBqjG.js";import"./Virtualizer-BXkDIAYn.js";import"./Button.module-Co5e5YHp.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
