import{j as n}from"./iframe-DLHI5rgi.js";import{$ as j}from"./Form-BqlmFe9j.js";import{G}from"./Grid-BkcX03s4.js";import{G as e}from"./GridItem-Fcm_TI-G.js";import{T as r}from"./TextField-BbU8F6b6.js";import{S as I}from"./Select-Bm5-Flqd.js";import{B as a}from"./Button-CZ6vJi7V.js";import{R as g,a as b}from"./Radio-DUVwlg4u.js";import{C as h}from"./CheckboxGroup-DeLs0OZb.js";import{C as k}from"./Checkbox--_Va9ZZv.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B4rmxpQN.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DCiafHSX.js";import"./useFocusRing-DVTqNOSp.js";import"./index-9NJL_irm.js";import"./index-DMyDOh8K.js";import"./TextFieldBase-BlinIOwX.js";import"./TextField-BrS_xgRh.js";import"./FieldError-BLQKRtwc.js";import"./Text-RVsCnS_m.js";import"./Text-Bd643L-S.js";import"./ListKeyboardDelegate-cmZ6vFXp.js";import"./SelectionManager-CaXCiJUN.js";import"./useEvent-DCsUP6PC.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DX6LGeS-.js";import"./useDescription-IbUoTNyY.js";import"./useControlledState-Bs6so5-G.js";import"./Group-DhqEUNHE.js";import"./Input-BrBE30kg.js";import"./Hidden-DrTWI7qi.js";import"./Button-qj95B6Oh.js";import"./useLabels-DMrQvuqM.js";import"./useButton-Daum5dS_.js";import"./useTextField-xwR-WbwB.js";import"./useField-pU1-zken.js";import"./TextField.module-8oYDuXgF.js";import"./Label-BzM4SgHz.js";import"./Dialog-BeFF04Sy.js";import"./RSPContexts-DysFJMEe.js";import"./OverlayArrow-DbZwF0-m.js";import"./useResizeObserver-CeD2jJ1m.js";import"./Collection-BJFifPG6.js";import"./index-C0M0Gq7o.js";import"./Separator-CHwlwaAX.js";import"./PressResponder-CeiNm6Bt.js";import"./useLocalizedStringFormatter-BASjZtxH.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CwNpRIaL.js";import"./Dialog-BxHv1Max.js";import"./useLocalizedStringFormatter-DDwqUSCF.js";import"./x-C2by7OJt.js";import"./createLucideIcon-BOj7I2xw.js";import"./Heading-zgS_6M05.js";import"./info-BlvWW79P.js";import"./Tag-BB6Qjpsn.js";import"./ListBox-DSlqkW5t.js";import"./DragAndDrop-CV3Po94E.js";import"./inertValue-5vXWKYTH.js";import"./useListState-DbdNpR87.js";import"./useHighlightSelectionDescription-BDbs30EO.js";import"./useUpdateEffect-CpwPsbUW.js";import"./useHasTabbableChild-BGCyDI64.js";import"./check-BhLKIbQg.js";import"./ListBoxSection-cuk7W0do.js";import"./Virtualizer-CPzOiSI6.js";import"./useObserveElement-CSvlaQIL.js";import"./chevron-down-BFrdsLlo.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-DtzirZle.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
