import{j as e}from"./iframe-DZFoTsAP.js";import{$ as c}from"./Form-CPx_ibCo.js";import{G as d}from"./Grid-DoI91q0_.js";import{G as i}from"./GridItem-DeZXJl3h.js";import{a as x,R as u}from"./Radio-CqVrR9B5.js";import{C as I}from"./CheckboxGroup-CT3WUaRw.js";import{C as G}from"./Checkbox-MU9ii1Os.js";import{T as t}from"./TextField-hzx7yRIl.js";import{S as l}from"./Select-DFcXyRI2.js";import{L as p}from"./ListBoxItem-x0A8tsZK.js";import{B as a}from"./Button-DrMZqG88.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BgDH_W4s.js";import"./clsx-B-dksMZM.js";import"./useFormValidation--RUuo-EK.js";import"./useFocusRing-BOfY4fHs.js";import"./index-C0QzEn7-.js";import"./index-qTuN-RN1.js";import"./clsx-Ciqy0D92.js";import"./Group-C4NFPiiK.js";import"./FieldError-CDqVsYjk.js";import"./Text-CDyd3dUQ.js";import"./Text-BTLpICHy.js";import"./Button-DXuM91n-.js";import"./Hidden-CfeWKfQs.js";import"./useLabels-5V9A1z8O.js";import"./useButton-DlimN8Sl.js";import"./SelectionIndicator-D0pzxM3X.js";import"./useField-Dc6XDZOx.js";import"./VisuallyHidden-CsEimcih.js";import"./useControlledState-DdgMtiiZ.js";import"./Label-BlTI54_L.js";import"./Dialog-K0HBlPWu.js";import"./RSPContexts-BEm_mhkG.js";import"./OverlayArrow-D_bcYX2Q.js";import"./useResizeObserver-DL4n-NVK.js";import"./Collection-D92hNAQF.js";import"./index-JR0-rleW.js";import"./Separator-BtfYlAGj.js";import"./SelectionManager-BkDv12c8.js";import"./useEvent-BV0hRtep.js";import"./scrollIntoView-BWZteTWd.js";import"./useDescription-DUddkFIG.js";import"./ListKeyboardDelegate-C20pHG0c.js";import"./PressResponder-DLlHUZ0n.js";import"./useLocalizedStringFormatter-DXt9zP7M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDKtzH8k.js";import"./getScrollParent-CVqyyLK3.js";import"./x-CLiDVpMP.js";import"./createLucideIcon-D8OPAh1o.js";import"./useLocalizedStringFormatter-BFv7ZkAg.js";import"./Heading-DK6bxRLh.js";import"./info-BS061rEP.js";import"./Popover-BmXNd6c7.js";import"./check-BjK6xXCf.js";import"./useToggleState-DfUKPW7y.js";import"./TextFieldBase-C6ZMlnax.js";import"./Input-CIRUIv3U.js";import"./useTextField-Wf556nwc.js";import"./TextField.module-DdivwlC8.js";import"./intlStrings-ZMTSFH_M.js";import"./ListBox-Cvgj9oo4.js";import"./DragAndDrop-Da2wOtu8.js";import"./inertValue-5lF4rBDk.js";import"./useListState-JH_Z7Klg.js";import"./TagGroup-DSSK0t9K.js";import"./useHighlightSelectionDescription-DfWnfhWg.js";import"./useUpdateEffect-Sx7VtMiP.js";import"./useHasTabbableChild-MW0aUxt0.js";import"./chevron-down-DtuyDiW7.js";import"./Virtualizer-BfSVmVlh.js";import"./Button.module-D_C6WeTN.js";const Xe={component:c,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const m=["Banan","Apple","Mango"];return e.jsxs(d,{children:[e.jsx(i,{size:12,children:e.jsx(t,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(i,{size:12,children:e.jsx(t,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(i,{size:12,children:e.jsx(l,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",items:m.map(r=>({id:r,name:r})),children:r=>e.jsx(p,{...r,children:r.name})})}),e.jsx(i,{children:e.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const m=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(d,{children:[e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(x,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(n=>e.jsx(u,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(I,{label:"Databas",description:"Välj databas att söka i",children:m.map(n=>e.jsx(G,{value:n,children:n},n))})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Namn",description:""})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Personnummer"})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(l,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",items:m.map(n=>({name:n,id:n})),children:n=>e.jsx(p,{...n,children:n.name})})}),e.jsx(i,{size:{xs:12,sm:6},children:e.jsx(t,{label:"Ärendekod"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(i,{size:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
