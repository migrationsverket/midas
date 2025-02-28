import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-D7PG-gdY.js";import{F}from"./Flex-vd3UMVVs.js";import{F as n}from"./FlexItem-D6B5gCP0.js";import{T as o}from"./TextField-BraZMSia.js";import{S as I}from"./Select-WI4llHIi.js";import{B as m}from"./Button-D7qCCutR.js";import{R as g,a as b}from"./Radio-BfRQzQ1G.js";import{C as h}from"./CheckboxGroup-C4INSh3X.js";import{C as k}from"./Checkbox-CnQiK99G.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-CHclY7qY.js";import"./clsx-B-dksMZM.js";import"./Text-8acfy1XY.js";import"./useFormValidation-Bn6j9spX.js";import"./TextField-DBXJ8YG2.js";import"./Hidden-DgLkUl0S.js";import"./index-cpIEhwLo.js";import"./useField-Dy969mYx.js";import"./useLabels-NU5OlLNk.js";import"./useTextField-BYI_gS3H.js";import"./useControlledState-DGyHFLi9.js";import"./TextField.module-RvTXLpy1.js";import"./Button-OpOVPQEK.js";import"./Tag-BZCPjLkt.js";import"./Collection-BI0jT7py.js";import"./index-DwWe6W7f.js";import"./ListBox-ovBu6abB.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DvR_ryLT.js";import"./SelectionManager-D5wjtbJU.js";import"./useEvent-BEEjl705.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CnLJ4Sss.js";import"./context-DRbXrThh.js";import"./useDescription-C2gAlpY9.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-DVtjuLGg.js";import"./useListState-PbxkRQgQ.js";import"./useHighlightSelectionDescription-XwQ3FTaW.js";import"./useLocalizedStringFormatter-DQ49o7SX.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-DthDI6f-.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-DUrERALe.js";import"./DismissButton-BpDDjnBb.js";import"./VisuallyHidden-DbUQ2u6f.js";import"./useModal-BafWInih.js";import"./useMenuTrigger-D8FDfUme.js";import"./useMenuTriggerState-C7EZ_QrZ.js";import"./chevron-down-U1dNK9nR.js";import"./Group-D9RqlZ8M.js";import"./RSPContexts-CeCCo7XS.js";const Ae={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},i={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(l=>({id:l,name:l}))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},a={args:{},render:()=>{const r=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Flex>
        <FlexItem col={12}>
          <TextField label='Ange ditt fullständiga namn' description='Glöm inte dina eventuella mellannamn!' />
        </FlexItem>
        <FlexItem col={12}>
          <TextField label='Personnummmer' description='Anges på formen ÅÅMMDD-XXXX' />
        </FlexItem>
        <FlexItem col={12}>
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode={'single'} options={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
          </Select>
        </FlexItem>

        <FlexItem>
          <Button>Skicka</Button>
        </FlexItem>
      </Flex>;
  }
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,x,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
    const SEX = ['Man', 'Kvinna', 'Annat'];
    return <div>
        <Flex>
          <FlexItem col={6}>
            <RadioGroup label='Anledning' description='Ange anledning till att du söker i databasen'>
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </FlexItem>
          <FlexItem col={6}>
            <CheckboxGroup label='Databas' description='Välj databas att söka i'>
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </FlexItem>
          <FlexItem col={6}>
            <TextField label='Namn' description='' />
          </FlexItem>
          <FlexItem col={6}>
            <TextField label='Personnummer' />
          </FlexItem>

          <FlexItem col={6}>
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode={'single'} options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
          </FlexItem>
          <FlexItem col={6}>
            <TextField label='Ärendekod' />
          </FlexItem>

          <FlexItem col={'auto'}>
            <Button>Sök</Button>
          </FlexItem>
          <FlexItem col={'auto'}>
            <Button variant='secondary'>Rensa</Button>
          </FlexItem>
        </Flex>
      </div>;
  }
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Se=["SimpleForm","TwoColumnForm"];export{i as SimpleForm,a as TwoColumnForm,Se as __namedExportsOrder,Ae as default};
