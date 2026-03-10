import{j as e}from"./iframe-D4qwi5aS.js";import{R as a,a as c}from"./Radio-CrtJbi9x.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-m7tVaWxe.js";import"./utils-B-Nz338F.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-6dU2HUqL.js";import"./index-BCxIJmj3.js";import"./index-CRmVn8Hv.js";import"./FieldError-COTYRssi.js";import"./Text-0C5O0r7x.js";import"./clsx-Ciqy0D92.js";import"./Text-C5mfap0J.js";import"./Form-C7dsP6GN.js";import"./useFormValidation-VS44UaCw.js";import"./Button-Da-DtFCd.js";import"./Hidden-CM9pZ1fW.js";import"./useLabels-Cj7LPX5i.js";import"./useButton-7Tej6Dr7.js";import"./SelectionIndicator-B1z3YSxs.js";import"./useField-CemwzZhq.js";import"./VisuallyHidden-bcnkwpD1.js";import"./useControlledState-BpYdNZzj.js";import"./Label-UddvlPk9.js";import"./Dialog-DglFMp0k.js";import"./RSPContexts-CXXJq7xx.js";import"./OverlayArrow-CNo4ecrH.js";import"./useResizeObserver-CEDVDmEs.js";import"./Collection-CuVUb6O2.js";import"./index-BSSxLsJ3.js";import"./Separator-CzylDj9v.js";import"./SelectionManager-32JLFw_J.js";import"./useEvent-uU1Q1mcZ.js";import"./scrollIntoView-Dwx5yIaq.js";import"./useDescription-1CMda98v.js";import"./ListKeyboardDelegate-D0Gtj1tU.js";import"./PressResponder-BU5iSFLt.js";import"./useLocalizedStringFormatter-BblBLaNa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B2lfJXjh.js";import"./getScrollParent-Cwbjb50l.js";import"./Button-BtMm2W3M.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-9LC131sM.js";import"./createLucideIcon-hD68kNPm.js";import"./x-CiO824Qj.js";import"./Heading-8tKoHdkE.js";import"./info-C0SVif4L.js";import"./Popover-B0dCiXtz.js";const dr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const mr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,mr as __namedExportsOrder,dr as default};
