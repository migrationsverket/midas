import{j as n}from"./iframe-D-4hYGhm.js";import{$ as j}from"./Form-BCCLEvS1.js";import{G}from"./Grid-vJ2RxGZJ.js";import{G as e}from"./GridItem-DJzaqrpb.js";import{T as r}from"./TextField-qxwaNSYm.js";import{S as I}from"./Select-C5kFAsTY.js";import{B as a}from"./Button-D-SvKu1F.js";import{R as g,a as b}from"./Radio-Bs22iq3q.js";import{C as h}from"./CheckboxGroup-BOiY7ODS.js";import{C as k}from"./Checkbox-CxEqepgS.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-PPVwsd6f.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CIiAvp6G.js";import"./useFocusRing-g24tRaBc.js";import"./index-Cl9LkdyV.js";import"./index-BZppoS0L.js";import"./TextFieldBase-BXA8Cssx.js";import"./TextField-95ZB3ENr.js";import"./FieldError-BhW1gT1J.js";import"./Text-BdSK7M9l.js";import"./Text-B77m65Px.js";import"./ListKeyboardDelegate-CFkEcJ1a.js";import"./SelectionManager-HXoNJTqC.js";import"./useEvent-AdSOq1sc.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-i_FOofVw.js";import"./useDescription-DsaB28f1.js";import"./useControlledState-Dop_bXLo.js";import"./Group-D3AFCyiO.js";import"./Input-BU4Wgeof.js";import"./Hidden-B33uzZwQ.js";import"./Button-Czm5JDUd.js";import"./useLabels-B57XBD92.js";import"./useButton-BnjDvuvv.js";import"./useTextField-DjdSv4A8.js";import"./useField-D6Z2Wbe2.js";import"./TextField.module-8oYDuXgF.js";import"./Label-xS1oQvYW.js";import"./Dialog-BjPX2Ize.js";import"./RSPContexts-Cp0bUSJY.js";import"./OverlayArrow-DuWMW87x.js";import"./useResizeObserver-CEPYgR-F.js";import"./Collection-DUNlvezB.js";import"./index-BQ-X0zrZ.js";import"./Separator-CPgR1anc.js";import"./PressResponder-mTFq4hHN.js";import"./useLocalizedStringFormatter-BhoP_Rk9.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-Cc9jQGDo.js";import"./Dialog-6IzguN3r.js";import"./useLocalizedStringFormatter-BNumZ2JB.js";import"./x-Cog_7ngM.js";import"./createLucideIcon-DUsOhZgj.js";import"./Heading-BlunWvOc.js";import"./info-DBaFIImZ.js";import"./Tag-C4W6i3fn.js";import"./ListBox-kvh00Qvg.js";import"./DragAndDrop-D7Q9cQeZ.js";import"./inertValue-BcqI2yMH.js";import"./useListState-UoUph8oI.js";import"./useHighlightSelectionDescription-Due0xQes.js";import"./useUpdateEffect-7f69SE8k.js";import"./useHasTabbableChild-rS3K0yS1.js";import"./check-CBuQajmC.js";import"./ListBoxSection-BHitKO4m.js";import"./Virtualizer-BfmKPayL.js";import"./useObserveElement-CFRbHVhe.js";import"./chevron-down-BAoTOnXn.js";import"./Button.module-GuOSDIYz.js";import"./useToggleState-DIxN__2q.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
