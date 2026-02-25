import{j as e}from"./iframe-BemYTmI0.js";import{$ as c}from"./Form-Cl-wZTVf.js";import{G as d}from"./Grid-Ccka1bbl.js";import{G as i}from"./GridItem-prdkZBqK.js";import{a as x,R as u}from"./Radio-C3Oig9si.js";import{C as I}from"./CheckboxGroup-DQVV6Hml.js";import{C as G}from"./Checkbox-CET8pLBG.js";import{T as t}from"./TextField-3yHuIhNm.js";import{S as l}from"./Select-2iUSfW1u.js";import{L as p}from"./ListBoxItem-BSRT19NE.js";import{B as a}from"./Button-BvlrAquf.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BFE3Bu5p.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Hprlhq0d.js";import"./useFocusRing-DZNPQtTp.js";import"./index-ClgbtUC1.js";import"./index-BYexVBob.js";import"./clsx-Ciqy0D92.js";import"./Group-GN5Y-yTy.js";import"./FieldError-Cmx8qBX6.js";import"./Text-BdKoRU3R.js";import"./Text-C_3jh_f2.js";import"./Button-BIUCE2_i.js";import"./Hidden-BgieuMJL.js";import"./useLabels-B0oUE5fB.js";import"./useButton-BFMyhuBV.js";import"./SelectionIndicator-DBlRDH-v.js";import"./useField-BByJZkIc.js";import"./VisuallyHidden-BYKpW6eG.js";import"./useControlledState-CpK-5b_b.js";import"./Label-Co7s0eKC.js";import"./Dialog-zjIWTz44.js";import"./RSPContexts-Bpi28sKY.js";import"./OverlayArrow-szcx6Hif.js";import"./useResizeObserver-BYTLaHDK.js";import"./Collection-CVw2CSpD.js";import"./index-BwX8aiOo.js";import"./Separator-BFJnq1WA.js";import"./SelectionManager-CETzm5H2.js";import"./useEvent-BjqKnd5t.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DhkrqMYF.js";import"./ListKeyboardDelegate-CUrp1wRU.js";import"./PressResponder-BlFiJnok.js";import"./useLocalizedStringFormatter-dRW-fgCh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DkEgdanO.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-DusiX_N1.js";import"./createLucideIcon-CvZzPSN7.js";import"./useLocalizedStringFormatter-CsgibMpR.js";import"./Heading-DoAu3hzM.js";import"./info-C77x0O1Y.js";import"./Popover-C-8PUIjr.js";import"./check-C0jOVUR7.js";import"./useToggleState-ijvHJaa3.js";import"./TextFieldBase-CidQ8mFK.js";import"./Input-B9zgWadz.js";import"./useTextField-C-GApOC2.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Bo5NQ_GY.js";import"./DragAndDrop-CkMYVJgV.js";import"./inertValue-ByXHBL-s.js";import"./useListState-awp9bMPP.js";import"./TagGroup-DA6I3EuZ.js";import"./useHighlightSelectionDescription-DFneW_PP.js";import"./useUpdateEffect-1vUf0G1K.js";import"./useHasTabbableChild-Bva6DccO.js";import"./chevron-down-EFCWX5gW.js";import"./Virtualizer-C0RUV4Wm.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
