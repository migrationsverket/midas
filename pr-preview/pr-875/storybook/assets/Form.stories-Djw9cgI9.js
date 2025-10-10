import{j as n}from"./iframe-CF14QyFH.js";import{$ as j}from"./Form-DWbl4TYm.js";import{G}from"./Grid-aGGy4rvb.js";import{G as e}from"./GridItem-Bmc7vAtW.js";import{T as r}from"./TextField-BQwQqSPm.js";import{S as I}from"./Select-guyK3UO8.js";import{B as a}from"./Button-Bn0l5StG.js";import{R as g,a as b}from"./Radio-DlTn9ej_.js";import{C as h}from"./CheckboxGroup-XdoI8Z_O.js";import{C as k}from"./Checkbox-CNF29XdL.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-XGkEOIue.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-COWsDsSH.js";import"./useFocusRing-SstsIAWg.js";import"./index-8tH9Xmlo.js";import"./index-mZaCiAPP.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-CxMEkaOi.js";import"./TextField-Bg95xTTD.js";import"./FieldError-OW0vyHHI.js";import"./Text-CpG1P9Jf.js";import"./Text-CH-S408u.js";import"./context-jZeicwOg.js";import"./SelectionManager-DMRhZQl5.js";import"./useEvent-COZz0KdZ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CTtK_cGR.js";import"./useDescription-DE0JBQDB.js";import"./useControlledState-yj7IUWa3.js";import"./Group-CTCEeESi.js";import"./Input-kJuQ1UcQ.js";import"./Hidden-YX9OMwPz.js";import"./Button-Cwj2UogJ.js";import"./useLabels-BWv5NPGE.js";import"./useButton-Ue9vS-MB.js";import"./useTextField-OCFHteoC.js";import"./useField-CZELSr9S.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-RduI8_5t.js";import"./Dialog-D6rc-1Am.js";import"./RSPContexts-DKFNkc0l.js";import"./OverlayArrow-CR7K0-Ss.js";import"./useResizeObserver-BNj-2Jj7.js";import"./Collection-DprqvAdq.js";import"./index-BD93_Czk.js";import"./Separator-DnSLFKFK.js";import"./PressResponder-DDbRP39A.js";import"./useLocalizedStringFormatter-5K_ZMbs6.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BB3lESiY.js";import"./useLocalizedStringFormatter-DW1rCD4J.js";import"./x-DNc0zncj.js";import"./createLucideIcon-DTnn7RDv.js";import"./Heading-Cawc4hSK.js";import"./info-B7PukCtF.js";import"./Popover-CIv505GS.js";import"./Tag-DXX01ct-.js";import"./ListBox-wLAZM4Zq.js";import"./DragAndDrop-DetdYKWp.js";import"./inertValue-l7BCQXsF.js";import"./useListState-CT2P6qrE.js";import"./useHighlightSelectionDescription-DWVsGmDA.js";import"./useUpdateEffect-CNSMH6R6.js";import"./useHasTabbableChild-CdEkvmyG.js";import"./check-D5pDVCsW.js";import"./ListBoxSection-Cdcoj9R9.js";import"./Virtualizer-B-F1B5_U.js";import"./useObserveElement-DlLGEs2C.js";import"./chevron-down-1HAFUerS.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-Cfxn5KOp.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=s.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Nn=["SimpleForm","TwoColumnForm"];export{m as SimpleForm,s as TwoColumnForm,Nn as __namedExportsOrder,wn as default};
