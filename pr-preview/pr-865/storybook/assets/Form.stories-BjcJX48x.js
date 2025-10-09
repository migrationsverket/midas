import{j as n}from"./iframe-D2MuCvmE.js";import{$ as j}from"./Form-BJMjJrNc.js";import{G}from"./Grid-lje8OGZ1.js";import{G as e}from"./GridItem-CyNBRcei.js";import{T as r}from"./TextField-BZ0__WDQ.js";import{S as I}from"./Select-D4bv_VSn.js";import{B as a}from"./Button-DCJfoHjp.js";import{R as g,a as b}from"./Radio-ylS7IyMT.js";import{C as h}from"./CheckboxGroup-DRtVoX8B.js";import{C as k}from"./Checkbox-LRy3RSo1.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D-i1kht9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CDN2qhaR.js";import"./useFocusRing-CkbQqL6a.js";import"./index-CheiYMPp.js";import"./index-DG_bltjC.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-ZtmQth8T.js";import"./TextField-DrCtzYoE.js";import"./FieldError-_UIh8zwa.js";import"./Text-HmzRIPDG.js";import"./Text-DhMyLiaG.js";import"./context-pt41aAZk.js";import"./SelectionManager-BdKcJ2Xe.js";import"./useEvent-CuQWqG2P.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-OhzlyEWs.js";import"./useDescription-qP2G5StM.js";import"./useControlledState-kd8jE-Ro.js";import"./Group-3GIfeMS6.js";import"./Input-hobj4175.js";import"./Hidden-CmqhHAxN.js";import"./Button-7AYNv2s9.js";import"./useLabels-DqdsZ-Ff.js";import"./useButton-CUms7Pzi.js";import"./useTextField-VyBrjbpz.js";import"./useField-CcGuSj3g.js";import"./TextField.module-DjUItNl5.js";import"./Label-BYothRFJ.js";import"./Dialog-BNbsV77O.js";import"./RSPContexts-DNSXwvVv.js";import"./OverlayArrow--qQv-pX2.js";import"./useResizeObserver-6tKVvB6x.js";import"./Collection-LIuUUMqM.js";import"./index-BtroWiai.js";import"./Separator-BrDDHS-P.js";import"./PressResponder-Bt-7xLnZ.js";import"./useLocalizedStringFormatter-D06UMON8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DeV09ixB.js";import"./useLocalizedStringFormatter-CHzBxrkx.js";import"./x-BDqNDlQp.js";import"./createLucideIcon-Cql117mM.js";import"./Heading-Dgn_ZE6L.js";import"./info-rG-vwnlm.js";import"./Popover-CIi7oy3V.js";import"./Tag-ZwdFFBg-.js";import"./ListBox-wBZo23q1.js";import"./DragAndDrop-DPVUqlor.js";import"./inertValue-BJVBkj6c.js";import"./useListState-Co1Eqq5j.js";import"./useHighlightSelectionDescription-DzkU1hhN.js";import"./useUpdateEffect-B-Agz1q_.js";import"./useHasTabbableChild-aPKnSK1O.js";import"./check-Cf9Sb6u4.js";import"./ListBoxSection-KlnsKbg0.js";import"./Virtualizer-DVUfivFS.js";import"./useObserveElement-DXAimten.js";import"./chevron-down-BMq4JIVT.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DHiA1e1O.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
