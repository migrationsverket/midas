import{j as n}from"./iframe-a0FS4QyU.js";import{$ as j}from"./Form-CxW6YLGi.js";import{G}from"./Grid-D52IEncz.js";import{G as e}from"./GridItem-BTRiR3cd.js";import{T as r}from"./TextField-bAAvMw_c.js";import{S as I}from"./Select-D0IuBEpo.js";import{B as a}from"./Button-D1jVPiTh.js";import{R as g,a as b}from"./Radio-D9tE02pj.js";import{C as h}from"./CheckboxGroup-5Wtv_ySO.js";import{C as k}from"./Checkbox-BHqgxAPK.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DPKa5B9T.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BHKbh2-_.js";import"./useFocusRing-Bn1878ea.js";import"./index-Bqg6kbeB.js";import"./index-ChTgn-zT.js";import"./TextFieldBase-CC08THDj.js";import"./TextField-DIHIznSs.js";import"./FieldError-CrWpLaNo.js";import"./Text-DkJof6Gw.js";import"./Text-CkqsG5zO.js";import"./ListKeyboardDelegate-BZwDcczz.js";import"./SelectionManager-B7LYIAvY.js";import"./useEvent-CkRcqrnP.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-q8rfgQ3h.js";import"./useDescription-DssS2vQT.js";import"./useControlledState-DEY0JUld.js";import"./Group-DByBqT4R.js";import"./Input-37wsVF-s.js";import"./Hidden-qd8aZ3ni.js";import"./Button-BOIdl3po.js";import"./useLabels-vZJ2ec_3.js";import"./useButton-DMijhjZZ.js";import"./useTextField-PN-vSAYS.js";import"./useField-DfEkNzm3.js";import"./TextField.module-DjUItNl5.js";import"./Label-BTtgW9us.js";import"./Dialog-DkxdhzwN.js";import"./RSPContexts-Dv5iQ0Hz.js";import"./OverlayArrow-CxPwLAlI.js";import"./useResizeObserver-CjZ9OrMa.js";import"./Collection-BNz0Fcax.js";import"./index-g8VWKr2i.js";import"./Separator-BmFPpPnO.js";import"./PressResponder-DwywRrym.js";import"./useLocalizedStringFormatter-BD6qmHn1.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden--KfngXHW.js";import"./Dialog-RfeMXOPS.js";import"./useLocalizedStringFormatter-CjWU-c3l.js";import"./x-D6O-oakx.js";import"./createLucideIcon-CHo26Fg-.js";import"./Heading-C9lU6bi6.js";import"./info-Cdg8wJi_.js";import"./Tag-BgfhjVFS.js";import"./ListBox-Bx-i-1yx.js";import"./DragAndDrop-C3y4TM63.js";import"./inertValue-BiR_Owba.js";import"./useListState-vEFkgBP5.js";import"./useHighlightSelectionDescription-DqocHr3y.js";import"./useUpdateEffect-DryX-TI9.js";import"./useHasTabbableChild-CnSR3JR8.js";import"./check-Bi0IHKVX.js";import"./ListBoxSection-BAawS9zE.js";import"./Virtualizer-DXtyCmyj.js";import"./useObserveElement-D89b4JLU.js";import"./chevron-down-DHikHkN3.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BeeJhnyc.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
