import{j as n}from"./iframe-CivQ_qtW.js";import{$ as j}from"./Form-uBUp22A2.js";import{G}from"./Grid-DWnzzTKU.js";import{G as e}from"./GridItem-DkFjpkGF.js";import{T as r}from"./TextField-CyS2k3BA.js";import{S as I}from"./Select-BwGjlZwx.js";import{B as a}from"./Button-C6P3w_uT.js";import{R as g,a as b}from"./Radio-SlosbcLJ.js";import{C as h}from"./CheckboxGroup-DoMtWfOW.js";import{C as k}from"./Checkbox-DpymZWhj.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DGRCb3Sb.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-DOQiZIPb.js";import"./useFocusRing-C-Ks94XI.js";import"./index-jd9cWS7V.js";import"./index-AjZE1m6P.js";import"./TextFieldBase-Rxk-SLel.js";import"./TextField-yCR3HA6I.js";import"./FieldError-B_uHsnuD.js";import"./Text-Doe2DhSF.js";import"./Text-CMwj3o40.js";import"./context-Bei_9AF9.js";import"./SelectionManager-DJ6E3Km6.js";import"./useEvent-CCp8CUxm.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DatPzfhp.js";import"./useDescription-BSD7rVCF.js";import"./useControlledState-pnivq3ks.js";import"./Group-BNC4NzMi.js";import"./Input-T-LHlGup.js";import"./Hidden-B-9TWLTz.js";import"./Button--uCOOfLy.js";import"./useLabels-DPP6QVBd.js";import"./useButton-CPqQXKmH.js";import"./useTextField-CkBj_bQX.js";import"./useField-LhdBmisM.js";import"./TextField.module-DjUItNl5.js";import"./Label-DcaeoYIP.js";import"./Dialog-DiZsBbmU.js";import"./RSPContexts-CrAaQbWu.js";import"./OverlayArrow-CKWuCC8d.js";import"./useResizeObserver-ZVTQo9gH.js";import"./Collection-B_qu63lS.js";import"./index-DjZ991Ym.js";import"./Separator-CbK9SQFQ.js";import"./PressResponder-DzpCZqdd.js";import"./useLocalizedStringFormatter-CxxnIYYT.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-j6jmH3_n.js";import"./useLocalizedStringFormatter-BmDqPA84.js";import"./x-D88-DqDI.js";import"./createLucideIcon-CfrIUjdR.js";import"./Heading-DYhYEOon.js";import"./info-DYHysPHJ.js";import"./Popover-NazFrH1p.js";import"./Tag-DjN8U1Ge.js";import"./ListBox-D_QKfUU9.js";import"./DragAndDrop-D1sS8RV2.js";import"./inertValue-Dg_IxVZ_.js";import"./useListState-BucaKAAc.js";import"./useHighlightSelectionDescription-CGKS0VC2.js";import"./useUpdateEffect-Dyh9Nmw_.js";import"./useHasTabbableChild-6edxGgy5.js";import"./check-CCjrJMxd.js";import"./ListBoxSection-DxOzx71p.js";import"./Virtualizer-R1NCpWrr.js";import"./useObserveElement-BBPIuCTY.js";import"./chevron-down-CxKv-VJu.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-CTp-1m5A.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
