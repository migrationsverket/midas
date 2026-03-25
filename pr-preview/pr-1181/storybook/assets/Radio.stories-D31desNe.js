import{j as e}from"./iframe-BP7DzUIh.js";import{R as a,a as c}from"./Radio-Bedl6Wu6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9_czYqy.js";import"./clsx-B-dksMZM.js";import"./Group-DxEw32Ds.js";import"./useFocusRing-Apf-8Fr7.js";import"./index-B1MenRgK.js";import"./index-B9Re-I8w.js";import"./FieldError-DwMEu-CZ.js";import"./Text-C6QCLAD1.js";import"./clsx-Ciqy0D92.js";import"./Text-C-lFPFDT.js";import"./Form-BAJVgpQE.js";import"./Button-yD28QKfx.js";import"./Hidden-DlKvXDgO.js";import"./useLabels-B0kKOJyy.js";import"./useButton-DTicc54w.js";import"./SelectionIndicator-3vIypJAh.js";import"./useField-p1IS5Xfo.js";import"./VisuallyHidden-CFJkh_29.js";import"./useControlledState-B7al1qBg.js";import"./Label-0yjB-E8z.js";import"./Dialog-B6ZEH6ru.js";import"./RSPContexts-C286y1L4.js";import"./OverlayArrow-DTP3iI7m.js";import"./useResizeObserver-_Mvg5rJV.js";import"./Collection-CEHuK8QM.js";import"./index-CqTzYnk-.js";import"./Separator-Ci0cwtQM.js";import"./SelectionManager-CcZ5FS4I.js";import"./useEvent-boX-2EsT.js";import"./scrollIntoView-BqUk0Mej.js";import"./useDescription-B4UE-M1p.js";import"./ListKeyboardDelegate-D_F26l9l.js";import"./PressResponder-BxiRPNH8.js";import"./useLocalizedStringFormatter-Dp1Z2nGk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-qcmAUM1D.js";import"./getScrollParent-CMfkxxdv.js";import"./x-BKCqd2ot.js";import"./createLucideIcon-zXtIRWL6.js";import"./useLocalizedStringFormatter-D_dEcD2V.js";import"./Heading-C3r0aHk-.js";import"./Button-e7FuQA8u.js";import"./Button.module-BB7N-cLd.js";import"./info-CCcA_oOV.js";import"./Popover-DQuHdZGW.js";const lr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const dr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,dr as __namedExportsOrder,lr as default};
