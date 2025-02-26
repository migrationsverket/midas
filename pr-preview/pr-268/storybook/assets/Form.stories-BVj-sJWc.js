import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{$ as b}from"./Form-3nrIbYVr.js";import{F}from"./Flex-B13okTZk.js";import{F as n}from"./FlexItem-BpS8Q41M.js";import{T as r}from"./TextField-Cjoe213B.js";import{S as I,I as j}from"./Select-BPy7E2lW.js";import{B as m}from"./Button-9KeTfxY-.js";import{R as g,a as k}from"./Radio-D7unB2Xz.js";import{C as f}from"./CheckboxGroup-DwBm1nsW.js";import{C as S}from"./Checkbox-BBFRj7Dm.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-B8HhqQIl.js";import"./clsx-B-dksMZM.js";import"./Text-Bxg5Zhzp.js";import"./TextField.module-DSYGJTmY.js";import"./useControlledState-BgxdDqm0.js";import"./useField-Dt29Lb0W.js";import"./Hidden-C-kiqh_I.js";import"./index-D2jEcJry.js";import"./useLabels-BiAlD12e.js";import"./Button-ojkDv_BK.js";import"./ListBox-DoA6ZTAv.js";import"./Collection-DVrKtIZX.js";import"./index-Btf1eDe9.js";import"./DragAndDrop-Bfvg-Q35.js";import"./Separator-CNfBi8L5.js";import"./SelectionManager-BrHtouv1.js";import"./useEvent-BzCFeyOM.js";import"./FocusScope-hGcwqkni.js";import"./context-e_uznqlg.js";import"./useDescription-Dx2tUlT3.js";import"./ListKeyboardDelegate-JdsgzHfV.js";import"./useListState-DzqfRXv-.js";import"./Dialog-C28rmmUa.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuCbQGRr.js";import"./PressResponder-CtzAwrCi.js";import"./useLocalizedStringFormatter-4pChcv_1.js";import"./VisuallyHidden-DjSI67in.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-DnJtv4Od.js";import"./chevron-down-DOK0m5UE.js";import"./createLucideIcon-DjmUzaoT.js";import"./Group-DWi8bIf_.js";const Fe={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(f,{label:"Databas",description:"Välj databas att söka i",children:a.map(t=>e.jsx(S,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(t=>e.jsx(j,{children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Ie=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,i as TwoColumnForm,Ie as __namedExportsOrder,Fe as default};
