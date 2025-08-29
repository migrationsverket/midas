import{j as n}from"./iframe-CaEkMUDz.js";import{$ as j}from"./Form-CMWIU5Jh.js";import{G}from"./Grid-DkPcPBe2.js";import{G as e}from"./GridItem-87NugRMu.js";import{T as r}from"./TextField-DlH8SmeN.js";import{S as I}from"./Select-BSwNnt84.js";import{B as a}from"./Button-BeBSHCem.js";import{R as g,a as b}from"./Radio-Bjtfejlt.js";import{C as h}from"./CheckboxGroup-DTLQuf7_.js";import{C as k}from"./Checkbox-Da1q2N8u.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Da0SHqjH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B3YzAvAi.js";import"./useFocusRing-CgJAwe9O.js";import"./index-aA2e8oZU.js";import"./index-C5b2PewP.js";import"./TextFieldBase-BnxS6eqU.js";import"./TextField-DLi3eXZK.js";import"./FieldError-C4AzbrkV.js";import"./Text-DYcD4RBt.js";import"./Text-BUAxfQEG.js";import"./Input-Duv8FM4e.js";import"./Hidden-k4I1Jvb9.js";import"./Button-CS45EYvF.js";import"./useLabels-DRnbZ2Bl.js";import"./useButton-BnCjDBTO.js";import"./useTextField-Ccu6TRqv.js";import"./useControlledState-BqQ-eXuC.js";import"./useField-HypY0bfK.js";import"./TextField.module-BrIGiDQC.js";import"./Label-C9J0R0P6.js";import"./Dialog-DNK9SvXa.js";import"./RSPContexts-219wheZI.js";import"./OverlayArrow-BadH7ycE.js";import"./useResizeObserver-3zgaMQi3.js";import"./Collection-ZgpVB1Bs.js";import"./index-DT3-MqC5.js";import"./Separator-CO9bzFH4.js";import"./SelectionManager-CWXoWHLd.js";import"./useEvent-BXrRAOMA.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DGJqKNJA.js";import"./useDescription-Dyy1VfWp.js";import"./ListKeyboardDelegate-Bjt3yb7k.js";import"./PressResponder-I_E7pVZ3.js";import"./useLocalizedStringFormatter-D9jviQcg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DJbvfKzS.js";import"./Dialog-CPoQIZPl.js";import"./useLocalizedStringFormatter-BEsxfgcm.js";import"./x-0vHvKiNi.js";import"./createLucideIcon-DzkhmYjn.js";import"./Heading-DL1OBd-1.js";import"./info-CySOe0AG.js";import"./Tag-5S0aTuQV.js";import"./ListBox-Dw3Qq0kT.js";import"./DragAndDrop-DYs6UwpF.js";import"./inertValue-g6yL9lb_.js";import"./useListState-vT0Bwm7s.js";import"./useHighlightSelectionDescription-BnyPGrFf.js";import"./useUpdateEffect-C21v4yTj.js";import"./useHasTabbableChild-g7hySgax.js";import"./check-9eeL3sSM.js";import"./ListBoxSection-D8SpAZf3.js";import"./Virtualizer-DMDSdm6b.js";import"./useObserveElement-COZm2x9f.js";import"./chevron-down-CRMkWeL0.js";import"./Button.module-CF2bVDCq.js";import"./Group-DIOmiwtb.js";import"./useToggleState-Byn0lZgT.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
