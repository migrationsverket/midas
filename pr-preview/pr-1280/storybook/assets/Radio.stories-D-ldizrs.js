import{j as e}from"./iframe-dvXwWV4I.js";import{R as a,a as c}from"./Radio-duhtj9vw.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CSQgyNi0.js";import"./clsx-B-dksMZM.js";import"./Group-BV8wH11K.js";import"./useFocusRing-CFfVe8sk.js";import"./index-BluzQUAG.js";import"./index-CbKl3GPI.js";import"./FieldError-C76blMz5.js";import"./Text-CQFRG3Bv.js";import"./clsx-Ciqy0D92.js";import"./Text-CqtbULFE.js";import"./Form-DVwVv6S8.js";import"./Button-DtMCt8o7.js";import"./Hidden-BiX0nsQm.js";import"./useLabel-DUS9osvw.js";import"./useLabels-CR4N-lVY.js";import"./useButton-DGlHeihW.js";import"./SelectionIndicator-CPkYOcv2.js";import"./useField-oOkckiEp.js";import"./VisuallyHidden-DTt1NZf8.js";import"./useControlledState-zKncmKHQ.js";import"./Label-CtWSyj0i.js";import"./Dialog-EVYgDcS7.js";import"./RSPContexts-CrUawT1P.js";import"./OverlayArrow-C5_CppNZ.js";import"./useResizeObserver-BO4ZyoY5.js";import"./Collection-HMTWRzY6.js";import"./index-BSXZ-u45.js";import"./Separator-bA0nHXlQ.js";import"./SelectionManager-D0zL9NsZ.js";import"./useEvent-CmLc8va6.js";import"./scrollIntoView-DYF4SUsq.js";import"./useDescription-DSgANlen.js";import"./ListKeyboardDelegate-CXITj8z1.js";import"./PressResponder-Dqgpfkyb.js";import"./useLocalizedStringFormatter-BZ3gM8Ke.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BK5BlJ81.js";import"./getScrollParent-Bb4tqPd4.js";import"./ModalOverlay-CZPcNFjx.js";import"./x-BvR5c_PP.js";import"./createLucideIcon-Cuh90yXY.js";import"./useLocalizedStringFormatter-CE8NwZkm.js";import"./Heading-DLEaafvb.js";import"./Button-DN_kkRXq.js";import"./Button.module-BB7N-cLd.js";import"./info-awsmCqDM.js";import"./Popover-B9NynIFS.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
