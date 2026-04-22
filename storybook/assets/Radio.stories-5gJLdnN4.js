import{j as e}from"./iframe-DQmFqJHS.js";import{R as a,a as c}from"./Radio-DWaZoUgR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BWrI25uH.js";import"./clsx-B-dksMZM.js";import"./Group-WhaxRWQU.js";import"./useFocusRing-DItV0gqG.js";import"./index-DbK-4WGE.js";import"./index-D4usGqcY.js";import"./FieldError-CaxPGIch.js";import"./Text-D7G5v1zt.js";import"./clsx-Ciqy0D92.js";import"./Text-Dv2vHw0w.js";import"./Form-icO7fyR0.js";import"./Button-CvJGdaRR.js";import"./Hidden-D-Me28_w.js";import"./useLabel-Chhaff-p.js";import"./useLabels-BqXx-hbX.js";import"./useButton-DialTVJ6.js";import"./SelectionIndicator-BQPUdFWW.js";import"./useField-BpO0DqgO.js";import"./VisuallyHidden-CzKNKfXb.js";import"./useControlledState-C5li1zvV.js";import"./Label-BuAIsOY6.js";import"./Dialog-B1Ri3IBJ.js";import"./RSPContexts-DADBvuUA.js";import"./OverlayArrow-nTMlyTz5.js";import"./useResizeObserver-B5pvTcE0.js";import"./Collection-PnuOJgDp.js";import"./index-C3OZM2iR.js";import"./Separator-BuFyYAhL.js";import"./SelectionManager-4dXQCzrP.js";import"./useEvent-CTB_6RyV.js";import"./scrollIntoView-5ZKvz8fx.js";import"./useDescription-h9Po8Y0i.js";import"./ListKeyboardDelegate-BwQ5f0g5.js";import"./PressResponder-DntQbGBB.js";import"./useLocalizedStringFormatter-BqAD4sFO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DpjnqEbo.js";import"./getScrollParent-DjSabJcp.js";import"./ModalOverlay-B8F_0DDS.js";import"./x-Dm_VUSkk.js";import"./createLucideIcon-BG_KaWyL.js";import"./useLocalizedStringFormatter-pqjFMR5W.js";import"./Heading-GxnpDQb1.js";import"./Button-Cc39pfDx.js";import"./Button.module-BB7N-cLd.js";import"./info-DqqQK25k.js";import"./Popover-DDzYbG9A.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
