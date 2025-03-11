import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-CtPEz-EL.js";import{F}from"./Flex-Q7BrZWJa.js";import{F as n}from"./FlexItem-CVJK9Qec.js";import{T as o}from"./TextField-DZdoABmx.js";import{S as I}from"./Select-G4xUqq01.js";import{B as a}from"./Button-9EBI5Oth.js";import{R as g,a as b}from"./Radio-URsjrM5O.js";import{C as h}from"./CheckboxGroup-CVc7Izp2.js";import{C as k}from"./Checkbox-i29mfm7R.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusRing-CzvYi63w.js";import"./clsx-B-dksMZM.js";import"./Text-Bs3wmQ_r.js";import"./useFormValidation-COh_aIUh.js";import"./Input-6VVu8_gT.js";import"./Hidden-Cwv2mliU.js";import"./index-cpIEhwLo.js";import"./Label-D5LZnuba.js";import"./TextField-Ah33ZlDz.js";import"./useTextField-B88Z0jeU.js";import"./useControlledState-DGyHFLi9.js";import"./useField-CeWVpZ88.js";import"./useLabels-C6xreehw.js";import"./useFocusable-BFetNXOg.js";import"./TextField.module-DBomeRQe.js";import"./Button-DWcm3eun.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Tag-Zu9GgNTQ.js";import"./Collection-X5x-dm2B.js";import"./index-DwWe6W7f.js";import"./ListBox-CKr9ln8X.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DpKt-EJF.js";import"./SelectionManager-DjWgx8kx.js";import"./useEvent-obUhTg3D.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CaULHkOc.js";import"./context-DhWQxiCQ.js";import"./useDescription-DLAKITkC.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-CZkj3LZa.js";import"./useListState-CyUQWhT9.js";import"./useHighlightSelectionDescription-DIIL1iW4.js";import"./useLocalizedStringFormatter-BPmhGMia.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-DxaYTyzB.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-DuWewdYA.js";import"./DismissButton-CnWVp8i_.js";import"./VisuallyHidden-Gg3j86pG.js";import"./useModal-ZRGW8kHL.js";import"./useMenuTrigger-CuBNLIlM.js";import"./useMenuTriggerState-BffPGwdL.js";import"./chevron-down-U1dNK9nR.js";import"./Group-C-pz1s69.js";import"./RSPContexts-CeCCo7XS.js";const Be={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(d=(p=l.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,x,u;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Ce=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,m as TwoColumnForm,Ce as __namedExportsOrder,Be as default};
