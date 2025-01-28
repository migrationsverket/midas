import{j as e}from"./jsx-runtime-DH9XN8A8.js";import{$ as b}from"./Form-6qhXXIxn.js";import{F}from"./Flex-BQBoSrq5.js";import{F as n}from"./FlexItem-a9usv6rk.js";import{T as l}from"./TextField-C1ZJdY04.js";import{S as I,I as j}from"./Select-Ctj5Rqxl.js";import{B as m}from"./Button-ky_ey7R1.js";import{R as g,a as k}from"./Radio-CLMBlSjV.js";import{C as f}from"./CheckboxGroup-BgvsCC-H.js";import{C as S}from"./Checkbox-n4ZMlx4G.js";import"./index-v7USjxUg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-CqyV9KfR.js";import"./clsx-B-dksMZM.js";import"./Text-DrJ9K20X.js";import"./TextField.module-BQ_LG1IS.js";import"./useControlledState-CKtJapZZ.js";import"./useField-B1pHB-Nx.js";import"./Hidden-UyBzn3h3.js";import"./index-voQlCD4e.js";import"./Button-cy0YQPBK.js";import"./ListBox-Dgd-qrsy.js";import"./Collection-8piRyjmC.js";import"./index-DrWyGVw-.js";import"./DragAndDrop-C6Riy_Nb.js";import"./Separator-Dtf2YJfv.js";import"./SelectionManager-BYD2QTVK.js";import"./FocusScope-G3ZLoSJ5.js";import"./context-DQYs1ISz.js";import"./useDescription-DUf1CfVo.js";import"./ListKeyboardDelegate-CXCmEo1-.js";import"./useListState-DbBfC_EQ.js";import"./Dialog-CDeFJ-i8.js";import"./RSPContexts-DJmwAC-V.js";import"./PressResponder-ClJujesq.js";import"./useLocalizedStringFormatter-DLyzyrox.js";import"./VisuallyHidden-DuYW2rLE.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BrZOWkl1.js";import"./chevron-down-BUsHYY-S.js";import"./createLucideIcon-CwPnNAnq.js";import"./Group-B-73uhwN.js";const pe={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(l,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(l,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(r=>e.jsx(j,{children:r},r))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(f,{label:"Databas",description:"Välj databas att söka i",children:a.map(t=>e.jsx(S,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(l,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(l,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(t=>e.jsx(j,{children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(l,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const xe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,i as TwoColumnForm,xe as __namedExportsOrder,pe as default};
