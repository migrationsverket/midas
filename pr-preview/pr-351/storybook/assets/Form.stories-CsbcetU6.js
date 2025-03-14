import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-BDyp70qB.js";import{F}from"./Flex-Q7BrZWJa.js";import{F as n}from"./FlexItem-CVJK9Qec.js";import{T as o}from"./TextField-DLDbbICR.js";import{S as I}from"./Select-DQ8Ili8M.js";import{B as a}from"./Button-DsRAQ4Y3.js";import{R as g,a as b}from"./Radio-CQxPhqxo.js";import{C as h}from"./CheckboxGroup-CJMn6tGh.js";import{C as k}from"./Checkbox-DfA7UXjQ.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-C4wbeGu1.js";import"./clsx-B-dksMZM.js";import"./Text-CbyHDQDf.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-CE6QEibh.js";import"./useFocusRing-BPh1BF7L.js";import"./index-cpIEhwLo.js";import"./Input-B2v7qRwt.js";import"./Hidden-DizQ9ce0.js";import"./Label-BXmCKTLy.js";import"./TextField-Cj13MBVm.js";import"./useTextField-CPdDRbKg.js";import"./useControlledState-DGyHFLi9.js";import"./useField-jnpLLrbi.js";import"./useLabel-Bdg4Lht-.js";import"./useFocusable-BNsiIlBy.js";import"./TextField.module-DBomeRQe.js";import"./Button-AXOEyd3Z.js";import"./ProgressBar-DVVijuUB.js";import"./context-gxVqox2x.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Tag-B0vERXH_.js";import"./Collection-B-nlreot.js";import"./index-DwWe6W7f.js";import"./ListBox-CVC5Uzz_.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Cwyjh9kf.js";import"./SelectionManager-BcUGuGhA.js";import"./useEvent-D4_b5_Hb.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-qaFvQZnw.js";import"./useDescription-B1EhVr9u.js";import"./ListKeyboardDelegate-Bfw3o6i2.js";import"./useCollator-DpeVXYFV.js";import"./useListState-KH1mqqtE.js";import"./useHighlightSelectionDescription-52Zrb9Xr.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-DFsWMtKh.js";import"./useHasTabbableChild-BvUbQUYt.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-CV3ul9Cj.js";import"./DismissButton-CGedck5U.js";import"./VisuallyHidden-BWFG7hRI.js";import"./useModal-CG93Z3Sb.js";import"./useMenuTrigger-BdwqjeQL.js";import"./useMenuTriggerState-k6Ma9Cog.js";import"./chevron-down-U1dNK9nR.js";import"./Group-CfYmuYtY.js";import"./RSPContexts-CeCCo7XS.js";const De={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
