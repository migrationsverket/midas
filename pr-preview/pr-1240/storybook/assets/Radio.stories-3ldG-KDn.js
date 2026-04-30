import{j as e}from"./iframe-DpTmCcsu.js";import{R as a,a as c}from"./Radio-9aqj7emR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BkAa9oCc.js";import"./clsx-B-dksMZM.js";import"./Group-CjaNmGuh.js";import"./useFocusRing-p-K2lh1y.js";import"./index-DCsIhNab.js";import"./index-n8gR98_1.js";import"./FieldError-DZQ02WXe.js";import"./Text-C2ABOPKT.js";import"./clsx-Ciqy0D92.js";import"./Text-DZjjFYeH.js";import"./Form-ZmL5cGy_.js";import"./Button-BsQKBFvZ.js";import"./Hidden-pLTvcnD_.js";import"./useLabel-Bn7w8Ubf.js";import"./useLabels-DI-VIC2d.js";import"./useButton-yUVIJFB0.js";import"./SelectionIndicator-CoqMXBj6.js";import"./useField-BZUShFHQ.js";import"./VisuallyHidden-Dp3u6Svq.js";import"./useControlledState-Du11SrDH.js";import"./Label-Cuy3kht_.js";import"./Dialog-DqnNjaJi.js";import"./RSPContexts-CDes9nfa.js";import"./OverlayArrow-C3m7dJ5y.js";import"./useResizeObserver-CX6ENk_I.js";import"./Collection-pS06VS6s.js";import"./index-BChFUTeo.js";import"./Separator-DQbe1b_J.js";import"./SelectionManager-EeeeUcvE.js";import"./useEvent-aGapLNe8.js";import"./scrollIntoView-D1143tc0.js";import"./useDescription-ZwNvLjiW.js";import"./ListKeyboardDelegate-BqFXxQy7.js";import"./PressResponder-DnodVIaB.js";import"./useLocalizedStringFormatter-B3B7XcvV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DUfhnEHD.js";import"./getScrollParent-BTKk9p6-.js";import"./ModalOverlay-DavhYSKE.js";import"./x-Ch6sGbPf.js";import"./createLucideIcon-BVEhdOTx.js";import"./useLocalizedStringFormatter-DzRBAxmk.js";import"./Heading-D1Oj7BSx.js";import"./Button-BML3brTK.js";import"./Button.module-BB7N-cLd.js";import"./info-CBNYmXvC.js";import"./Popover-DO1yXugR.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
