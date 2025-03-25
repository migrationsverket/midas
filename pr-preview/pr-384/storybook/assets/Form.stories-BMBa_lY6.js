import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-B__7jCkU.js";import{F}from"./Flex-B0Arw3Ak.js";import{F as n}from"./FlexItem-B9hblQ3x.js";import{T as o}from"./TextField-DKCDi7qv.js";import{S as I}from"./Select-jl8stEaI.js";import{B as a}from"./Button-B2hgcsAr.js";import{R as g,a as b}from"./Radio-Dw8aGWZL.js";import{C as h}from"./CheckboxGroup-7ALaBiO8.js";import{C as k}from"./Checkbox-LRLmUseG.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BYZtxgnE.js";import"./clsx-B-dksMZM.js";import"./Text-DGqKDvoY.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-CzFHg574.js";import"./useFocusRing-BVR65GV4.js";import"./TextField-C7ELEjva.js";import"./Input-DnZ0R0Vm.js";import"./Hidden-DizQ9ce0.js";import"./Label-B20XR-5d.js";import"./TextArea-CkA1rbIb.js";import"./useTextField-fBNe8t4t.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BP5oohdv.js";import"./useLabel-D0L8qOPf.js";import"./useFocusable-ByeJrHLx.js";import"./focusSafely-CCsE9NOP.js";import"./TextField.module-BghARX6w.js";import"./Button-B2aR51FI.js";import"./ProgressBar-Ce7Ytruc.js";import"./context-DlPnyEqv.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-DcG3_cox.js";import"./index-cpIEhwLo.js";import"./Tag-CAINtki4.js";import"./Collection-B3BuMPYM.js";import"./index-DwWe6W7f.js";import"./ListBox-CVMk47TD.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CcSwDo7v.js";import"./SelectionManager-BjEm6zKp.js";import"./useEvent-CYKx4DfG.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-Cto1rr90.js";import"./useDescription-BK8-bxoY.js";import"./ListKeyboardDelegate-CMNZAwbS.js";import"./useCollator-CdnSoI7T.js";import"./useListState-CODvMJBP.js";import"./useHighlightSelectionDescription-D7Z_gmS2.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CYf1eOAG.js";import"./useHasTabbableChild-CsFoJaFG.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-BfOBJM5F.js";import"./DismissButton-Gx2e4RHd.js";import"./VisuallyHidden-CQ87MyWU.js";import"./useModal-DnV8xhqI.js";import"./useMenuTrigger-Dp1uffK3.js";import"./useMenuTriggerState-CkPUiTEn.js";import"./FieldError-jQHHKhki.js";import"./chevron-down-U1dNK9nR.js";import"./Group-BqsvSBZ5.js";import"./RSPContexts-CeCCo7XS.js";const ye={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Ke=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,m as TwoColumnForm,Ke as __namedExportsOrder,ye as default};
