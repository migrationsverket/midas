import{j as e}from"./iframe-DIPCj7z0.js";import{R as a,a as c}from"./Radio-Ddsj_vTW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-1Jw3myEp.js";import"./clsx-B-dksMZM.js";import"./Group-DmXP4qj7.js";import"./useFocusRing-CGC0Rs2i.js";import"./index-BMYuBTg8.js";import"./index-CLZ6wIud.js";import"./FieldError-XsW3k3ta.js";import"./Text-DfA3YTZF.js";import"./clsx-Ciqy0D92.js";import"./Text-CutZY7em.js";import"./Form-Dqy01Zmd.js";import"./Button-XWLhDASZ.js";import"./Hidden-DixPPjgd.js";import"./useLabel-BuVDKvpb.js";import"./useLabels-a5aS50Gu.js";import"./useButton-B6P9-uWq.js";import"./SelectionIndicator-BBRkAeK5.js";import"./useField-DyYmemdb.js";import"./VisuallyHidden-B7PA1Ynv.js";import"./useControlledState-BD_nezFk.js";import"./Label-BTBJQ3TD.js";import"./Dialog-BRQpSR1m.js";import"./RSPContexts-COR8iAs7.js";import"./OverlayArrow-BZA9xyhr.js";import"./useResizeObserver-6MYBTeZJ.js";import"./Collection-DlaTgdHp.js";import"./index-BtYgIjFq.js";import"./Separator-D67jdWyC.js";import"./SelectionManager-C1peoY7k.js";import"./useEvent-C_MGKzuJ.js";import"./scrollIntoView-BoRCBfrM.js";import"./useDescription-FuIsSDja.js";import"./ListKeyboardDelegate-DJcS2y8P.js";import"./PressResponder-CF389slw.js";import"./useLocalizedStringFormatter-CetMLESo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYTiBTJq.js";import"./getScrollParent-CrP1MxC4.js";import"./ModalOverlay-Cy-0_4Nk.js";import"./x-i9MPadT4.js";import"./createLucideIcon-BXzguI7t.js";import"./useLocalizedStringFormatter-CD9GRZFK.js";import"./Heading-BZjt7HWH.js";import"./Button-Dd5S0QsR.js";import"./Button.module-BB7N-cLd.js";import"./info-DREV89Uo.js";import"./Popover-CMPrkTUX.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
