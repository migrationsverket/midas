import{j as n}from"./iframe-BhI6OY3k.js";import{$ as j}from"./Form-DqcGi0QE.js";import{G}from"./Grid-CoQ2rmCq.js";import{G as e}from"./GridItem-C0dgg5Bo.js";import{T as r}from"./TextField-CoyoJXh2.js";import{S as I}from"./Select-Ca3mi3Lz.js";import{B as a}from"./Button-DeF4_VVs.js";import{R as g,a as b}from"./Radio-Cum-y9S5.js";import{C as h}from"./CheckboxGroup-CtwbOcYr.js";import{C as k}from"./Checkbox-BpIBB1BA.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BfsJBkkH.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DWdJgBYr.js";import"./useFocusRing-BBDv3aqX.js";import"./index-pQd6zGI0.js";import"./index-C1HNG_OI.js";import"./TextFieldBase-CJ49OsSp.js";import"./TextField-BOL5rn-Z.js";import"./FieldError-Ykv9F0GM.js";import"./Text-CT7MnyRo.js";import"./Text-B7eF5ilV.js";import"./ListKeyboardDelegate-DIybDp0O.js";import"./SelectionManager-CUyD9tlf.js";import"./useEvent-oRnuJpYh.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DTOqt02n.js";import"./useDescription-2o161S7g.js";import"./useControlledState-BwKw8z34.js";import"./Group-C9fUB2SE.js";import"./Input-CrrgXpwu.js";import"./Hidden-BZSbuNrL.js";import"./Button-CReUvSB9.js";import"./useLabels-r_A7i70X.js";import"./useButton-oVrSxjAO.js";import"./useTextField-BTbCnexb.js";import"./useField-m_aYhejj.js";import"./TextField.module-DjUItNl5.js";import"./Label-NiKIjOeH.js";import"./Dialog-D8rJtFKe.js";import"./RSPContexts-UkVZywJn.js";import"./OverlayArrow-BVcOsXv1.js";import"./useResizeObserver-BCrQDDtB.js";import"./Collection-Dbkaiyhb.js";import"./index-DEKm6Ukw.js";import"./Separator-V5S3UyWT.js";import"./PressResponder-CuohUNYP.js";import"./useLocalizedStringFormatter-BUZJL7u6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-caFEquOn.js";import"./Dialog-BsNiVTMT.js";import"./useLocalizedStringFormatter-GJCC0PmB.js";import"./x-DFABqdeG.js";import"./createLucideIcon-B84yEH9S.js";import"./Heading-DsrSow02.js";import"./info-B9BGP6xQ.js";import"./Tag-CxarVnJU.js";import"./ListBox-Dn90skJ9.js";import"./DragAndDrop-PzXQU-nT.js";import"./inertValue-BLGLxydj.js";import"./useListState-CvY-26sB.js";import"./useHighlightSelectionDescription-BCq4FW6X.js";import"./useUpdateEffect-DZZ5JJH6.js";import"./useHasTabbableChild-BGLkry3t.js";import"./check--_IKftga.js";import"./ListBoxSection-CopQEvl_.js";import"./Virtualizer-DMymM9i8.js";import"./useObserveElement-62vMG4As.js";import"./chevron-down-BsaZOGB9.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CynWTnF7.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
