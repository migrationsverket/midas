import{j as e}from"./iframe-C5ngTzwY.js";import{R as a,a as c}from"./Radio-CH6mNCyl.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dg8dAIMb.js";import"./clsx-B-dksMZM.js";import"./Group-BmSX7JQZ.js";import"./useFocusRing-widihIkF.js";import"./index-q0KT5jnp.js";import"./index-Ccze4rZ3.js";import"./FieldError-BAFjpL0i.js";import"./Text-Dao-YHjx.js";import"./clsx-Ciqy0D92.js";import"./Text-BREpfkEt.js";import"./Form-CItLNKU2.js";import"./Button-CG1C0RCC.js";import"./Hidden-D_4pS1pD.js";import"./useLabel-Dvu8tBif.js";import"./useLabels-DAN8PIoI.js";import"./useButton-BWnFtbTH.js";import"./SelectionIndicator-CNfIOHhB.js";import"./useField-5SggJKuz.js";import"./VisuallyHidden-B1SQTSBU.js";import"./useControlledState-xqz1UZWj.js";import"./Label-C88-svVY.js";import"./Dialog-DHmHVnOq.js";import"./RSPContexts-lIIzFU1O.js";import"./OverlayArrow-4yrLBH91.js";import"./useResizeObserver-CiVu1b85.js";import"./Collection-CqD_Mfx9.js";import"./index--mPa9dWU.js";import"./Separator-CZEQnwHv.js";import"./SelectionManager-ClM-GsI7.js";import"./useEvent-DJU-p8Vq.js";import"./scrollIntoView-CSaBvUCD.js";import"./useDescription-DWjqWAOZ.js";import"./ListKeyboardDelegate-DojHSTUI.js";import"./PressResponder-Cj6c8Ua8.js";import"./useLocalizedStringFormatter-ByZ5j5zE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-AsKLtz-d.js";import"./getScrollParent-DY1wappT.js";import"./ModalOverlay-CWh6ncFf.js";import"./x-CYTkygL5.js";import"./createLucideIcon-Ctpe4pW9.js";import"./useLocalizedStringFormatter-DgMvPFf5.js";import"./Heading-LMzx5xYL.js";import"./Button-paZ2bXFh.js";import"./Button.module-BB7N-cLd.js";import"./info-BcPplmWd.js";import"./Popover-5KRYqPP8.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
