import{j as e}from"./jsx-runtime-CBDCb4rg.js";import{$ as j}from"./Form-B3zPBtl7.js";import{F}from"./Flex-i1hTDoUY.js";import{F as n}from"./FlexItem-BzMmYs0X.js";import{T as o}from"./TextField-Cdp96zIS.js";import{S as I}from"./Select-BcGX3_2p.js";import{B as a}from"./Button-CJsnlSjH.js";import{R as g,a as b}from"./Radio-DzLdXBUZ.js";import{C as h}from"./CheckboxGroup-BXrb1F8b.js";import{C as k}from"./Checkbox-BjP2r9QE.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CyugoGNF.js";import"./clsx-B-dksMZM.js";import"./Text-DnyJpj_W.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFormValidation-B1oMw7Lv.js";import"./useFocusRing-BODiw1iP.js";import"./index-BAyGJXOV.js";import"./Input-nkIej56h.js";import"./Hidden-B6il94lO.js";import"./Label-ByRA_SKm.js";import"./TextField-B4YrLK74.js";import"./useTextField-DXYVxhqA.js";import"./useControlledState-BgxdDqm0.js";import"./useField-YKOABOJo.js";import"./useLabel-DbJIstGE.js";import"./useFocusable-CqLabGgp.js";import"./TextField.module-D2y0i4Dw.js";import"./Button-iL9IzHG8.js";import"./ProgressBar-B2jw0c1b.js";import"./context-BwmME58u.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Tag-DMJS23ct.js";import"./Collection-KpeOqn_K.js";import"./index-Btf1eDe9.js";import"./ListBox-DFhn37Qm.js";import"./DragAndDrop-Bfvg-Q35.js";import"./Separator-DuTifGF-.js";import"./SelectionManager-DRxs2Bqi.js";import"./useEvent-DrHgLB5Q.js";import"./scrollIntoView-Dsrcj58z.js";import"./FocusScope-Ded37Rd9.js";import"./useDescription-DZZa8B5b.js";import"./ListKeyboardDelegate-SnKTO46q.js";import"./useCollator-B0i4hO_n.js";import"./useListState-DFvoS08W.js";import"./useHighlightSelectionDescription-MBiDJdUj.js";import"./useUpdateEffect-Bs3_Kx5l.js";import"./useLocalizedStringFormatter-B6l6yPuV.js";import"./useHasTabbableChild-BMUHg4RC.js";import"./getScrollParent-CvodOSaS.js";import"./x-CdHhRR78.js";import"./createLucideIcon-DjmUzaoT.js";import"./useOverlayTriggerState-_3rNuFLY.js";import"./DismissButton-BaTbkvC9.js";import"./VisuallyHidden-Cx1OydyR.js";import"./useModal-DrHYqVUB.js";import"./useMenuTrigger-Ch8czL2s.js";import"./useMenuTriggerState-BHyXXjL7.js";import"./chevron-down-DOK0m5UE.js";import"./Group-FOoQ2kH0.js";import"./RSPContexts-BT50PPhj.js";const De={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Ge=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,m as TwoColumnForm,Ge as __namedExportsOrder,De as default};
