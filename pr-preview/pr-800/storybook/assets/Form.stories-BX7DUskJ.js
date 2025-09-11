import{j as n}from"./iframe-DKTYJxov.js";import{$ as j}from"./Form-D_m1XA77.js";import{G}from"./Grid-DKGGeIS9.js";import{G as e}from"./GridItem-C6xvFK4w.js";import{T as r}from"./TextField-P2gsGn3j.js";import{S as I}from"./Select-C1vijBWt.js";import{B as a}from"./Button-Bqd61oZS.js";import{R as g,a as b}from"./Radio-4QAxOhUA.js";import{C as h}from"./CheckboxGroup-RPBgaIyx.js";import{C as k}from"./Checkbox-DF3Mkzb5.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DlrE3rrS.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C9XyMFw1.js";import"./useFocusRing-BMKVxOz7.js";import"./index-DZntWrCo.js";import"./index-Ybazp-bE.js";import"./TextFieldBase-ILqUXCJE.js";import"./TextField-DJDQdKF4.js";import"./FieldError-BgMwzIDM.js";import"./Text-D1jDBQ4V.js";import"./Text-BkEikJn0.js";import"./ListKeyboardDelegate-CJVAmIy-.js";import"./SelectionManager-Bl286gDk.js";import"./useEvent-BmfdB5sw.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Dr6lPz3Q.js";import"./useDescription-dYN5hq25.js";import"./useControlledState-COc-TZRI.js";import"./Group-DJnERz5e.js";import"./Input-u1kxalnv.js";import"./Hidden-GSAzxcNG.js";import"./Button-CGLf_kvf.js";import"./useLabels-PpZvQN4V.js";import"./useButton-q5e9vgr9.js";import"./useTextField-vW8zHcSr.js";import"./useField-Cnl_bVzA.js";import"./TextField.module-DjUItNl5.js";import"./Label-oE_2Trro.js";import"./Dialog-SPw5EIBs.js";import"./RSPContexts-C-tBEKab.js";import"./OverlayArrow-DpGZup9r.js";import"./useResizeObserver-C2Q9oOJ5.js";import"./Collection-CXJs9EHw.js";import"./index-CiciEiy2.js";import"./Separator-BcvlGkTl.js";import"./PressResponder-eP_qXEaY.js";import"./useLocalizedStringFormatter-BZM8yXKw.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-3yrRPDIH.js";import"./Dialog-m282A8gM.js";import"./useLocalizedStringFormatter-DnQQVzOc.js";import"./x-e3ifKhcj.js";import"./createLucideIcon-BAE36aNG.js";import"./Heading-H_f4az1A.js";import"./info-DSSyCTvJ.js";import"./Tag-kFpHEaG0.js";import"./ListBox-BI-szR-m.js";import"./DragAndDrop-Dn3aUpKZ.js";import"./inertValue-C5bJT-bp.js";import"./useListState-C2YAOZ88.js";import"./useHighlightSelectionDescription-C1a1zVYH.js";import"./useUpdateEffect-M7lo8Z0x.js";import"./useHasTabbableChild-dH1teaAm.js";import"./check-D2vLsIQk.js";import"./ListBoxSection-BU_QaY02.js";import"./Virtualizer-COqVmqCN.js";import"./useObserveElement-BbduWwfs.js";import"./chevron-down-BB6bsTBi.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Bv_9xBOg.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
