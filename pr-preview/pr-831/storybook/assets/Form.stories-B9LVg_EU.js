import{j as n}from"./iframe-aRD0Mkaw.js";import{$ as j}from"./Form-CvHbKkS2.js";import{G}from"./Grid-DFsGpWPG.js";import{G as e}from"./GridItem-_U-0ED9a.js";import{T as r}from"./TextField-U_PMxL6M.js";import{S as I}from"./Select-Du2sY6s7.js";import{B as a}from"./Button-PTsis6M8.js";import{R as g,a as b}from"./Radio-DcqPxxTJ.js";import{C as h}from"./CheckboxGroup-Byn7LRMh.js";import{C as k}from"./Checkbox-jPxq_0dd.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-DBWduLU9.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CP9lHE6N.js";import"./useFocusRing-CwniUdxO.js";import"./index-CgoR9ooH.js";import"./index-DuOXwpRn.js";import"./TextFieldBase-qA3IH2PX.js";import"./TextField-MgpocNcN.js";import"./FieldError-DnmNPDCT.js";import"./Text-DMkocQBc.js";import"./Text-CdynMbsv.js";import"./context-CJzEtum1.js";import"./SelectionManager-AI0BTCPI.js";import"./useEvent-5gmYfBO_.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-D6qNJ36Z.js";import"./useDescription-CIH85OZY.js";import"./useControlledState-BPIv4Hqq.js";import"./Group-B9jhK7OL.js";import"./Input-CDohj-kZ.js";import"./Hidden-Dkjnz7-u.js";import"./Button-CDyNVJk1.js";import"./useLabels-DCVgCxBr.js";import"./useButton-Ca1ObhS9.js";import"./useTextField-WkioPuo9.js";import"./useField-CoezKbgu.js";import"./TextField.module-DjUItNl5.js";import"./Label-DgZkHQHo.js";import"./Dialog-CqancBsU.js";import"./RSPContexts-BliNcUKV.js";import"./OverlayArrow-BmqFBLvu.js";import"./useResizeObserver-D__xjbfT.js";import"./Collection-CryEf6eq.js";import"./index-DfB1ljXS.js";import"./Separator-2aBcR5y2.js";import"./PressResponder-DgQWXgKs.js";import"./useLocalizedStringFormatter-BoCGyMlo.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-D6sAK5hV.js";import"./useLocalizedStringFormatter-rRf8AxXC.js";import"./x-Dyw-kcNg.js";import"./createLucideIcon-PtsNCAY4.js";import"./Heading-BfE0WyES.js";import"./info-DYj5Tq6d.js";import"./Popover-C27QY6he.js";import"./Tag-B5Y46xeB.js";import"./ListBox-DJxmKyUr.js";import"./DragAndDrop-DgtlOkcq.js";import"./inertValue-CehiK8Dd.js";import"./useListState-HnXP9fpX.js";import"./useHighlightSelectionDescription-BvR4wqBD.js";import"./useUpdateEffect-D0PWveng.js";import"./useHasTabbableChild-C7zpBHgv.js";import"./check-DyuAK42V.js";import"./ListBoxSection-DapZjo-h.js";import"./Virtualizer-CVmb65rZ.js";import"./useObserveElement-DKYwmHBc.js";import"./chevron-down-BlWXBNkW.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-Bp2oADPh.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
