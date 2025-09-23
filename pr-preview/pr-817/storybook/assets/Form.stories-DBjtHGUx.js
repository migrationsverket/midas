import{j as n}from"./iframe-5mJ54hMG.js";import{$ as j}from"./Form-B-Do_eri.js";import{G}from"./Grid-BFEny31N.js";import{G as e}from"./GridItem-B0hlddA9.js";import{T as r}from"./TextField-3oxBhEoX.js";import{S as I}from"./Select--2rjCLmP.js";import{B as a}from"./Button-DJD2ZPYu.js";import{R as g,a as b}from"./Radio-I3I5xp0f.js";import{C as h}from"./CheckboxGroup-Tk8Mv544.js";import{C as k}from"./Checkbox-BzsQTTaO.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-fIT37HFT.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BpkrLZ_y.js";import"./useFocusRing-QzQvOQb8.js";import"./index-By6goSh1.js";import"./index-DdqZOxaN.js";import"./TextFieldBase-B5EMuBlc.js";import"./TextField-oCOq7LSS.js";import"./FieldError-BMvlveKx.js";import"./Text-C3OhQqHf.js";import"./Text-Hjz5r0zD.js";import"./ListKeyboardDelegate-Bcy-t-zI.js";import"./SelectionManager-Due5j-gO.js";import"./useEvent-KjZWQh8t.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DVauhb5R.js";import"./useDescription-D7D0dAJQ.js";import"./useControlledState-BD4TrQu4.js";import"./Group-C4XinkSD.js";import"./Input-aVTbnk3h.js";import"./Hidden-BxpR5TfX.js";import"./Button-BlJ-h24Q.js";import"./useLabels-DEIIzD1W.js";import"./useButton-iQ81wae6.js";import"./useTextField-COLsAEr4.js";import"./useField-BvEkW0bn.js";import"./TextField.module-DjUItNl5.js";import"./Label-CDOKEN_V.js";import"./Dialog-CSEOLekV.js";import"./RSPContexts-DALY0yKd.js";import"./OverlayArrow-DcsYSM9P.js";import"./useResizeObserver-DqB_SF9p.js";import"./Collection-8B0Wywu-.js";import"./index-DHS6g6Ss.js";import"./Separator-BzMrmjGt.js";import"./PressResponder-UVLDmDWs.js";import"./useLocalizedStringFormatter-BzwP57dJ.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BfgbRoOv.js";import"./Dialog-BnW_ssYC.js";import"./useLocalizedStringFormatter-Cnl5VTIN.js";import"./x-CiLbNEJ6.js";import"./createLucideIcon-Ce8IEqwF.js";import"./Heading-Dx98y_gZ.js";import"./info-C2_A2A0V.js";import"./Tag-jbsZ-cBl.js";import"./ListBox--xXotyh0.js";import"./DragAndDrop-6ubQvIQ8.js";import"./inertValue-Bmimd2g0.js";import"./useListState-BMWsZuqu.js";import"./useHighlightSelectionDescription-DPWpvsGC.js";import"./useUpdateEffect-DFrqOY3w.js";import"./useHasTabbableChild-rBYCEneK.js";import"./check-W_eYe1eE.js";import"./ListBoxSection-BB5YLwk2.js";import"./Virtualizer-BOzy_poz.js";import"./useObserveElement-WWIriJRn.js";import"./chevron-down-BinMqt7J.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-B1EZ67AW.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
