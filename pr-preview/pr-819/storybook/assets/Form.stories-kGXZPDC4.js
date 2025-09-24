import{j as n}from"./iframe-C1_caHCh.js";import{$ as j}from"./Form-xQDeWAEG.js";import{G}from"./Grid-DvmJhYpG.js";import{G as e}from"./GridItem-DjJW0p1I.js";import{T as r}from"./TextField-BmqaH66A.js";import{S as I}from"./Select-ITfOocMz.js";import{B as a}from"./Button-n6cMZJhc.js";import{R as g,a as b}from"./Radio-btSq7Jgz.js";import{C as h}from"./CheckboxGroup-B2kbaOGF.js";import{C as k}from"./Checkbox-kZ_euK5s.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DLlXmFKZ.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B6PQWwR_.js";import"./useFocusRing-CHoFu1xK.js";import"./index-D_EuWNb7.js";import"./index-BxdMM6xe.js";import"./TextFieldBase-EXu6vNvU.js";import"./TextField-ogWpqaSn.js";import"./FieldError-D4M-wkKI.js";import"./Text-BNgDUph_.js";import"./Text-ps57jgOH.js";import"./ListKeyboardDelegate-CiBBECOv.js";import"./SelectionManager-DJnhAm_C.js";import"./useEvent-Dzrr0yFS.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DlDUb7S8.js";import"./useDescription-BU01lwdR.js";import"./useControlledState-BJFYJbbD.js";import"./Group-CRxgoY0o.js";import"./Input-2Xr0iVgO.js";import"./Hidden-Dz-cs_XJ.js";import"./Button-lpoLXjt5.js";import"./useLabels-CVIC2PuH.js";import"./useButton-DNPbaC0J.js";import"./useTextField-BkQxXfJw.js";import"./useField-BE8nJtP1.js";import"./TextField.module-DjUItNl5.js";import"./Label-BdlUG4rP.js";import"./Dialog-DovlevLg.js";import"./RSPContexts-ScDqhNap.js";import"./OverlayArrow-ChEWCjk2.js";import"./useResizeObserver-DWFDLgFG.js";import"./Collection-Ctx5W0Gn.js";import"./index-bQYguBnV.js";import"./Separator-nJTg4gEp.js";import"./PressResponder-BBtZHd4q.js";import"./useLocalizedStringFormatter-B90Zk4ke.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DY7EQLil.js";import"./Dialog-4-8Vw6ZK.js";import"./useLocalizedStringFormatter-B5cpdrkg.js";import"./x-DJPD4UwD.js";import"./createLucideIcon-CfWIclpM.js";import"./Heading-zuXEQhkJ.js";import"./info-C0wD8MMM.js";import"./Tag-C7KPsfQ1.js";import"./ListBox-Bc3DXSdL.js";import"./DragAndDrop-DK5ZoFwN.js";import"./inertValue-DN81bnHA.js";import"./useListState-CNV6UXf8.js";import"./useHighlightSelectionDescription-DkP9uGRK.js";import"./useUpdateEffect-8vXe1Wad.js";import"./useHasTabbableChild-mzfckILx.js";import"./check-mezF8cxY.js";import"./ListBoxSection-CNIrtxQw.js";import"./Virtualizer-ABrqc6AZ.js";import"./useObserveElement-dEETRbru.js";import"./chevron-down-DMjipcss.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CbYqud-8.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
