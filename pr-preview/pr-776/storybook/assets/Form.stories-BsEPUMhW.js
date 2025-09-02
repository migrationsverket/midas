import{j as n}from"./iframe-Bz1AALJH.js";import{$ as j}from"./Form-B06rUI_8.js";import{G}from"./Grid-CnHJZ6hK.js";import{G as e}from"./GridItem-CaHCoxi9.js";import{T as r}from"./TextField-3TVf8IgG.js";import{S as I}from"./Select-BkTFJmBK.js";import{B as a}from"./Button-C2psp4YE.js";import{R as g,a as b}from"./Radio-D51U6ddN.js";import{C as h}from"./CheckboxGroup-CPnQcb5z.js";import{C as k}from"./Checkbox-8D0q4HBh.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Dj5t-nbC.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-GCR_QT1f.js";import"./useFocusRing-BXoYjw2R.js";import"./index-C3LwyAjV.js";import"./index-7S2drmrD.js";import"./TextFieldBase-Dzf0xGpW.js";import"./TextField-C0JS8vi5.js";import"./FieldError-ByZBd7i7.js";import"./Text-BFEldzGt.js";import"./Text-B7VDDK9r.js";import"./ListKeyboardDelegate-cktBDvXM.js";import"./SelectionManager-RumHmCa_.js";import"./useEvent-DLKtNRWs.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-C2rjxUq_.js";import"./useDescription-CrsPTJ_8.js";import"./useControlledState-Duw0Plbf.js";import"./Group-CKsBUvBP.js";import"./Input-DugN4Kiv.js";import"./Hidden-CwA-xBTQ.js";import"./Button-DoZdyROw.js";import"./useLabels-jTcOTHm4.js";import"./useButton-BPzcYraN.js";import"./useTextField-DdUiSECi.js";import"./useField-CJW-hnQC.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-fm1sxkmB.js";import"./Dialog-BcHkD--U.js";import"./RSPContexts-b4fRa8f_.js";import"./OverlayArrow-C5SnDEKR.js";import"./useResizeObserver-B4EcY5aR.js";import"./Collection-CLP_EnkK.js";import"./index-C-mTMFl9.js";import"./Separator-C-G_DkBV.js";import"./PressResponder-Dma60euU.js";import"./useLocalizedStringFormatter-Kwqu7qiQ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C7mteUM2.js";import"./Dialog-iH_LLL8M.js";import"./useLocalizedStringFormatter-C9Jqhish.js";import"./x-zoKsuzPI.js";import"./createLucideIcon-B_o5qdIv.js";import"./Heading-BLGUTwTs.js";import"./info-DYjq9Zhh.js";import"./Tag-wdueHPBE.js";import"./ListBox-B7M4iS6z.js";import"./DragAndDrop-BGQQrtat.js";import"./inertValue-CxbOOfTa.js";import"./useListState-D9R6HEhq.js";import"./useHighlightSelectionDescription-DaqgaUB5.js";import"./useUpdateEffect-BhG2OgJr.js";import"./useHasTabbableChild-CK3fE0an.js";import"./check-DX_DMSTj.js";import"./ListBoxSection-DaJ4tECf.js";import"./Virtualizer-DThDGTZp.js";import"./useObserveElement-CbUXSaTW.js";import"./chevron-down-CPvUIcnY.js";import"./Button.module-9Myim2MN.js";import"./useToggleState-ZH3klc-K.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
