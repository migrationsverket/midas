import{j as n}from"./jsx-runtime-BYYWji4R.js";import{$ as j}from"./Form-C9xWP2Oj.js";import{G}from"./Grid-BADoyVSV.js";import{G as e}from"./GridItem-BAsWh3ql.js";import{T as r}from"./TextField-D8bhfByS.js";import{S as I}from"./Select-DaRys5fw.js";import{B as a}from"./Button-CsCk5LCZ.js";import{R as g,a as b}from"./Radio-DlqtIhJC.js";import{C as h}from"./CheckboxGroup-jxIWUwm3.js";import{C as k}from"./Checkbox-DztNH86R.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-FjWTytrw.js";import"./useFocusRing-DFgaa26k.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./TextFieldBase-CR41i_5C.js";import"./TextField-B-393-mT.js";import"./FieldError-D-8BaYqJ.js";import"./Text-YK1d3YhA.js";import"./Text-Wus0_tJ0.js";import"./Input-smQbtSIx.js";import"./Hidden-BC9qER92.js";import"./Button-CEgTOQBH.js";import"./context-zNjZoWML.js";import"./useButton-D8WL2Jhl.js";import"./useTextField-jcX3gdvO.js";import"./useControlledState-H1tiOFpU.js";import"./useField-S31s4Mk4.js";import"./TextField.module-C33Y04O9.js";import"./Label-BY-p3C7a.js";import"./Dialog-C4m1OGM_.js";import"./RSPContexts-HQcWPJyv.js";import"./OverlayArrow-TRvrVqvs.js";import"./Collection-DAIuP0SD.js";import"./index-NDK0uC61.js";import"./Separator-CH_dNUfe.js";import"./SelectionManager-Cm3DuGdl.js";import"./useEvent-YbNcfHeo.js";import"./scrollIntoView-D-J2YGNX.js";import"./FocusScope-Bcf2Ll4M.js";import"./ListKeyboardDelegate-Cv5X-nlC.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-D3zukwiL.js";import"./VisuallyHidden-jmj7sg3v.js";import"./Dialog-DRYpGDiX.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./x-BaIpobvV.js";import"./createLucideIcon-DQK9Z80p.js";import"./Heading-BqhVQUP5.js";import"./info-DTm9uzms.js";import"./Tag-BZz3TAMx.js";import"./ListBox-BpBdbc6Z.js";import"./DragAndDrop-TtKNn804.js";import"./inertValue-C_mH9YkE.js";import"./useListState-3Hensf_a.js";import"./useHighlightSelectionDescription-Dys0iWT7.js";import"./useUpdateEffect-BzF61qSB.js";import"./useHasTabbableChild-CTpFYJXR.js";import"./check-Dn7CvcrD.js";import"./ListBoxSection-Bv1V57Sc.js";import"./useObserveElement-BP4zVUS4.js";import"./chevron-down-CVNiYbvV.js";import"./Button.module-AG3JZ-l4.js";import"./Group-sOySE-B3.js";import"./useToggleState-DcHMzLVj.js";const On={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Pn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Pn as __namedExportsOrder,On as default};
