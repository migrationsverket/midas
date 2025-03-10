import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-CeDqcAbX.js";import{F}from"./Flex-CwAvhjAg.js";import{F as n}from"./FlexItem-BAAO4m_f.js";import{T as o}from"./TextField-B19fNRiO.js";import{S as I}from"./Select-CWyuQI5t.js";import{B as m}from"./Button-BgnELAWU.js";import{R as g,a as b}from"./Radio-DQHDxTaK.js";import{C as h}from"./CheckboxGroup-Dp8ajWzS.js";import{C as k}from"./Checkbox-DRYZmQfy.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-kTDKG0-I.js";import"./clsx-B-dksMZM.js";import"./Text-B6PEOduq.js";import"./useFormValidation-DR3ZhvQ-.js";import"./TextField-BZ6g-1qt.js";import"./Hidden-BtGjzlYc.js";import"./index-cpIEhwLo.js";import"./Label-CQG0hq8b.js";import"./useTextField-Ca09ynha.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BCfbuq15.js";import"./useLabels-CfvNSRSq.js";import"./TextField.module-DBomeRQe.js";import"./Button-Cm6N-U3G.js";import"./Tag-DlFHkaDV.js";import"./Collection-yU42VZsj.js";import"./index-DwWe6W7f.js";import"./ListBox-CaUnlxff.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-BSvMe0jc.js";import"./SelectionManager-C4ptO5S1.js";import"./useEvent-CUPsne6n.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DFXDyZr7.js";import"./context-_OjZNubd.js";import"./useDescription-Wc3eT9Hr.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CU9Q0tF2.js";import"./useListState-roOPfFt8.js";import"./useHighlightSelectionDescription-CAMReREE.js";import"./useLocalizedStringFormatter-DFEaIMYS.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-Dbawi6wQ.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-DBlnXKaU.js";import"./DismissButton-4yM4YEZA.js";import"./VisuallyHidden-D13_LDvY.js";import"./useModal-mUPSQOKY.js";import"./useMenuTrigger-BOiBTMON.js";import"./useMenuTriggerState-CmExfH1d.js";import"./chevron-down-U1dNK9nR.js";import"./Group-BCu23P5U.js";import"./RSPContexts-CeCCo7XS.js";const Se={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},i={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(l=>({id:l,name:l}))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},a={args:{},render:()=>{const r=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(p=i.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,x,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Me=["SimpleForm","TwoColumnForm"];export{i as SimpleForm,a as TwoColumnForm,Me as __namedExportsOrder,Se as default};
