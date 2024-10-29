import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{$ as b}from"./Form-BnF4q38W.js";import{T as n}from"./TextField-BrimOI-Z.js";import{F as I,a as t}from"./FlexItem-D5ZCWWBy.js";import{C as g}from"./CheckboxGroup-DHxjMi0H.js";import{C as k}from"./Checkbox-iNWqAS3M.js";import{a as S,R as f}from"./Radio-DYSsYt4B.js";import{S as F,I as j}from"./Select-IHJqFg33.js";import{B as m}from"./Button-CXg1YB7h.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useFocusable-oEo1n-jK.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CktEcWfI.js";import"./Hidden-CeomKQRv.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";import"./Group-CScXN0eg.js";import"./RSPContexts-DD7oPhfd.js";import"./VisuallyHidden-BgAYQwv3.js";import"./FocusScope-B0iEahOm.js";import"./context-CTzaVcmG.js";import"./ListBox-EV5pEwkC.js";import"./useLocalizedStringFormatter-Cah0Scr7.js";import"./SelectionManager-NtlNGHh6.js";import"./scrollIntoView-D_tcupIM.js";import"./useDescription-DqB6if4d.js";import"./Dialog-_mMpTr4W.js";import"./useCollator-CmOnbdDs.js";import"./PressResponder-BOK4ApId.js";import"./Collection-BN912an0.js";import"./index-Bb28N59q.js";import"./DragAndDrop-BEwgP_ES.js";import"./useSingleSelectListState-DmcIQ02l.js";import"./intlStrings-ZMTSFH_M.js";import"./chevron-down-FOu3nidH.js";const ie={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const i=["Banan","Apple","Mango"];return e.jsxs(I,{children:[e.jsx(t,{col:12,children:e.jsx(n,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(t,{col:12,children:e.jsx(n,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(t,{col:12,children:e.jsx(F,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:i.map(r=>e.jsx(j,{children:r},r))})}),e.jsx(t,{children:e.jsx(m,{children:"Skicka"})})]})}},a={args:{},render:()=>{const i=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(I,{children:[e.jsx(t,{col:6,children:e.jsx(S,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(l=>e.jsx(f,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(g,{label:"Databas",description:"Välj databas att söka i",children:i.map(l=>e.jsx(k,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(n,{label:"Namn",description:""})}),e.jsx(t,{col:6,children:e.jsx(n,{label:"Personnummer"})}),e.jsx(t,{col:6,children:e.jsx(F,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(n,{label:"Ärendekod"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,x,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const me=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,a as TwoColumnForm,me as __namedExportsOrder,ie as default};
