import{j as e}from"./iframe-ZWFuO3rS.js";import{R as a,a as c}from"./Radio-B2CC8nNn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CXJrMo2L.js";import"./clsx-B-dksMZM.js";import"./Group-C3Kvev_s.js";import"./useFocusRing-CF4sVLCG.js";import"./index-BuEPxCUb.js";import"./index-CW1b9fzZ.js";import"./FieldError-BqdH46Wm.js";import"./Text-CW08t5T_.js";import"./clsx-Ciqy0D92.js";import"./Text-uwKeqPz3.js";import"./Form-QTqY28Eg.js";import"./Button-CuvBXfLT.js";import"./Hidden-DlAqJEIp.js";import"./useLabel-s0mfMDbD.js";import"./useLabels-BdKRxhZh.js";import"./useButton-otN3sW9Y.js";import"./SelectionIndicator-BD5ZlguQ.js";import"./useField-DLnhlBC6.js";import"./VisuallyHidden-5iCcQboa.js";import"./useControlledState-CaSPfHyR.js";import"./Label-C8dYgMga.js";import"./Dialog-D5pdNRVZ.js";import"./RSPContexts-Dt_P8EmM.js";import"./OverlayArrow-C6DoMgcq.js";import"./useResizeObserver-CqncRxwe.js";import"./Collection-BWOiDNzU.js";import"./index-D3vqNWyO.js";import"./Separator-DRfwBEBl.js";import"./SelectionManager-UM6kyFyM.js";import"./useEvent-D0Q6FxQg.js";import"./scrollIntoView-CxB-7RAS.js";import"./useDescription-BZozsu8w.js";import"./ListKeyboardDelegate-06m2HPXH.js";import"./PressResponder-BGak0TH8.js";import"./useLocalizedStringFormatter-w6fCSWeH.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C8wgjS_2.js";import"./getScrollParent-CnRw05DR.js";import"./ModalOverlay-Dxkf-sWd.js";import"./x-C7_Ecf5k.js";import"./createLucideIcon-BJpb_u0I.js";import"./useLocalizedStringFormatter-3X8tf49V.js";import"./Heading-7px2xDz0.js";import"./Button-DoVlW0aQ.js";import"./Button.module-BB7N-cLd.js";import"./info-bT8T8goN.js";import"./Popover-DZO6Osg5.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
