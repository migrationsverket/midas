import{j as n}from"./iframe-C8jmHyHw.js";import{$ as j}from"./Form-C5fsmzXl.js";import{G}from"./Grid-CNlH4W0b.js";import{G as e}from"./GridItem-BePPUXKi.js";import{T as r}from"./TextField-CaVK4uuF.js";import{S as I}from"./Select-1MRrfb2S.js";import{B as a}from"./Button-C692PS25.js";import{R as g,a as b}from"./Radio-Dgr_Baw4.js";import{C as h}from"./CheckboxGroup-BNRd1zKO.js";import{C as k}from"./Checkbox-qMLgWz0t.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-1TRItCzw.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BLlj4sye.js";import"./useFocusRing-B9FR-SR_.js";import"./index-DGMmncya.js";import"./index-BAdHPd1h.js";import"./TextFieldBase-sWHUIF7L.js";import"./TextField-CUTbPmMb.js";import"./FieldError-Ml_Podzg.js";import"./Text-Cd6LKnUV.js";import"./Text-BuIfmfgM.js";import"./ListKeyboardDelegate-NPF5jpnV.js";import"./SelectionManager-BlgDLiK2.js";import"./useEvent-CEdnxDbp.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CwYSOVmg.js";import"./useDescription-DwCBa7Xf.js";import"./useControlledState-ChVgg0mf.js";import"./Group-DI5lHJ2t.js";import"./Input-C0WAUxaL.js";import"./Hidden-BxTpBUXB.js";import"./Button-2gmZbYwI.js";import"./useLabels-Tvhj2ooU.js";import"./useButton-CZ9RCKLc.js";import"./useTextField-BxYc3Cw_.js";import"./useField-BQXrq7Ml.js";import"./TextField.module-DjUItNl5.js";import"./Label-CZ9dWj5r.js";import"./Dialog-wIZZZa-w.js";import"./RSPContexts-BwchcnF8.js";import"./OverlayArrow-DolZ3-aQ.js";import"./useResizeObserver-DjpSN55y.js";import"./Collection-CQCtrIRl.js";import"./index-BDWwfPmD.js";import"./Separator-D2N5e8kW.js";import"./PressResponder-lvqazW-w.js";import"./useLocalizedStringFormatter-C9GRevfG.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BB3j3AR_.js";import"./Dialog-C9O4uF10.js";import"./useLocalizedStringFormatter-Os97nCG2.js";import"./x-EQOB7IBd.js";import"./createLucideIcon-PbjLv6Y9.js";import"./Heading-c-fEvpz8.js";import"./info-Cg1ogSwC.js";import"./Tag-Dk11LrHq.js";import"./ListBox-17HbJNMZ.js";import"./DragAndDrop-BMKL_NGs.js";import"./inertValue-FnjFyZ94.js";import"./useListState-Di1MxvIk.js";import"./useHighlightSelectionDescription-TVi82y0F.js";import"./useUpdateEffect-B-U_mm6G.js";import"./useHasTabbableChild-BPdIxid_.js";import"./check-fcfrgwFQ.js";import"./ListBoxSection-B3Hl_MX_.js";import"./Virtualizer-BzgK57eD.js";import"./useObserveElement-DBZX57jp.js";import"./chevron-down-FiZcHEPu.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-D7X2oei5.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode='single' options={ITEMS.map(i => ({
          id: i,
          name: i
        }))} />
        </GridItem>

        <GridItem>
          <Button>Skicka</Button>
        </GridItem>
      </Grid>;
  }
}`,...(p=(l=m.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var c,x,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode='single' options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const wn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,wn as __namedExportsOrder,$n as default};
