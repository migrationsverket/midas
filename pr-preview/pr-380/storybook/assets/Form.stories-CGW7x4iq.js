import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-MFDQJxaa.js";import{F}from"./Flex-B0Arw3Ak.js";import{F as n}from"./FlexItem-B9hblQ3x.js";import{T as o}from"./TextField-CHs_tqSW.js";import{S as I}from"./Select-Bq0XJn4E.js";import{B as a}from"./Button-CHVma-rN.js";import{R as g,a as b}from"./Radio-BECN0d4e.js";import{C as h}from"./CheckboxGroup-xlkkVVn3.js";import{C as k}from"./Checkbox-B3a21N8s.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-B5vVULSi.js";import"./clsx-B-dksMZM.js";import"./Text-BfWS687k.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-C6V_c74n.js";import"./useFocusRing-HUlwicEq.js";import"./TextField-BBDPv7RH.js";import"./Input-BUMoFtMP.js";import"./Hidden-lswqw32w.js";import"./Label-DK2CQORK.js";import"./TextArea-W48jz16i.js";import"./useTextField-JsK-ISgg.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BiUYFPQe.js";import"./useLabel-XbSNQJBa.js";import"./useFocusable-BvehpvqX.js";import"./focusSafely-BIGdxh6G.js";import"./TextField.module-BiYOq6rA.js";import"./Button-BpxGj6Q-.js";import"./ProgressBar-C-2ZZqws.js";import"./context-B5OQOlVG.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-CCvsZXnc.js";import"./index-cpIEhwLo.js";import"./Tag-nheVrIlY.js";import"./Collection-BD1J50_p.js";import"./index-DwWe6W7f.js";import"./ListBox-DkP01DRa.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CmdsbzTX.js";import"./SelectionManager-DETXSFCn.js";import"./useEvent--bAfsHDR.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-BL8QXNsc.js";import"./useDescription-C_qiR2pz.js";import"./ListKeyboardDelegate-Cq1FbvDu.js";import"./useCollator-DECUsGSp.js";import"./useListState-DJ8R7dxx.js";import"./useHighlightSelectionDescription-Z-6PLlcu.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-BsPioxkm.js";import"./useHasTabbableChild-BSE10KKE.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-DbYVf9U3.js";import"./useMenuTriggerState-BhcCcOu7.js";import"./VisuallyHidden-CqNMTwdd.js";import"./useModal-PQtX6dXT.js";import"./useSingleSelectListState-BjKOe2bW.js";import"./FieldError-B43IlocT.js";import"./chevron-down-U1dNK9nR.js";import"./Group-Gyy7H4ho.js";import"./RSPContexts-CeCCo7XS.js";const Xe={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const ye=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,m as TwoColumnForm,ye as __namedExportsOrder,Xe as default};
