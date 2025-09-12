import{j as n}from"./iframe-CbTVKlrM.js";import{$ as j}from"./Form-uDw1XNi_.js";import{G}from"./Grid-Vzq8_f8J.js";import{G as e}from"./GridItem-zx03uSe1.js";import{T as r}from"./TextField-BPKIsCRi.js";import{S as I}from"./Select-Ck0ySPcA.js";import{B as a}from"./Button-BFy4xxeV.js";import{R as g,a as b}from"./Radio-oWxJmgb5.js";import{C as h}from"./CheckboxGroup-Dy47j5PE.js";import{C as k}from"./Checkbox-UrMyI7__.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B78ZQ9jU.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BByszg-d.js";import"./useFocusRing-B8D8Kj8C.js";import"./index-BYggPT-v.js";import"./index-C1xxyhss.js";import"./TextFieldBase-DDyDZUMX.js";import"./TextField-B09jbsbY.js";import"./FieldError-ClrsJwYS.js";import"./Text-B93xikJQ.js";import"./Text-C2mCVxX_.js";import"./ListKeyboardDelegate-BG_bS7N5.js";import"./SelectionManager-Cpcu5_q4.js";import"./useEvent-B4c8w1bA.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CG3xmRj2.js";import"./useDescription-DbGn56L1.js";import"./useControlledState-DucSu0MB.js";import"./Group-CqV98Chx.js";import"./Input-fSmYcOo9.js";import"./Hidden-DS6XKPBQ.js";import"./Button-DYJgceXV.js";import"./useLabels-CTxxc85q.js";import"./useButton-DFCYR89s.js";import"./useTextField-CArQykOu.js";import"./useField-DPaCP4jj.js";import"./TextField.module-DjUItNl5.js";import"./Label-5odMj8xw.js";import"./Dialog-xSJQrt6n.js";import"./RSPContexts-Ci-YVHgn.js";import"./OverlayArrow-BGKMnpL2.js";import"./useResizeObserver-BkvzJQg3.js";import"./Collection-w7rCYQEe.js";import"./index-GwWmos2-.js";import"./Separator-CIa2SEX0.js";import"./PressResponder-BbDNDRRZ.js";import"./useLocalizedStringFormatter-Cg6b2S43.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Bluxb1UT.js";import"./Dialog-DcQOTN_e.js";import"./useLocalizedStringFormatter-CU1f1DD7.js";import"./x-OyRb_6Z2.js";import"./createLucideIcon-BsSM_OJ4.js";import"./Heading-B_EY5RFx.js";import"./info-BwzuAaYG.js";import"./Tag-CP6QVhqr.js";import"./ListBox-7wTabtp5.js";import"./DragAndDrop-BxqmtOB3.js";import"./inertValue-BeLyJT5m.js";import"./useListState-D1p8uK9P.js";import"./useHighlightSelectionDescription-CWxYWC-_.js";import"./useUpdateEffect-MyM-QsoD.js";import"./useHasTabbableChild-DfGISDUw.js";import"./check-BZnU7XLY.js";import"./ListBoxSection-Dqtomaz6.js";import"./Virtualizer-BJ3HN_8z.js";import"./useObserveElement-D9VFnG6-.js";import"./chevron-down-D85tsxQZ.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-DX9a3Sp_.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
