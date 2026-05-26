import{j as e}from"./iframe-CXw6yEtL.js";import{R as a,a as c}from"./Radio-DATS0mJ6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-TMTFLosf.js";import"./clsx-B-dksMZM.js";import"./Group-Bc1Fe6Rl.js";import"./useFocusRing-BUJw-zNR.js";import"./index-CPSfvkie.js";import"./index-DlzVmrOj.js";import"./FieldError-DxjbVN8c.js";import"./Text-B-ez7dVi.js";import"./clsx-Ciqy0D92.js";import"./Text-DfSBpgc9.js";import"./Form-dUtoNK2v.js";import"./Button-C2Moqf7z.js";import"./Hidden-D7hcqzmB.js";import"./useLabel-B_dwgCb3.js";import"./useLabels-Bmz9yT3c.js";import"./useButton-DFd8dIUb.js";import"./SelectionIndicator-CRVyJK_1.js";import"./useField-CgwfKGqG.js";import"./VisuallyHidden-DZf8hqs4.js";import"./useControlledState-uGX0UHSY.js";import"./Label-GQUT7ZEJ.js";import"./Dialog-BDtLRBZX.js";import"./RSPContexts-CRecp9AH.js";import"./OverlayArrow-CYsKMuHd.js";import"./useResizeObserver-BgbTD5F9.js";import"./Collection-DRs08V62.js";import"./index-D_bJjS7Z.js";import"./Separator-CiHVhPYJ.js";import"./SelectionManager-DF7_C-wd.js";import"./useEvent-CLzgpnys.js";import"./scrollIntoView-J9HcqoeY.js";import"./useDescription-5GU4b1w7.js";import"./ListKeyboardDelegate-C0AuU4n7.js";import"./PressResponder-BdAtoMPY.js";import"./useLocalizedStringFormatter-GNvNdhCY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DmiDGQ5a.js";import"./getScrollParent-DI5JJTrt.js";import"./ModalOverlay-Bj4CBpHh.js";import"./x-Cy8UX61V.js";import"./createLucideIcon-DWQv9Ysr.js";import"./useLocalizedStringFormatter-sjnuzL-M.js";import"./Heading-E2UPktky.js";import"./Button-DEhxKNaB.js";import"./Button.module-BB7N-cLd.js";import"./info-95qLpLfK.js";import"./Popover-DnXwvssA.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isDisabled: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isReadOnly: true,
    value: 'Kiwi'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: radioItemsOneDisabled
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: items,
    isInvalid: true,
    errorMessage: 'Det här stämmer inte!'
  }
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    isRequired: true
  },
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: items,
    errorMessage: undefined,
    validate: value => value?.includes('Äpple') ? 'Inga äpplen är tillåtna' : true
  },
  render: args => <form>
      <RadioGroup {...args} />
      <button type='submit'>Submit</button>
    </form>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Primary.args,
    children: <>
        <Radio key='radio-apple' value='apple'>
          Äpple
        </Radio>
        <Radio key='radio-banan' value='banan'>
          Banan
        </Radio>
      </>,
    orientation: 'horizontal'
  }
}`,...m.parameters?.docs?.source}}};const cr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,cr as __namedExportsOrder,mr as default};
