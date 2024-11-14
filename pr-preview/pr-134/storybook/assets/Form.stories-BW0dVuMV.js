import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{$ as b}from"./Form-CCYym-J0.js";import{T as n}from"./TextField-DufKFLXE.js";import{F as I,a as t}from"./FlexItem-8KMTMixR.js";import{C as g}from"./CheckboxGroup-Cc3jPbp1.js";import{C as k}from"./Checkbox-xR70SzyB.js";import{a as S,R as f}from"./Radio-DPCw-0Wo.js";import{S as F,I as j}from"./Select-BlMyHaX5.js";import{B as m}from"./Button-JCSNR-2w.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./useFocusable-C6jNUHDg.js";import"./index-Drt3gf4w.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DdsvHRJJ.js";import"./Hidden-BdIcpH7f.js";import"./triangle-alert-BkMwT_kE.js";import"./createLucideIcon-WuqQdmgs.js";import"./Group-DPNhjRqE.js";import"./RSPContexts-Bc9pl35m.js";import"./VisuallyHidden-tzU1VrE-.js";import"./FocusScope-BobShdvL.js";import"./context-CkJ-GuNh.js";import"./ListBox-BEKTHaqV.js";import"./useLocalizedStringFormatter-B6EHV5sq.js";import"./SelectionManager-BUjlZe7l.js";import"./scrollIntoView-J620AJLa.js";import"./isScrollable-Bts8_1NI.js";import"./useDescription-6AUSMGLv.js";import"./Dialog-V38XWmyV.js";import"./PressResponder-DzwvMiQH.js";import"./getScrollParent-yMl4gzwT.js";import"./Collection-S6q6hP5R.js";import"./index-Bb28N59q.js";import"./DragAndDrop-BDFo6_gz.js";import"./useCollator-MjvPODsq.js";import"./useSingleSelectListState-ua_CHISP.js";import"./intlStrings-ZMTSFH_M.js";import"./chevron-down-FOu3nidH.js";const se={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(I,{children:[e.jsx(t,{col:12,children:e.jsx(n,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(t,{col:12,children:e.jsx(n,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(t,{col:12,children:e.jsx(F,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(r=>e.jsx(j,{children:r},r))})}),e.jsx(t,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],r=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(I,{children:[e.jsx(t,{col:6,children:e.jsx(S,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:r.map(l=>e.jsx(f,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(g,{label:"Databas",description:"Välj databas att söka i",children:a.map(l=>e.jsx(k,{value:l,children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(n,{label:"Namn",description:""})}),e.jsx(t,{col:6,children:e.jsx(n,{label:"Personnummer"})}),e.jsx(t,{col:6,children:e.jsx(F,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(t,{col:6,children:e.jsx(n,{label:"Ärendekod"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(t,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const ce=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,i as TwoColumnForm,ce as __namedExportsOrder,se as default};
