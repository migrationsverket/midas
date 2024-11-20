import{j as e}from"./jsx-runtime-CfatFE5O.js";import{$ as b}from"./Form-BDgZm-Zm.js";import{T as r}from"./TextField-CSrwGZI5.js";import{F as I,a as t}from"./FlexItem-CpQqq4BJ.js";import{C as g}from"./CheckboxGroup-7s8KbyuM.js";import{C as k}from"./Checkbox-D1i-69J0.js";import{a as S,R as f}from"./Radio-D5c0-TWI.js";import{S as F,I as j}from"./Select-B18jPI5t.js";import{B as m}from"./Button-Cs4NJ-f6.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-CBtYJN0G.js";import"./index-ZuzByk-F.js";import"./clsx-B-dksMZM.js";import"./Text-tvqNwYMB.js";import"./useControlledState-nICLO8eb.js";import"./Hidden-BdUlZqv0.js";import"./Group-BBIaBYIN.js";import"./RSPContexts-HQcWPJyv.js";import"./VisuallyHidden-BTRt4CT8.js";import"./FocusScope-CQd3XFtb.js";import"./context-DSPFb5Ny.js";import"./ListBox-0A6wTr5z.js";import"./Collection-2vXA9U53.js";import"./index-DvHoLfqc.js";import"./DragAndDrop-D_CtgD1w.js";import"./isScrollable-Bts8_1NI.js";import"./SelectionManager-Fpk2wWjy.js";import"./scrollIntoView-h4rVNS8Z.js";import"./useDescription-DH96oKB5.js";import"./useCollator-D-4pNSNE.js";import"./useListState-DZnMna8T.js";import"./Dialog-C4OkTBCQ.js";import"./PressResponder-CoilRp67.js";import"./getScrollParent-yMl4gzwT.js";import"./useLocalizedStringFormatter-C26rDIav.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-BYU95GUG.js";import"./useMenuTrigger-Dpz6LkCD.js";import"./chevron-down-CVNiYbvV.js";import"./createLucideIcon-DQK9Z80p.js";const de={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(I,{children:[e.jsx(t,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(t,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(t,{col:12,children:e.jsx(F,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(n=>e.jsx(j,{children:n},n))})}),e.jsx(t,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],n=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(I,{children:[e.jsx(t,{col:6,children:e.jsx(S,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:n.map(l=>e.jsx(f,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(g,{label:"Databas",description:"Välj databas att söka i",children:a.map(l=>e.jsx(k,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(t,{col:6,children:e.jsx(F,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const pe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,i as TwoColumnForm,pe as __namedExportsOrder,de as default};
