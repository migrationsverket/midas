import{j as n}from"./iframe-C8eYRWKs.js";import{$ as j}from"./Form-HgegOj9j.js";import{G}from"./Grid-q-6r9zQ6.js";import{G as e}from"./GridItem-DlCQFI_n.js";import{T as r}from"./TextField-WioUjD3R.js";import{S as I}from"./Select-BaxTodtL.js";import{B as a}from"./Button-mM_ouEW3.js";import{R as g,a as b}from"./Radio-C7JSaiCK.js";import{C as h}from"./CheckboxGroup-h271719B.js";import{C as k}from"./Checkbox-CUV2fmHt.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Ba9bBHI9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-C78vDr3F.js";import"./useFocusRing-CBWsyEyf.js";import"./index-CFFhRdE-.js";import"./index-DHjOkDSR.js";import"./TextFieldBase-DVtg9WRD.js";import"./TextField-D5rh6ppg.js";import"./FieldError-9hxYtEwR.js";import"./Text-6pN2evHC.js";import"./Text-BvHsmo3s.js";import"./context-B1_jWOzG.js";import"./SelectionManager-CmGFzbI_.js";import"./useEvent-BHc4jZRQ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BAz_VatN.js";import"./useDescription-Bf1lDEqk.js";import"./useControlledState-DoZTVyYs.js";import"./Group-BnM5o1GK.js";import"./Input-BYkEYoBf.js";import"./Hidden-gG2uVh1c.js";import"./Button-D6zCOfnb.js";import"./useLabels-RW0m0ljz.js";import"./useButton-B3xsQ4dM.js";import"./useTextField-DhkVDipw.js";import"./useField-DthPaKAT.js";import"./TextField.module-DjUItNl5.js";import"./Label-DD4aGy0K.js";import"./Dialog-Os-hTuOb.js";import"./RSPContexts-q9Kg8Pet.js";import"./OverlayArrow-B0p09Hxh.js";import"./useResizeObserver-PMwmUrD7.js";import"./Collection-rWWiEA9N.js";import"./index-Dbss5FRx.js";import"./Separator-1GNA7zh_.js";import"./PressResponder-DdKmEiM1.js";import"./useLocalizedStringFormatter-CUXSsZvn.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-B6FbUepD.js";import"./useLocalizedStringFormatter-BdV30gnn.js";import"./x-BLdsMFDV.js";import"./createLucideIcon-C-SrpETr.js";import"./Heading-2YkO5Br_.js";import"./info-ZiK_lei_.js";import"./Popover-RCoVPURg.js";import"./Tag-CcRQOgNk.js";import"./ListBox-y3fT0-i7.js";import"./DragAndDrop-DDe9Rijq.js";import"./inertValue-XTNnyBT3.js";import"./useListState-DzvIUhKH.js";import"./useHighlightSelectionDescription-8QyZg2-v.js";import"./useUpdateEffect-CtyLHAAT.js";import"./useHasTabbableChild-BsMy2R3M.js";import"./check-CCU4S_P3.js";import"./ListBoxSection-Cjb5dcTo.js";import"./Virtualizer-DnzvHVM5.js";import"./useObserveElement-DHJ_AA-d.js";import"./chevron-down-DXFum-8M.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CqH53Uej.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
