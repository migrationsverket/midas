import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-BMyPeP3B.js";import{F}from"./Flex-BjeSCuHf.js";import{F as n}from"./FlexItem-DjZzjSwe.js";import{T as o}from"./TextField-BiiJUStw.js";import{S as I}from"./Select-B4J3TM-Q.js";import{B as a}from"./Button-DAD8StOt.js";import{R as g,a as b}from"./Radio-DhpJ1Td2.js";import{C as h}from"./CheckboxGroup-Y75TZ5So.js";import{C as k}from"./Checkbox-Cddw7cAJ.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./Text-D0cNLqf0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-BrFQy5aA.js";import"./useFocusRing-CPQALXIu.js";import"./TextFieldBase-Cfcku_6e.js";import"./TextField-CUfpBFUi.js";import"./Input-Dj8a3env.js";import"./Hidden-lswqw32w.js";import"./Label-Cr3pFc-x.js";import"./useTextField-qc1ulPWn.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BWvtu4tG.js";import"./useLabel-BAqrTMfP.js";import"./useFocusable-Cs9agisI.js";import"./TextField.module-BN8ZyQEf.js";import"./Text-BO1MQlio.js";import"./Label-YhzPsNci.js";import"./FieldError-BI5lou7e.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-eceod8wW.js";import"./useButton-DFPcodtW.js";import"./usePress-DljlCKCj.js";import"./index-cpIEhwLo.js";import"./Tag-DMH8u_9D.js";import"./Button-Co7pWk88.js";import"./ProgressBar-6st-rJzm.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Collection-B2SsLZVR.js";import"./index-DwWe6W7f.js";import"./ListBox-CMMshMxg.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-CRX4oULg.js";import"./SelectionManager-2oMtjjZz.js";import"./useEvent-DnmuJhSu.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-C0EWTSbR.js";import"./useDescription-TyCFs068.js";import"./ListKeyboardDelegate-CA_BFpv4.js";import"./useCollator-CouJQU85.js";import"./useListState-DH6o7Nso.js";import"./useHighlightSelectionDescription-CtcqEmyW.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-DA8E_9Dc.js";import"./useHasTabbableChild-Bh3e4XK9.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./check-B_S0S3VY.js";import"./useOverlayTriggerState-Bjtc1fMu.js";import"./useMenuTriggerState-D4kT7gee.js";import"./VisuallyHidden-DiGk2ECL.js";import"./useModal-j8uWYn4E.js";import"./useObserveElement-BrriYDGX.js";import"./chevron-down-U1dNK9nR.js";import"./Button.module-Cqa6HD_M.js";import"./Group-DITek4ZD.js";import"./RSPContexts-CeCCo7XS.js";import"./useToggleState-BmDBGXg5.js";const we={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(x=m.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const Ne=["SimpleForm","TwoColumnForm"];export{l as SimpleForm,m as TwoColumnForm,Ne as __namedExportsOrder,we as default};
