import{j as e}from"./iframe-CZzQp4L4.js";import{c}from"./Form-659gi0gy.js";import{G as d}from"./Grid-CdMcIYx_.js";import{G as i}from"./GridItem-iBQXcTrv.js";import{a as x,R as u}from"./Radio-CBKvtQS9.js";import{C as I}from"./CheckboxGroup-XKOGI3DM.js";import{C as G}from"./Checkbox-BaX22mtO.js";import{T as t}from"./TextField-Bj_a1znX.js";import{S as l}from"./Select-pbO0tCo5.js";import{L as p}from"./ListBoxItem-Kt51s-hr.js";import{B as a}from"./Button-fUmHoMv6.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-BmXcpeVt.js";import"./utils-BTk1BXS6.js";import"./clsx-B-dksMZM.js";import"./index-D0_fmTu-.js";import"./index-pEVaM4yo.js";import"./clsx-Ciqy0D92.js";import"./Group-A-mQcfpV.js";import"./FieldError-B2NzjSdH.js";import"./Text-D4nq5ZrE.js";import"./Text-CgRiWgOz.js";import"./Button-CMuMpLTA.js";import"./Hidden-BsPoJuN8.js";import"./useLabel-BPb7Du1x.js";import"./useLabels-BJus4Fnm.js";import"./useButton-BjqkzqIi.js";import"./SelectionIndicator-FgeZ0UGL.js";import"./useField-C2MfHxqd.js";import"./VisuallyHidden-aeJx5n8b.js";import"./useControlledState-Bzqk2M-v.js";import"./Label-PycvJ6D4.js";import"./Dialog-Em9T_sNe.js";import"./RSPContexts-C0f-FQan.js";import"./OverlayArrow-BWmspBAH.js";import"./useResizeObserver-kChHHO69.js";import"./Collection-8ZnFVCkO.js";import"./index-IxhRrh31.js";import"./Separator-glEOqD4B.js";import"./SelectionManager-CzxGmGcX.js";import"./useEvent-BLtqzDzs.js";import"./scrollIntoView-C5X5vw03.js";import"./useDescription-CsoYkjOr.js";import"./ListKeyboardDelegate-DiVo4jo3.js";import"./PressResponder-qkhnBXZz.js";import"./useLocalizedStringFormatter-vXM2-Zab.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-8gubePBQ.js";import"./getScrollParent-D5Oq2B6G.js";import"./ModalOverlay-B1wpkTSM.js";import"./x-BkS9uTgk.js";import"./createLucideIcon-Cp1wTSwb.js";import"./useLocalizedStringFormatter-DHizypL-.js";import"./Heading-C7OfNizA.js";import"./info-BQIpRp7q.js";import"./Popover-ULM8piUT.js";import"./check-uaHuxoY8.js";import"./useToggleState-Dbu77dnE.js";import"./TextFieldBase-Bo3c8c0y.js";import"./Input-DFxiIJ3V.js";import"./useTextField-BlQ66k1M.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-BATtHX2-.js";import"./DragAndDrop-kAEwq-6r.js";import"./inertValue-CeLdCNvO.js";import"./useListState-BYMU_4-1.js";import"./TagGroup-I8NjFO8C.js";import"./useHighlightSelectionDescription-DCGRWXbE.js";import"./useUpdateEffect-DAQ4myEp.js";import"./useHasTabbableChild-Bw4gH6Hq.js";import"./chevron-down-Cq85Qq9D.js";import"./Virtualizer-DUllu60o.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
