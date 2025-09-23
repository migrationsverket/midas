import{j as n}from"./iframe-Db06n73j.js";import{$ as j}from"./Form-CXB8MOjs.js";import{G}from"./Grid-L3thtTOw.js";import{G as e}from"./GridItem-NFh0wjnL.js";import{T as r}from"./TextField-NJV5pAxv.js";import{S as I}from"./Select-DaCbHG9F.js";import{B as a}from"./Button-pzNi3oej.js";import{R as g,a as b}from"./Radio-CkqEjxAM.js";import{C as h}from"./CheckboxGroup-BT2ocA80.js";import{C as k}from"./Checkbox-CXyKlhAi.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BNwmVugI.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BT_-7Tm7.js";import"./useFocusRing-DkuUvN5d.js";import"./index-wcraIVbR.js";import"./index-CxeJmlrD.js";import"./TextFieldBase-J4G8Zb6X.js";import"./TextField-J4QZfvaD.js";import"./FieldError-BrARzUsx.js";import"./Text-Q40zF-3b.js";import"./Text-k2_bfNYm.js";import"./ListKeyboardDelegate-fwQJtd_p.js";import"./SelectionManager-Dc8hbGwf.js";import"./useEvent-BTjZor7y.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DSs-Ggxm.js";import"./useDescription-Cvk4XPDy.js";import"./useControlledState-BYIRcqeM.js";import"./Group-gqVwU_N6.js";import"./Input-DWIrw7cr.js";import"./Hidden-BarDVNCr.js";import"./Button-TWUAArMI.js";import"./useLabels-2T5ax8_j.js";import"./useButton-CWMMgTJl.js";import"./useTextField-DBnjSKbd.js";import"./useField-DhqsBlnR.js";import"./TextField.module-DjUItNl5.js";import"./Label-BD6nDnGK.js";import"./Dialog-Cld-7qME.js";import"./RSPContexts-C014rm3C.js";import"./OverlayArrow-BReeAmso.js";import"./useResizeObserver-DA_X6KwE.js";import"./Collection-_CJW6ceT.js";import"./index-CgfbVfZ4.js";import"./Separator-DV_OO5iK.js";import"./PressResponder-dW8s63Sa.js";import"./useLocalizedStringFormatter-DAJU5j0f.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-ojA0PjgM.js";import"./Dialog-BdyhByNF.js";import"./useLocalizedStringFormatter-DXAuWrXd.js";import"./x-wf6UuVlb.js";import"./createLucideIcon-Ct2AVxYE.js";import"./Heading-tWX6XD-g.js";import"./info-CwljcQNg.js";import"./Tag-CaPWXPaN.js";import"./ListBox-H4B17pIP.js";import"./DragAndDrop-Nx5Hulb3.js";import"./inertValue-BcoEJsBu.js";import"./useListState-Cc3cP_Fs.js";import"./useHighlightSelectionDescription-3XTi11Ui.js";import"./useUpdateEffect-DkP-9HzM.js";import"./useHasTabbableChild-O7r0Vvgd.js";import"./check-C42CGCw8.js";import"./ListBoxSection-Co5amlzX.js";import"./Virtualizer-BFud2J0q.js";import"./useObserveElement-C1rcyFjp.js";import"./chevron-down-DyIRKlei.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-g5ar2xrd.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
