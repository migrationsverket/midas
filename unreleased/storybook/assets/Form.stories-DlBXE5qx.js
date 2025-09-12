import{j as n}from"./iframe-crlrIVsQ.js";import{$ as j}from"./Form-Cvr3RrZq.js";import{G}from"./Grid-Bvd5wTVj.js";import{G as e}from"./GridItem-BfEgPBpL.js";import{T as r}from"./TextField-CNsBoutH.js";import{S as I}from"./Select-BM1AiJC4.js";import{B as a}from"./Button-B_8DsRtF.js";import{R as g,a as b}from"./Radio-CXE8OzDS.js";import{C as h}from"./CheckboxGroup-mf0gSXgJ.js";import{C as k}from"./Checkbox-C2ZiaSfw.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CKMuvOBF.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-B3hhviZG.js";import"./useFocusRing-DUXbt4NF.js";import"./index-BK7zmcWb.js";import"./index-VzyU27QZ.js";import"./TextFieldBase-uFh90His.js";import"./TextField-CDkI41D-.js";import"./FieldError-cSmpGL9u.js";import"./Text-C_JUCZT8.js";import"./Text-BMjq-cbX.js";import"./ListKeyboardDelegate-CWPPl1IS.js";import"./SelectionManager-HmjfnzIe.js";import"./useEvent-BpDwHWa5.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-BKzqu3lz.js";import"./useDescription-I1VEsQYb.js";import"./useControlledState-C7OvoNFo.js";import"./Group-CMyef7xH.js";import"./Input-B10Fd2Qa.js";import"./Hidden-XjjImMeD.js";import"./Button-F6FDEjlM.js";import"./useLabels-BHuUBCgF.js";import"./useButton-BACsF3s-.js";import"./useTextField-CnafMPe3.js";import"./useField-Cx-gezDH.js";import"./TextField.module-DjUItNl5.js";import"./Label-CAZz9LIl.js";import"./Dialog-DXcIaJCD.js";import"./RSPContexts-iEOcZxU9.js";import"./OverlayArrow-C0yyhCkm.js";import"./useResizeObserver-CGEHjcsX.js";import"./Collection-CNqnyRVx.js";import"./index-Bi4F9c6t.js";import"./Separator-B7EYXh2O.js";import"./PressResponder-BPAlVEZG.js";import"./useLocalizedStringFormatter-C8JhLBbY.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-xSI6XFME.js";import"./Dialog-BVH3uATL.js";import"./useLocalizedStringFormatter-BuusRtrO.js";import"./x-Da8VRJPV.js";import"./createLucideIcon-Do6SDQFc.js";import"./Heading-C3ReQ85W.js";import"./info-BVSMxgCa.js";import"./Tag-DerpPKtd.js";import"./ListBox-DlHoLmN6.js";import"./DragAndDrop-DEfXtUWF.js";import"./inertValue-BFIfaT3W.js";import"./useListState-DDBRLDdt.js";import"./useHighlightSelectionDescription-cJVIGN2_.js";import"./useUpdateEffect-B5JybLrk.js";import"./useHasTabbableChild-DE7tNnkg.js";import"./check-9dPB3c2S.js";import"./ListBoxSection-DiyXiAbn.js";import"./Virtualizer-BUBeB9jY.js";import"./useObserveElement-DQT1Qas4.js";import"./chevron-down-UhSw8K8H.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-U4_81hKx.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
