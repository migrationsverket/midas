import{j as n}from"./iframe-Btbb3L2Z.js";import{$ as j}from"./Form-DC2N7iYg.js";import{G}from"./Grid-CWZx9tkI.js";import{G as e}from"./GridItem-pNxoxs1Z.js";import{T as r}from"./TextField-Dimx0IsY.js";import{S as I}from"./Select-B3vRUUMB.js";import{B as a}from"./Button-CjqJeY2n.js";import{R as g,a as b}from"./Radio-BoLW5PP3.js";import{C as h}from"./CheckboxGroup-B9I_C7Hq.js";import{C as k}from"./Checkbox-BZ9QSahD.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-U1rnnkpm.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-iTyOwjo3.js";import"./useFocusRing-CL_SXCHN.js";import"./index-CNDSvyls.js";import"./index-DDlzG1Tw.js";import"./TextFieldBase-DVxVsH3g.js";import"./TextField-BUsyqQf5.js";import"./FieldError-DXCL4jTU.js";import"./Text-RUhIRIf3.js";import"./Text-CQvchA1V.js";import"./ListKeyboardDelegate-iBFJygX0.js";import"./SelectionManager-Cm6Rt7kk.js";import"./useEvent-CkJER9Q8.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CkOSe5dA.js";import"./useDescription-C7OZptk2.js";import"./useControlledState-CxOVeQV0.js";import"./Group-DwshrEEF.js";import"./Input-BoZfYEiY.js";import"./Hidden-BtbK9BKB.js";import"./Button-H-8qNdv9.js";import"./useLabels-DrO0tIOD.js";import"./useButton-axDEeOsH.js";import"./useTextField-b-kaY-gv.js";import"./useField-BglrLbqM.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-DZXGC-ps.js";import"./Dialog-B1ZBWZp_.js";import"./RSPContexts-OxRs6FK7.js";import"./OverlayArrow-CFhjhaSv.js";import"./useResizeObserver-CM9m_TRL.js";import"./Collection-CNXWChEZ.js";import"./index-De12K4hf.js";import"./Separator-C6HcMu08.js";import"./PressResponder-DHMrVHmt.js";import"./useLocalizedStringFormatter-BAypbA8V.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BLqMgbcb.js";import"./Dialog-C463DrWL.js";import"./useLocalizedStringFormatter-DhaW962U.js";import"./x-DYWL_cPx.js";import"./createLucideIcon-Dye7fpkX.js";import"./Heading-ZBgnVsdf.js";import"./info-BHuVYql9.js";import"./Tag-OdWRrxVr.js";import"./ListBox-ByNyvO5x.js";import"./DragAndDrop-wxHRb1uX.js";import"./inertValue-djxdjRrb.js";import"./useListState-BQO3h16V.js";import"./useHighlightSelectionDescription-C-Z8i32Q.js";import"./useUpdateEffect-b0TKkNj2.js";import"./useHasTabbableChild-aHBli47_.js";import"./check-DF-sYa7w.js";import"./ListBoxSection-CRC-duyV.js";import"./Virtualizer-DYR1fbY-.js";import"./useObserveElement-BP2K7wJ2.js";import"./chevron-down-xed0cq2b.js";import"./Button.module-DgYkWG2o.js";import"./useToggleState-BnA9nWU2.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
