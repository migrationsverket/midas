import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-BfpKtXjF.js";import{F}from"./Flex-Di1QQQg5.js";import{F as n}from"./FlexItem-DeKcLnIt.js";import{T as o}from"./TextField-Dn1CdeRd.js";import{S as I}from"./Select-DEJGoAb0.js";import{B as m}from"./Button-e4wmZZGd.js";import{R as g,a as b}from"./Radio-DKdO3_OO.js";import{C as h}from"./CheckboxGroup-0w4S9_oV.js";import{C as k}from"./Checkbox-D5UZFY_T.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-CD-koIwE.js";import"./clsx-B-dksMZM.js";import"./Text-DcjMt-Li.js";import"./Input-C70qVu7X.js";import"./useControlledState-DGyHFLi9.js";import"./useField-DtOnK51m.js";import"./Hidden-Dq_nQgIS.js";import"./index-i7ZvCR4f.js";import"./useLabels-B6-QSSXo.js";import"./TextField-Nxx7sP73.js";import"./TextField.module-D5Tnj0hv.js";import"./Button-QjS3GA-B.js";import"./Tag-CDAaWaRI.js";import"./Collection-DZnsYLBa.js";import"./index-DwWe6W7f.js";import"./ListBox-CDrqQmjC.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Dk3iDfC9.js";import"./SelectionManager-BLUZsctv.js";import"./useEvent-BMdKW5kW.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DMgXehbl.js";import"./context-BZ3sRE81.js";import"./useDescription-D-cWy0W_.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-D6uckuoG.js";import"./useListState-Bi7JdD2y.js";import"./useHighlightSelectionDescription-BKgki8fK.js";import"./useLocalizedStringFormatter-kgc-se6z.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-U81ut5JF.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-BhC3EiyM.js";import"./VisuallyHidden-CkHCoHQ6.js";import"./useMenuTrigger-DsTCxScT.js";import"./useMenuTriggerState-Cjn-Ui2X.js";import"./chevron-down-U1dNK9nR.js";import"./Group-nM33AJZ0.js";import"./RSPContexts-CeCCo7XS.js";const he={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},i={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(l=>({id:l,name:l}))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},a={args:{},render:()=>{const r=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,d,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
