import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-I0ljaAay.js";import{F}from"./Flex-C8Pw2UTh.js";import{F as n}from"./FlexItem-CZMcrfuE.js";import{S as I}from"./Select-DxyLkXSF.js";import{B as a}from"./Button-5WUfYGbD.js";import{R as g,a as b}from"./Radio-DcCKuMPG.js";import{C as h}from"./CheckboxGroup-DjdvRwSn.js";import{C as k}from"./Checkbox-ClSurUdx.js";import{T as o}from"./TextField-CrpDqwbH.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-fGMpyvF6.js";import"./clsx-B-dksMZM.js";import"./Text-CLHHKsvT.js";import"./useFocusRing-D234eI5d.js";import"./index-cpIEhwLo.js";import"./useFormValidation-BplRM21L.js";import"./Button-CTiZg4rz.js";import"./ProgressBar-qio85TVe.js";import"./Label-C7YJVz0K.js";import"./Hidden-lswqw32w.js";import"./context-gwlhO1hg.js";import"./LiveAnnouncer-A-XV3aHJ.js";import"./Tag-BwwdtT56.js";import"./Collection-8zswMZr2.js";import"./index-DwWe6W7f.js";import"./ListBox-D8wMoVag.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-Dru5Rsd-.js";import"./SelectionManager-CpQyjLx-.js";import"./useEvent-Ou8lCwV4.js";import"./scrollIntoView-Br2KMoz-.js";import"./FocusScope-BTvUdKNZ.js";import"./useControlledState-DGyHFLi9.js";import"./ListKeyboardDelegate-Cy2OSJKs.js";import"./useCollator-BwOLflG5.js";import"./useListState-DD0aXFW1.js";import"./useField-DUxalVp6.js";import"./useHighlightSelectionDescription-D1mAfCwv.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-D7bE6AYj.js";import"./useHasTabbableChild-CM3Inzdo.js";import"./getScrollParent-DaqmRUg6.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./TextField-UckN7hDi.js";import"./Input-CMdrBSNU.js";import"./useTextField-DQ33iIrk.js";import"./useOverlayTriggerState-DwxlxUpQ.js";import"./useMenuTriggerState-upCXLjC-.js";import"./VisuallyHidden-CIX9y9is.js";import"./useModal-BdzBpG_k.js";import"./useSingleSelectListState-BC6rNwod.js";import"./FieldError-BADsxAoD.js";import"./chevron-down-U1dNK9nR.js";import"./useIsDisabled-Cy36feIv.js";import"./Checkbox-U40LUIMq.js";import"./RSPContexts-CeCCo7XS.js";import"./useDateFormatter-XsEnc7vv.js";import"./InputWrapper-CKVyRhfV.js";import"./Label-D7d8orDF.js";import"./Text-YbdszP_I.js";import"./TextField.module-DZbAscKo.js";const De={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
