import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{$ as b}from"./Form-DKIud6kt.js";import{F}from"./Flex-B0onHs7a.js";import{F as n}from"./FlexItem-bxHKyMao.js";import{T as r}from"./TextField-CEBpLkqm.js";import{S as I,I as j}from"./Select-B2_q70hm.js";import{B as m}from"./Button-dZcdrYJ-.js";import{R as g,a as k}from"./Radio-ChVZcKDz.js";import{C as f}from"./CheckboxGroup-Ukz4YnfY.js";import{C as S}from"./Checkbox-DiAJBFj9.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-BFvoMS9y.js";import"./clsx-B-dksMZM.js";import"./Text-BvZdlzFi.js";import"./TextField.module-Nb1XZxae.js";import"./useControlledState-BgxdDqm0.js";import"./useField-BVKRIrPf.js";import"./Hidden-DWlCxbq5.js";import"./index-D2jEcJry.js";import"./useLabels-slPl-z-z.js";import"./Button-BeKNHBLF.js";import"./ListBox-Bqd_jMsd.js";import"./Collection-BhSMiv7E.js";import"./index-Btf1eDe9.js";import"./DragAndDrop-Bfvg-Q35.js";import"./Separator-Bd4vkn40.js";import"./SelectionManager-DRRiPKTi.js";import"./useEvent-D6jxNLXQ.js";import"./FocusScope-2XdeF7h-.js";import"./context-DFvSrY_x.js";import"./useDescription-DRw803pY.js";import"./ListKeyboardDelegate-Lv1vouSK.js";import"./useListState-BtOFoHoC.js";import"./Dialog-BjTCWXX6.js";import"./RSPContexts-BT50PPhj.js";import"./PressResponder-DFXhZkop.js";import"./useLocalizedStringFormatter-CABpxIsR.js";import"./VisuallyHidden-Bqo5Lliv.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-SN9L5I06.js";import"./chevron-down-DOK0m5UE.js";import"./createLucideIcon-DjmUzaoT.js";import"./Group-C8JfuMdv.js";const ue={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},o={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(l=>e.jsx(j,{children:l},l))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(f,{label:"Databas",description:"Välj databas att söka i",children:a.map(t=>e.jsx(S,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(t=>e.jsx(j,{children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
