import{j as e}from"./iframe-MVim3oui.js";import{$ as c}from"./Form-BvWBeI3H.js";import{G as d}from"./Grid-CtiGzNDE.js";import{G as i}from"./GridItem-D49uFEAf.js";import{a as x,R as u}from"./Radio-BpXtx3Nt.js";import{C as I}from"./CheckboxGroup-D6mHKXOF.js";import{C as G}from"./Checkbox-7rs4uo9F.js";import{T as t}from"./TextField-B8HxJXMr.js";import{S as l}from"./Select-CtULooqc.js";import{L as p}from"./ListBoxItem-OcqocSNQ.js";import{B as a}from"./Button-DXLRWKWN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-GfAQeq6-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-I8DYeMuj.js";import"./useFocusRing-DsxBFZ5w.js";import"./index-DV_xb9Te.js";import"./index-BgBUqlNN.js";import"./clsx-Ciqy0D92.js";import"./Group-DBiQK4U6.js";import"./FieldError-BDvc8nCv.js";import"./Text-CK8mjed6.js";import"./Text-BRJKcgIb.js";import"./Button-gb006erw.js";import"./Hidden-BnPFK6GE.js";import"./number-DfkVkf0F.js";import"./useLabels-CDhm4meR.js";import"./useButton-BYX1uAmK.js";import"./SelectionIndicator-CgPVTL_o.js";import"./useField-DBjxyUYg.js";import"./VisuallyHidden-D4ii-ukQ.js";import"./useControlledState-BAKDmaF6.js";import"./Label-CPUrc3w5.js";import"./Dialog-BM6h7Qhq.js";import"./RSPContexts-CtooKiU1.js";import"./OverlayArrow-hTWNmnYT.js";import"./useResizeObserver-C5DKMkSY.js";import"./Collection-D1rnK3KC.js";import"./index-CoAcmiIB.js";import"./Separator-CZ8vG12I.js";import"./SelectionManager-o82G2AiP.js";import"./useEvent-BkJEM1S7.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DDMJG_rN.js";import"./ListKeyboardDelegate-CQxknM_9.js";import"./PressResponder-BdCrncWf.js";import"./useLocalizedStringFormatter-BVBlcDTw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dvt4J9QX.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-DpvYgo_g.js";import"./x-5DuCkJ-_.js";import"./createLucideIcon-DbJYazUv.js";import"./useLocalizedStringFormatter-CQ2i-Pxa.js";import"./Heading-CRtmBqrr.js";import"./info-D_g0N3QK.js";import"./Popover-D0YU1Odv.js";import"./check-DaMhjUgo.js";import"./useToggleState-CFMIZmUC.js";import"./TextFieldBase-I-2o9Zpo.js";import"./TextField-BVWSPXYx.js";import"./Input-CfuaEZoZ.js";import"./useTextField-lYiDoqub.js";import"./TextField.module-DpzeWGpt.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-mqZFRtwC.js";import"./DragAndDrop-tG-gapoK.js";import"./inertValue-KFNe05NT.js";import"./useListState-kg1KHm-o.js";import"./Tag-CgUz0BIx.js";import"./useHighlightSelectionDescription-DoZDAlXJ.js";import"./useUpdateEffect-Bek8YayL.js";import"./useHasTabbableChild-D3Hz962q.js";import"./chevron-down-DFZ3xPLd.js";import"./Virtualizer-C4BgU784.js";import"./Button.module-Co5e5YHp.js";const Ke={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const Oe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,s as TwoColumnForm,Oe as __namedExportsOrder,Ke as default};
