import{j as e}from"./iframe-DLIfUtVm.js";import{c}from"./Form-BSZhUe1f.js";import{G as d}from"./Grid-DIHQv7Ta.js";import{G as i}from"./GridItem-DVhhzhYF.js";import{a as x,R as u}from"./Radio-PLHd8_zp.js";import{C as I}from"./CheckboxGroup-tz52WLT5.js";import{C as G}from"./Checkbox-wcSgrRP0.js";import{T as t}from"./TextField-6f42sQN4.js";import{S as l}from"./Select-BA2RuMPf.js";import{L as p}from"./ListBoxItem-DeGG1u4I.js";import{B as a}from"./Button-C_w78fqJ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-B-eRA-0U.js";import"./utils-DijK3BhG.js";import"./clsx-B-dksMZM.js";import"./index-ic1LOc6Q.js";import"./index-BmToxQMH.js";import"./clsx-Ciqy0D92.js";import"./Group-ckdiMqG1.js";import"./FieldError-BHIohEsL.js";import"./Text-BOHNy1km.js";import"./Text-CpkwsxmM.js";import"./Button-DjhlSD9p.js";import"./Hidden-gQ2c-O38.js";import"./useLabel-CMC2PGue.js";import"./useLabels-D1ty8LnF.js";import"./useButton-B7XowPCf.js";import"./SelectionIndicator-XUvq_wYE.js";import"./useField-DQBV-Tta.js";import"./VisuallyHidden-B6pFoD4c.js";import"./useControlledState-TKTqriB6.js";import"./Label-DUC1b-tc.js";import"./Dialog-N4-uAqw5.js";import"./RSPContexts-D91XMIa7.js";import"./OverlayArrow-BQld5ld3.js";import"./useResizeObserver-DphTRZ6E.js";import"./Collection-cGfgXwcY.js";import"./index--ml_NepL.js";import"./Separator-BOcGevY0.js";import"./SelectionManager-B5QpEOZo.js";import"./useEvent-COzGA22f.js";import"./scrollIntoView-C8C62cn2.js";import"./useDescription-BaeFvinJ.js";import"./ListKeyboardDelegate-DQOkQRlN.js";import"./PressResponder-BmwLoaVU.js";import"./useLocalizedStringFormatter-4oJDcrPd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D_QCD2Ih.js";import"./getScrollParent-QlPDcvR1.js";import"./ModalOverlay-DigGoIVP.js";import"./x-DxaaQwzc.js";import"./createLucideIcon-D_WvFzuZ.js";import"./useLocalizedStringFormatter-vmL8Qz6d.js";import"./Heading-B0E4XyP3.js";import"./info-BKv4yiRX.js";import"./Popover-D9jXiJ7h.js";import"./check-Df1Lg8Nd.js";import"./useToggleState-Cl8Y6j-M.js";import"./TextFieldBase-BIkYQE2F.js";import"./Input-BzY6P365.js";import"./useTextField-CgzQ8hLd.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BAYQM_KP.js";import"./DragAndDrop-DgbV-4ZJ.js";import"./inertValue-V0I9ZbFZ.js";import"./useListState-D57UB3zW.js";import"./TagGroup-iWWxOBRR.js";import"./useHighlightSelectionDescription-Qpy43y7a.js";import"./useUpdateEffect-BVTowmdB.js";import"./useHasTabbableChild-G5pQlYnk.js";import"./chevron-down-DekCoahX.js";import"./Virtualizer-DumUJDQU.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
