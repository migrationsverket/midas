import{j as n}from"./iframe-DBXYd9H0.js";import{$ as j}from"./Form-Bpbd-D6z.js";import{G}from"./Grid-Ce9RkxhQ.js";import{G as e}from"./GridItem-3edMuUh_.js";import{T as r}from"./TextField-BFY4Ir0F.js";import{S as I}from"./Select-D6ZM390t.js";import{B as a}from"./Button-OQRu_7fk.js";import{R as g,a as b}from"./Radio-Bu1exjOl.js";import{C as h}from"./CheckboxGroup-DFYQQHQf.js";import{C as k}from"./Checkbox-CO_FHLl5.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-3tRM1yOS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BB_ZnaHe.js";import"./useFocusRing-BHxof0u5.js";import"./index-C_5MHFkW.js";import"./index-CIWbDznm.js";import"./TextFieldBase-CKaLm7QW.js";import"./TextField-B0lco0ao.js";import"./FieldError-C18FnmXv.js";import"./Text-D_NV-iUp.js";import"./Text-DLvCfoQi.js";import"./ListKeyboardDelegate-CFaybryr.js";import"./SelectionManager-WPUpsJYO.js";import"./useEvent-T5iwfZGj.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-m2UmIPCi.js";import"./useDescription-czPGzeT-.js";import"./useControlledState-9ArlpBXg.js";import"./Group-DO7OYPmV.js";import"./Input-B2FeYoLO.js";import"./Hidden-DGlelntE.js";import"./Button-nKSMvIzG.js";import"./useLabels-Dg-IQ-jg.js";import"./useButton-AUrqB10i.js";import"./useTextField-BBg6vPfa.js";import"./useField-CIw_naMe.js";import"./TextField.module-DjUItNl5.js";import"./Label-DdXVf4wx.js";import"./Dialog-DtBTD6vb.js";import"./RSPContexts-fdKzoOjm.js";import"./OverlayArrow-Dxva8MZq.js";import"./useResizeObserver-BPzrdGEj.js";import"./Collection-Cb_OGJxj.js";import"./index-DWD1Eoh2.js";import"./Separator-DdhxaBtx.js";import"./PressResponder-BxDMHqrN.js";import"./useLocalizedStringFormatter-Qh7hutng.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BXXXpu-9.js";import"./Dialog-DJAVOaxa.js";import"./useLocalizedStringFormatter-BbJuEsE9.js";import"./x-Dom1ZKNK.js";import"./createLucideIcon-C8w2ZEM4.js";import"./Heading-B2V33bH4.js";import"./info-Dc8RUvTr.js";import"./Tag-UmYDsVLS.js";import"./ListBox--x6giiN7.js";import"./DragAndDrop-IjMTHRwd.js";import"./inertValue-B0obinUJ.js";import"./useListState-C19r-b8i.js";import"./useHighlightSelectionDescription-DXWrGAUb.js";import"./useUpdateEffect-DMZeCS_D.js";import"./useHasTabbableChild-DW4_h6jI.js";import"./check-D-lURMli.js";import"./ListBoxSection-Cf-R2LS0.js";import"./Virtualizer-5IAo0mNt.js";import"./useObserveElement-CsYGBlLb.js";import"./chevron-down-CnD97gc8.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Zx_OuIcQ.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
