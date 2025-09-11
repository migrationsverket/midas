import{j as n}from"./iframe-DR8L4Xnv.js";import{$ as j}from"./Form-CmOrhGoy.js";import{G}from"./Grid-Df2YWAFd.js";import{G as e}from"./GridItem-CBCQtMig.js";import{T as r}from"./TextField-wcNtTUu9.js";import{S as I}from"./Select-CspCaAZx.js";import{B as a}from"./Button-B8UyvKKh.js";import{R as g,a as b}from"./Radio-BNNWEea4.js";import{C as h}from"./CheckboxGroup-Dudn-Cx_.js";import{C as k}from"./Checkbox-yFQeZ3NB.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-_EjDF-Ut.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CmmChI58.js";import"./useFocusRing-Id7VWDlJ.js";import"./index-C8-Kg3RB.js";import"./index-VyJVQYqT.js";import"./TextFieldBase-CEgZ4nRA.js";import"./TextField-DfwpEhEu.js";import"./FieldError-DT0o3KVZ.js";import"./Text-wzyJDY6_.js";import"./Text-CoEWJ5qX.js";import"./ListKeyboardDelegate-lbyjRsx3.js";import"./SelectionManager-BIbGugOf.js";import"./useEvent-0_zji010.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-dwl_Hqxj.js";import"./useDescription-DmYJDaYi.js";import"./useControlledState-3IGzNqgo.js";import"./Group-CXbANlM6.js";import"./Input-DACXznIc.js";import"./Hidden-CjTTeGMF.js";import"./Button-L9ZO_Wdi.js";import"./useLabels-DnsXQCfA.js";import"./useButton-D_61eDGD.js";import"./useTextField-B8WRWbpE.js";import"./useField-BASNkSux.js";import"./TextField.module-DjUItNl5.js";import"./Label-C-AIWvPg.js";import"./Dialog-4vp-6EsR.js";import"./RSPContexts-B28xXpTV.js";import"./OverlayArrow-DodWsIBc.js";import"./useResizeObserver-BU79U872.js";import"./Collection-8x4KHlIk.js";import"./index-DXkVrqc0.js";import"./Separator-CvnqdHLX.js";import"./PressResponder-CS0BN_Ii.js";import"./useLocalizedStringFormatter-BgU3RQLW.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D7UWrtxY.js";import"./Dialog-C4KsPwQS.js";import"./useLocalizedStringFormatter-B0XxA7ys.js";import"./x-CrkewCSF.js";import"./createLucideIcon-m0e9aRI4.js";import"./Heading-By8umc2p.js";import"./info-CLYIIeKg.js";import"./Tag-Bgxs4aQf.js";import"./ListBox-6kThNuKj.js";import"./DragAndDrop-D8isl1wx.js";import"./inertValue-griwdU5X.js";import"./useListState-CCzcuvVT.js";import"./useHighlightSelectionDescription-DlBnnYhE.js";import"./useUpdateEffect-mGH65x0s.js";import"./useHasTabbableChild-14QYz5u3.js";import"./check-D-U5lKPQ.js";import"./ListBoxSection-Be_TiCZb.js";import"./Virtualizer-C5RW3L1p.js";import"./useObserveElement-Dkv6zTaE.js";import"./chevron-down-W8AjcKQ5.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BV0LqdNj.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
