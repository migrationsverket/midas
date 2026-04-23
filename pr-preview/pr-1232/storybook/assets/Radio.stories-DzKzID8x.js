import{j as e}from"./iframe-BNflmq3A.js";import{R as a,a as c}from"./Radio-Cpy8bGQe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B7V63oD4.js";import"./clsx-B-dksMZM.js";import"./Group-DjoYRNGK.js";import"./useFocusRing-C6RlaKsx.js";import"./index-BrcXQqZF.js";import"./index-C235bJJA.js";import"./FieldError-CpZNXgM0.js";import"./Text-Bnz2t9Ql.js";import"./clsx-Ciqy0D92.js";import"./Text-BlWLVQLi.js";import"./Form-ClPIoKYv.js";import"./Button-DJfxBrz6.js";import"./Hidden-fjlvP_hk.js";import"./useLabel-CJ08WlT4.js";import"./useLabels-D6wk1E_k.js";import"./useButton-DGWy0aPQ.js";import"./SelectionIndicator-C21eoo8L.js";import"./useField-D3c7IL7J.js";import"./VisuallyHidden-ITIWhviF.js";import"./useControlledState-DuXs14gL.js";import"./Label-DsSPpc1K.js";import"./Dialog-CqO2zUsn.js";import"./RSPContexts-CIYDedK3.js";import"./OverlayArrow-7xfz7Hv7.js";import"./useResizeObserver-3Eb8t69T.js";import"./Collection-BCi67oTX.js";import"./index-D9RdZJbp.js";import"./Separator-CN65iN9a.js";import"./SelectionManager-uSE9FSHJ.js";import"./useEvent-DMh1OLFP.js";import"./scrollIntoView-DZi0I4zG.js";import"./useDescription-B_uvSpwC.js";import"./ListKeyboardDelegate-DTCudMFJ.js";import"./PressResponder-CcUwqPuT.js";import"./useLocalizedStringFormatter-CAvVK8gZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1dnsmar.js";import"./getScrollParent-BjbBQLw-.js";import"./ModalOverlay-MTJJ6ffD.js";import"./x-DbG6WDA3.js";import"./createLucideIcon-BQvoQkeP.js";import"./useLocalizedStringFormatter-C2_DIja1.js";import"./Heading-CpbECIrv.js";import"./Button-Cyp4EM5w.js";import"./Button.module-BB7N-cLd.js";import"./info-2Y5OfA5f.js";import"./Popover-DmjfmCnZ.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
