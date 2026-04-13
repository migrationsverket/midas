import{j as e}from"./iframe-CYSKzr0I.js";import{R as a,a as c}from"./Radio-BRqn7hl4.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-ByZ0CNGg.js";import"./clsx-B-dksMZM.js";import"./Group-kfhBFxvy.js";import"./useFocusRing-BOmMevWO.js";import"./index-DJnpB-SU.js";import"./index-BKF9VLNz.js";import"./FieldError-pBIr7GBS.js";import"./Text-D-FhadIY.js";import"./clsx-Ciqy0D92.js";import"./Text-BV0i2D1f.js";import"./Form-DeTa1GGT.js";import"./Button-DDpb5IsZ.js";import"./Hidden-nUwUlPG8.js";import"./useLabel-BSP_KiPN.js";import"./useLabels-CU1dbJnt.js";import"./useButton-DFwA3R9x.js";import"./SelectionIndicator-DSerCQMG.js";import"./useField-9poXgOx8.js";import"./VisuallyHidden-D5I2qOtz.js";import"./useControlledState-YbLesBTN.js";import"./Label-xDSIMgsM.js";import"./Dialog-Dc-vgPKm.js";import"./RSPContexts-aAwDc8x5.js";import"./OverlayArrow-CZqpaMw3.js";import"./useResizeObserver-GOJdH5Bl.js";import"./Collection-CfkoZBPn.js";import"./index-HmT-HBiW.js";import"./Separator-ByUTidnJ.js";import"./SelectionManager-OX1LghzF.js";import"./useEvent-F_BKG7Ay.js";import"./scrollIntoView-DNouCeg5.js";import"./useDescription-BdJNmK5T.js";import"./ListKeyboardDelegate-Bm3ugmfh.js";import"./PressResponder-f2ebe0dD.js";import"./useLocalizedStringFormatter-ClZt7a0N.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B5VRkCog.js";import"./getScrollParent-DyjFmHbi.js";import"./Modal-CtIGn-SM.js";import"./x-BEC-7ATt.js";import"./createLucideIcon-DLSGmePH.js";import"./useLocalizedStringFormatter-D5bMO4Zi.js";import"./Heading-BesTY9gY.js";import"./Button-BBfM7fHR.js";import"./Button.module-BB7N-cLd.js";import"./info-CpSsyVDg.js";import"./Popover-BmAbyCcG.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
