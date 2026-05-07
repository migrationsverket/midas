import{j as e}from"./iframe-D7aktJQV.js";import{R as a,a as c}from"./Radio-DOEMvVVh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DNmLi0Ns.js";import"./clsx-B-dksMZM.js";import"./Group-D6C5clZk.js";import"./useFocusRing-BIeXmF9F.js";import"./index-D1nxkkFw.js";import"./index-BhjnNFRZ.js";import"./FieldError-CgOE4cX4.js";import"./Text-DYj0Y-WB.js";import"./clsx-Ciqy0D92.js";import"./Text-DVQHaLD4.js";import"./Form-C922N3ok.js";import"./Button-2JoqP8wJ.js";import"./Hidden-B0OViUit.js";import"./useLabel-yzdCyS6F.js";import"./useLabels-DjGMth6f.js";import"./useButton-D9uxvQZx.js";import"./SelectionIndicator-DJ7uEc0n.js";import"./useField-B0Fny93Q.js";import"./VisuallyHidden-ClpBCcmK.js";import"./useControlledState-1uGcLhZ_.js";import"./Label-NM61z3GX.js";import"./Dialog-BvVkdRgj.js";import"./RSPContexts-BW1FMwMd.js";import"./OverlayArrow-C76sK5jk.js";import"./useResizeObserver-D5zOd01J.js";import"./Collection-DzqeZ_-Z.js";import"./index-DxT1THtT.js";import"./Separator-BD3R25SH.js";import"./SelectionManager-CA5zQPsy.js";import"./useEvent-D7_OBK7N.js";import"./scrollIntoView-DKDMhDyf.js";import"./useDescription-NFTwlXYl.js";import"./ListKeyboardDelegate-Dwvuav7G.js";import"./PressResponder-C9r0Gjew.js";import"./useLocalizedStringFormatter-DRhhdLG7.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-De76PqFR.js";import"./getScrollParent-Dt9wHwKE.js";import"./ModalOverlay-DfDeEDlt.js";import"./x-z9l8IXo0.js";import"./createLucideIcon-Bis6T-wM.js";import"./useLocalizedStringFormatter-V3f1g4sa.js";import"./Heading-DQyNlRyp.js";import"./Button-D5CfzWf4.js";import"./Button.module-BB7N-cLd.js";import"./info-DXQSwoXw.js";import"./Popover-BjaklVsd.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
