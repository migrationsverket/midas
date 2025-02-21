import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as b}from"./Form-DXGSlahV.js";import{F}from"./Flex-Di1QQQg5.js";import{F as n}from"./FlexItem-DeKcLnIt.js";import{T as r}from"./TextField-pA66d_yF.js";import{S as I,I as j}from"./Select-CQZX_IGo.js";import{B as m}from"./Button-CYeqw5FN.js";import{R as g,a as k}from"./Radio-CfoqKMrs.js";import{C as f}from"./CheckboxGroup-Ducm2ssF.js";import{C as S}from"./Checkbox-BtVKYFxd.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-DG2xZKJq.js";import"./clsx-B-dksMZM.js";import"./Text-BeLJy-LL.js";import"./TextField.module-Cp8R-C_q.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BphT9t-O.js";import"./Hidden-CYwu0huo.js";import"./index-i7ZvCR4f.js";import"./useLabels-BEKG7W4A.js";import"./Button-D8XuhR1x.js";import"./ListBox-BgWTsgUR.js";import"./Collection-BIe4dyob.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-BtbxEbIp.js";import"./SelectionManager-DDbbtuvo.js";import"./useEvent-BoA7f_uB.js";import"./FocusScope-Cw4AWeD6.js";import"./context-DzglSndM.js";import"./useDescription-B-sGNlK1.js";import"./ListKeyboardDelegate-DevdDyi6.js";import"./useListState-gREoZFZP.js";import"./Dialog-VNnmLT02.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-DDHmBEKE.js";import"./PressResponder-Biy3O0O5.js";import"./useLocalizedStringFormatter-9jKsBqKs.js";import"./VisuallyHidden-Do3_DS5R.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CDHc6yc0.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./Group-DpcLwH5h.js";const Fe={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(f,{label:"Databas",description:"Välj databas att söka i",children:a.map(t=>e.jsx(S,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(t=>e.jsx(j,{children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
