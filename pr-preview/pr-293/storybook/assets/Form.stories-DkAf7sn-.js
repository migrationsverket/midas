import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as b}from"./Form-BTz3WNf3.js";import{F}from"./Flex-RZ_CcYYT.js";import{F as n}from"./FlexItem-CPZfAGKg.js";import{T as r}from"./TextField-DnA6Comk.js";import{S as I,I as j}from"./Select-e2Qb2A1n.js";import{B as m}from"./Button-BqQZVkgo.js";import{R as g,a as k}from"./Radio-DucTj8-A.js";import{C as f}from"./CheckboxGroup-C7NP2RDC.js";import{C as S}from"./Checkbox-nOyMU2ao.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-DASL9ZMT.js";import"./clsx-B-dksMZM.js";import"./Text-DX8e4zrg.js";import"./useFormValidation-8Qy7QSzR.js";import"./Hidden-BuU8W4f_.js";import"./index-cpIEhwLo.js";import"./useField-bJrG6qmG.js";import"./useLabels-MT93WuwX.js";import"./TextField.module-CBAfyb2u.js";import"./useControlledState-DGyHFLi9.js";import"./Button-yfKCtftD.js";import"./ListBox-_QlYZUep.js";import"./Collection-BwU2u2VA.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-d-7_urt1.js";import"./SelectionManager-XmkSC-nD.js";import"./useEvent-DdIskmYv.js";import"./FocusScope-ChnRxKGK.js";import"./context-Pt6elAMD.js";import"./useDescription-E6E6fNpx.js";import"./ListKeyboardDelegate-giRuR5NM.js";import"./useListState-SMYdBkRw.js";import"./Dialog-CYSlf_Sz.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CiLmTXSK.js";import"./PressResponder-CBO2T7iU.js";import"./useLocalizedStringFormatter-C4mPhEQp.js";import"./VisuallyHidden-D11zA9Ye.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-C7794JqY.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./Group-Bxcv9fgd.js";const Ie={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(f,{label:"Databas",description:"Välj databas att söka i",children:a.map(t=>e.jsx(S,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(t=>e.jsx(j,{children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt'>
            {ITEMS.map((item: string) => <Item key={item}>{item}</Item>)}
          </Select>
        </FlexItem>

        <FlexItem>
          <Button>Skicka</Button>
        </FlexItem>
      </Flex>;
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,x,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön'>
              {SEX.map((item: string) => <Item key={item}>{item}</Item>)}
            </Select>
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const je=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,i as TwoColumnForm,je as __namedExportsOrder,Ie as default};
