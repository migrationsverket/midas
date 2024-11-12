import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{$ as b}from"./Form-C2wKEvlV.js";import{T as r}from"./TextField-CdgN15En.js";import{F as I,a as t}from"./FlexItem-DJyBMUzl.js";import{C as g}from"./CheckboxGroup-DPA0kZRB.js";import{C as k}from"./Checkbox-vNDAG1TA.js";import{a as S,R as f}from"./Radio-nqmg82tZ.js";import{S as F,I as j}from"./Select-DAXtt8sP.js";import{B as m}from"./Button-d63trt-j.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useFocusable-DjeXhjfY.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./Text-DKPe_caT.js";import"./useControlledState-DK-fUnpa.js";import"./Hidden-mTViOgbj.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";import"./Group-D4Hf35YC.js";import"./RSPContexts-Bc9pl35m.js";import"./VisuallyHidden-CewjJGy9.js";import"./FocusScope-B5i0-YrV.js";import"./context-DxE0kdpO.js";import"./Button-qWGkjEjQ.js";import"./ListBox-Co7CTmJx.js";import"./Collection-C6PWZuN1.js";import"./index-Bb28N59q.js";import"./DragAndDrop-BDFo6_gz.js";import"./isScrollable-Bts8_1NI.js";import"./SelectionManager-CRq7ipwK.js";import"./scrollIntoView-Csfem_pY.js";import"./useDescription-DdGCa4C_.js";import"./useCollator-6hwkwygX.js";import"./useListState-DWRPznFH.js";import"./Dialog-DOLxOzIg.js";import"./PressResponder--Ku2YYes.js";import"./getScrollParent-yMl4gzwT.js";import"./useLocalizedStringFormatter-57JI9Dsv.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CS72DfVB.js";import"./useMenuTrigger-CDW-9GQw.js";import"./chevron-down-FOu3nidH.js";const xe={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(I,{children:[e.jsx(t,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(t,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(t,{col:12,children:e.jsx(F,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(n=>e.jsx(j,{children:n},n))})}),e.jsx(t,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],n=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(I,{children:[e.jsx(t,{col:6,children:e.jsx(S,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:n.map(l=>e.jsx(f,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(g,{label:"Databas",description:"Välj databas att söka i",children:a.map(l=>e.jsx(k,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(t,{col:6,children:e.jsx(F,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
