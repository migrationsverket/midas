import{j as e}from"./iframe-f5MFKuki.js";import{R as a,a as c}from"./Radio-jcZjKx23.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-mUQGXysL.js";import"./utils-CkYTzifC.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-D3kj-ql7.js";import"./index-K7RQRMNz.js";import"./index-CBu1rMHP.js";import"./FieldError-C3VFwJG_.js";import"./Text-DdMXnW5-.js";import"./clsx-Ciqy0D92.js";import"./Text-BnjALTAb.js";import"./Form-BwEBjvIv.js";import"./useFormValidation-BvliZLgp.js";import"./Button-DuvywlRj.js";import"./Hidden-DBQGh8ME.js";import"./number-DfkVkf0F.js";import"./useLabels-7SDlHi18.js";import"./useButton-DT2Xmgs5.js";import"./SelectionIndicator-ClChMsu_.js";import"./useField-Oo0u04Fu.js";import"./VisuallyHidden-TWnsdG0a.js";import"./useControlledState-DpRXGdPw.js";import"./Label-PjVuXibP.js";import"./Dialog-B3VjvJ2X.js";import"./RSPContexts-Ckd37Azt.js";import"./OverlayArrow-DJMCNZA7.js";import"./useResizeObserver-Ctd7DF4c.js";import"./Collection-DLH3cw_n.js";import"./index-B9FxiXbT.js";import"./Separator-CDjsrpMX.js";import"./SelectionManager-C5l9lJFC.js";import"./useEvent-CCpoTy8x.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-fgVPMTaH.js";import"./ListKeyboardDelegate-c8qeyItX.js";import"./PressResponder-BkHqa3QA.js";import"./useLocalizedStringFormatter-DvLnM0F6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B9jr5M2J.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-D3UXYekA.js";import"./Button-BxqYbrPc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BPMFMRiW.js";import"./createLucideIcon-BR5g7LJ9.js";import"./x-n2W0P4og.js";import"./Heading-BmQhhJQW.js";import"./info-Bp9niAhh.js";import"./Popover-CGD2heLB.js";const cr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ur=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,ur as __namedExportsOrder,cr as default};
