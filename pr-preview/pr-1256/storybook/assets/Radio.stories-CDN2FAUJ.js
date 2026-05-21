import{j as e}from"./iframe-CdIQ5N7i.js";import{R as a,a as c}from"./Radio-BT1mCxn7.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BvbfqFty.js";import"./clsx-B-dksMZM.js";import"./Group-GT3GuVWM.js";import"./useFocusRing-CAL8UmMI.js";import"./index-QXcgcGVQ.js";import"./index-azuTNlQK.js";import"./FieldError-DJ-HR3RU.js";import"./Text-s2Qhe30V.js";import"./clsx-Ciqy0D92.js";import"./Text-uW2g-Rij.js";import"./Form-B0G4WvdU.js";import"./Button-UiktFLbJ.js";import"./Hidden-BNc7AwrM.js";import"./useLabel-BNWj_Gss.js";import"./useLabels-BEQABj6w.js";import"./useButton-iVPzxrJK.js";import"./SelectionIndicator-C8xnssq6.js";import"./useField-FRI832V4.js";import"./VisuallyHidden-BhdIXlKy.js";import"./useControlledState-BRvuk5rm.js";import"./Label-C5yvvB9E.js";import"./Dialog-DvB2HcO3.js";import"./RSPContexts-CLmzGhES.js";import"./OverlayArrow-BzOb33Ml.js";import"./useResizeObserver-fQDQHxcX.js";import"./Collection-BNNDqxaK.js";import"./index-CAdlUQcW.js";import"./Separator-DISlP-zV.js";import"./SelectionManager-DUIeCRl1.js";import"./useEvent-CJQiJoWr.js";import"./scrollIntoView-DQzQ-CtO.js";import"./useDescription--y6wfX3r.js";import"./ListKeyboardDelegate-BRa5xE-n.js";import"./PressResponder-W6JnnhzP.js";import"./useLocalizedStringFormatter-Thbc0p-z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwnKHfBJ.js";import"./getScrollParent-B0hpSf3_.js";import"./ModalOverlay-D3doyH6r.js";import"./x-CLOMyykU.js";import"./createLucideIcon-D9zj-qmC.js";import"./useLocalizedStringFormatter-YNJ9gtMz.js";import"./Heading-CYqOGIzN.js";import"./Button-kx69_fzD.js";import"./Button.module-BB7N-cLd.js";import"./info-BkSnkljK.js";import"./Popover-Bi_1XBV1.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
