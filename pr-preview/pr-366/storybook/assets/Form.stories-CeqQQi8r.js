import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-DlQZhzp4.js";import{F}from"./Flex-B0Arw3Ak.js";import{F as n}from"./FlexItem-B9hblQ3x.js";import{T as o}from"./TextField-DTM_aE0i.js";import{S as I}from"./Select-B8Ym17Xc.js";import{B as a}from"./Button-BQtEY08a.js";import{R as g,a as b}from"./Radio-B3WeaYqX.js";import{C as h}from"./CheckboxGroup-Ber-4USg.js";import{C as k}from"./Checkbox-BJm9Boop.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-C4wbeGu1.js";import"./clsx-B-dksMZM.js";import"./Text-CbyHDQDf.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-DYqQlbaC.js";import"./useFocusRing-Dz6JbirZ.js";import"./index-cpIEhwLo.js";import"./Input-CCjYHXlQ.js";import"./Hidden-DizQ9ce0.js";import"./Label-BXmCKTLy.js";import"./TextField-BHRyfley.js";import"./useTextField-DeWwa03j.js";import"./useControlledState-DGyHFLi9.js";import"./useField-jnpLLrbi.js";import"./useLabel-Bdg4Lht-.js";import"./useFocusable-qNkO0Mxa.js";import"./TextField.module-BTfcNBqa.js";import"./Button-EmqGRilJ.js";import"./ProgressBar-DVVijuUB.js";import"./context-gxVqox2x.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Tag-CW4dr-Y0.js";import"./Collection-Cckz-aMS.js";import"./index-DwWe6W7f.js";import"./ListBox-BOdVguER.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-DvwU5ccg.js";import"./SelectionManager-CBsPsR0V.js";import"./useEvent-D4_b5_Hb.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-DXdr2zZl.js";import"./useDescription-B1EhVr9u.js";import"./ListKeyboardDelegate-Bn7qUmur.js";import"./useCollator-DpeVXYFV.js";import"./useListState-BaIkeypR.js";import"./useHighlightSelectionDescription-DtK9P45F.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-DFsWMtKh.js";import"./useHasTabbableChild-DbxXBIBB.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./useOverlayTriggerState-BYgfFe2E.js";import"./DismissButton-CHPXrp-u.js";import"./VisuallyHidden-D7lLJ2nJ.js";import"./useModal-CG93Z3Sb.js";import"./useMenuTrigger-D5KXjPDc.js";import"./useMenuTriggerState-B7a2_mPk.js";import"./chevron-down-U1dNK9nR.js";import"./Group-NQZiP3oS.js";import"./RSPContexts-CeCCo7XS.js";const De={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
