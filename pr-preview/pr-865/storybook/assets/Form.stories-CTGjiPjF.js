import{j as n}from"./iframe-ChcYoqp0.js";import{$ as j}from"./Form-AKG01aDT.js";import{G}from"./Grid-l7bKwzkj.js";import{G as e}from"./GridItem-Bf7Rd5-9.js";import{T as r}from"./TextField-DRDSH12P.js";import{S as I}from"./Select-d6jfYr99.js";import{B as a}from"./Button-Ba7gXLh4.js";import{R as g,a as b}from"./Radio-CDhiZkiv.js";import{C as h}from"./CheckboxGroup-CBaLDddp.js";import{C as k}from"./Checkbox-j16vQZdv.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-FAb_T-tI.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-HCFQSVPU.js";import"./useFocusRing-BV0DM0gs.js";import"./index-CS3J1VTA.js";import"./index-Ben3sRLH.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-l6RUyl4r.js";import"./TextField--sApPP4F.js";import"./FieldError-BPyFrOSJ.js";import"./Text-CdJbnvsV.js";import"./Text-CMVOeByT.js";import"./context-CKiW0CJi.js";import"./SelectionManager-B7RmVXow.js";import"./useEvent-CVYJxl0E.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D21DfXro.js";import"./useDescription-Ba72oDKG.js";import"./useControlledState-DJkD2lck.js";import"./Group-B0S2JBZB.js";import"./Input-CQ4ujRXn.js";import"./Hidden-DgEPPNTm.js";import"./Button-CNtiianZ.js";import"./useLabels-Cc-mMV6O.js";import"./useButton-BREGaknK.js";import"./useTextField-CR3DtU0a.js";import"./useField-Crmo2tZv.js";import"./TextField.module-DjUItNl5.js";import"./Label-BpSmZ73F.js";import"./Dialog-DUxmOawm.js";import"./RSPContexts-BTIuj-vs.js";import"./OverlayArrow-DJ1NPEZN.js";import"./useResizeObserver-B1Pzydwx.js";import"./Collection-XXU3n9ay.js";import"./index-BBUGM01_.js";import"./Separator-B9zBAfg8.js";import"./PressResponder-Dx7qWmrL.js";import"./useLocalizedStringFormatter-B77bzjt3.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D9LAEuhh.js";import"./useLocalizedStringFormatter-et4OKw6k.js";import"./x-CJ4aAxfz.js";import"./createLucideIcon-CyelcNEh.js";import"./Heading-C5cnXOGQ.js";import"./info-DMQBtIjI.js";import"./Popover-DYOsi2i-.js";import"./Tag-rdIfU1Az.js";import"./ListBox-K4Y5ByCS.js";import"./DragAndDrop-Cb7iyEHe.js";import"./inertValue-tHyl3zj0.js";import"./useListState-Bl3XcKB3.js";import"./useHighlightSelectionDescription-DOMN1vrL.js";import"./useUpdateEffect-ea7XnZfl.js";import"./useHasTabbableChild-XBfKkKDw.js";import"./check-SXPlU5Ps.js";import"./ListBoxSection-Bwx0wzL-.js";import"./Virtualizer-CAVK-85P.js";import"./useObserveElement-DZhJ7eil.js";import"./chevron-down-r09tNU0r.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-B7Qf_q8t.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
