import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-4a7bP6c_.js";import{F}from"./Flex-N3Uj4a9I.js";import{F as n}from"./FlexItem-C4E4rScV.js";import{T as o}from"./TextField-C--vday6.js";import{S as I}from"./Select-DxCUjxDU.js";import{B as a}from"./Button-BUxaE3cr.js";import{R as g,a as b}from"./Radio-D6jI0PbN.js";import{C as h}from"./CheckboxGroup-DTb3X_ik.js";import{C as k}from"./Checkbox-CRoMgsER.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Cd6MiihZ.js";import"./clsx-B-dksMZM.js";import"./Text-BkowhAon.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-DHg3NP7v.js";import"./useFocusRing-Cfn9yE2V.js";import"./TextField-BVSd0qaz.js";import"./Input-BOC78LTs.js";import"./Hidden-lswqw32w.js";import"./Label-DO1wrnkN.js";import"./useTextField-CD9GBL5M.js";import"./useControlledState-DGyHFLi9.js";import"./useField-9Cy_F6CL.js";import"./useLabel-ClMtG9eF.js";import"./useFocusable-Pg9COOaT.js";import"./TextField.module-BQ9U-Lva.js";import"./Button-DUGs8NtW.js";import"./ProgressBar-Cgq2ntZX.js";import"./context-BSqmORe6.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-CxawRSCB.js";import"./index-cpIEhwLo.js";import"./Tag-C1vr4ymD.js";import"./Collection-BkzVmqwu.js";import"./index-DwWe6W7f.js";import"./ListBox-CUsARBUe.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DX2iIcbV.js";import"./SelectionManager-DMsC2Nqq.js";import"./useEvent-Yxrkvbn7.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-ev4Wrgqm.js";import"./useDescription-CVNFK32G.js";import"./ListKeyboardDelegate-XaxibD-Q.js";import"./useCollator-C3PRVItH.js";import"./useListState-DiqEMAKd.js";import"./useHighlightSelectionDescription-BpyZXizU.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-CIgGmZTI.js";import"./useHasTabbableChild-DjHROIAW.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-t8ZnfIQ2.js";import"./useMenuTriggerState-RNbqQ6qa.js";import"./VisuallyHidden-8sUOS89X.js";import"./useModal-BWKj4cMF.js";import"./useSingleSelectListState-1UPsdctN.js";import"./FieldError-Cgcw0cQk.js";import"./chevron-down-U1dNK9nR.js";import"./Group-CzBzjNZJ.js";import"./RSPContexts-CeCCo7XS.js";const Ge={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Ve=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,m as TwoColumnForm,Ve as __namedExportsOrder,Ge as default};
