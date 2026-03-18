import{j as e}from"./iframe-gH8ABtWn.js";import{$ as c}from"./Form-B6vf0-_o.js";import{G as d}from"./Grid-BId0C2oG.js";import{G as i}from"./GridItem-B4wk7r5h.js";import{a as x,R as u}from"./Radio-4w_gJCzn.js";import{C as I}from"./CheckboxGroup-Bj3bqFh9.js";import{C as G}from"./Checkbox-GCpPP2Kp.js";import{T as t}from"./TextField-BoFhqu5o.js";import{S as l}from"./Select-DOdSXDut.js";import{L as p}from"./ListBoxItem-BxutI0me.js";import{B as a}from"./Button-BbxyNHP5.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dr0NplXF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CK0TKrXv.js";import"./useFocusRing-BzsOph_O.js";import"./index-C3LVocIP.js";import"./index-BXReFhAr.js";import"./clsx-Ciqy0D92.js";import"./Group-BUMX9Usn.js";import"./FieldError-B2F_p8LM.js";import"./Text-CfaWjhbQ.js";import"./Text-CW1FG424.js";import"./Button-BNQc1T02.js";import"./Hidden-LWIlbl0l.js";import"./useLabels-7BQEP7LD.js";import"./useButton-BwMcnHkP.js";import"./SelectionIndicator-BjSkIjXo.js";import"./useField-DPi7PJOQ.js";import"./VisuallyHidden-CA2YzQGk.js";import"./useControlledState-CxcfWzqE.js";import"./Label-_2FF8Ntn.js";import"./Dialog-P_nglTkg.js";import"./RSPContexts-JH-s2nvd.js";import"./OverlayArrow-BV5hWtIb.js";import"./useResizeObserver-1Yyz1vcN.js";import"./Collection-D1QokVuM.js";import"./index-BGx-91uj.js";import"./Separator-Dg_qfe40.js";import"./SelectionManager-Iv778hvw.js";import"./useEvent-Bt_gQioX.js";import"./scrollIntoView-BqHSzV05.js";import"./useDescription-Cs18I91_.js";import"./ListKeyboardDelegate-Chu4c7a7.js";import"./PressResponder-DaRhh1Jf.js";import"./useLocalizedStringFormatter-DY58p06X.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BPJL1Vr1.js";import"./getScrollParent-CLH27qmc.js";import"./x-Cw1h_T-8.js";import"./createLucideIcon-BESY5gGm.js";import"./useLocalizedStringFormatter-CwcPRwvH.js";import"./Heading-C0hTf1fg.js";import"./info-HQMy_Oa9.js";import"./Popover-DKtge3K9.js";import"./check-D7I0wIV2.js";import"./useToggleState-COXsesrJ.js";import"./TextFieldBase-oTOzTAWp.js";import"./Input-BF-tC55D.js";import"./useTextField-BopRX0iY.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DHxlS1Cc.js";import"./DragAndDrop-ComiUtJI.js";import"./inertValue-DQQ17G4K.js";import"./useListState-Bvc0tvl0.js";import"./TagGroup-BufFe7C9.js";import"./useHighlightSelectionDescription-DCwtPgAy.js";import"./useUpdateEffect-CnbVc4MV.js";import"./useHasTabbableChild-Bu3hbcbn.js";import"./chevron-down-q_QbRPG4.js";import"./Virtualizer-BKX3cA0D.js";import"./Button.module-BB7N-cLd.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
