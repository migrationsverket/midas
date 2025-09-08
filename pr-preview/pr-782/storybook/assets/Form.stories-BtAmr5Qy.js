import{j as n}from"./iframe-Cdt01kvU.js";import{$ as j}from"./Form-_PE0TcUC.js";import{G}from"./Grid-DHnreMmF.js";import{G as e}from"./GridItem-BNaWGeRt.js";import{T as r}from"./TextField-Dsx07aD9.js";import{S as I}from"./Select-CEoXUMWO.js";import{B as a}from"./Button-1wOdcB61.js";import{R as g,a as b}from"./Radio-DpAONLpJ.js";import{C as h}from"./CheckboxGroup-CT3JL_Ud.js";import{C as k}from"./Checkbox-JnyXQBAM.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-_8n5xQJp.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-PDpZDr1B.js";import"./useFocusRing-B8jxQtBz.js";import"./index-Rqby2lTf.js";import"./index-Bq_i5xkp.js";import"./TextFieldBase-f8Vz6LLt.js";import"./TextField-BW9j7mvR.js";import"./FieldError-CK0GUFDs.js";import"./Text-DrErlPRS.js";import"./Text-DnncFqmR.js";import"./ListKeyboardDelegate-B2FAQhXx.js";import"./SelectionManager-B0RrFYiW.js";import"./useEvent-DB4g0iiY.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-NvFyZBK7.js";import"./useDescription-DXAZH32r.js";import"./useControlledState-C_2KZfRt.js";import"./Group-Bg2Xrx3d.js";import"./Input-DWjXndsQ.js";import"./Hidden-Dkbaxdy3.js";import"./Button-DbtIwfTP.js";import"./useLabels-B9Hl85uL.js";import"./useButton-Dz57clET.js";import"./useTextField-CRv1PUpF.js";import"./useField-DBcpveCp.js";import"./TextField.module-8oYDuXgF.js";import"./Label-CXYmdP2E.js";import"./Dialog-B5-hAJpT.js";import"./RSPContexts-oWtja5kn.js";import"./OverlayArrow-Dawxqz1g.js";import"./useResizeObserver-D3xGJxSI.js";import"./Collection-G9RjNlOm.js";import"./index-CQEXZEhz.js";import"./Separator-0wiBxnPR.js";import"./PressResponder-BvFg0BEg.js";import"./useLocalizedStringFormatter-DX3OaUlx.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-erk-z_5b.js";import"./Dialog-vFgg8eo9.js";import"./useLocalizedStringFormatter-CB-h5XYU.js";import"./x-DrGrqF_a.js";import"./createLucideIcon-BZp25Nvy.js";import"./Heading-BYpSPZq-.js";import"./info-CAhRWsgo.js";import"./Tag-AKMatZk8.js";import"./ListBox-EBMIjjjP.js";import"./DragAndDrop-hNV7D3it.js";import"./inertValue-CO0D0aQr.js";import"./useListState-76bxy-Nl.js";import"./useHighlightSelectionDescription-ilH86syI.js";import"./useUpdateEffect-HAAQlc7x.js";import"./useHasTabbableChild-dd9vh3_f.js";import"./check-CagdjkyT.js";import"./ListBoxSection-BXwMS58Z.js";import"./Virtualizer-v3gFg76s.js";import"./useObserveElement-CObOtyIJ.js";import"./chevron-down-RFYeXB5Y.js";import"./Button.module-BkTnSRp5.js";import"./useToggleState-BoOjn9_I.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
