import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-BFUD2BQV.js";import{F}from"./Flex-Di1QQQg5.js";import{F as n}from"./FlexItem-DeKcLnIt.js";import{T as o}from"./TextField-COKQjzpq.js";import{S as I}from"./Select-BwGk87R2.js";import{B as m}from"./Button-CS2ZwkSb.js";import{R as g,a as b}from"./Radio-Dqx9xhnq.js";import{C as h}from"./CheckboxGroup-DfEkQulP.js";import{C as k}from"./Checkbox-Dr7tmQjm.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-l7NaYEdB.js";import"./clsx-B-dksMZM.js";import"./Text-Dyiz11Ec.js";import"./Input-BPDe37i3.js";import"./useControlledState-DGyHFLi9.js";import"./useField-Cmo2p-9r.js";import"./Hidden-CwiKxbZj.js";import"./index-i7ZvCR4f.js";import"./useLabels-CDoWwmLU.js";import"./TextField-BiaSnfe4.js";import"./TextField.module-D5Tnj0hv.js";import"./Button-CcMfRhGg.js";import"./Tag-BNzoKy0O.js";import"./Collection-DX0cA8sv.js";import"./index-DwWe6W7f.js";import"./ListBox-eCYlcRDD.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-ZffSntDo.js";import"./SelectionManager-CjkpbfGY.js";import"./useEvent-BV3BzZuT.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DgqfYpIJ.js";import"./context-CdxgAzm-.js";import"./useDescription-DsCB0LkR.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-BTTIni_k.js";import"./useListState-DEF2mLLn.js";import"./useHighlightSelectionDescription-4zbLvDDH.js";import"./useLocalizedStringFormatter-Dg5by4KY.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-CJd1BsNz.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-BEd1C1PF.js";import"./VisuallyHidden-BUQ17qE6.js";import"./useMenuTrigger-jUnj3pfE.js";import"./useMenuTriggerState-CYgKizc8.js";import"./chevron-down-U1dNK9nR.js";import"./Group-DCcY4wAz.js";import"./RSPContexts-CeCCo7XS.js";const he={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},i={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(l=>({id:l,name:l}))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},a={args:{},render:()=>{const r=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,d,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          <Select label='Vilken är din favoritfrukt' placeholder='Välj en frukt' selectionMode={'single'} options={ITEMS.map(i => ({
          id: i,
          name: i
        }))}>
          </Select>
        </FlexItem>

        <FlexItem>
          <Button>Skicka</Button>
        </FlexItem>
      </Flex>;
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,x,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
            <Select label='Kön' description='Kan lämnas tomt' placeholder='Välj kön' selectionMode={'single'} options={ITEMS.map(i => ({
            name: i,
            id: i
          }))} />
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
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const ke=["SimpleForm","TwoColumnForm"];export{i as SimpleForm,a as TwoColumnForm,ke as __namedExportsOrder,he as default};
