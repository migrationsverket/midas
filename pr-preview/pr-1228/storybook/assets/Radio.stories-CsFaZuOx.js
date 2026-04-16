import{j as e}from"./iframe-Xm_9cv73.js";import{R as a,a as c}from"./Radio-BY2piQWi.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BrYTleyQ.js";import"./clsx-B-dksMZM.js";import"./Group-CCaYHNjE.js";import"./useFocusRing-B1Kohi3p.js";import"./index-Cjq5DljI.js";import"./index-B7N2Cx5U.js";import"./FieldError-DghDJU9N.js";import"./Text-83WNws37.js";import"./clsx-Ciqy0D92.js";import"./Text-C4UzyOu1.js";import"./Form-bvdt1e3R.js";import"./Button-DVfOBJT3.js";import"./Hidden-BZlSwNP_.js";import"./useLabel-DzdXQuC_.js";import"./useLabels-C-FgVELl.js";import"./useButton-BE-XYmko.js";import"./SelectionIndicator-DtMeBzWu.js";import"./useField-CVw2OaLJ.js";import"./VisuallyHidden-BGkpKKxN.js";import"./useControlledState-B_fJsoKU.js";import"./Label-CdcGa_gF.js";import"./Dialog-C69eZzVq.js";import"./RSPContexts-D8VaqtGQ.js";import"./OverlayArrow-SVU9nlq4.js";import"./useResizeObserver-BmXoXVDq.js";import"./Collection-DrnWUacn.js";import"./index-BdyOfa6A.js";import"./Separator-Dp2EBKtN.js";import"./SelectionManager-CkZyscrj.js";import"./useEvent-IJcG7rNp.js";import"./scrollIntoView-DLCl9E_L.js";import"./useDescription-jUlzP2-m.js";import"./ListKeyboardDelegate-Bo3okK2V.js";import"./PressResponder-CKN6Vp37.js";import"./useLocalizedStringFormatter-Df4Fg5xM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwL4Kwi0.js";import"./getScrollParent-DW5MB0xc.js";import"./ModalOverlay-C-mWmmh2.js";import"./x-CXw9u6Gz.js";import"./createLucideIcon-9sC3-GJ0.js";import"./useLocalizedStringFormatter-DWIBY6KU.js";import"./Heading-Bg7Vp_mI.js";import"./Button-Da8bQidF.js";import"./Button.module-BB7N-cLd.js";import"./info-DlFwDLPB.js";import"./Popover-B9hrRJtJ.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
