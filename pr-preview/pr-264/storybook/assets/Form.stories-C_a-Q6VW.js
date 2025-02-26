import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-l2PcAF26.js";import{F}from"./Flex-D3szVBzO.js";import{F as n}from"./FlexItem-DsmKoLE5.js";import{T as o}from"./TextField-D60y72tU.js";import{S as I}from"./Select-BEtuL6Wi.js";import{B as m}from"./Button-FKz_U1tx.js";import{R as g,a as b}from"./Radio-hB6QdXCJ.js";import{C as h}from"./CheckboxGroup-DkVxGScM.js";import{C as k}from"./Checkbox-Bo53zs0y.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useFocusable-C3Tvsz8-.js";import"./clsx-B-dksMZM.js";import"./Text-BVfnoLK6.js";import"./Input-CgmTjY8Q.js";import"./useControlledState-DGyHFLi9.js";import"./useField-Cyo9MoZl.js";import"./Hidden-t2TOsKWR.js";import"./index-i7ZvCR4f.js";import"./useLabels-CtwdP7qT.js";import"./TextField-CY9k8hi9.js";import"./TextField.module-RvTXLpy1.js";import"./Button-QTphRx4x.js";import"./Tag-FJWgTJc4.js";import"./Collection-DSs8x1Wd.js";import"./index-DwWe6W7f.js";import"./ListBox-CXKdTALH.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CjLqTao-.js";import"./SelectionManager-B6mzhZXY.js";import"./useEvent-B6d9-LYV.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DOk3V7x2.js";import"./context-OSXAnMfc.js";import"./useDescription-BSbuOK9_.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-4QryF0sP.js";import"./useListState-BsgHITYP.js";import"./useHighlightSelectionDescription-B0pAbar-.js";import"./useLocalizedStringFormatter-uDQfzgWc.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-CBXIVSLK.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-D97Z3G1I.js";import"./DismissButton-B8CqawU9.js";import"./VisuallyHidden-CFHSfYYo.js";import"./useModal-C7L4wT2l.js";import"./useMenuTrigger-75ikU0oH.js";import"./useMenuTriggerState-Dr4sU0pt.js";import"./chevron-down-U1dNK9nR.js";import"./Group-A3BkD8OP.js";import"./RSPContexts-CeCCo7XS.js";const fe={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},i={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(l=>({id:l,name:l}))})}),e.jsx(n,{children:e.jsx(m,{children:"Skicka"})})]})}},a={args:{},render:()=>{const r=["A","B","C"],l=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:l.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(m,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
