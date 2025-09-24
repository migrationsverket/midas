import{j as n}from"./iframe-CzUxqGQ_.js";import{$ as j}from"./Form-D9bbq16b.js";import{G}from"./Grid-QDQ_IWIb.js";import{G as e}from"./GridItem-BCEusVsi.js";import{T as r}from"./TextField-B5nSDP30.js";import{S as I}from"./Select-Dq2VS-Lb.js";import{B as a}from"./Button-0wtjKFjf.js";import{R as g,a as b}from"./Radio-BHx0uNYZ.js";import{C as h}from"./CheckboxGroup-t73MHXs3.js";import{C as k}from"./Checkbox-B7MwmQhZ.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CbFm5p6y.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BxtoHpan.js";import"./useFocusRing-pKB-8gPX.js";import"./index-CaFRykAt.js";import"./index-5a-K3w4c.js";import"./TextFieldBase-hEXzh6Ci.js";import"./TextField-CR7rbStw.js";import"./FieldError-DSedrAg8.js";import"./Text-BFnJIp6t.js";import"./Text-_3eFj_WC.js";import"./ListKeyboardDelegate-CmQtuq6g.js";import"./SelectionManager-C7nGby3Y.js";import"./useEvent-HqvQtOch.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D2Itpa8i.js";import"./useDescription-BIkixasR.js";import"./useControlledState-CZAkS5LV.js";import"./Group-BlsHjkQd.js";import"./Input-DHmlswtj.js";import"./Hidden-CE7sOSdQ.js";import"./Button-WcWYf_2Q.js";import"./useLabels-DB3FZw8d.js";import"./useButton-C-uZ1RA1.js";import"./useTextField-CllT6LUV.js";import"./useField-D_f1Z9bX.js";import"./TextField.module-DjUItNl5.js";import"./Label-cIRmQNSM.js";import"./Dialog-BlQFtmHv.js";import"./RSPContexts-Bk9WTxR5.js";import"./OverlayArrow-DnvColCz.js";import"./useResizeObserver-D7paknJK.js";import"./Collection-C0NzHWtW.js";import"./index-B6h0Ee6I.js";import"./Separator-CosWRunS.js";import"./PressResponder-BOkor_Pe.js";import"./useLocalizedStringFormatter-BHeZj5YN.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DQFt_3dD.js";import"./Dialog-CDvER8mr.js";import"./useLocalizedStringFormatter-D1NysaeY.js";import"./x-1RnE9ahT.js";import"./createLucideIcon-Bmn1_La5.js";import"./Heading-DiRbe0ha.js";import"./info-BInXubQ_.js";import"./Tag-CZbTFF_0.js";import"./ListBox-Deoh3_dV.js";import"./DragAndDrop-BmYdfjsP.js";import"./inertValue-D4yVEjYe.js";import"./useListState-Dbdus-6C.js";import"./useHighlightSelectionDescription-BPPFsBaj.js";import"./useUpdateEffect-2OGHQHtp.js";import"./useHasTabbableChild-yuf-WRoU.js";import"./check-CwwdA3XT.js";import"./ListBoxSection-C8xCy1LM.js";import"./Virtualizer-x89-LEoV.js";import"./useObserveElement-BhXsp4VB.js";import"./chevron-down-CEvF-sAB.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BkZ9ToXo.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
