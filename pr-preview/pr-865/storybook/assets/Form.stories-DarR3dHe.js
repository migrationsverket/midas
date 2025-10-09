import{j as n}from"./iframe-aoUN_ZS6.js";import{$ as j}from"./Form-BQSFNbmk.js";import{G}from"./Grid-BhOn77P8.js";import{G as e}from"./GridItem-Ca6j9QtF.js";import{T as r}from"./TextField-KOzXKh60.js";import{S as I}from"./Select-DXJXC2so.js";import{B as a}from"./Button-q3bCf5hR.js";import{R as g,a as b}from"./Radio-ChLiqTwi.js";import{C as h}from"./CheckboxGroup-CZw9eUE2.js";import{C as k}from"./Checkbox-CP-KqJ16.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-Cxw_Fpjf.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CT5Joya7.js";import"./useFocusRing-BiEZY6Rg.js";import"./index-Drnx97sC.js";import"./index-SMeimzWn.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-oVOrc2b4.js";import"./TextField-CJxEDe13.js";import"./FieldError-C4n1rxfe.js";import"./Text-Bffd_qVg.js";import"./Text-BV2MsPQy.js";import"./context-BBheGs1V.js";import"./SelectionManager-DeKHXbGZ.js";import"./useEvent-kKB3p8fE.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DtchidDY.js";import"./useDescription-BebVRtyG.js";import"./useControlledState-F3BWzbhh.js";import"./Group-C5PtG0jJ.js";import"./Input-CPaaSr5p.js";import"./Hidden-BNohK9iJ.js";import"./Button-DgnbkVNf.js";import"./useLabels-ICgtNXuY.js";import"./useButton-BdslO2aw.js";import"./useTextField-Cf48Izh0.js";import"./useField-Cf9g7lRs.js";import"./TextField.module-DjUItNl5.js";import"./Label-DLcQ9PSq.js";import"./Dialog-CkLw9DcS.js";import"./RSPContexts-DV2nIkB0.js";import"./OverlayArrow-BL2imV76.js";import"./useResizeObserver-vGuZmlhH.js";import"./Collection-CCPNJsOM.js";import"./index-CWvV_BLG.js";import"./Separator-BaZQV95P.js";import"./PressResponder-BCz0W9wc.js";import"./useLocalizedStringFormatter-B6t2uvFo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CA4m0heZ.js";import"./useLocalizedStringFormatter-DNij7ukU.js";import"./x-Cwufl4H6.js";import"./createLucideIcon-D6hkGmRt.js";import"./Heading-BPgzR4We.js";import"./info-BKYXeEyc.js";import"./Popover-D0tMffzZ.js";import"./Tag-C75-65Xw.js";import"./ListBox-BMAgPagP.js";import"./DragAndDrop-B-xtAohc.js";import"./inertValue-BQebdFnL.js";import"./useListState-Bcrc3WFP.js";import"./useHighlightSelectionDescription-CCfqL8LO.js";import"./useUpdateEffect-BDIeX6JD.js";import"./useHasTabbableChild-CeTpN_bL.js";import"./check-Bv_nefoH.js";import"./ListBoxSection-CrJfJoz9.js";import"./Virtualizer-D4qm7Vuy.js";import"./useObserveElement-CJa1IFUK.js";import"./chevron-down-CbyAKq13.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-C635H5UR.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
