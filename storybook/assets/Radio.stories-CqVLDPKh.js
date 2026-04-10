import{j as e}from"./iframe-DbRIiPJf.js";import{R as a,a as c}from"./Radio-3gu2kViX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CylrHtqj.js";import"./clsx-B-dksMZM.js";import"./Group-C_ZA0uHw.js";import"./useFocusRing-CzsT9eqz.js";import"./index-CWx_6wJr.js";import"./index-CYF8mrWB.js";import"./FieldError-BlTKrD9e.js";import"./Text-Bl7omTF2.js";import"./clsx-Ciqy0D92.js";import"./Text-BWzS2USX.js";import"./Form-DKNQStX3.js";import"./Button-Bu-vq5J8.js";import"./Hidden-CLmG6Qjv.js";import"./useLabel-D5V8M1AU.js";import"./useLabels-CWkCWE-a.js";import"./useButton-ydqzzVJH.js";import"./SelectionIndicator-D8qE1ns6.js";import"./useField-Dc--rdEY.js";import"./VisuallyHidden-OjEI7nCv.js";import"./useControlledState-CkgwQtqz.js";import"./Label-B0PLsM6Z.js";import"./Dialog-D_2eTWHX.js";import"./RSPContexts-RxxWGpWl.js";import"./OverlayArrow-Cdun6Sbd.js";import"./useResizeObserver-CSdE0Caq.js";import"./Collection-B4ubqx70.js";import"./index-BZFoeM-h.js";import"./Separator-D4uDxJfh.js";import"./SelectionManager-DTAr5YEZ.js";import"./useEvent-BDJFflUb.js";import"./scrollIntoView-DyOkJKzq.js";import"./useDescription-o_hCOQgG.js";import"./ListKeyboardDelegate-B3d6mxcZ.js";import"./PressResponder-DBZgubCT.js";import"./useLocalizedStringFormatter-BhEsaq13.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BgBqCX5B.js";import"./getScrollParent-B52noiPs.js";import"./Dialog-CBm6AzQl.js";import"./x-gq1nGzx6.js";import"./createLucideIcon-DWTxx8ko.js";import"./useLocalizedStringFormatter-Bz5dx8x0.js";import"./Heading-VhFSBXsH.js";import"./Button-ClLfQI_I.js";import"./Button.module-BB7N-cLd.js";import"./info-BYtc9nMD.js";import"./Popover-C6o3sMeS.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
