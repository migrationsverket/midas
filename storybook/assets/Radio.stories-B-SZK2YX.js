import{j as e}from"./iframe-B8ApkfN9.js";import{R as a,a as c}from"./Radio-Bfnj4i7j.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DY9Yxgt6.js";import"./clsx-B-dksMZM.js";import"./Group-DkHP5DWm.js";import"./useFocusRing-t4lmh3Yy.js";import"./index-B1GJl5u8.js";import"./index-Dam3589Q.js";import"./FieldError-BN9b5ZCd.js";import"./Text-DCpVGc-0.js";import"./clsx-Ciqy0D92.js";import"./Text-nPgffpxE.js";import"./Form-a5ECdOXK.js";import"./Button-D0ujuU3m.js";import"./Hidden-B3-5R_c4.js";import"./useLabel-CJkRyn3E.js";import"./useLabels-C6kkXsgA.js";import"./useButton-CG0EpAju.js";import"./SelectionIndicator-DwXF7zi6.js";import"./useField-DT8Rrx5b.js";import"./VisuallyHidden-Cpti0KaM.js";import"./useControlledState-CcqX14cB.js";import"./Label-cBYOjddP.js";import"./Dialog-woLwDaik.js";import"./RSPContexts-BYDi1jbG.js";import"./OverlayArrow-Dwt4pJJc.js";import"./useResizeObserver-CXZyhZdq.js";import"./Collection-BfpbWxCO.js";import"./index-BS6AmCaV.js";import"./Separator-DL2qrsHD.js";import"./SelectionManager-2__bJrXK.js";import"./useEvent-INSFkTc2.js";import"./scrollIntoView-ChlyCIqm.js";import"./useDescription-C1wJSBol.js";import"./ListKeyboardDelegate-CmLx6wrK.js";import"./PressResponder-DHCcw9VP.js";import"./useLocalizedStringFormatter-fZ8nAVLV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B3iQyTM3.js";import"./getScrollParent-BsnoEbY8.js";import"./ModalOverlay-C7JZYREF.js";import"./x-DqxHC3Oe.js";import"./createLucideIcon-tZEetkZ6.js";import"./useLocalizedStringFormatter-5IW1LiLo.js";import"./Heading-dTcXRExX.js";import"./Button-DBfSMFHv.js";import"./Button.module-BB7N-cLd.js";import"./info-Da5c9fJe.js";import"./Popover-UNnNmDws.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
