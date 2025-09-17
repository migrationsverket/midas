import{j as n}from"./iframe-Ch-sRwjJ.js";import{$ as j}from"./Form-DeMPQzpt.js";import{G}from"./Grid-C8-rirjG.js";import{G as e}from"./GridItem-BfZPtQNU.js";import{T as r}from"./TextField-CVcD0JDb.js";import{S as I}from"./Select-BzF9_TPN.js";import{B as a}from"./Button-BXuXMeGQ.js";import{R as g,a as b}from"./Radio-C11yw3dg.js";import{C as h}from"./CheckboxGroup-y3adxEvM.js";import{C as k}from"./Checkbox-Cgi-3Bt8.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Cue5N01E.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-jyPtHJ7f.js";import"./useFocusRing-DFGyiIQn.js";import"./index-2vSlGJb1.js";import"./index-DR4aAVsH.js";import"./TextFieldBase-CJrU4bok.js";import"./TextField-CvN0878A.js";import"./FieldError-DRbqUH8O.js";import"./Text-CyM5ga_S.js";import"./Text-BKf6nJ0w.js";import"./ListKeyboardDelegate-DRDq3MD0.js";import"./SelectionManager-BRXPO_Ht.js";import"./useEvent-DtEeAmSr.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BeYRPbkx.js";import"./useDescription-CCjgsKne.js";import"./useControlledState-CAJQa5dg.js";import"./Group-CmnopX9N.js";import"./Input-BH7H8t51.js";import"./Hidden-B9VUSePm.js";import"./Button-Cdq3ue4T.js";import"./useLabels-BD29CM8k.js";import"./useButton-ttIgdrtZ.js";import"./useTextField-DAq_tQSW.js";import"./useField-CEomYcDv.js";import"./TextField.module-DjUItNl5.js";import"./Label-CdL-Jh8m.js";import"./Dialog-CE8Pn5HC.js";import"./RSPContexts-Dr79yRRv.js";import"./OverlayArrow-C6g5-ZdH.js";import"./useResizeObserver-Cy4Lw-Fr.js";import"./Collection-Bj-kcX3R.js";import"./index-BVwK6KeI.js";import"./Separator-DVgJl9wM.js";import"./PressResponder-BZYb6UL9.js";import"./useLocalizedStringFormatter-C0Qz3V75.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CEHp_R5Y.js";import"./Dialog-B0CMCHKz.js";import"./useLocalizedStringFormatter-DLu3FQG6.js";import"./x-BNCpFHBE.js";import"./createLucideIcon-B1HvY0FZ.js";import"./Heading-3u1XLDae.js";import"./info-CqKGRjSU.js";import"./Tag-D6fDqCpZ.js";import"./ListBox-DGq5Lmbx.js";import"./DragAndDrop-CBBEbstA.js";import"./inertValue-BiICK0uN.js";import"./useListState-CYUlNFC4.js";import"./useHighlightSelectionDescription-fJLzt0PE.js";import"./useUpdateEffect-y9C6iFpc.js";import"./useHasTabbableChild-CHVFQbtQ.js";import"./check-DuwmvnlP.js";import"./ListBoxSection-nJDL1pxT.js";import"./Virtualizer-Uf65ii9X.js";import"./useObserveElement-l04FR-I5.js";import"./chevron-down-Dp3WT6CA.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-ChpbKtUp.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
