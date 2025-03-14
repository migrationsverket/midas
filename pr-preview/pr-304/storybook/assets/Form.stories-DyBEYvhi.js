import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-DJSr-0L7.js";import{F}from"./Flex-DPn6_PbI.js";import{F as n}from"./FlexItem-BYEK9oAO.js";import{T as o}from"./TextField-StMgwSay.js";import{S as I}from"./Select--cFYNj6Q.js";import{B as a}from"./Button-NLat4qzS.js";import{R as g,a as b}from"./Radio-DLYDBWoo.js";import{C as h}from"./CheckboxGroup-Bcye17AM.js";import{C as k}from"./Checkbox-K4grNKgV.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-DdXLQA3f.js";import"./clsx-B-dksMZM.js";import"./Text-CV6Bluw9.js";import"./useFocusRing-CAIiVOBX.js";import"./useFormValidation-DerMACuP.js";import"./Input-BPCyqAmH.js";import"./Hidden-0Xxd6rx0.js";import"./index-cpIEhwLo.js";import"./Label-oUcQSHlD.js";import"./TextField-CWcsO5dX.js";import"./useTextField-1zEqDY1L.js";import"./useControlledState-DGyHFLi9.js";import"./useField-_-T_Udov.js";import"./useLabels-BlWvxUw7.js";import"./useFocusable-C2jS3Qdx.js";import"./TextField.module-ewMUXt43.js";import"./Button-BhwOwugC.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Tag-4hic9IOo.js";import"./Collection-CrhAUUGf.js";import"./index-DwWe6W7f.js";import"./ListBox-BtUT0EGq.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Bek8JbJ0.js";import"./SelectionManager-D8dA2YXE.js";import"./useEvent-BB46z8qb.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Q9OnV_W8.js";import"./context-BR8A0IbO.js";import"./useDescription-EqQzVjeZ.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CsHORISF.js";import"./useListState-3AVlZZha.js";import"./useHighlightSelectionDescription-IAqlj97Y.js";import"./useLocalizedStringFormatter-CrofGC5X.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-iuooBh9Z.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-Md-KFT5u.js";import"./DismissButton-Bk1YbeAq.js";import"./VisuallyHidden-DZK_6M_C.js";import"./useModal-BVB1AyA1.js";import"./useMenuTrigger-C3vaOOyP.js";import"./useMenuTriggerState-DfJNuByF.js";import"./chevron-down-U1dNK9nR.js";import"./Group-CXqmBkpb.js";import"./RSPContexts-CeCCo7XS.js";const ve={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
        }))}></Select>
        </FlexItem>

        <FlexItem>
          <Button>Skicka</Button>
        </FlexItem>
      </Flex>;
  }
}`,...(d=(p=l.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,x,u;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const ITEMS = ['A', 'B', 'C'];
    const RADIOITEMS = ['Anledning A', 'Anledning B', 'Anledning C'];
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Ee=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,m as TwoColumnForm,Ee as __namedExportsOrder,ve as default};
