import{j as e}from"./iframe-Cb8Pppl7.js";import{c}from"./Form-CFGWDFPn.js";import{G as d}from"./Grid-C9clZ1YB.js";import{G as i}from"./GridItem-DFQaitGm.js";import{a as x,R as u}from"./Radio-CnAvtv2W.js";import{C as I}from"./CheckboxGroup-wRxvk5m_.js";import{C as G}from"./Checkbox-BICj3T9I.js";import{T as t}from"./TextField-Cx4kr-rt.js";import{S as l}from"./Select-BiljvFdl.js";import{L as p}from"./ListBoxItem-BkfJ9hul.js";import{B as a}from"./Button-D4LxrXr0.js";import"./preload-helper-PPVm8Dsz.js";import"./useFocusRing-hqoRcLtB.js";import"./utils-Dj888C4V.js";import"./clsx-B-dksMZM.js";import"./index-pijaOdDz.js";import"./index-CskuVvb4.js";import"./clsx-Ciqy0D92.js";import"./Group-NyRvfXLY.js";import"./FieldError-D0-fOVgu.js";import"./Text-D2Ko1ZUZ.js";import"./Text-C5__ZA60.js";import"./Button-C8pMS1J_.js";import"./Hidden-COGS7kep.js";import"./useLabel-LJmuk9-y.js";import"./useLabels-C5l5JCC7.js";import"./useButton-SLXd8nlE.js";import"./SelectionIndicator-DDopmB2O.js";import"./useField-BqzVMgOW.js";import"./VisuallyHidden-DtKq5Gdo.js";import"./useControlledState-ixH4fEDK.js";import"./Label-BiZqGHJK.js";import"./Dialog-DSEhXHOx.js";import"./RSPContexts-DHg3Hsl6.js";import"./OverlayArrow-2ni0My97.js";import"./useResizeObserver-eW0Ome2f.js";import"./Collection-Cj61-OWh.js";import"./index-BeGPmrD_.js";import"./Separator-4_d9jsWj.js";import"./SelectionManager-D6ID8zOu.js";import"./useEvent-BCOghSZ0.js";import"./scrollIntoView-Dz6AtUUb.js";import"./useDescription-Bk-WLmUt.js";import"./ListKeyboardDelegate-CpEPtBzp.js";import"./PressResponder-BchWjLfC.js";import"./useLocalizedStringFormatter-B0S083G5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-f55oaWaw.js";import"./getScrollParent-Dcxt-3Ql.js";import"./ModalOverlay-DFYUls3I.js";import"./x-BvWkyjfg.js";import"./createLucideIcon-D7UMDINh.js";import"./useLocalizedStringFormatter-BKjuu9LT.js";import"./Heading-Ds7jCsCM.js";import"./info-BVhMhOhK.js";import"./Popover-CcsI4h7o.js";import"./check-CrRUF_fD.js";import"./useToggleState-_94WYYlb.js";import"./TextFieldBase-D0RdRV_e.js";import"./Input-5LTcMgXu.js";import"./useTextField-DbdeBffJ.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-T4ptQds6.js";import"./DragAndDrop-CaGyyUu4.js";import"./inertValue-C2jELF7B.js";import"./useListState-CtWjaSSB.js";import"./TagGroup-6AbU0CN1.js";import"./useHighlightSelectionDescription-Bpr_JRYx.js";import"./useUpdateEffect-Bl4cNlYs.js";import"./useHasTabbableChild-CNwYYQW-.js";import"./chevron-down-BstbShLk.js";import"./Virtualizer-B0dLrNsF.js";import"./Button.module-BB7N-cLd.js";const Le={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
