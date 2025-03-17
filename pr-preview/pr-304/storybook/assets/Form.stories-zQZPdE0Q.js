import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-DKViyh0O.js";import{F}from"./Flex-DPn6_PbI.js";import{F as n}from"./FlexItem-BYEK9oAO.js";import{T as o}from"./TextField-BpHwDO-o.js";import{S as I}from"./Select-B9VBI1pD.js";import{B as a}from"./Button-Cr_M3uY_.js";import{R as g,a as b}from"./Radio-C-Cd7t0P.js";import{C as h}from"./CheckboxGroup-4xiaNFFL.js";import{C as k}from"./Checkbox-ApUJ8xxD.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-BhWkjeqE.js";import"./clsx-B-dksMZM.js";import"./Text-BpXRIGMg.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-DTUkoRt0.js";import"./useFocusRing-BFo6eXxS.js";import"./Input-D9FO-LNc.js";import"./Hidden-DrRnqvCY.js";import"./index-cpIEhwLo.js";import"./Label-BBCc9K7K.js";import"./TextField-CdQBPvvv.js";import"./useTextField-yvZfA2lE.js";import"./useControlledState-DGyHFLi9.js";import"./useField-Vu58C-dH.js";import"./useLabel-CH4xJhfw.js";import"./useFocusable-CsLSqN_1.js";import"./TextField.module-ewMUXt43.js";import"./Button-Db7Kwb_W.js";import"./ProgressBar-KG041EEs.js";import"./context-DKkYq9qZ.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Tag-Dh-8J7_r.js";import"./Collection-Ckq42TFD.js";import"./index-DwWe6W7f.js";import"./ListBox-BwEhJUmI.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-BvAxnSk2.js";import"./SelectionManager-DZBNrpX9.js";import"./useEvent-F7Njpygl.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-CVReLJeH.js";import"./useDescription-Dtl9HSnp.js";import"./ListKeyboardDelegate-DmPpmGaI.js";import"./useCollator-DojbmfC0.js";import"./useListState-DLqXvUD_.js";import"./useHighlightSelectionDescription-B0S_rY_S.js";import"./useLocalizedStringFormatter-CbwlXzSd.js";import"./useUpdateEffect-DShQiA8p.js";import"./useHasTabbableChild-Bx_nEl3q.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-MBiwFMwk.js";import"./DismissButton-B1Ad_hU1.js";import"./VisuallyHidden-BrRgg-ml.js";import"./useModal-CdubIg0x.js";import"./useMenuTrigger-CKHyFUvM.js";import"./useMenuTriggerState-DujQagz6.js";import"./chevron-down-U1dNK9nR.js";import"./Group-C-Kls-uU.js";import"./RSPContexts-CeCCo7XS.js";const De={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
