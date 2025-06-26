import{j as n}from"./jsx-runtime-BYYWji4R.js";import{$ as j}from"./Form-BGITfCPg.js";import{G}from"./Grid-BADoyVSV.js";import{G as e}from"./GridItem-BAsWh3ql.js";import{T as r}from"./TextField-BaTrgtJz.js";import{S as I}from"./Select-DjIDea3i.js";import{B as a}from"./Button-BcZkB2rZ.js";import{R as g,a as b}from"./Radio-DT7LNvCv.js";import{C as h}from"./CheckboxGroup-CweECLWJ.js";import{C as k}from"./Checkbox-BzP57UJf.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BLyg3OOq.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Nb4M2nj5.js";import"./useFocusRing-DVgdqMmF.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./TextFieldBase-CbcsItlK.js";import"./TextField-HNrUlez3.js";import"./FieldError-qYvGdo98.js";import"./Text-BGwM_jUK.js";import"./Input-CItsBBg6.js";import"./Hidden-BC9qER92.js";import"./Button-C9yg6fHw.js";import"./context-d6PNTTSe.js";import"./useButton-DVh6qrnV.js";import"./useTextField-CTEumwRm.js";import"./useControlledState-H1tiOFpU.js";import"./useField-DSxopD4s.js";import"./TextField.module-C33Y04O9.js";import"./Text-D7RmNfn4.js";import"./Label-BbpGPG0m.js";import"./Dialog-BE4JD7C-.js";import"./RSPContexts-HQcWPJyv.js";import"./OverlayArrow-4EDQuioh.js";import"./Collection-Bhy8rVTk.js";import"./index-NDK0uC61.js";import"./Separator-DqhbA8RB.js";import"./SelectionManager-BXwhMJ8O.js";import"./useEvent-B0l3XC2n.js";import"./scrollIntoView-BivqL63c.js";import"./FocusScope-Ce8r-Upm.js";import"./ListKeyboardDelegate-Dwm1KN0z.js";import"./useLocalizedStringFormatter-TrhiTCnH.js";import"./getScrollParent-FdZGTYO5.js";import"./VisuallyHidden-B-Fwaf7X.js";import"./Dialog-BF0cIzzK.js";import"./x-BaIpobvV.js";import"./createLucideIcon-DQK9Z80p.js";import"./Heading-DncQzqB_.js";import"./info-DTm9uzms.js";import"./FieldError-C9cT7vfN.js";import"./useLocalizedStringFormatter-1I2iWIMg.js";import"./Tag-CX2MChx0.js";import"./ListBox-CsSyqQCs.js";import"./DragAndDrop-BqnrhZqQ.js";import"./inertValue-C_mH9YkE.js";import"./useListState-CPoirKSX.js";import"./useHighlightSelectionDescription-eXwatSFZ.js";import"./useUpdateEffect-BzF61qSB.js";import"./useHasTabbableChild-DKoW_dB3.js";import"./check-Dn7CvcrD.js";import"./ListBoxSection-qJFX-YaM.js";import"./useObserveElement-BP4zVUS4.js";import"./chevron-down-CVNiYbvV.js";import"./Button.module-AG3JZ-l4.js";import"./Group-EDTqPI1Y.js";import"./useToggleState-DcHMzLVj.js";const Kn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const On=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,On as __namedExportsOrder,Kn as default};
