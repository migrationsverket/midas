import{j as n}from"./iframe-Bimco4S_.js";import{$ as j}from"./Form-B4qMeFHQ.js";import{G}from"./Grid-Da5raqP5.js";import{G as e}from"./GridItem-CIx0mIP0.js";import{T as r}from"./TextField-tsbuz5wi.js";import{S as I}from"./Select-ClUhXyT5.js";import{B as a}from"./Button-8wWSLn63.js";import{R as g,a as b}from"./Radio-BesC1wqx.js";import{C as h}from"./CheckboxGroup-CZ2CWT2t.js";import{C as k}from"./Checkbox-DXPnOiTo.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DWBDv0Rx.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C8GO39cP.js";import"./useFocusRing-BGj381WY.js";import"./index-CkBjpd_l.js";import"./index-2qtrhRxk.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-vStWKXns.js";import"./TextField-EBrkfruy.js";import"./FieldError-DlzRBWIu.js";import"./Text-Bd80722c.js";import"./Text-KcB8VJuq.js";import"./context-0QlGrMCa.js";import"./SelectionManager-D_ZGWzP8.js";import"./useEvent-Dn25ydrv.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DA3WATXG.js";import"./useDescription-i35dMHBx.js";import"./useControlledState-BSGQonPU.js";import"./Group-WK79zJD5.js";import"./Input-C-1toMHP.js";import"./Hidden-46Bg087-.js";import"./Button-CXnM8Jpf.js";import"./useLabels-BKBXRZE4.js";import"./useButton-BhvWxOqD.js";import"./useTextField-h_ZZvx6T.js";import"./useField-BKqUU-Qn.js";import"./TextField.module-DjUItNl5.js";import"./Label-CmjLeRxL.js";import"./Dialog-DLsAp0aJ.js";import"./RSPContexts-DLa0LtWV.js";import"./OverlayArrow-Ct7nfeYp.js";import"./useResizeObserver-7RlKq5IN.js";import"./Collection-B53DfjRC.js";import"./index-C2HsfADz.js";import"./Separator-2h3LsHrb.js";import"./PressResponder-h14UAJRF.js";import"./useLocalizedStringFormatter-Ofh10Bqq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BU0I-rGn.js";import"./useLocalizedStringFormatter-BZIk_A7w.js";import"./x-Bb30d9DC.js";import"./createLucideIcon-Cdo5tDwC.js";import"./Heading-BD-rx_SV.js";import"./info-BpMYyEZ_.js";import"./Popover-DEZBqYB1.js";import"./Tag-Cpbudeqe.js";import"./ListBox-BgRcFJE-.js";import"./DragAndDrop-BgXMgK7U.js";import"./inertValue-DwW4Ep73.js";import"./useListState-BJ2TyfB1.js";import"./useHighlightSelectionDescription-BFFBL5LS.js";import"./useUpdateEffect-Bh8o9a1r.js";import"./useHasTabbableChild-BnYA_WvQ.js";import"./check-DvqQ1CMn.js";import"./ListBoxSection-CHBByIhF.js";import"./Virtualizer-BHjl4qvw.js";import"./useObserveElement-D2ZSUpjt.js";import"./chevron-down-rr9HnZj_.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DFXuPgTF.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
