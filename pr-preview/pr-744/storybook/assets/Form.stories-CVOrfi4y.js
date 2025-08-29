import{j as n}from"./iframe-DgUUoo4T.js";import{$ as j}from"./Form-CZ_aMHdg.js";import{G}from"./Grid-FXzzDmt4.js";import{G as e}from"./GridItem-DG7LG4cr.js";import{T as r}from"./TextField-Dv-IOEej.js";import{S as I}from"./Select-BP2TTiyb.js";import{B as a}from"./Button-cnfrlHZK.js";import{R as g,a as b}from"./Radio-Jo0O_-oT.js";import{C as h}from"./CheckboxGroup-SZ3fRiFj.js";import{C as k}from"./Checkbox-C7FJ6Rre.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CSUHdYcV.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BMvGdLPp.js";import"./useFocusRing-B4yI1PJW.js";import"./index-D2B3xfdm.js";import"./index-DiO0iGYb.js";import"./TextFieldBase-CDdy4GOp.js";import"./TextField-IAXFpmWa.js";import"./FieldError-BAHOXuN8.js";import"./Text-0XenctL6.js";import"./Text-C-1a0kYx.js";import"./Input-BazTg3QK.js";import"./Hidden-Dg1s9RhG.js";import"./Button-CfaThaXB.js";import"./useLabels-9Z-pw4ee.js";import"./useButton-CzH63SGf.js";import"./useTextField-Ds6I5L90.js";import"./useControlledState-mHNcrs-P.js";import"./useField-6MVRdGd2.js";import"./TextField.module-BrIGiDQC.js";import"./Label-BKKtNcqF.js";import"./Dialog-B6G_M0wd.js";import"./RSPContexts-BAEdrvzX.js";import"./OverlayArrow-X_YJzg3T.js";import"./useResizeObserver-CJhTgQwA.js";import"./Collection-z21gM2v5.js";import"./index-Cfrn2vWG.js";import"./Separator-DMZ7xpsp.js";import"./SelectionManager-DQHopoPG.js";import"./useEvent-90PpPRfr.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-21IribJh.js";import"./useDescription-DwPVuWGZ.js";import"./ListKeyboardDelegate-BaimB7xH.js";import"./PressResponder-C56eHW7v.js";import"./useLocalizedStringFormatter-CYsaLqdU.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-k41X6Jb_.js";import"./Dialog-BNI8kozs.js";import"./useLocalizedStringFormatter-CotlejRG.js";import"./x-C_u3oRsj.js";import"./createLucideIcon-DWDaj1ca.js";import"./Heading-BebhmVUy.js";import"./info-C5VJUdwU.js";import"./Tag-Dt3kl0hk.js";import"./ListBox-KG3fu6V-.js";import"./DragAndDrop-mfO-zykV.js";import"./inertValue-CdiUtWdR.js";import"./useListState-BzoWrvig.js";import"./useHighlightSelectionDescription-CCyKU3DX.js";import"./useUpdateEffect-BhuAQdOh.js";import"./useHasTabbableChild-DwS4pFot.js";import"./check-D20gQO6C.js";import"./ListBoxSection-C56BHcL7.js";import"./Virtualizer-Fgy6-XQG.js";import"./useObserveElement-BrJSnP9j.js";import"./chevron-down-t76Rne9J.js";import"./Button.module-CF2bVDCq.js";import"./Group-VrDex3jb.js";import"./useToggleState-DC17g65B.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
