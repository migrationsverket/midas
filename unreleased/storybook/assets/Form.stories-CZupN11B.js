import{j as n}from"./iframe-B7J66c5t.js";import{$ as j}from"./Form-CdhtHgHD.js";import{G}from"./Grid-B8vkoYCO.js";import{G as e}from"./GridItem-B_JPYoaA.js";import{T as r}from"./TextField-CoGanGul.js";import{S as I}from"./Select-cDNEF1J8.js";import{B as a}from"./Button-Ct4Mj7Th.js";import{R as g,a as b}from"./Radio-DW88lhMK.js";import{C as h}from"./CheckboxGroup-PMK4CD-c.js";import{C as k}from"./Checkbox-DBimb3U2.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DbsP0l1-.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DcdjIMJn.js";import"./useFocusRing-oDbHj0sH.js";import"./index-QsIvV83H.js";import"./index-D3up-23-.js";import"./TextFieldBase-BH77c-k7.js";import"./TextField-Bi2aO3nV.js";import"./FieldError-D1g4KBv5.js";import"./Text-CtoIdVMt.js";import"./Text-Sjd1ZrtU.js";import"./ListKeyboardDelegate-BCu2CKeT.js";import"./SelectionManager-1n0YltI4.js";import"./useEvent-DYTVUobE.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DTJW3HnF.js";import"./useDescription-COErd88C.js";import"./useControlledState-bqWw1IC8.js";import"./Group-BEtALGS5.js";import"./Input-DCCDZMkp.js";import"./Hidden-MMOlKIG9.js";import"./Button-BnwwKoUs.js";import"./useLabels-8GiNw-Zq.js";import"./useButton-D7PmSFD_.js";import"./useTextField-DRGXn07L.js";import"./useField-IxaPtQ7g.js";import"./TextField.module-DjUItNl5.js";import"./Label-Cohkjscc.js";import"./Dialog-BN2t8e_X.js";import"./RSPContexts-Bwmrgecj.js";import"./OverlayArrow-oP_UEGIY.js";import"./useResizeObserver-Dl66YecI.js";import"./Collection-Bnyy68sg.js";import"./index-B_yix8SO.js";import"./Separator-5odS8wum.js";import"./PressResponder-C08KVhUQ.js";import"./useLocalizedStringFormatter-zqtKG1Tm.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-BQC46gXc.js";import"./Dialog-CzP2mNsT.js";import"./useLocalizedStringFormatter-DCPwuC4A.js";import"./x-BWmyx1jz.js";import"./createLucideIcon-CnGwW_e8.js";import"./Heading-BV0oyiR0.js";import"./info-Cjx_2a1V.js";import"./Tag-D0VT-xV8.js";import"./ListBox-CDB8ERzW.js";import"./DragAndDrop-i_DS9PZ6.js";import"./inertValue-DHZZsLSY.js";import"./useListState-CiaF19Te.js";import"./useHighlightSelectionDescription-CxehAgGG.js";import"./useUpdateEffect-CTEwq4Vw.js";import"./useHasTabbableChild-CpBiKH8L.js";import"./check-Cv66WB95.js";import"./ListBoxSection-VT0XvpM5.js";import"./Virtualizer-HripKlz3.js";import"./useObserveElement-CNEQJzeN.js";import"./chevron-down-BTodnGxM.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BpdNrpfm.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
