import{j as n}from"./iframe-7c4G6udD.js";import{$ as j}from"./Form-CU5QScHe.js";import{G}from"./Grid-D9ByPXrC.js";import{G as e}from"./GridItem-DBhPfE2T.js";import{T as r}from"./TextField-DrOxhuSA.js";import{S as I}from"./Select-DQaN6VVI.js";import{B as a}from"./Button-Ttk0eY95.js";import{R as g,a as b}from"./Radio-Be_Qdtge.js";import{C as h}from"./CheckboxGroup-rCWwFHc4.js";import{C as k}from"./Checkbox-5NO3_WgD.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DqMnFANe.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-XF8kNInp.js";import"./useFocusRing-DHYnnItf.js";import"./index-gzCIwNL4.js";import"./index-Brsk0cEE.js";import"./TextFieldBase-DsyHZJAZ.js";import"./TextField-B-XrAPT5.js";import"./FieldError-CTdgTIUC.js";import"./Text-DHFsN6x3.js";import"./Text-DnXG9Wtt.js";import"./ListKeyboardDelegate-CXo-5gzu.js";import"./SelectionManager-CUGejQog.js";import"./useEvent-D5eh0wyq.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CAARnTTi.js";import"./useDescription-C79pud3v.js";import"./useControlledState-B7RslXCk.js";import"./Group-DtxFYl8I.js";import"./Input-CJ5D-_wi.js";import"./Hidden-CDjhrcom.js";import"./Button-4tMb33_E.js";import"./useLabels-DKIBgnPx.js";import"./useButton-CvLzRZuG.js";import"./useTextField-2zMdOQrq.js";import"./useField-CeLBknTd.js";import"./TextField.module-DjUItNl5.js";import"./Label-HDb3QIPh.js";import"./Dialog-BVNMALdM.js";import"./RSPContexts-Dw_gy75G.js";import"./OverlayArrow-DGlDWaHZ.js";import"./useResizeObserver--2Jkd-EV.js";import"./Collection-C9GeQ28X.js";import"./index-BDSEtDKv.js";import"./Separator-CgICEWn4.js";import"./PressResponder-B1IFL-HU.js";import"./useLocalizedStringFormatter-DcgZct_r.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BdfWJnZB.js";import"./Dialog-BTSvYz2Y.js";import"./useLocalizedStringFormatter-ancDNvps.js";import"./x-DoOQoyPf.js";import"./createLucideIcon-Bal6laq1.js";import"./Heading-C37n7A6A.js";import"./info-Bp4Z1V3v.js";import"./Tag-DJ_ishzY.js";import"./ListBox-CHGsSXYQ.js";import"./DragAndDrop-B2f70xOi.js";import"./inertValue-gK3cC4Al.js";import"./useListState-CRt8Enti.js";import"./useHighlightSelectionDescription-BTcSYWbl.js";import"./useUpdateEffect-CxpxMhYB.js";import"./useHasTabbableChild-EoWtO45c.js";import"./check-D2f8i3OE.js";import"./ListBoxSection-DLeJrOm-.js";import"./Virtualizer-Ca-1p49Q.js";import"./useObserveElement-DemsYeZh.js";import"./chevron-down-mB5o_01P.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BP2ArE25.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
