import{j as e}from"./iframe-DHxMEyk6.js";import{R as a,a as c}from"./Radio-BDZWH_ae.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C_yGkqEQ.js";import"./clsx-B-dksMZM.js";import"./Group-BjRO1dfk.js";import"./useFocusRing-BkOUJVy3.js";import"./index-BsabDiUe.js";import"./index-D8JeEhpq.js";import"./FieldError-C2Sc9U8m.js";import"./Text-C0s7dJ5a.js";import"./clsx-Ciqy0D92.js";import"./Text-CSs2JSPr.js";import"./Form-BSJcOZpD.js";import"./Button-BpC7kCwC.js";import"./Hidden-CkZgcLGH.js";import"./useLabel-BTR3XuI0.js";import"./useLabels-Yo5aFm_3.js";import"./useButton-Br-Hv-S3.js";import"./SelectionIndicator-B1SEN247.js";import"./useField-C7HbmUXj.js";import"./VisuallyHidden-oG0E9KZu.js";import"./useControlledState-DToB7jqX.js";import"./Label-DQd7EZ-D.js";import"./Dialog-DHWoKmMp.js";import"./RSPContexts-xSY5mLjc.js";import"./OverlayArrow-DEbxoFZ7.js";import"./useResizeObserver-D7DQf7l-.js";import"./Collection-BN9__hjp.js";import"./index-DG8_ZRly.js";import"./Separator-YeRgmhmU.js";import"./SelectionManager-zlWcTFKf.js";import"./useEvent-D9bVVAaY.js";import"./scrollIntoView-Cwf4WFKd.js";import"./useDescription-BbVhVBC-.js";import"./ListKeyboardDelegate-hIKANMJz.js";import"./PressResponder-DIfR31-k.js";import"./useLocalizedStringFormatter-DWzf9Q6R.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CVkPTCT8.js";import"./getScrollParent-Cb_GBxXJ.js";import"./Modal-DRJAq7kg.js";import"./x-BasF0MYi.js";import"./createLucideIcon-uDhXojJY.js";import"./useLocalizedStringFormatter-C4FoF24Q.js";import"./Heading-Clo58xYm.js";import"./Button-DTaKScGa.js";import"./Button.module-BB7N-cLd.js";import"./info-BxNSSHO4.js";import"./Popover-Ju86AZEg.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
