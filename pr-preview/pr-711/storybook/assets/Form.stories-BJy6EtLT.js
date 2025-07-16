import{j as n}from"./jsx-runtime-BYYWji4R.js";import{$ as j}from"./Form-C688dPfu.js";import{G}from"./Grid-BjSJfDsS.js";import{G as e}from"./GridItem-BVyXLt9X.js";import{T as r}from"./TextField-0BvVYYLM.js";import{S as I}from"./Select-C6nh2lif.js";import{B as a}from"./Button-CyYX7D6N.js";import{R as g,a as b}from"./Radio-eO8JuTEM.js";import{C as h}from"./CheckboxGroup-C9Es9xbj.js";import{C as k}from"./Checkbox-0afnfBrz.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CT8CL8Qy.js";import"./SSRProvider-BhYbDCf7.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DOw2d6ip.js";import"./useFocusRing-CiRxO26c.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./TextFieldBase-BBInP7hw.js";import"./TextField-DpUD5LWc.js";import"./FieldError-Ax3oEaat.js";import"./Text-BDGh9UD8.js";import"./Input-D3HNUlSg.js";import"./Hidden-BC9qER92.js";import"./Button-Dw7lljiq.js";import"./context-zNjZoWML.js";import"./useButton-DFlERivp.js";import"./useTextField-9SFBjr87.js";import"./useControlledState-H1tiOFpU.js";import"./useField-DCM7HehW.js";import"./TextField.module-C33Y04O9.js";import"./Text-B94wSZIf.js";import"./Label-CcqUI0Nx.js";import"./Dialog-BQhmOU3o.js";import"./RSPContexts-HQcWPJyv.js";import"./OverlayArrow-B5tMncCy.js";import"./Collection-CAY-ghkk.js";import"./index-NDK0uC61.js";import"./Separator-BuNd-mI_.js";import"./SelectionManager-B7CR_Zkr.js";import"./useEvent-YbNcfHeo.js";import"./scrollIntoView-D-J2YGNX.js";import"./FocusScope-DFjHfTMc.js";import"./ListKeyboardDelegate-DdGMYXDu.js";import"./useLocalizedStringFormatter-DiUIqqhg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-D3zukwiL.js";import"./VisuallyHidden-Bwo2Sxwr.js";import"./Dialog-CxBN_L9x.js";import"./useLocalizedStringFormatter-9M_dEwOo.js";import"./x-Dz2R9y6b.js";import"./createLucideIcon-uZw3gxGR.js";import"./Heading-BqhVQUP5.js";import"./info-CSjK64PU.js";import"./FieldError-DzhuwbDv.js";import"./Tag-sjpBhMFn.js";import"./ListBox-DSJQl1Gv.js";import"./DragAndDrop-TtKNn804.js";import"./inertValue-C_mH9YkE.js";import"./useListState-CycFe3cZ.js";import"./useHighlightSelectionDescription-BLS53P9I.js";import"./useUpdateEffect-BzF61qSB.js";import"./useHasTabbableChild-uobRX2QT.js";import"./check-yXF3Bjrk.js";import"./ListBoxSection-DCDZzqhO.js";import"./useObserveElement-BP4zVUS4.js";import"./chevron-down-CPcpcOqy.js";import"./Button.module-DKVuWS4g.js";import"./Group-CrqH1lRX.js";import"./useToggleState-DcHMzLVj.js";const Pn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const $n=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,$n as __namedExportsOrder,Pn as default};
