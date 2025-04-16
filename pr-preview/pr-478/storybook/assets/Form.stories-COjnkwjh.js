import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-BWK6xyH1.js";import{F}from"./Flex-DyOjkdDY.js";import{F as n}from"./FlexItem-CZMcrfuE.js";import{T as o}from"./TextField-CE0VCxAp.js";import{S as I}from"./Select-Ddre80fO.js";import{B as a}from"./Button-BWEnHcRX.js";import{R as g,a as b}from"./Radio-DT-d0hCP.js";import{C as h}from"./CheckboxGroup-C5_Lxqo_.js";import{C as k}from"./Checkbox-BEe8kIwL.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./Text-CLHHKsvT.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-tLTeCxiF.js";import"./useFocusRing-CklmaPa3.js";import"./TextFieldBase-CawqfHre.js";import"./TextField-dpiMNlKd.js";import"./Input-C7Zh-d3_.js";import"./Hidden-lswqw32w.js";import"./Label-DuUY1oNM.js";import"./useTextField-CRWtxm2p.js";import"./useControlledState-DGyHFLi9.js";import"./useField-Dtc4qbuX.js";import"./useLabel-D9x7ijjo.js";import"./useFocusable-Cn0G9B-O.js";import"./TextField.module-BexQEzWx.js";import"./Text-DTW4hkTA.js";import"./Label-DjHNQKaV.js";import"./FieldError-DCgcqB00.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-gwlhO1hg.js";import"./Button-C6oo4-9j.js";import"./ProgressBar--YvcVoO5.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./usePress-D7qiRhp3.js";import"./index-cpIEhwLo.js";import"./Tag-hivpCbFw.js";import"./Collection-CrlQSNFM.js";import"./index-DwWe6W7f.js";import"./ListBox-DZlCOpr3.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-D1KbA0aG.js";import"./SelectionManager-DBzMVJ3_.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CWlvLRaT.js";import"./useDescription-DtBV7V9R.js";import"./ListKeyboardDelegate-BT2IGCyv.js";import"./useCollator-BwOLflG5.js";import"./useListState-BXyU8taG.js";import"./useHighlightSelectionDescription-DCwKHqhB.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-C9hzL5Oy.js";import"./useHasTabbableChild-BwVvzJgw.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-Cqt2HN1Y.js";import"./useMenuTriggerState-BjsnJlSn.js";import"./VisuallyHidden-9izUKr4W.js";import"./useModal-BdzBpG_k.js";import"./useObserveElement-BrriYDGX.js";import"./chevron-down-U1dNK9nR.js";import"./Group-BegkCWIz.js";import"./RSPContexts-CeCCo7XS.js";const Ke={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Oe=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,m as TwoColumnForm,Oe as __namedExportsOrder,Ke as default};
