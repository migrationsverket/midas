import{j as n}from"./iframe-vQrmgTAQ.js";import{$ as j}from"./Form-BkhaO6HA.js";import{G}from"./Grid-BYYW72H1.js";import{G as e}from"./GridItem-CJoJ6_OI.js";import{T as r}from"./TextField-Dv9FKxCR.js";import{S as I}from"./Select-CiUWl3a7.js";import{B as a}from"./Button-79ORwupd.js";import{R as g,a as b}from"./Radio-DJU-p2HF.js";import{C as h}from"./CheckboxGroup-oNSnv_bx.js";import{C as k}from"./Checkbox-Ch6pTHOq.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-D8WysR_x.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DWTOBJmC.js";import"./useFocusRing-BFc0rOrk.js";import"./index-Ufdw3RD1.js";import"./index-nyzGlKi4.js";import"./TextFieldBase-DdBSf3yN.js";import"./TextField-CmZ0Y-9Y.js";import"./FieldError-CL4slf-j.js";import"./Text-eGo38c2j.js";import"./Text-DdIZpDfr.js";import"./ListKeyboardDelegate-DQojn3GV.js";import"./SelectionManager-bf7y9FCV.js";import"./useEvent-BG9ZMTZI.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-LLx-vEbG.js";import"./useDescription-BmmfMCFN.js";import"./useControlledState-CTr2hxYv.js";import"./Group-dOXq3q_6.js";import"./Input-8GntYzO4.js";import"./Hidden-C7D0bVtO.js";import"./Button-CxTIL29R.js";import"./useLabels-DEaz2-3E.js";import"./useButton-E8LTOzWx.js";import"./useTextField-BXFzHLW_.js";import"./useField-DJO3FtUW.js";import"./TextField.module-DjUItNl5.js";import"./Label-CBSflxIs.js";import"./Dialog-B4tXSpZ8.js";import"./RSPContexts-BCfpkPd_.js";import"./OverlayArrow-CxsGlYZ_.js";import"./useResizeObserver-5Rk6Dci3.js";import"./Collection-DgVQzELH.js";import"./index-BQ2wjSGw.js";import"./Separator-D0muiThX.js";import"./PressResponder-t2Fnr-h0.js";import"./useLocalizedStringFormatter-CYEsTogg.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DiFuhbTS.js";import"./Dialog-BypzBJvT.js";import"./useLocalizedStringFormatter-G5tPzNbP.js";import"./x-BF61-fUf.js";import"./createLucideIcon-BjT-z5cK.js";import"./Heading-D9VYH4zE.js";import"./info-sPK3CzGa.js";import"./Tag-DOGDmV80.js";import"./ListBox-TMBs3Bv7.js";import"./DragAndDrop-Cbl0Ikve.js";import"./inertValue-C3lH-nEc.js";import"./useListState-B-yef5BL.js";import"./useHighlightSelectionDescription-lFxe-eV_.js";import"./useUpdateEffect-tm8cHGyM.js";import"./useHasTabbableChild-Ciz_YqAv.js";import"./check--staE7hS.js";import"./ListBoxSection-CiI-Uptd.js";import"./Virtualizer-36M6cF-t.js";import"./useObserveElement-D3UjQt8Q.js";import"./chevron-down-CD4PobYY.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CPTE2j8B.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
