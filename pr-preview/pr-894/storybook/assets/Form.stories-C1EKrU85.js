import{j as n}from"./iframe-ChriHfRz.js";import{$ as j}from"./Form-CnlYUZHz.js";import{G}from"./Grid-BrZvi2uM.js";import{G as e}from"./GridItem-BaZBdEp7.js";import{T as r}from"./TextField-CsQcDFw8.js";import{S as I}from"./Select-C0cwECGO.js";import{B as a}from"./Button-sPUZ2dhd.js";import{R as g,a as b}from"./Radio-sEtvsHgl.js";import{C as h}from"./CheckboxGroup-Bf9AN6LP.js";import{C as k}from"./Checkbox-cIeV5QbR.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-NlyHr12J.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-D5XLCEH9.js";import"./useFocusRing-DumsLaxs.js";import"./index-CwCJkZOP.js";import"./index-DuyMh8Ep.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-8nRyZ_-e.js";import"./TextField-9eNVlRJb.js";import"./FieldError-DaqflnxE.js";import"./Text-CFBJlnAp.js";import"./Text-B81nQ38B.js";import"./RSPContexts-CCjzDUiJ.js";import"./Group-KURMn020.js";import"./Input-jytJg_Tg.js";import"./Hidden-0BGnOEK5.js";import"./Button-D3GS0Foh.js";import"./useLabels-Cdo3YkMo.js";import"./useButton-CUC4v2hj.js";import"./useTextField-Au-AEaf5.js";import"./useControlledState-_Fqm2YEq.js";import"./useField-Fh9uy1XQ.js";import"./TextField.module-Ddb2XBAw.js";import"./Label-DrHez1Ml.js";import"./Dialog-CUGjwZAH.js";import"./OverlayArrow-CU4zuyQT.js";import"./useResizeObserver-D2z6MA5b.js";import"./Collection-BLXQACxq.js";import"./index-xNCKh-U3.js";import"./Separator-CJ3eM7P9.js";import"./SelectionManager-zUmBlCK4.js";import"./useEvent-J4XnAaqy.js";import"./scrollIntoView-DidsSNjO.js";import"./SelectionIndicator-DFdqCQav.js";import"./useDescription-ClBBxyt-.js";import"./ListKeyboardDelegate-BNdNUt2q.js";import"./PressResponder-Ctwlqmvz.js";import"./useLocalizedStringFormatter-BgEKAS5Y.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./getScrollParent-BpZY8Scv.js";import"./VisuallyHidden-BJr1c5_d.js";import"./useLocalizedStringFormatter-pEmWOPwU.js";import"./x-DKB82TMd.js";import"./createLucideIcon-CaAuCsQL.js";import"./Heading-DKEpWMNH.js";import"./info-y1KaSV-i.js";import"./Popover-Bu_D_s0t.js";import"./Tag-DlqOwO8R.js";import"./ListBox-C91qGkkq.js";import"./DragAndDrop-gQikaNh9.js";import"./inertValue-D97lZInS.js";import"./useListState-BFCWXB4p.js";import"./useHighlightSelectionDescription-C0B5KexE.js";import"./useUpdateEffect-BMt5l3wp.js";import"./useHasTabbableChild-Cb1Is-tL.js";import"./check-DPp5HojC.js";import"./ListBoxSection-B1HLLFpX.js";import"./Virtualizer-er18Lbc2.js";import"./chevron-down-DPQapy87.js";import"./Button.module-CcWMkJAG.js";import"./useToggleState-DX5cxiT_.js";const $n={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
