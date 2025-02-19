import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-BmORT3a_.js";import{F}from"./Flex-Di1QQQg5.js";import{F as n}from"./FlexItem-DeKcLnIt.js";import{T as o}from"./TextField--xkAF4dl.js";import{S as I}from"./Select-DdeYidIa.js";import{B as m}from"./Button-DGVn8_Vm.js";import{R as g,a as b}from"./Radio-B8Lh2r2o.js";import{C as h}from"./CheckboxGroup-CumnmTVW.js";import{C as k}from"./Checkbox-BYcWzsnz.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-qQinGlaH.js";import"./clsx-B-dksMZM.js";import"./Text-BRrj1F5x.js";import"./Input-Dl-xw1t8.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BEs8UT-O.js";import"./Hidden-D1tTsVZF.js";import"./index-i7ZvCR4f.js";import"./useLabels-DoruDqSb.js";import"./TextField-BIRN0Qwu.js";import"./TextField.module-D5Tnj0hv.js";import"./Button-Cdn5al2T.js";import"./Tag-DXZKdeax.js";import"./Collection-B_lrZh-X.js";import"./index-DwWe6W7f.js";import"./ListBox-D_jEgfUy.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DPgQvSoL.js";import"./SelectionManager-CxPr3TNo.js";import"./useEvent-DPLPLV7c.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DoruocjZ.js";import"./context-BiKH8hYg.js";import"./useDescription-vlWoeMd6.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-B1D1bmUH.js";import"./useListState-BkgqKOGS.js";import"./useHighlightSelectionDescription-Dv60eMN6.js";import"./useLocalizedStringFormatter-BQrwAsaD.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-BZek-pgo.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-DhStdLG-.js";import"./VisuallyHidden-DY_cIkjj.js";import"./useMenuTrigger-D5Ehmv0V.js";import"./useMenuTriggerState-Cmw0Xyb4.js";import"./chevron-down-U1dNK9nR.js";import"./Group-C4aDiFTq.js";import"./RSPContexts-CeCCo7XS.js";const he={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},i={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(l=>({id:l,name:l}))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},a={args:{},render:()=>{const r=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,d,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,x,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const ke=["SimpleForm","TwoColumnForm"];export{i as SimpleForm,a as TwoColumnForm,ke as __namedExportsOrder,he as default};
