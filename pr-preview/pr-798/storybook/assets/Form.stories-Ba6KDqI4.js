import{j as n}from"./iframe-FvAOTTHD.js";import{$ as j}from"./Form-Cumgp0mB.js";import{G}from"./Grid-BY4xUJsQ.js";import{G as e}from"./GridItem-NUimgwKo.js";import{T as r}from"./TextField-DvIe8-ob.js";import{S as I}from"./Select-jyWfceMH.js";import{B as a}from"./Button-CPWgYa19.js";import{R as g,a as b}from"./Radio-91F6yoMe.js";import{C as h}from"./CheckboxGroup-B0wtF3Hf.js";import{C as k}from"./Checkbox-CtrOLzcY.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-B58NrUMl.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-Cm3MaKTp.js";import"./useFocusRing-hotFAerX.js";import"./index-gauWVXKn.js";import"./index-CeRpVf4G.js";import"./TextFieldBase-D47GCiNa.js";import"./TextField-fvVY1vnp.js";import"./FieldError-CbgFk-Si.js";import"./Text-aBdNN9yS.js";import"./Text-BiHwHxNE.js";import"./ListKeyboardDelegate-DvD2NOwr.js";import"./SelectionManager-hZgAMiNy.js";import"./useEvent-Wwxq6gdI.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-CvzK8lRJ.js";import"./useDescription-lW6CWylo.js";import"./useControlledState-CE7Ah11s.js";import"./Group-DBMldaaN.js";import"./Input-B6GBiomx.js";import"./Hidden-BVjww_ie.js";import"./Button-CMpG05H-.js";import"./useLabels-E2PF7qOc.js";import"./useButton-BM7XiuNQ.js";import"./useTextField-Dbt9axTC.js";import"./useField-OdaFYfb7.js";import"./TextField.module-DjUItNl5.js";import"./Label-C-UgXh8d.js";import"./Dialog-0HfaoDia.js";import"./RSPContexts-5zQTCr0Y.js";import"./OverlayArrow-m393dwgq.js";import"./useResizeObserver-D2MrOBWO.js";import"./Collection-B8YxUbfc.js";import"./index-BFNXf6d_.js";import"./Separator-Df9GpfLP.js";import"./PressResponder-B8HxsmSv.js";import"./useLocalizedStringFormatter-CYm7Y1FX.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-DHPS2I5v.js";import"./Dialog-WT-xU_a7.js";import"./useLocalizedStringFormatter-DUExpWLt.js";import"./x-DpS2lygu.js";import"./createLucideIcon-BDx-H3zl.js";import"./Heading-CBd9eJvp.js";import"./info-4K70vNU5.js";import"./Tag-CtEBIR2P.js";import"./ListBox-BUihuynq.js";import"./DragAndDrop-ay1Y-t06.js";import"./inertValue-BKJFDmBR.js";import"./useListState-CACId7yg.js";import"./useHighlightSelectionDescription-d6M6VmyO.js";import"./useUpdateEffect-CBpSttm7.js";import"./useHasTabbableChild-DO2zdEjM.js";import"./check-Byrqj8ZS.js";import"./ListBoxSection-CkBQy9Ny.js";import"./Virtualizer-B8TdHiLv.js";import"./useObserveElement-BpFA1cKX.js";import"./chevron-down-BgwDUqT2.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-EhwrHqEn.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
