import{j as e}from"./iframe-CN8uU3WK.js";import{R as a,a as c}from"./Radio-3Q11gvae.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZdGWMo4.js";import"./clsx-B-dksMZM.js";import"./Group-ya_6Tkk0.js";import"./useFocusRing-CUcvtRrG.js";import"./index-C0vdhhw7.js";import"./index-Cks_K4jE.js";import"./FieldError-CQyQ10Lj.js";import"./Text-DntZGJ-I.js";import"./clsx-Ciqy0D92.js";import"./Text-DvVr5DU7.js";import"./Form-CYOLK2lS.js";import"./Button-BnmvhNcQ.js";import"./Hidden-i_4Qa2VQ.js";import"./useLabel-DgboamvD.js";import"./useLabels-Do1n23m3.js";import"./useButton-DjAvv2ab.js";import"./SelectionIndicator-CK6GDs9o.js";import"./useField-BPezoI5_.js";import"./VisuallyHidden-D1gwq_r2.js";import"./useControlledState-n2go4XxZ.js";import"./Label-DH_a-MIE.js";import"./Dialog-Y4sieQzC.js";import"./RSPContexts-FWWfLY0V.js";import"./OverlayArrow-DY03tKAK.js";import"./useResizeObserver-PMRAu2PC.js";import"./Collection-ClFv3c_D.js";import"./index-hDLoztzN.js";import"./Separator-aXVDjkAu.js";import"./SelectionManager-DC7iicly.js";import"./useEvent-B3wdZg5O.js";import"./scrollIntoView-dW3ZURKy.js";import"./useDescription-DVfq5zSO.js";import"./ListKeyboardDelegate-DTVdwrrg.js";import"./PressResponder-DKwZi8Z6.js";import"./useLocalizedStringFormatter-BM2-R2IO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoqKfwmY.js";import"./getScrollParent-g_sxJttE.js";import"./ModalOverlay-CHz0Hb7j.js";import"./x-3fndBwRx.js";import"./createLucideIcon-D_RMlAle.js";import"./useLocalizedStringFormatter-C8jrJhCU.js";import"./Heading-uOARh3Em.js";import"./Button-BVfd33cu.js";import"./Button.module-BB7N-cLd.js";import"./info-BrWWqy7C.js";import"./Popover-BiyZzAmm.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
