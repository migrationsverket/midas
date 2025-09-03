import{j as n}from"./iframe-BTouQNiC.js";import{$ as j}from"./Form-C549HAdp.js";import{G}from"./Grid-W13Hxf4j.js";import{G as e}from"./GridItem-C1usTTvY.js";import{T as r}from"./TextField-CvNNj37t.js";import{S as I}from"./Select-Dch2lXl7.js";import{B as a}from"./Button-DMivhfe2.js";import{R as g,a as b}from"./Radio-CH8SvKdB.js";import{C as h}from"./CheckboxGroup-BR5g_dA4.js";import{C as k}from"./Checkbox-C8du-qpO.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-C6aKGSFu.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-BNlbwfnO.js";import"./useFocusRing-CKJ2kDYu.js";import"./index-B5XUfmSY.js";import"./index-sSmMzAAT.js";import"./TextFieldBase-74qdcAPc.js";import"./TextField-CCjst_fq.js";import"./FieldError-DC6qdijx.js";import"./Text-BrpptdWH.js";import"./Text-ZI8f4a4r.js";import"./ListKeyboardDelegate-DwgfTlqQ.js";import"./SelectionManager-BT1adu_B.js";import"./useEvent-BWXzpJkn.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Cr9eBLMs.js";import"./useDescription-Yd_E21GD.js";import"./useControlledState-97JBuhmp.js";import"./Group-DI5RrUZb.js";import"./Input-luv4CTVi.js";import"./Hidden-CakREgqV.js";import"./Button-ciNoVYAu.js";import"./useLabels-Cux1BvnX.js";import"./useButton-ClSP0aiG.js";import"./useTextField-BhguRS8j.js";import"./useField-CDKxBL5O.js";import"./TextField.module-BrIGiDQC.js";import"./Label-XXB4EZTs.js";import"./Dialog-5lmh_umS.js";import"./RSPContexts-D0tGxC76.js";import"./OverlayArrow-RdbE-Ha1.js";import"./useResizeObserver-K-gtRBju.js";import"./Collection-OBG5XI30.js";import"./index-C32EEGft.js";import"./Separator-Cl3uG4Je.js";import"./PressResponder-BccQMh1U.js";import"./useLocalizedStringFormatter-DtBORiU8.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CjlhWtDD.js";import"./Dialog-BO9Zl60m.js";import"./useLocalizedStringFormatter-CXhKnvcj.js";import"./x-CX9N_yrz.js";import"./createLucideIcon-Ca3d5m-n.js";import"./Heading-A8iZDD_h.js";import"./info-BtEiBjeo.js";import"./Tag-oMvB4GnF.js";import"./ListBox-DSjQT-lc.js";import"./DragAndDrop-Bt8Yd3UI.js";import"./inertValue-BMCEL2CJ.js";import"./useListState-CbWPjCm8.js";import"./useHighlightSelectionDescription-Cez82AIn.js";import"./useUpdateEffect-DJLbAtqt.js";import"./useHasTabbableChild-BeGWMKob.js";import"./check-DEBKgM-m.js";import"./ListBoxSection-CTsrBMO2.js";import"./Virtualizer-jaxXO0NA.js";import"./useObserveElement-CY1sWqTP.js";import"./chevron-down-o9Ow6l4n.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-Deovo0H9.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
