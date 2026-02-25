import{j as e}from"./iframe-BIYycVtF.js";import{R as a,a as c}from"./Radio-Ds_gfYuA.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-1K9N6LGR.js";import"./utils-CQyQJNz7.js";import"./useObjectRef-Dnttuos9.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-_u8e-JUw.js";import"./useFocusable-DRoMEDqQ.js";import"./index-CH0u5tNJ.js";import"./index-Dx5ixs9i.js";import"./FieldError-BsWqYage.js";import"./Text-A1nWhzuO.js";import"./clsx-Ciqy0D92.js";import"./Text-B1YyVTq1.js";import"./Form-CvaXZ-x_.js";import"./useFormValidation-CJX6c1NG.js";import"./Button-xCxR0kSd.js";import"./Hidden-AGqSstUV.js";import"./useLabels-DC_FEenW.js";import"./useButton-BNdOFr74.js";import"./SelectionIndicator-qZAjNlSO.js";import"./useField-BJy-oEwD.js";import"./VisuallyHidden-CK9a4W9O.js";import"./useControlledState-C6aaDo-s.js";import"./Label-DYI4Hi0v.js";import"./Dialog-7czyXmUB.js";import"./RSPContexts-B6TKKvZV.js";import"./OverlayArrow-DFDW9jlO.js";import"./useResizeObserver-eM6IJa4E.js";import"./Collection-emX73nrZ.js";import"./CollectionBuilder-5cVLOiMR.js";import"./index-2x7kCp5n.js";import"./Separator-CalRW1Eu.js";import"./SelectionManager-EfHU5LpS.js";import"./useEvent-B9CnIbJl.js";import"./scrollIntoView-Bo1Xab6M.js";import"./useDescription-DVfA0GtU.js";import"./ListKeyboardDelegate-C3gxtFmw.js";import"./PressResponder-B9WZc19F.js";import"./useLocalizedStringFormatter-BW8yoNsi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bwz2spCR.js";import"./getScrollParent-BVUiVP-B.js";import"./Button-D9Any6-B.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BKDdPfco.js";import"./createLucideIcon-S6aGlHi1.js";import"./x-CohE59zs.js";import"./Heading-BG47WcTa.js";import"./info-CPdajoQQ.js";import"./Popover-DvmrTdrb.js";const ur={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const br=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,br as __namedExportsOrder,ur as default};
