import{j as n}from"./iframe-Bc-8x_BS.js";import{$ as j}from"./Form-u0lvtgc3.js";import{G}from"./Grid-BRIAi5yy.js";import{G as e}from"./GridItem-CCCfiqnL.js";import{T as r}from"./TextField-DDekZHMf.js";import{S as I}from"./Select-D0Wm7_AS.js";import{B as a}from"./Button-JdogFjmA.js";import{R as g,a as b}from"./Radio-DtBRQxgz.js";import{C as h}from"./CheckboxGroup-BiKvrwv4.js";import{C as k}from"./Checkbox-C_4qvkFv.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BmA5vIAX.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B308FIJu.js";import"./useFocusRing-DIz9_Qyd.js";import"./index-DHei_00N.js";import"./index-Hsl3la5y.js";import"./TextFieldBase-B_dJHI69.js";import"./TextField-DUoHQxed.js";import"./FieldError-CQo0wUc-.js";import"./Text-4ZiWbaF_.js";import"./Text-DlxTL_mB.js";import"./ListKeyboardDelegate-Eq8Ql7rI.js";import"./SelectionManager-bx5SdawB.js";import"./useEvent-DsZiRJRd.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CXDBQ13L.js";import"./useDescription-D7hok_k1.js";import"./useControlledState-Ba4TLpl4.js";import"./Group-DNhk5tAz.js";import"./Input-B0h2Qbjb.js";import"./Hidden-BPw-YRaC.js";import"./Button-B0Ch1Au4.js";import"./useLabels-Dc8vg0xI.js";import"./useButton-BtgLzDmv.js";import"./useTextField-Iq2Tk5js.js";import"./useField-DWHfdYqY.js";import"./TextField.module-8oYDuXgF.js";import"./Label-COYpjBdO.js";import"./Dialog-CDuVg34t.js";import"./RSPContexts-BuzH5ivL.js";import"./OverlayArrow-B6qQyRxX.js";import"./useResizeObserver-BGADtv18.js";import"./Collection-CvGNsgUF.js";import"./index-BU2f2Saf.js";import"./Separator-HBp7iWql.js";import"./PressResponder-OcAPgjg8.js";import"./useLocalizedStringFormatter-SmzhsDHq.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-C0d7Z9dA.js";import"./Dialog-quMTtfGW.js";import"./useLocalizedStringFormatter-rDVYQ6bc.js";import"./x-CuJmaL4L.js";import"./createLucideIcon-B_LL_N-4.js";import"./Heading-D0dGWgQB.js";import"./info-UJDIZaNh.js";import"./Tag-DM7qC_Xo.js";import"./ListBox-DhAzdc5l.js";import"./DragAndDrop-FSZXXJxR.js";import"./inertValue-DT4Ln0GA.js";import"./useListState-BKY0IQ8y.js";import"./useHighlightSelectionDescription-CbugwHyo.js";import"./useUpdateEffect-Jxlrs6Gc.js";import"./useHasTabbableChild-BXnKwfso.js";import"./check-BMrGlbEu.js";import"./ListBoxSection-CKos8dVJ.js";import"./Virtualizer-RE8uH1VS.js";import"./useObserveElement-CnJoN9VL.js";import"./chevron-down-CiWJcm1K.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-BpzNif1Q.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
