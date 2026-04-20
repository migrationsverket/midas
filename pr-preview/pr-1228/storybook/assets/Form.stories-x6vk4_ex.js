import{j as e}from"./iframe-DChMXCrL.js";import{c}from"./Form-BAd9hYMN.js";import{G as d}from"./Grid-x7NWPyGc.js";import{G as i}from"./GridItem-BHg1kymU.js";import{a as x,R as u}from"./Radio-ClLxbSAd.js";import{C as I}from"./CheckboxGroup-DxyEtc6q.js";import{C as G}from"./Checkbox-D2tockjG.js";import{T as t}from"./TextField-D-QcWhza.js";import{S as l}from"./Select-B5HgvC05.js";import{L as p}from"./ListBoxItem-WiV-r4LT.js";import{B as a}from"./Button-5OLTPx-2.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BpLKk3JS.js";import"./utils-BplLbAcs.js";import"./clsx-B-dksMZM.js";import"./index-BtCGvG5N.js";import"./index-Q46JL2nn.js";import"./clsx-Ciqy0D92.js";import"./Group-gGcgkmgi.js";import"./FieldError-BY3Emi0e.js";import"./Text-TXgPlLZT.js";import"./Text-CYuY9x3r.js";import"./Button-MapMtsGv.js";import"./Hidden-H9l0LVv0.js";import"./useLabel-CG1tGj69.js";import"./useLabels-4tTwJsFS.js";import"./useButton-yAWY8-j7.js";import"./SelectionIndicator-ojDmiLhu.js";import"./useField-Cu7NXcUO.js";import"./VisuallyHidden-O06opA_U.js";import"./useControlledState-ovwSt6hg.js";import"./Label-D0Wx9sWd.js";import"./Dialog-ricOgdWO.js";import"./RSPContexts-uXDlDre3.js";import"./OverlayArrow-lXWzun3y.js";import"./useResizeObserver-BMMfhl0-.js";import"./Collection-BU_lyoK4.js";import"./index-D-b3Of-R.js";import"./Separator-DRumvpJ6.js";import"./SelectionManager-DkBkh9eR.js";import"./useEvent-KX6gLrPs.js";import"./scrollIntoView-qDeDHRgD.js";import"./useDescription-DzqttwPD.js";import"./ListKeyboardDelegate-bS7E8K2Y.js";import"./PressResponder-CrAYBKk_.js";import"./useLocalizedStringFormatter-CHUWFnrm.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-9d_KvjGm.js";import"./getScrollParent-Cuy0Pyiw.js";import"./ModalOverlay-Bl49Zkkr.js";import"./x-DKchXy5q.js";import"./createLucideIcon-DiQgCGzM.js";import"./useLocalizedStringFormatter-t-oeGUHJ.js";import"./Heading-Bk8iZ59n.js";import"./info-Dlkn4Jr2.js";import"./Popover-CUhzMhki.js";import"./check-BIP8ya1n.js";import"./useToggleState-BBv4Wlgc.js";import"./TextFieldBase-MaGjQcWt.js";import"./Input-ZbbcuS7K.js";import"./useTextField-E2JLN3xF.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-DgxtfldO.js";import"./DragAndDrop-DGHeS-Eu.js";import"./inertValue-vQGhbSQr.js";import"./useListState-DeIzzpOh.js";import"./TagGroup-DQ2c1F5G.js";import"./useHighlightSelectionDescription-LMrGaF1A.js";import"./useUpdateEffect-DNEahLDn.js";import"./useHasTabbableChild-DnvwpbCp.js";import"./chevron-down-C8wa1fLu.js";import"./Virtualizer-ROF9reqW.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
