import{j as e}from"./jsx-runtime-CfatFE5O.js";import{$ as b}from"./Form-Bv9Hrtjx.js";import{T as n}from"./TextField-DZHENuq0.js";import{F as I,a as t}from"./FlexItem-DXoz_6JH.js";import{C as g}from"./CheckboxGroup-BBlJlyON.js";import{C as k}from"./Checkbox-Bfi7Omu0.js";import{R as S,a as f}from"./Radio-8JiMU_YT.js";import{S as F,I as j}from"./Select-CW5tfoVm.js";import{B as m}from"./Button-g7SftWZC.js";import"./ButtonGroup-DkdsXccL.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-CI7IKKVh.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Text-B5xeh108.js";import"./Hidden-Cj803rEv.js";import"./Label-CyV7_vzg.js";import"./useControlledState-CccRFgkZ.js";import"./Group-BjurS_ee.js";import"./RSPContexts-Djf1EgA4.js";import"./VisuallyHidden-CLrU_C9N.js";import"./FocusScope-DXS1oVaO.js";import"./context-WoXASG7e.js";import"./ListBox-DyeJLwWs.js";import"./Collection-C4MnC92I.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-DA-Ld4HW.js";import"./Separator-CIU4dNV7.js";import"./SelectionManager-DRGqbt9A.js";import"./useDescription-g1HYx49D.js";import"./ListKeyboardDelegate-DaTzZypo.js";import"./useListState-Cs8bU5OO.js";import"./Dialog-DgqT-KSE.js";import"./PressResponder-B8JDidd-.js";import"./useLocalizedStringFormatter-B63kKuQ6.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-5KHe4aPU.js";import"./chevron-down-CVNiYbvV.js";import"./createLucideIcon-DQK9Z80p.js";const ce={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(I,{children:[e.jsx(t,{col:12,children:e.jsx(n,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(t,{col:12,children:e.jsx(n,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(t,{col:12,children:e.jsx(F,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(r=>e.jsx(j,{children:r},r))})}),e.jsx(t,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(I,{children:[e.jsx(t,{col:6,children:e.jsx(S,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(l=>e.jsx(f,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(g,{label:"Databas",description:"Välj databas att söka i",children:a.map(l=>e.jsx(k,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(n,{label:"Namn",description:""})}),e.jsx(t,{col:6,children:e.jsx(n,{label:"Personnummer"})}),e.jsx(t,{col:6,children:e.jsx(F,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(n,{label:"Ärendekod"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['Banan', 'Apple', 'Mango'];
    return <Flex>
        <FlexItem col={12}>
          <TextField label="Ange ditt fullständiga namn" description="Glöm inte dina eventuella mellannamn!" />
        </FlexItem>
        <FlexItem col={12}>
          <TextField label="Personnummmer" description="Anges på formen ÅÅMMDD-XXXX" />
        </FlexItem>
        <FlexItem col={12}>
          <Select label="Vilken är din favoritfrukt" placeholder="Välj en frukt">
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
            <RadioGroup label="Anledning" description="Ange anledning till att du söker i databasen">
              {RADIOITEMS.map((item: string) => <Radio value={item} key={item}>
                  {item}
                </Radio>)}
            </RadioGroup>
          </FlexItem>
          <FlexItem col={6}>
            <CheckboxGroup label="Databas" description="Välj databas att söka i">
              {ITEMS.map((item: string) => <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>)}
            </CheckboxGroup>
          </FlexItem>
          <FlexItem col={6}>
            <TextField label="Namn" description="" />
          </FlexItem>
          <FlexItem col={6}>
            <TextField label="Personnummer" />
          </FlexItem>

          <FlexItem col={6}>
            <Select label="Kön" description="Kan lämnas tomt" placeholder="Välj kön">
              {SEX.map((item: string) => <Item key={item}>{item}</Item>)}
            </Select>
          </FlexItem>
          <FlexItem col={6}>
            <TextField label="Ärendekod" />
          </FlexItem>

          <FlexItem col={'auto'}>
            <Button>Sök</Button>
          </FlexItem>
          <FlexItem col={'auto'}>
            <Button variant="secondary">Rensa</Button>
          </FlexItem>
        </Flex>
      </div>;
  }
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const de=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,i as TwoColumnForm,de as __namedExportsOrder,ce as default};
