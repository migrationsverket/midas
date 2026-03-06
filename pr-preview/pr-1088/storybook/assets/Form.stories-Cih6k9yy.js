import{j as e}from"./iframe-CgL5jpdX.js";import{$ as c}from"./Form-CeL7g4an.js";import{G as d}from"./Grid-AO3MyjxU.js";import{G as i}from"./GridItem-CUJlycXN.js";import{a as x,R as u}from"./Radio-IeqSUdyo.js";import{C as I}from"./CheckboxGroup-CCjbp7lp.js";import{C as G}from"./Checkbox-B6sG3j2A.js";import{T as t}from"./TextField-Buc7sTSH.js";import{S as l}from"./Select-DAcPLe8N.js";import{L as p}from"./ListBoxItem-BaLdsOPr.js";import{B as a}from"./Button-DSLJU119.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BwYOvAb8.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-YoD1TmSM.js";import"./useFocusRing-CzWgPPi5.js";import"./index-IcQzFznC.js";import"./index-BLmwPxgC.js";import"./clsx-Ciqy0D92.js";import"./Group-DWHhnbql.js";import"./FieldError-BH_BPKHD.js";import"./Text-C7o90fsQ.js";import"./Text-MhlqGevy.js";import"./Button-Z-LnhU8E.js";import"./Hidden-C2oIje6j.js";import"./useLabels-B9veE0Tg.js";import"./useButton-CzcDwR1N.js";import"./SelectionIndicator-DqnlVpg0.js";import"./useField-BsmAT2vs.js";import"./VisuallyHidden-BsEPRBBE.js";import"./useControlledState-CyaCWJoJ.js";import"./Label-dskcD2CD.js";import"./Dialog-DSbqG3ZJ.js";import"./RSPContexts-TxIrKy65.js";import"./OverlayArrow-Dxv48tTs.js";import"./useResizeObserver-NI893z-o.js";import"./Collection-9AeLgQUg.js";import"./index-CO57A9Dx.js";import"./Separator-CbbfB2UR.js";import"./SelectionManager-o0XZ8hoX.js";import"./useEvent-DWxTDEgS.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-B8kyRAqY.js";import"./ListKeyboardDelegate-BZdKy9GG.js";import"./PressResponder-CuXLg06j.js";import"./useLocalizedStringFormatter-sPHgE0bP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bik81p2q.js";import"./getScrollParent-Cpn7MDkE.js";import"./x-Cp-TOvNz.js";import"./createLucideIcon-CxmWxSan.js";import"./useLocalizedStringFormatter-D5fFi2pk.js";import"./Heading-YDvkZKr1.js";import"./info-CRsRYZJj.js";import"./Popover-CwlylJ2g.js";import"./check-BaESR95y.js";import"./useToggleState-B2e4_1YM.js";import"./TextFieldBase-DZJQlizh.js";import"./Input-QdmhBDJl.js";import"./useTextField-B45MsQB8.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-C_t0S01M.js";import"./DragAndDrop-PVYep0tz.js";import"./inertValue-CoqdM-Tm.js";import"./useListState-DXgNGs-J.js";import"./TagGroup-v00BVp37.js";import"./useHighlightSelectionDescription-D6lrBM8W.js";import"./useUpdateEffect-cJInICqi.js";import"./useHasTabbableChild-BpIJ54WT.js";import"./chevron-down-twpA_EyI.js";import"./Virtualizer-BcoD9v2e.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
