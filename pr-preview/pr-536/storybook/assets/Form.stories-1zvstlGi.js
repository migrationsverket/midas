import{j as e}from"./jsx-runtime-DtgEGaVE.js";import{$ as j}from"./Form-BMyPeP3B.js";import{F}from"./Flex-g7WWfIAy.js";import{F as n}from"./FlexItem-BnblS6bO.js";import{T as o}from"./TextField-CU9zCkIR.js";import{S as I}from"./Select-CkDL4qUO.js";import{B as a}from"./Button-CphC1uZQ.js";import{R as g,a as b}from"./Radio-4WyxKKcX.js";import{C as h}from"./CheckboxGroup-CWg7DnL-.js";import{C as k}from"./Checkbox-D-rpYd-A.js";import"./index-BbAIUH2N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-Dv9Ux5aE.js";import"./clsx-B-dksMZM.js";import"./Text-D0cNLqf0.js";import"./filterDOMProps-BSfnXAP7.js";import"./useFormValidation-BrFQy5aA.js";import"./useFocusRing-CPQALXIu.js";import"./TextFieldBase-BbB4nxou.js";import"./TextField-DtKlQFf3.js";import"./Input-CAfzXJk2.js";import"./Hidden-lswqw32w.js";import"./Label-Cr3pFc-x.js";import"./useTextField-zhCHv51w.js";import"./useControlledState-DGyHFLi9.js";import"./useField-BWvtu4tG.js";import"./useLabel-BAqrTMfP.js";import"./useFocusable-b_0ijIRa.js";import"./TextField.module-DuUrWP1f.js";import"./Text-BO1MQlio.js";import"./Label-C9DvPbah.js";import"./FieldError-BI5lou7e.js";import"./LocalizedStringFormatter-BB0Nk989.js";import"./context-oTIQb5ND.js";import"./useButton-BH_mgHDo.js";import"./usePress-COtC8Zcb.js";import"./index-cpIEhwLo.js";import"./Tag-BTLJ2Snh.js";import"./Button-C6eeUJZ7.js";import"./ProgressBar-DJC3JvQN.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./Collection-Af87zMws.js";import"./index-DwWe6W7f.js";import"./ListBox-CDlT0gOm.js";import"./DragAndDrop-sISFPnlb.js";import"./Separator-vJnokFEK.js";import"./SelectionManager-B6WaAg_e.js";import"./useEvent-DnmuJhSu.js";import"./scrollIntoView-DzftQ5Hl.js";import"./FocusScope-C0EWTSbR.js";import"./useDescription-TyCFs068.js";import"./ListKeyboardDelegate-6F1ur1To.js";import"./useCollator-5m9ED1_d.js";import"./useListState-Q19L1Hvv.js";import"./useHighlightSelectionDescription-bMNPNBBZ.js";import"./useUpdateEffect-DVcG7G3u.js";import"./useLocalizedStringFormatter-DGtYtDnp.js";import"./useHasTabbableChild-Bh3e4XK9.js";import"./getScrollParent-CrrBdd7g.js";import"./x-Cu6J0Y2u.js";import"./createLucideIcon-8wDOqnHv.js";import"./check-B_S0S3VY.js";import"./useOverlayTriggerState-CnVHlh1Q.js";import"./useMenuTriggerState-Dn_TR51k.js";import"./VisuallyHidden-DiGk2ECL.js";import"./useModal-j8uWYn4E.js";import"./useObserveElement-BrriYDGX.js";import"./chevron-down-U1dNK9nR.js";import"./Button.module-kL9Mhzoi.js";import"./Group-DITek4ZD.js";import"./RSPContexts-CeCCo7XS.js";import"./useToggleState-BmDBGXg5.js";const we={component:j,title:"Examples/Form",tags:["autodocs"],argTypes:{}},l={args:{},render:()=>{const r=["Banan","Apple","Mango"];return e.jsxs(F,{children:[e.jsx(n,{col:12,children:e.jsx(o,{label:"Ange ditt fullständiga namn",description:"Glöm inte dina eventuella mellannamn!"})}),e.jsx(n,{col:12,children:e.jsx(o,{label:"Personnummmer",description:"Anges på formen ÅÅMMDD-XXXX"})}),e.jsx(n,{col:12,children:e.jsx(I,{label:"Vilken är din favoritfrukt",placeholder:"Välj en frukt",selectionMode:"single",options:r.map(i=>({id:i,name:i}))})}),e.jsx(n,{children:e.jsx(a,{children:"Skicka"})})]})}},m={args:{},render:()=>{const r=["A","B","C"],i=["Anledning A","Anledning B","Anledning C"];return e.jsx("div",{children:e.jsxs(F,{children:[e.jsx(n,{col:6,children:e.jsx(g,{label:"Anledning",description:"Ange anledning till att du söker i databasen",children:i.map(t=>e.jsx(b,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(h,{label:"Databas",description:"Välj databas att söka i",children:r.map(t=>e.jsx(k,{value:t,children:t},t))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Namn",description:""})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Personnummer"})}),e.jsx(n,{col:6,children:e.jsx(I,{label:"Kön",description:"Kan lämnas tomt",placeholder:"Välj kön",selectionMode:"single",options:r.map(t=>({name:t,id:t}))})}),e.jsx(n,{col:6,children:e.jsx(o,{label:"Ärendekod"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{children:"Sök"})}),e.jsx(n,{col:"auto",children:e.jsx(a,{variant:"secondary",children:"Rensa"})})]})})}};var s,p,d;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
