import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-C3NsFlf4.js";import{F}from"./Flex-Di1QQQg5.js";import{F as n}from"./FlexItem-DeKcLnIt.js";import{T as o}from"./TextField-Bpsbn_Ol.js";import{S as I}from"./Select-C-RrIoG_.js";import{B as m}from"./Button-CmTjolvz.js";import{R as g,a as b}from"./Radio-8ts9cV8T.js";import{C as h}from"./CheckboxGroup-REb2jDBW.js";import{C as k}from"./Checkbox-Cva49U3Y.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-DMGkbK-i.js";import"./clsx-B-dksMZM.js";import"./Text-BoWYQTAV.js";import"./Input-L53TOgYN.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BeeCyZF0.js";import"./Hidden-CJzMAlxg.js";import"./index-i7ZvCR4f.js";import"./useLabels-Czx4z4lc.js";import"./TextField-xxlnV8CW.js";import"./TextField.module-RvTXLpy1.js";import"./Button-Bc7rgIW-.js";import"./Tag-wQzFTBWB.js";import"./Collection-DvoTk2KI.js";import"./index-DwWe6W7f.js";import"./ListBox-ClPcWLEE.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-BXrUGb8V.js";import"./SelectionManager-CBVCNS5i.js";import"./useEvent-_3PRSTk-.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-BtHPjb_Y.js";import"./context-D5CBVWAD.js";import"./useDescription-CwgsM8Aw.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-C9PWeBWf.js";import"./useListState-D8FigSHu.js";import"./useHighlightSelectionDescription-DpMw0QmJ.js";import"./useLocalizedStringFormatter-Czs_bIw2.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-D7P8wGib.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-BINPOdl7.js";import"./DismissButton-CToArBRf.js";import"./VisuallyHidden-Bpe5Pinq.js";import"./useModal-CkSuJKTr.js";import"./useMenuTrigger-CzcpRlrD.js";import"./useMenuTriggerState-B8mUWxom.js";import"./chevron-down-U1dNK9nR.js";import"./Group-BFQKnrb_.js";import"./RSPContexts-CeCCo7XS.js";const fe={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},i={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(l=>({id:l,name:l}))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},a={args:{},render:()=>{const r=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Ae=["SimpleForm","TwoColumnForm"];export{i as SimpleForm,a as TwoColumnForm,Ae as __namedExportsOrder,fe as default};
