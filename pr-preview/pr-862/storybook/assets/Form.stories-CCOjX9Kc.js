import{j as n}from"./iframe-DjblUb4f.js";import{$ as j}from"./Form-BGklT3__.js";import{G}from"./Grid-j36CmarF.js";import{G as e}from"./GridItem-tr8hAsG0.js";import{T as r}from"./TextField-Dp6m4wpf.js";import{S as I}from"./Select-EJIsuHjc.js";import{B as a}from"./Button-jqem5o_e.js";import{R as g,a as b}from"./Radio-DRKD3LdS.js";import{C as h}from"./CheckboxGroup-BbvaGxML.js";import{C as k}from"./Checkbox-NfER8W-g.js";import"./preload-helper-Dp1pzeXC.js";import"./utils-CCs0666b.js";import"./clsx-B-dksMZM.js";import"./useFormValidation-CTb2pUzg.js";import"./useFocusRing-kWeS4kYG.js";import"./index-BRUBfIwz.js";import"./index-CX_tGf-y.js";import"./clsx-Ciqy0D92.js";import"./TextFieldBase-tuiygKWr.js";import"./TextField-BTOwPDEn.js";import"./ValidationText-CeuabXWS.js";import"./Text-CQ-HTbSR.js";import"./useLocalizedStringFormatter-CYt6D2wb.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-B_puAPyU.js";import"./SelectionManager-YMB34XXr.js";import"./useEvent-D9BEd9jQ.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-DAGwEA8m.js";import"./useDescription-DugSly09.js";import"./useControlledState-C6VV_tYe.js";import"./Group-B_P5iF2G.js";import"./Input-mQGAZSV2.js";import"./Hidden-BHPryOw3.js";import"./Button-B9zochEP.js";import"./useLabels-BA1x20eC.js";import"./useButton-Gy64vn3J.js";import"./useTextField-pZKRMk1k.js";import"./useField-Dl2T9VxX.js";import"./TextField.module-DjUItNl5.js";import"./Text-CKgyS86B.js";import"./Label-BDwERwrw.js";import"./Dialog-CuYEKLSt.js";import"./RSPContexts-CTMHC7KX.js";import"./OverlayArrow-BrhF-NHn.js";import"./useResizeObserver-C8OmM62e.js";import"./Collection-Do-Q1XEi.js";import"./index-BHfYTd6D.js";import"./Separator-DTzXMfqC.js";import"./PressResponder-CZf_sqUy.js";import"./useLocalizedStringFormatter-Bgxg-DI8.js";import"./getScrollParent-CvodOSaS.js";import"./VisuallyHidden-CU6EJPzu.js";import"./x-DF7gtUUi.js";import"./createLucideIcon-Ds5JUCEV.js";import"./Heading-B-Gg7u13.js";import"./info-Bpsgxxtm.js";import"./Popover-CdNU46fL.js";import"./Tag-ee6Dy7Qx.js";import"./ListBox-CSVlMhuA.js";import"./DragAndDrop-C9JHBqNt.js";import"./inertValue-ClbzTva-.js";import"./useListState-CY-YdkS9.js";import"./useHighlightSelectionDescription-pEafrzko.js";import"./useUpdateEffect-Cz2fZmFn.js";import"./useHasTabbableChild-Caw7C_YD.js";import"./check-CxRzWvW-.js";import"./ListBoxSection-DBkk0f11.js";import"./Virtualizer-BBEDRiBX.js";import"./useObserveElement-CTC1StHT.js";import"./chevron-down-COq5AIoH.js";import"./Button.module-DRhvPh0f.js";import"./useToggleState-BeMqzR32.js";const wn={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},m={args:{},render:()=>{const t=["Banan","Apple","Mango"];return n.jsxs(G,{children:[n.jsx(e,{size:12,children:n.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),n.jsx(e,{size:12,children:n.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),n.jsx(e,{size:12,children:n.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:t.map(o=>({id:o,name:o}))})}),n.jsx(e,{children:n.jsx(a,{children:"Skicka"})})]})}},s={args:{},render:()=>{const t=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"];return n.jsx("div",{children:n.jsxs(G,{children:[n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(i=>n.jsx(b,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:t.map(i=>n.jsx(k,{value:i,children:i},i))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Namn",description:""})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Personnummer"})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:t.map(i=>({name:i,id:i}))})}),n.jsx(e,{size:{xs:12,sm:6},children:n.jsx(r,{label:"Ärendekod"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{children:"Sök"})}),n.jsx(e,{size:"auto",children:n.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var d,l,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
