import{j as n}from"./iframe-DfzsYqdZ.js";import{$ as j}from"./Form-CBFoCUwz.js";import{G}from"./Grid--xoNcVYy.js";import{G as e}from"./GridItem-BPxxV8K9.js";import{T as r}from"./TextField-C04ZaqOQ.js";import{S as I}from"./Select-DxYl7N38.js";import{B as a}from"./Button-augT6Kyy.js";import{R as g,a as b}from"./Radio-BaHNhKVg.js";import{C as h}from"./CheckboxGroup-BIHdxeZR.js";import{C as k}from"./Checkbox-C-vH5WUz.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DvARLG_j.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CaztMcaR.js";import"./useFocusRing-BZ7dpsay.js";import"./index-BTtL7hIZ.js";import"./index-C4hEoCFG.js";import"./TextFieldBase-DDTEw9bT.js";import"./TextField-D7_3u8lM.js";import"./FieldError-DbFj0rnX.js";import"./Text-BXiSEvkp.js";import"./Text-CTdCcOAQ.js";import"./ListKeyboardDelegate-BbGyNxHO.js";import"./SelectionManager-BNHjomeq.js";import"./useEvent-CnNhGaz8.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Bj7ivExa.js";import"./useDescription-NJ_0QdNF.js";import"./useControlledState-BM5Mrg58.js";import"./Group-C4HU3gT1.js";import"./Input-D2eUiKoh.js";import"./Hidden-C1v_67zD.js";import"./Button-DEFyXm_G.js";import"./useLabels-DlqJEKFG.js";import"./useButton-Dm5hU4dO.js";import"./useTextField-DbcFZ1Cu.js";import"./useField-DaFYKaqK.js";import"./TextField.module-BrIGiDQC.js";import"./Label-CXALGidb.js";import"./Dialog-CJIeJNLp.js";import"./RSPContexts-Dsc6rOBm.js";import"./OverlayArrow-C6PeUkFW.js";import"./useResizeObserver-BpO1zNBL.js";import"./Collection-Buqt6CwX.js";import"./index-BIrih4Nt.js";import"./Separator-qrKSY6n9.js";import"./PressResponder-tsGHlPyt.js";import"./useLocalizedStringFormatter-I_rkOEkV.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CVYC8p0q.js";import"./Dialog-BIGlLpfl.js";import"./useLocalizedStringFormatter-vVGAfmTO.js";import"./x-CDG4ghot.js";import"./createLucideIcon-CDfhpREI.js";import"./Heading-DFIagiPJ.js";import"./info-BkUw2gO2.js";import"./Tag-B-R-GtUc.js";import"./ListBox-1LF1VCBP.js";import"./DragAndDrop-DPn7wVoH.js";import"./inertValue-C7yQUphK.js";import"./useListState-BB7mz_oF.js";import"./useHighlightSelectionDescription-DjvB6i30.js";import"./useUpdateEffect-D-G5zj5q.js";import"./useHasTabbableChild-CSZ5Y-vv.js";import"./check-CsAiAx7k.js";import"./ListBoxSection-BedfGm1r.js";import"./Virtualizer-Bf74JDHa.js";import"./useObserveElement-Lne_wis-.js";import"./chevron-down-D57Szl-a.js";import"./Button.module-CF2bVDCq.js";import"./useToggleState-Bgup5qvF.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
