import{j as n}from"./iframe-C3HSyfDP.js";import{$ as j}from"./Form-BRoEa7tJ.js";import{G}from"./Grid-TuwEkwA2.js";import{G as e}from"./GridItem-B1GkGWEm.js";import{T as r}from"./TextField-C-T5sOSa.js";import{S as I}from"./Select-CuaYYNlv.js";import{B as a}from"./Button-BTdvYoJC.js";import{R as g,a as b}from"./Radio-BKuwIJiL.js";import{C as h}from"./CheckboxGroup-Ck7CmhOV.js";import{C as k}from"./Checkbox-TBTdw-J3.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CMAlCf2C.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BuP-NT88.js";import"./useFocusRing-DZxkh-If.js";import"./index-CKa0VZSz.js";import"./index-DJ30V1Cb.js";import"./TextFieldBase-TJMxyXB_.js";import"./TextField-TOXVtPGs.js";import"./FieldError-Dns0gjA3.js";import"./Text-BjP0SBqR.js";import"./Text--_xDDnSF.js";import"./context-Cvm8zV-9.js";import"./SelectionManager-BZY7t4gc.js";import"./useEvent-DdWPGepZ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BO2SMAdx.js";import"./useDescription-DCpLQhIs.js";import"./useControlledState-C7KMANva.js";import"./Group-C-daab_R.js";import"./Input-D0mzMfhJ.js";import"./Hidden-tsey37hm.js";import"./Button-DhdqXyxg.js";import"./useLabels-C10w_e2s.js";import"./useButton-CXp-kvFX.js";import"./useTextField-CqyJAvHC.js";import"./useField-D3gB4lZs.js";import"./TextField.module-DjUItNl5.js";import"./Label-R9xsV5Fd.js";import"./Dialog-DQxpCVyX.js";import"./RSPContexts-D8TNCQrC.js";import"./OverlayArrow-OoIAzegJ.js";import"./useResizeObserver-B4wRdJ5u.js";import"./Collection-CSAtAFUG.js";import"./index-B5G2cWEp.js";import"./Separator-B3plRWQs.js";import"./PressResponder-EevxJ8Ye.js";import"./useLocalizedStringFormatter-Cj9DZ7jb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CLsapwf4.js";import"./useLocalizedStringFormatter-9X1Nf9GT.js";import"./x-DlpcIQIK.js";import"./createLucideIcon-2t-5megt.js";import"./Heading-C2bYvO7t.js";import"./info-DCqXProD.js";import"./Popover-DYYAVBSV.js";import"./Tag-Bfl9AcrY.js";import"./ListBox-BhXo9BFc.js";import"./DragAndDrop-C-Cqk197.js";import"./inertValue-BBeNuppM.js";import"./useListState-DrSJ4dsR.js";import"./useHighlightSelectionDescription-B6F-BZ-b.js";import"./useUpdateEffect-2RfCC1lC.js";import"./useHasTabbableChild-DZyEzIlE.js";import"./check-CxOCmVbj.js";import"./ListBoxSection-cnL_UzSw.js";import"./Virtualizer-BPbZ_gFw.js";import"./useObserveElement-BE7n6i9w.js";import"./chevron-down-vE4_2bSS.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BEkw5JRX.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
