import{j as n}from"./jsx-runtime-BYYWji4R.js";import{$ as j}from"./Form-CXoNEyM_.js";import{G}from"./Grid-BADoyVSV.js";import{G as e}from"./GridItem-BAsWh3ql.js";import{T as r}from"./TextField-Dadw3-Lk.js";import{S as I}from"./Select-CD8ShEqn.js";import{B as a}from"./Button-D0wYUA_w.js";import{R as g,a as b}from"./Radio-3P9sRG3u.js";import{C as h}from"./CheckboxGroup-DhoIqylX.js";import{C as k}from"./Checkbox-C2_O4S39.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-oc6myKvD.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cv-fFL6t.js";import"./useFocusRing-DUrskli4.js";import"./TextFieldBase-Cogu2BID.js";import"./TextField-DHkjYeex.js";import"./FieldError-C31dJ6Xr.js";import"./Text-C8tPE3tt.js";import"./filterDOMProps-CeZl_uWj.js";import"./Text-Dpx6Gex-.js";import"./Input-mxO2G9Hh.js";import"./Hidden-BC9qER92.js";import"./Label-CpkHsAPL.js";import"./useTextField-CPl6LdnF.js";import"./useControlledState-H1tiOFpU.js";import"./useField-aNJ8ypzk.js";import"./useLabel-Blgy_cRF.js";import"./useFocusable-tJD4A6lu.js";import"./TextField.module-C33Y04O9.js";import"./Label-C8mJCmL2.js";import"./useLocalizedStringFormatter-mCZhIpKm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-BSqJJvai.js";import"./Tag-C3l0H88h.js";import"./Button-BD6hc4wl.js";import"./ProgressBar-CQGqtZ9B.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useButton-Cqc6u4_f.js";import"./usePress-BfxC_TyQ.js";import"./_class_private_field_init-BOtJyCjG.js";import"./index-DQEgcCId.js";import"./Collection-BHHe22Am.js";import"./index-NDK0uC61.js";import"./ListBox-O25dkUY9.js";import"./DragAndDrop-lZrB2UzM.js";import"./getScrollParent-CvodOSaS.js";import"./scrollIntoView-Dsrcj58z.js";import"./Separator-DiWRQEoC.js";import"./SelectionManager-BGs3xiJx.js";import"./useEvent-DVigVKKB.js";import"./FocusScope-Dq_oVuiP.js";import"./useDescription-Bdyn64K0.js";import"./ListKeyboardDelegate-EWbBYqg2.js";import"./useCollator-B-UPZ4SJ.js";import"./inertValue-C_mH9YkE.js";import"./useListState-CAy-Xhih.js";import"./useHighlightSelectionDescription-EcAuZEkO.js";import"./useUpdateEffect-BzF61qSB.js";import"./useLocalizedStringFormatter-DqnULi-B.js";import"./useHasTabbableChild-CdX5JQwf.js";import"./x-BaIpobvV.js";import"./createLucideIcon-DQK9Z80p.js";import"./check-Dn7CvcrD.js";import"./ListBoxSection-8SLR-c1f.js";import"./OverlayArrow-qK8NxBS9.js";import"./Dialog-AjuNQtAO.js";import"./RSPContexts-HQcWPJyv.js";import"./PressResponder-DqE_a81G.js";import"./VisuallyHidden-uwYO98VR.js";import"./useObserveElement-BP4zVUS4.js";import"./chevron-down-CVNiYbvV.js";import"./Button.module-AG3JZ-l4.js";import"./Group-C7PQJuJg.js";import"./useToggleState-DcHMzLVj.js";const Hn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Jn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Jn as __namedExportsOrder,Hn as default};
