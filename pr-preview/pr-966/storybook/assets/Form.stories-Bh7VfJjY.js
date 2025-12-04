import{j as e}from"./iframe-DfJuQE8m.js";import{$ as c}from"./Form-CIJEaiBn.js";import{G as d}from"./Grid-gEXdX88a.js";import{G as i}from"./GridItem-B-V3ZEkv.js";import{T as t}from"./TextField-XGphLV8s.js";import{S as l}from"./Select-DKHH4hfB.js";import{B as a}from"./Button-DUMkSbLt.js";import{R as x,a as u}from"./Radio-uXbHNXoq.js";import{C as I}from"./CheckboxGroup-Dqh2veb7.js";import{C as G}from"./Checkbox-UCFQPjmp.js";import{L as p}from"./ListBoxItem-jYNPXN0P.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DhOIe8g4.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-jGn96_h-.js";import"./useFocusRing-DEOWgYwB.js";import"./index-CQALj8IV.js";import"./index-BkqquRj0.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CLOEZ_hR.js";import"./TextField-Qd8G9O4C.js";import"./FieldError-C1ud7pvY.js";import"./Text-BE6FOv1W.js";import"./Text-C0meLp2u.js";import"./RSPContexts-Bl-t2YWe.js";import"./Group-B6y2FFgb.js";import"./Input-B97IhnQ-.js";import"./Hidden-L0FDO2bN.js";import"./Button-C1h3qiWM.js";import"./useLabels-ukq135hJ.js";import"./useButton-D5urjP3V.js";import"./useTextField-Rr4wsSyH.js";import"./useControlledState-eRrBZcf1.js";import"./useField-BJyW5WxN.js";import"./TextField.module-CgqiUiYQ.js";import"./Label-nnQpJCiu.js";import"./Dialog-CZsdvfkm.js";import"./OverlayArrow-Bov2DMmm.js";import"./useResizeObserver-BSNTYhDh.js";import"./Collection-zRDc75Sn.js";import"./index-CFUygh5x.js";import"./Separator-a1OeMPZ9.js";import"./SelectionManager-381fJsVV.js";import"./useEvent-sIyE_x4m.js";import"./scrollIntoView-BOxlOCOK.js";import"./SelectionIndicator-BMh5Wja0.js";import"./useDescription-Cvwf_bWB.js";import"./ListKeyboardDelegate-DxvgtmVa.js";import"./PressResponder-BJHsACuL.js";import"./useLocalizedStringFormatter-DiGWatbI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-irao4iUV.js";import"./VisuallyHidden-Cs6c7lY9.js";import"./x-CHMzvCCf.js";import"./createLucideIcon-Bek8kOw5.js";import"./useLocalizedStringFormatter-CAe3Ejvu.js";import"./Heading-BJwMHQcl.js";import"./info-D5FDZ8xJ.js";import"./Popover-LFcU3rXq.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-B9fhRyrD.js";import"./DragAndDrop-DdP6t3yc.js";import"./inertValue-BMZJ30Vs.js";import"./useListState-BpsqLswB.js";import"./Tag-21dQN9qp.js";import"./useHighlightSelectionDescription-D6YfMS_d.js";import"./useUpdateEffect-B5Uylvci.js";import"./useHasTabbableChild-DPJmgBXN.js";import"./chevron-down-96uYpdn1.js";import"./Button.module-Co5e5YHp.js";import"./check-BbP_fO06.js";import"./useToggleState-BKKDkizK.js";import"./Virtualizer-BGb63bsR.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
