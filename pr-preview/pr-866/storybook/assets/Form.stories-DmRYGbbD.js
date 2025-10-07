import{j as n}from"./iframe-BPyuKSpC.js";import{$ as j}from"./Form-BHj8flhE.js";import{G}from"./Grid-CLRkmCI_.js";import{G as e}from"./GridItem-Bv-Y4pGQ.js";import{T as r}from"./TextField-oxaYvEnT.js";import{S as I}from"./Select-CqBxcDIQ.js";import{B as a}from"./Button-B9Kwcc6D.js";import{R as g,a as b}from"./Radio-C3BjG1PJ.js";import{C as h}from"./CheckboxGroup-CeyQQP-P.js";import{C as k}from"./Checkbox-DslsITlX.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-v025b4LB.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cmcdm27C.js";import"./useFocusRing-CmbQGn1o.js";import"./index-DVJ3qppZ.js";import"./index-MqFnWvKI.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-BGCZgDFj.js";import"./TextField-HGCnDQIq.js";import"./FieldError-BXfcrwk2.js";import"./Text-Cx0lu4Ci.js";import"./Text-DdjBFdGz.js";import"./context-J0_DAJoh.js";import"./SelectionManager-De8btYWL.js";import"./useEvent-BvrFo504.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C4L8TwmH.js";import"./useDescription-DNIx29ws.js";import"./useControlledState-BUFD4108.js";import"./Group-cK2hlJnj.js";import"./Input-CnnXe8OE.js";import"./Hidden-CXThwN6X.js";import"./Button-q7bM61nG.js";import"./useLabels-DYiCNBUI.js";import"./useButton-CehnNdw3.js";import"./useTextField-BST4M3RP.js";import"./useField-DgfdB78s.js";import"./TextField.module-DjUItNl5.js";import"./Label-CZBP9X7z.js";import"./Dialog-diGMSuf3.js";import"./RSPContexts-BMlrZej1.js";import"./OverlayArrow-CgA2FJK6.js";import"./useResizeObserver-C_mPoe2W.js";import"./Collection-C94mt2aW.js";import"./index-2WGvzAzh.js";import"./Separator-BOhZTmaT.js";import"./PressResponder-CqeUWqc-.js";import"./useLocalizedStringFormatter-DUjLByC_.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BTizC8II.js";import"./useLocalizedStringFormatter-Ch3kaHyJ.js";import"./x-Dz20i7NT.js";import"./createLucideIcon-C0QP_E4X.js";import"./Heading-DT5lb3id.js";import"./info-CXFXkbkZ.js";import"./Popover-BvhQ0K9f.js";import"./Tag-CmD_WnUH.js";import"./ListBox-Dffyev2m.js";import"./DragAndDrop-B2IczS8K.js";import"./inertValue-1RCsV_yS.js";import"./useListState-xR3Ap1mw.js";import"./useHighlightSelectionDescription-B-LcNoP-.js";import"./useUpdateEffect-BNE0qO7Y.js";import"./useHasTabbableChild-38Shj8D-.js";import"./check-BDLXg-Rz.js";import"./ListBoxSection-Cn_5Q20_.js";import"./Virtualizer-C8fgz_DN.js";import"./useObserveElement-DoP85xM7.js";import"./chevron-down-C_3TdMoW.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DPoCRe6h.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
