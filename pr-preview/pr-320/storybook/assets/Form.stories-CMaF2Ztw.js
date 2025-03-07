import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as b}from"./Form-B4NAigXO.js";import{F}from"./Flex-BM7lDPc-.js";import{F as n}from"./FlexItem-Bx9rkH5V.js";import{T as r}from"./TextField-D9wytW6I.js";import{S as I,I as j}from"./Select-BQ4EOgMZ.js";import{B as m}from"./Button-D-2AA0-m.js";import{R as g,a as k}from"./Radio-Dw5dbOuY.js";import{C as f}from"./CheckboxGroup-BdKzWGf4.js";import{C as S}from"./Checkbox-B-20nymp.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusRing-CinZsMjC.js";import"./clsx-B-dksMZM.js";import"./Text-BOP8hVNJ.js";import"./useFormValidation-0O_oepKB.js";import"./Input-lj-4FkjZ.js";import"./Hidden-Dygrn3i1.js";import"./index-cpIEhwLo.js";import"./useField-D3fxL6w1.js";import"./useLabels-DK3-SUbo.js";import"./TextField.module-4WLKcRib.js";import"./useControlledState-DGyHFLi9.js";import"./useFocusable-97lfcaNr.js";import"./Button-CL48leFB.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./ListBox-i6fXzs5h.js";import"./Collection-C65DcC29.js";import"./index-DwWe6W7f.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-AK1ucJrY.js";import"./SelectionManager-DQmjKvEJ.js";import"./useEvent-D1vddV-I.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Dim9Sv8E.js";import"./context-uaUAhjVA.js";import"./useDescription-CvItXi3E.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CY3z9i9U.js";import"./useListState-CA7sqsFs.js";import"./Dialog-DQ5JeYJ_.js";import"./RSPContexts-CeCCo7XS.js";import"./OverlayArrow-CJX-muH8.js";import"./PressResponder-D8VDO3_G.js";import"./useLocalizedStringFormatter-CHyMmh6V.js";import"./getScrollParent-CrrBdd7g.js";import"./VisuallyHidden-jJNdpOK7.js";import"./intlStrings-ZMTSFH_M.js";import"./useSingleSelectListState-CobJKfWh.js";import"./chevron-down-U1dNK9nR.js";import"./createLucideIcon-8wDOqnHv.js";import"./Group-DnHhjaeg.js";const fe={component:b,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const a=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(r,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(r,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",children:a.map(o=>e.jsx(j,{children:o},o))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},i={args:{},render:()=>{const a=["A","B","C"],o=["Anledning A","Anledning B","Anledning C"],h=["Man","Kvinna","Annat"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:o.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(f,{label:"Databas",description:"Välj databas att söka i",children:a.map(t=>e.jsx(S,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",children:h.map(t=>e.jsx(j,{children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(r,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,c,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,x,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(x=i.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Se=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,i as TwoColumnForm,Se as __namedExportsOrder,fe as default};
