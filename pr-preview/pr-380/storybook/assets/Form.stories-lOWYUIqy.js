import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-CZtSfxNQ.js";import{F}from"./Flex-N3Uj4a9I.js";import{F as n}from"./FlexItem-C4E4rScV.js";import{T as o}from"./TextField-PfZcrNcR.js";import{S as I}from"./Select-B7a4N-5c.js";import{B as a}from"./Button-D4AM0FbE.js";import{R as g,a as b}from"./Radio-0thn2mGC.js";import{C as h}from"./CheckboxGroup-CFqYbzY1.js";import{C as k}from"./Checkbox-CWsdqiO1.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-B5vVULSi.js";import"./clsx-B-dksMZM.js";import"./Text-BfWS687k.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-pwUdF8Jv.js";import"./useFocusRing-7U1UHDTh.js";import"./Label-DK2CQORK.js";import"./Hidden-lswqw32w.js";import"./TextField-DR7rijVH.js";import"./Input-CQdRTY2u.js";import"./TextArea-BYeeNa5Y.js";import"./useTextField-BTULN5uC.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BiUYFPQe.js";import"./useLabel-XbSNQJBa.js";import"./useFocusable-CmauVdlQ.js";import"./focusSafely-DzEZeR8D.js";import"./index-cpIEhwLo.js";import"./TextField.module-CMChITsf.js";import"./Button-CIzcTr1X.js";import"./ProgressBar-C-2ZZqws.js";import"./context-B5OQOlVG.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Tag-DqD76w3u.js";import"./Collection-DSX7ksCA.js";import"./index-DwWe6W7f.js";import"./ListBox-EPnKzXj9.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator--jQ6KEKV.js";import"./SelectionManager-CH_UAKbc.js";import"./useEvent--bAfsHDR.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-BDcaQnsV.js";import"./useDescription-C_qiR2pz.js";import"./ListKeyboardDelegate-C7MmOkhr.js";import"./useCollator-DECUsGSp.js";import"./useListState-ld2-F_XG.js";import"./useHighlightSelectionDescription-BmLgv18w.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-BsPioxkm.js";import"./useHasTabbableChild-Ce8UFKbc.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-M63CoC7R.js";import"./useMenuTriggerState-kdzSkoqF.js";import"./VisuallyHidden-CpkOB4Ig.js";import"./useModal-PQtX6dXT.js";import"./useSingleSelectListState-D3ypnncd.js";import"./chevron-down-U1dNK9nR.js";import"./Group-CMs6O66C.js";import"./RSPContexts-CeCCo7XS.js";const Ge={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
