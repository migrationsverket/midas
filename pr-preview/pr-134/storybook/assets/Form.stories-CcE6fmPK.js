import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{$ as b}from"./Form-UQcbmfMk.js";import{T as r}from"./TextField-CZBSxjbj.js";import{F as I,a as t}from"./FlexItem-B_xO5Yy1.js";import{C as g}from"./CheckboxGroup-CtCkfdlk.js";import{C as k}from"./Checkbox-Cb33JVu6.js";import{a as S,R as f}from"./Radio-DJBo3YPr.js";import{S as F,I as j}from"./Select-CXeDmdM6.js";import{B as m}from"./Button-CqiFVUUu.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useFocusable-FXxCDyRU.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./Text-Cg4FgRI1.js";import"./useControlledState-CQzcaGwO.js";import"./Hidden-DXstef2u.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";import"./Group-BzE3NrA9.js";import"./RSPContexts-Bc9pl35m.js";import"./VisuallyHidden-fcuevZ4j.js";import"./FocusScope-DqX_BpuW.js";import"./context-DPkFGduH.js";import"./ListBox-q5ecyqAM.js";import"./Collection-Bd6nTHYz.js";import"./index-Bb28N59q.js";import"./DragAndDrop-D1my3whc.js";import"./isScrollable-Bts8_1NI.js";import"./SelectionManager-BjK4YV19.js";import"./scrollIntoView-BzRic4Uk.js";import"./useDescription-D_qi9L6Z.js";import"./useCollator-DZ85_XvZ.js";import"./useListState-B-40T5bv.js";import"./Dialog-BSAjOKfg.js";import"./PressResponder-CDFuA0gX.js";import"./getScrollParent-yMl4gzwT.js";import"./useLocalizedStringFormatter-CdgOzlVp.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-DLH-mkXm.js";import"./useMenuTrigger-DP7c_t0Z.js";import"./chevron-down-FOu3nidH.js";const pe={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(I,{children:[e.jsx(t,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(t,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(t,{col:12,children:e.jsx(F,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(n=>e.jsx(j,{children:n},n))})}),e.jsx(t,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],n=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(I,{children:[e.jsx(t,{col:6,children:e.jsx(S,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:n.map(l=>e.jsx(f,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(g,{label:"Databas",description:"Välj databas att söka i",children:a.map(l=>e.jsx(k,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(t,{col:6,children:e.jsx(F,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const xe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,i as TwoColumnForm,xe as __namedExportsOrder,pe as default};
