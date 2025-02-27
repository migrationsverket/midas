import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-C4y6ZxmL.js";import{F}from"./Flex-Q7BrZWJa.js";import{F as n}from"./FlexItem-CVJK9Qec.js";import{T as o}from"./TextField-DHll4yNf.js";import{S as I}from"./Select-N0Btoa9I.js";import{B as m}from"./Button-BIMRAFov.js";import{R as g,a as b}from"./Radio-Bmt6ztVq.js";import{C as h}from"./CheckboxGroup-DIyBDERQ.js";import{C as k}from"./Checkbox-D79d7B8u.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-Ca924fmk.js";import"./clsx-B-dksMZM.js";import"./Text-BkfI_mlu.js";import"./Input-C5vCrMin.js";import"./useControlledState-DGyHFLi9.js";import"./useField-DkY56YAB.js";import"./Hidden-BnkfgUiZ.js";import"./index-cpIEhwLo.js";import"./useLabels-BHDrmz2p.js";import"./TextField-Bo6D7TTg.js";import"./TextField.module-RvTXLpy1.js";import"./Button-CHB1Xpcb.js";import"./Tag-MabJzBw1.js";import"./Collection-DyipXQ6z.js";import"./index-DwWe6W7f.js";import"./ListBox-CckZrNwp.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DMYMef74.js";import"./SelectionManager-CGvOaT5j.js";import"./useEvent-CeOsCKfN.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-C4P3cAwe.js";import"./context-DeC-Ug1U.js";import"./useDescription-ifvXBwGi.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-COdvugSF.js";import"./useListState-wnqPBjd-.js";import"./useHighlightSelectionDescription-o2JVKI_U.js";import"./useLocalizedStringFormatter-BHUQwvDl.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-Bc5ccWWY.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-BfYUAKs8.js";import"./DismissButton-BqAdsscf.js";import"./VisuallyHidden-GzJBUnsU.js";import"./useModal-P6QN8Lf3.js";import"./useMenuTrigger-DwjQ3u6c.js";import"./useMenuTriggerState-CuYuoRuJ.js";import"./chevron-down-U1dNK9nR.js";import"./Group-DiArW9zi.js";import"./RSPContexts-CeCCo7XS.js";const fe={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},i={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(l=>({id:l,name:l}))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},a={args:{},render:()=>{const r=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
