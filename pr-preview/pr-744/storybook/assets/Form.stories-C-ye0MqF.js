import{j as n}from"./iframe-Cvnzvodd.js";import{$ as j}from"./Form-BHLFvie-.js";import{G}from"./Grid-CAkQa6Ai.js";import{G as e}from"./GridItem-BIlp5RCy.js";import{T as r}from"./TextField-BjbZ2ipR.js";import{S as I}from"./Select-C-RPZSeD.js";import{B as a}from"./Button-BZVHYJvQ.js";import{R as g,a as b}from"./Radio-BRGnd61B.js";import{C as h}from"./CheckboxGroup-BJmeqzDA.js";import{C as k}from"./Checkbox-CzpvqJ3P.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-BCcKEs0G.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DGrdoBc3.js";import"./useFocusRing-C6XS7cSf.js";import"./index-DquUEUZr.js";import"./index-1n4Uju3l.js";import"./TextFieldBase-DA1yc2G0.js";import"./TextField-Cew13JYt.js";import"./FieldError-CmI2WI7x.js";import"./Text-DRZm250z.js";import"./Text-35HpSvLb.js";import"./ListKeyboardDelegate-CVQvJkuZ.js";import"./SelectionManager-BrQGeSPc.js";import"./useEvent-R2-oA1yM.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-vSx4NMAH.js";import"./useDescription-B_eihw9Z.js";import"./useControlledState-loRcvmvH.js";import"./Group-DkiyPrd6.js";import"./Input-BkUC1Bk-.js";import"./Hidden-D_Odxks3.js";import"./Button-CkHFmjcG.js";import"./useLabels-DiNfhAws.js";import"./useButton-D2B7BZv9.js";import"./useTextField-EXlsQhWo.js";import"./useField-vELYm1H9.js";import"./TextField.module-BrIGiDQC.js";import"./Label-7JCKPVhy.js";import"./Dialog-CWqJf4hN.js";import"./RSPContexts-2iQOK3FF.js";import"./OverlayArrow-B3v-f_za.js";import"./useResizeObserver-Co5Hkszt.js";import"./Collection-CGlomrSb.js";import"./index-C-tBSr03.js";import"./Separator-BXDEHoUM.js";import"./PressResponder-DWusDUxC.js";import"./useLocalizedStringFormatter-DRr1rpMT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-yOBfsgnT.js";import"./Dialog-COTAgY--.js";import"./useLocalizedStringFormatter-CBoI37OZ.js";import"./x-BI8d9ogK.js";import"./createLucideIcon-hFdpAqKf.js";import"./Heading-NRx208ZE.js";import"./info-DaixqMw-.js";import"./Tag-gAeu1dqO.js";import"./ListBox-CX0qMGVe.js";import"./DragAndDrop-0dBOJ3wp.js";import"./inertValue-CEm880vw.js";import"./useListState-Bfh8rZs0.js";import"./useHighlightSelectionDescription-DOaNeJZA.js";import"./useUpdateEffect-BLi70A_M.js";import"./useHasTabbableChild-DHDape3U.js";import"./check-wddTTAGQ.js";import"./ListBoxSection-0TBX8_fX.js";import"./Virtualizer-SX3msDST.js";import"./useObserveElement-BlAosTkA.js";import"./chevron-down-eKXkDoL8.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-N3kFQguV.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
