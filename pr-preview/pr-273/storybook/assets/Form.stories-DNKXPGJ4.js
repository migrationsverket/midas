import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as b}from"./Form-CdOY3XQC.js";import{F}from"./Flex-Di1QQQg5.js";import{F as n}from"./FlexItem-DeKcLnIt.js";import{T as r}from"./TextField-CDQEx9SE.js";import{S as I,I as j}from"./Select-BD69cc40.js";import{B as m}from"./Button-DeVX-GBX.js";import{R as g,a as k}from"./Radio-Cmz-QzG5.js";import{C as f}from"./CheckboxGroup-w0lkf_dX.js";import{C as S}from"./Checkbox-B6ZS6GNw.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-BTV2lCc9.js";import"./clsx-B-dksMZM.js";import"./Text-DrzpM1Jb.js";import"./TextField.module-Cq1EB13r.js";import"./useControlledState-DGyHFLi9.js";import"./useField-DN-D1gXY.js";import"./Hidden-BxZRcyi_.js";import"./index-i7ZvCR4f.js";import"./useLabels-BlF-T0UY.js";import"./Button-PMtIgk3z.js";import"./ListBox-B-q0TaH8.js";import"./Collection-CP0FkJ5j.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Z3nJnnSt.js";import"./SelectionManager-CiLjFixb.js";import"./useEvent-CfffaCDc.js";import"./FocusScope-BeeEVvPP.js";import"./context-DC_sGW0u.js";import"./useDescription-c_sn7U9n.js";import"./ListKeyboardDelegate-VWRpf7NQ.js";import"./useListState-CmrCNl7S.js";import"./Dialog-CmDJib1-.js";import"./RSPContexts-CeCCo7XS.js";import"./PressResponder-DzydwzD8.js";import"./useLocalizedStringFormatter-BrmR15lP.js";import"./VisuallyHidden-CK0-3K8r.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-xLg9a9Jp.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./Group-c-V-gVst.js";const ue={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(f,{label:"Databas",description:"Välj databas att söka i",children:a.map(t=>e.jsx(S,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(t=>e.jsx(j,{children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Fe=["SimpleForm","TwoColumnForm"];export{o as SimpleForm,i as TwoColumnForm,Fe as __namedExportsOrder,ue as default};
