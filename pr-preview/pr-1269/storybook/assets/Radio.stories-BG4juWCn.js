import{j as e}from"./iframe-Cc2x2NhL.js";import{R as a,a as c}from"./Radio-Dm-lClL7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-4Igqbjf8.js";import"./clsx-B-dksMZM.js";import"./Group-XJNTrNJv.js";import"./useFocusRing-WAjZqxaV.js";import"./index-B2z8J_iy.js";import"./index-BMFqcPHU.js";import"./FieldError-l6QnCvwQ.js";import"./Text-D3p3B56u.js";import"./clsx-Ciqy0D92.js";import"./Text-DcE_bHZ_.js";import"./Form-Dzl391B-.js";import"./Button-ByJMIeTP.js";import"./Hidden-DXurTabA.js";import"./useLabel-C3c6HGiK.js";import"./useLabels-DlHfLFqT.js";import"./useButton-DbeNFfwU.js";import"./SelectionIndicator-BhAuP5hr.js";import"./useField-Dyc8N4z1.js";import"./VisuallyHidden-CAnoPPmf.js";import"./useControlledState-B_OZWkkq.js";import"./Label-DYNh7RDv.js";import"./Dialog-BPf3IZOs.js";import"./RSPContexts-0YfvD9LK.js";import"./OverlayArrow-FlYvI0_Z.js";import"./useResizeObserver-DWx8oCEL.js";import"./Collection-DrMZK_17.js";import"./index-DXdtOShX.js";import"./Separator-7WC-UZS3.js";import"./SelectionManager-DEIbJdB3.js";import"./useEvent-BBH3oYjA.js";import"./scrollIntoView-BdS7fMnb.js";import"./useDescription-Djm_rT5S.js";import"./ListKeyboardDelegate-BFNmsEvi.js";import"./PressResponder-C8VUQxtG.js";import"./useLocalizedStringFormatter-DvNtIm_P.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dll6ZQaD.js";import"./getScrollParent-D5jUw6gC.js";import"./ModalOverlay-BmUXt-jD.js";import"./x-BwuT2ktD.js";import"./createLucideIcon-DcmAEzc9.js";import"./useLocalizedStringFormatter-sXp9RPex.js";import"./Heading-Bd4wMQv_.js";import"./Button-ClCBSbVd.js";import"./Button.module-BB7N-cLd.js";import"./info-dC2Dc-R-.js";import"./Popover-BTHC1uhw.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
