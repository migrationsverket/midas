import{j as e}from"./iframe-DTmnx-OS.js";import{a,R as c}from"./Radio-BXma7e7F.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-B8xM3kTU.js";import"./utils-BLrbyb-5.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-D7pmxvpH.js";import"./index-Dh5clyrJ.js";import"./index-ZMXHPIeh.js";import"./FieldError-BW0t1--z.js";import"./Text-CAzG3hrs.js";import"./clsx-Ciqy0D92.js";import"./Text-Rd2kwoRq.js";import"./Form-DHoA3APl.js";import"./useFormValidation-CS2KaDSt.js";import"./Button-D84lT1wU.js";import"./Hidden-BtM1I5LI.js";import"./useLabels-BU6BY9ES.js";import"./useButton-BfYlvgAS.js";import"./SelectionIndicator-LNrCvCoH.js";import"./useField-C6pIHBN6.js";import"./VisuallyHidden-DTo6UeCi.js";import"./useControlledState-B80F7Llz.js";import"./Label-D5tU1J5b.js";import"./Dialog-D7Xm6J16.js";import"./RSPContexts-C1Iyv0kP.js";import"./OverlayArrow-Mvs2w6w8.js";import"./useResizeObserver-B5MS2sn1.js";import"./Collection-CSCL41v3.js";import"./index-CSjg3Rnn.js";import"./Separator-Cc0lRCB9.js";import"./SelectionManager-BfTO8Xj5.js";import"./useEvent-CONhqoCx.js";import"./scrollIntoView-C54iyz8_.js";import"./useDescription-P3-GHz2i.js";import"./ListKeyboardDelegate-BaMH29P7.js";import"./PressResponder-DYsVoB2A.js";import"./useLocalizedStringFormatter-CZmcKBND.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-rJ8oXYh7.js";import"./Button-BR1AZgyV.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DJL53Hew.js";import"./createLucideIcon-Q1IuAoPr.js";import"./x-BHyqnA-p.js";import"./Heading-CM3TnOvL.js";import"./info-DyFU30up.js";import"./Popover-B4ytbGoo.js";const lr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
