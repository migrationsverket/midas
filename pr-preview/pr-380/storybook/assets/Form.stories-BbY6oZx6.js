import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-BBmrm8bW.js";import{F}from"./Flex-DPn6_PbI.js";import{F as n}from"./FlexItem-BYEK9oAO.js";import{T as o}from"./TextField-LCUFgdsN.js";import{S as I}from"./Select-BUGULyY0.js";import{B as a}from"./Button-D9mPwvHL.js";import{R as g,a as b}from"./Radio-135OC6pH.js";import{C as h}from"./CheckboxGroup-bKa90MXL.js";import{C as k}from"./Checkbox-CRpoY_3H.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./Text-BkowhAon.js";import"./useFocusRing-HKeWiXpl.js";import"./index-cpIEhwLo.js";import"./useFormValidation-BWkP5gBo.js";import"./TextField-DNg7sPgY.js";import"./Input-CkPPhu4J.js";import"./Hidden-lswqw32w.js";import"./Label-CkQlERdq.js";import"./useTextField-COEhU6lQ.js";import"./useControlledState-DGyHFLi9.js";import"./useField-B8c6pWIv.js";import"./TextField.module-C7Oi0q_z.js";import"./Button-uO1JGISi.js";import"./ProgressBar-DNnV_wJ6.js";import"./context-BSqmORe6.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./Tag-BCGMjR6C.js";import"./Collection-O4Gi1PSO.js";import"./index-DwWe6W7f.js";import"./ListBox-Kz2neV8v.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-BAiZ62s6.js";import"./SelectionManager-6a3fudD6.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-CnTD5aJz.js";import"./FocusScope-C97GJsIb.js";import"./ListKeyboardDelegate-DayiplM_.js";import"./useCollator-C3PRVItH.js";import"./useListState-RMwQ7egM.js";import"./useHighlightSelectionDescription-eBjW0mzR.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./useHasTabbableChild-BKcOOOE0.js";import"./getScrollParent-2-PurW9V.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-CIPnKd-A.js";import"./useMenuTriggerState-DfrN39jX.js";import"./VisuallyHidden-I9LV86QJ.js";import"./useModal-BWKj4cMF.js";import"./useSingleSelectListState-B-PZxYzO.js";import"./FieldError-Cae8s3IP.js";import"./chevron-down-U1dNK9nR.js";import"./useIsDisabled-BANivrO7.js";import"./useDateFormatter-D8oWd7cd.js";import"./InputWrapper-CAX1utiQ.js";import"./Label-e6qbx1P3.js";import"./Text-modOyfN2.js";import"./RSPContexts-CeCCo7XS.js";const Re={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const De=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,m as TwoColumnForm,De as __namedExportsOrder,Re as default};
