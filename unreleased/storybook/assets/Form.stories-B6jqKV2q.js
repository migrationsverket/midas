import{j as n}from"./iframe-BflIqvE6.js";import{$ as j}from"./Form-DSozrhSV.js";import{G}from"./Grid-KQT5rZXn.js";import{G as e}from"./GridItem-CM19TPka.js";import{T as r}from"./TextField-DMQX-rni.js";import{S as I}from"./Select-BLGCv-FG.js";import{B as a}from"./Button-BZ6BUQvd.js";import{R as g,a as b}from"./Radio-DMCEQPav.js";import{C as h}from"./CheckboxGroup-CXTROdnh.js";import{C as k}from"./Checkbox-Cuq3IQ-N.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-ylbj5vL5.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DXQ7NWL-.js";import"./useFocusRing-DrDxscJM.js";import"./index-Br-uEwzo.js";import"./index-Dx7Btq4b.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-TuaEWI9i.js";import"./TextField-5WmEAWSP.js";import"./FieldError-CS0MkE0J.js";import"./Text-BTus72kF.js";import"./Text-DqrpP36e.js";import"./context-LP_PzFA0.js";import"./SelectionManager-CR5KozjG.js";import"./useEvent-D0_cf-Vk.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BNZiqYbh.js";import"./useDescription-iMT9PnYW.js";import"./useControlledState-yTdqFspJ.js";import"./Group-CBqRMvfR.js";import"./Input-Di_WE-nk.js";import"./Hidden-C1UzRk0g.js";import"./Button-CdJt7WIE.js";import"./useLabels-CTD0nf31.js";import"./useButton-Q7IzlQM_.js";import"./useTextField-BVCySpTn.js";import"./useField-DF-FRna8.js";import"./TextField.module-DjUItNl5.js";import"./Label-Bg_K3Rp5.js";import"./Dialog-FaPQFQsW.js";import"./RSPContexts-BpkA4L4V.js";import"./OverlayArrow-Dhmjn4yC.js";import"./useResizeObserver-BZkZFdy7.js";import"./Collection-Dg8-4AhQ.js";import"./index-ByuRkrFE.js";import"./Separator-27e1b02U.js";import"./PressResponder-CORfYTUe.js";import"./useLocalizedStringFormatter-CbT76VeL.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BNwmeoRc.js";import"./useLocalizedStringFormatter-DEa530JN.js";import"./x-DNxtkk9S.js";import"./createLucideIcon-BgeUGhPA.js";import"./Heading-BlWQXrqI.js";import"./info-BrampOip.js";import"./Popover-BQbVmbQy.js";import"./Tag-GbQrGasz.js";import"./ListBox-DwsDs7xx.js";import"./DragAndDrop-wRj4yGgp.js";import"./inertValue-CJHUFQxV.js";import"./useListState-ChXkstn0.js";import"./useHighlightSelectionDescription-DGbOfQI6.js";import"./useUpdateEffect-etx3jtv3.js";import"./useHasTabbableChild-z2yd20ln.js";import"./check-z1Lk792O.js";import"./ListBoxSection-Cm2N3XjR.js";import"./Virtualizer-DBlxAGqZ.js";import"./useObserveElement-jyW1bY4I.js";import"./chevron-down-F8W3rpD2.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CT85i2gj.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Nn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Nn as __namedExportsOrder,wn as default};
