import{j as e}from"./iframe-CG21FvLg.js";import{R as a,a as c}from"./Radio-BxKI9Wod.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dfpd-lDd.js";import"./clsx-B-dksMZM.js";import"./Group-DUq970bw.js";import"./useFocusRing-UKlSaOwL.js";import"./index-DJQDMjGE.js";import"./index-DIUOAeZ0.js";import"./FieldError-D1k-tzt9.js";import"./Text-D17DsBlZ.js";import"./clsx-Ciqy0D92.js";import"./Text-DYV6Mtqz.js";import"./Form-DCvqDcwU.js";import"./Button-eYd2LYW1.js";import"./Hidden-DHiBRU7w.js";import"./useLabel-CK6_zand.js";import"./useLabels-DbIZAWFx.js";import"./useButton-EC9QZCu0.js";import"./SelectionIndicator-BYoIF3tz.js";import"./useField-pxlW-odg.js";import"./VisuallyHidden-B-Rie-TX.js";import"./useControlledState-py48MqsP.js";import"./Label-CzrlB_hv.js";import"./Dialog-CFObKHxI.js";import"./RSPContexts-bVWhtwKV.js";import"./OverlayArrow--2SsuVm1.js";import"./useResizeObserver-ClupCXd0.js";import"./Collection-DKvsrM8n.js";import"./index-BMn1uAFZ.js";import"./Separator-CwHdkvyR.js";import"./SelectionManager-Ddjx_Pab.js";import"./useEvent-DK1Ig8Tf.js";import"./scrollIntoView-DbthYiWP.js";import"./useDescription-DzkVNNnf.js";import"./ListKeyboardDelegate-BsMDHkG0.js";import"./PressResponder-DPgccHON.js";import"./useLocalizedStringFormatter-CZfKgiZn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCWxWkNe.js";import"./getScrollParent-yFgCZLQn.js";import"./ModalOverlay-b0dkQchM.js";import"./x-DrfF8WsI.js";import"./createLucideIcon-DIP5Ktet.js";import"./useLocalizedStringFormatter-5oZjcWP5.js";import"./Heading-Bl-bKlIC.js";import"./Button-DTO_Qu1U.js";import"./Button.module-BB7N-cLd.js";import"./info-5JnoM-IT.js";import"./Popover-VCd0dm5O.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
