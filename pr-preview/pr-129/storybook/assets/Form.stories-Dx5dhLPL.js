import{j as e}from"./jsx-runtime-CfatFE5O.js";import{$ as b}from"./Form-BsnM7wIB.js";import{T as r}from"./TextField-CGuP3PZF.js";import{F as I,a as t}from"./FlexItem-Ciu09zXK.js";import{C as g}from"./CheckboxGroup-Cvj-lhkD.js";import{C as k}from"./Checkbox-CRtqHIPT.js";import{a as S,R as f}from"./Radio-Dqe0gXIW.js";import{S as F,I as j}from"./Select-CmF2Rd4Q.js";import{B as m}from"./Button-BxwB_ABT.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-B5I9Mbqb.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Text-DQL_qUAc.js";import"./useControlledState-D4qbXjzs.js";import"./Hidden-Gy3GO5dR.js";import"./triangle-alert-BtsNBhJc.js";import"./createLucideIcon-DQK9Z80p.js";import"./Group-Bs25zYM-.js";import"./RSPContexts-HQcWPJyv.js";import"./VisuallyHidden-PZ3yCKRL.js";import"./FocusScope-DNSqUz2w.js";import"./context-B6q4sYiW.js";import"./Button-DXFpw2KU.js";import"./ListBox-DvLrMpeF.js";import"./Collection-BtHce7_i.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-B3iapMmU.js";import"./isScrollable-Bts8_1NI.js";import"./SelectionManager-CCNC6skk.js";import"./scrollIntoView-BJOH5f2z.js";import"./useDescription-D_hncH71.js";import"./useCollator-CVNM6qS6.js";import"./useListState-DJzrjJHt.js";import"./Dialog-LHjsKVp2.js";import"./PressResponder-BJgT4zxW.js";import"./getScrollParent-yMl4gzwT.js";import"./useLocalizedStringFormatter-D0BHcg8e.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CpBvmz1g.js";import"./useMenuTrigger-Bt1VAIkW.js";import"./chevron-down-CVNiYbvV.js";const xe={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(I,{children:[e.jsx(t,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(t,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(t,{col:12,children:e.jsx(F,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(n=>e.jsx(j,{children:n},n))})}),e.jsx(t,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],n=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(I,{children:[e.jsx(t,{col:6,children:e.jsx(S,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:n.map(l=>e.jsx(f,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(g,{label:"Databas",description:"Välj databas att söka i",children:a.map(l=>e.jsx(k,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(t,{col:6,children:e.jsx(F,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const ue=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,i as TwoColumnForm,ue as __namedExportsOrder,xe as default};
