import{j as n}from"./iframe-BVtd0Okw.js";import{$ as j}from"./Form-WDN0T48c.js";import{G}from"./Grid-6_3BG5yK.js";import{G as e}from"./GridItem-DlUVq6Ej.js";import{T as r}from"./TextField-jnmMwD6e.js";import{S as I}from"./Select-DbVlVLSx.js";import{B as a}from"./Button-FUO0m1OX.js";import{R as g,a as b}from"./Radio-BYgelSW0.js";import{C as h}from"./CheckboxGroup-BIV-eyzr.js";import{C as k}from"./Checkbox-DCOEFqBO.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CP8CKu62.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DlLxMPDj.js";import"./useFocusRing-CAUH-ztq.js";import"./index-CaC5ybZo.js";import"./index-CdKIpcPr.js";import"./TextFieldBase-BRzjjrSn.js";import"./TextField-BmafM_Qk.js";import"./FieldError-Bf6WFwhQ.js";import"./Text-DRMh2bWO.js";import"./Text-BTAOgKZh.js";import"./ListKeyboardDelegate-D-O_xyvo.js";import"./SelectionManager-UzpvTxfP.js";import"./useEvent-B1ip18ni.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BG-RJSP_.js";import"./useDescription-DGZsZYLK.js";import"./useControlledState-BUqH0eFg.js";import"./Group-DitsblIQ.js";import"./Input-D-BEE2EQ.js";import"./Hidden-D72UWOxP.js";import"./Button-CXHPKunj.js";import"./useLabels-JXXqQVQK.js";import"./useButton-P-LFoXYP.js";import"./useTextField-C83NvAOh.js";import"./useField-6z8pNjTN.js";import"./TextField.module-DjUItNl5.js";import"./Label-CzpTxzr6.js";import"./Dialog-ZCd7cuYM.js";import"./RSPContexts-CQ13mZT6.js";import"./OverlayArrow-pz6ViaFW.js";import"./useResizeObserver-ssMPqaEu.js";import"./Collection-TELe1PnS.js";import"./index-DeaZYAet.js";import"./Separator-DLNAZ410.js";import"./PressResponder-BHLRyMZl.js";import"./useLocalizedStringFormatter-CFZUHa8F.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BUPUUYBL.js";import"./Dialog-CLsypKVj.js";import"./useLocalizedStringFormatter-W_Vnid9-.js";import"./x-CHz6UvXx.js";import"./createLucideIcon-CpRkuq9a.js";import"./Heading-3AJAnEIB.js";import"./info-Cij8l7KT.js";import"./Tag-DT2s78Q0.js";import"./ListBox-CLn8Zojt.js";import"./DragAndDrop-RXCw17Rt.js";import"./inertValue-CKSPolIs.js";import"./useListState-D7cZNc_6.js";import"./useHighlightSelectionDescription-hi7y9FdI.js";import"./useUpdateEffect-BeSDtjD0.js";import"./useHasTabbableChild-D25IsENQ.js";import"./check-Cutd05PI.js";import"./ListBoxSection-BOn8tfmr.js";import"./Virtualizer-DFL5UO64.js";import"./useObserveElement-DCstP6Xb.js";import"./chevron-down-DUGXb8t9.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BA_gk8G9.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
