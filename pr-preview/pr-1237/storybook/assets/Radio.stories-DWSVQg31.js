import{j as e}from"./iframe-4jp4gloH.js";import{R as a,a as c}from"./Radio-DJ4ahMi_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-VVEWI3IK.js";import"./clsx-B-dksMZM.js";import"./Group-Cv7i4TUW.js";import"./useFocusRing-CHjnTN6p.js";import"./index-BZ8dxgHN.js";import"./index-Ba_IRaMO.js";import"./FieldError-D-ucO46w.js";import"./Text-DKG8In0g.js";import"./clsx-Ciqy0D92.js";import"./Text-CaWuTb4e.js";import"./Form-CIwvIR5N.js";import"./Button-BmPmOVkQ.js";import"./Hidden-uxp9aDmP.js";import"./useLabel-BAWcaNxa.js";import"./useLabels-BIxc1erV.js";import"./useButton-Cnbi6eSC.js";import"./SelectionIndicator-DERD32HY.js";import"./useField-C6NTEJ5-.js";import"./VisuallyHidden-CwExooWt.js";import"./useControlledState-C8OaseGF.js";import"./Label-Bn89WDN5.js";import"./Dialog-DRahsqTG.js";import"./RSPContexts-C_Tj-sgU.js";import"./OverlayArrow-DHc0EFKa.js";import"./useResizeObserver-C3Vw2coy.js";import"./Collection-D6gGdmWj.js";import"./index-GU77QnNE.js";import"./Separator-C8wUcFi5.js";import"./SelectionManager-qtDdSSC6.js";import"./useEvent-BSjWwKyO.js";import"./scrollIntoView-LVymhG08.js";import"./useDescription-Ca_N61mq.js";import"./ListKeyboardDelegate-BU755iyf.js";import"./PressResponder-BpN-lFO9.js";import"./useLocalizedStringFormatter-DPlQOnfn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CZi5NauF.js";import"./getScrollParent-lyddzNLU.js";import"./ModalOverlay-TllZkSy1.js";import"./x-C0TcUHvQ.js";import"./createLucideIcon-BGZ9Sagt.js";import"./useLocalizedStringFormatter-BH6_V3D9.js";import"./Heading-CE_cjqfz.js";import"./Button-CeMvvwss.js";import"./Button.module-BB7N-cLd.js";import"./info-Cg34k-x-.js";import"./Popover-BJTZb_ez.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
