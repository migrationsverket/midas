import{j as e}from"./iframe-DgC-Ldrx.js";import{R as a,a as c}from"./Radio-BT1n_w95.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BUpv-0tc.js";import"./clsx-B-dksMZM.js";import"./Group-8NEZM85t.js";import"./useFocusRing-dqGFuQw5.js";import"./index-N9gKTxLp.js";import"./index-Dh-_B1o5.js";import"./FieldError-DZZcZZwp.js";import"./Text-DBf5U8p7.js";import"./clsx-Ciqy0D92.js";import"./Text-FIGzZLpV.js";import"./Form-ynRyQGu4.js";import"./Button-eOYMOt-9.js";import"./Hidden-B6xJ_9IQ.js";import"./useLabel-BjQqLo5U.js";import"./useLabels-DdUViYlU.js";import"./useButton-D1S_DcDn.js";import"./SelectionIndicator-DEwQOY4-.js";import"./useField-DStHgBoo.js";import"./VisuallyHidden-CY4Z8bfN.js";import"./useControlledState-9EeHrS1X.js";import"./Label-DHcZZoo-.js";import"./Dialog-CguZjSDk.js";import"./RSPContexts-CrNZT_wF.js";import"./OverlayArrow-XS7PvNLo.js";import"./useResizeObserver-4DgrDvSQ.js";import"./Collection-DeYQIrew.js";import"./index-BYtlB0jv.js";import"./Separator-8PVCgcBg.js";import"./SelectionManager-wmppj9Sm.js";import"./useEvent-CzHW2e8Z.js";import"./scrollIntoView-DEmmCe3n.js";import"./useDescription-DelY62ZZ.js";import"./ListKeyboardDelegate-CMZUMn_O.js";import"./PressResponder-LDZhHItX.js";import"./useLocalizedStringFormatter-Cy9GHfDn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ck2eMurq.js";import"./getScrollParent-DXMGajJM.js";import"./ModalOverlay-CmqOTaTF.js";import"./x-6ABgZAjN.js";import"./createLucideIcon-Dct_wYt8.js";import"./useLocalizedStringFormatter-CU_Lgw4A.js";import"./Heading-CTr8HC6y.js";import"./Button-C6c-eprm.js";import"./Button.module-BB7N-cLd.js";import"./info-B3wi8LVA.js";import"./Popover-D0BYdOfi.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
