import{j as n}from"./iframe-CwzS8m2C.js";import{$ as j}from"./Form-mGGkXi98.js";import{G}from"./Grid-g9h1_sNn.js";import{G as e}from"./GridItem-BG92m8JS.js";import{T as r}from"./TextField-D9WE8GKK.js";import{S as I}from"./Select-C-g54cup.js";import{B as a}from"./Button-BPEkmjCw.js";import{R as g,a as b}from"./Radio-Ebx-51oI.js";import{C as h}from"./CheckboxGroup-Dx-lbqpF.js";import{C as k}from"./Checkbox-bATI2Fne.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-IOiWX9wg.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B9CJLyFu.js";import"./useFocusRing-dRRpbavw.js";import"./index-D7OaZxr0.js";import"./index-cdL6jhNB.js";import"./TextFieldBase-DiUHlpF_.js";import"./TextField-7jvxep3x.js";import"./FieldError-xl_Ja1Xw.js";import"./Text-CSB3E464.js";import"./Text-DUgo21wF.js";import"./ListKeyboardDelegate-BJL8fISi.js";import"./SelectionManager-Bhe91yj-.js";import"./useEvent-BKiT64KO.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-jo22FXvt.js";import"./useDescription-B7706CL8.js";import"./useControlledState-jk5dcHZC.js";import"./Group-DvBSBS9g.js";import"./Input-CGMZO0io.js";import"./Hidden-Dfn4CsM7.js";import"./Button-5JUiCgCI.js";import"./useLabels-DvhVZXOT.js";import"./useButton-CEd3kBHw.js";import"./useTextField-BAzFn-bd.js";import"./useField-CTi-TIfF.js";import"./TextField.module-CBRvGQ7k.js";import"./Label-CnNojpL7.js";import"./Dialog-B0pwtXlY.js";import"./RSPContexts-CVHqL9qm.js";import"./OverlayArrow-CbIyC_h8.js";import"./useResizeObserver-vv_Zd3MY.js";import"./Collection-B6NRzMX8.js";import"./index-DXvRC8g0.js";import"./Separator-B9ME_IUu.js";import"./PressResponder-DzQcPmvP.js";import"./useLocalizedStringFormatter-AaLNClRV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-t-QE4U81.js";import"./Dialog-8D6LJlzw.js";import"./useLocalizedStringFormatter-2fr4ns62.js";import"./x-BJZycUT8.js";import"./createLucideIcon-CVPYiiso.js";import"./Heading-2oQH2Qey.js";import"./info-vv6M0LlN.js";import"./Tag-Cz3IfK7P.js";import"./ListBox-Cjwum2Tr.js";import"./DragAndDrop-CIdSiyW3.js";import"./inertValue-DHm7HLSf.js";import"./useListState-B2M8anQk.js";import"./useHighlightSelectionDescription-D_iyaGVB.js";import"./useUpdateEffect-Cey76zik.js";import"./useHasTabbableChild-C5BSRuxW.js";import"./check-Dn4X7flP.js";import"./ListBoxSection-BpXEgs-B.js";import"./Virtualizer-Dzxs56tZ.js";import"./useObserveElement-wVjjHjm8.js";import"./chevron-down-CdUWKhUZ.js";import"./Button.module-DWkXlqFG.js";import"./useToggleState-DVU0qZN1.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
