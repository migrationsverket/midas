import{j as e}from"./iframe-8Cp1Y9sE.js";import{R as a,a as c}from"./Radio-DwLOf3tg.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-DxyXtAiD.js";import"./utils-DlEPF17n.js";import"./useObjectRef-BvAFkytn.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-CVuxSJk8.js";import"./useFocusable-B-HsSGrd.js";import"./index-CQNUcSLQ.js";import"./index-BHWdZgLR.js";import"./FieldError-eZOVGEUO.js";import"./Text-D3HiTtCB.js";import"./clsx-Ciqy0D92.js";import"./Text-Dvlujitk.js";import"./Form-D0YVSgpe.js";import"./useFormValidation-CQuIVPML.js";import"./Button-CqMXkvRN.js";import"./Hidden-BnGBIuvq.js";import"./number-DfkVkf0F.js";import"./useLabels-CjRcy63q.js";import"./useButton-J5AmJIR7.js";import"./SelectionIndicator-DjxxUBwE.js";import"./useField-Baz6LKsn.js";import"./VisuallyHidden-CBA6IUNJ.js";import"./useControlledState-DUF8qyUE.js";import"./Label-orMAHA-y.js";import"./Dialog-CZoFL8MM.js";import"./RSPContexts-jWKLjCHM.js";import"./OverlayArrow-Cf2TuAv-.js";import"./useResizeObserver-B3a9AYPm.js";import"./Collection-DueA55zD.js";import"./CollectionBuilder-BKRTkR5P.js";import"./index-Cds1W7-y.js";import"./Separator-B4IDBh6R.js";import"./SelectionManager-ClNl5D9k.js";import"./useEvent-BWoUQZjL.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BOEa2vWJ.js";import"./ListKeyboardDelegate-D5IX5CD1.js";import"./PressResponder-DeEiw1Gx.js";import"./useLocalizedStringFormatter-D6BMfFml.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CxqOZvIB.js";import"./getScrollParent-Cpn7MDkE.js";import"./Button-CS2QwEY0.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BDGZG5jK.js";import"./createLucideIcon-BJQalJwk.js";import"./x-7Ctj6V0e.js";import"./Heading-D7HlTSWz.js";import"./info-9zpSoT-N.js";import"./Popover-BD9QDUSP.js";const br={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],s=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:s,isDisabled:!0}},i={args:{children:s,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const gr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{m as CustomValidation,o as Disabled,d as Horizontal,p as Invalid,n as OneItemDisabled,t as Primary,i as ReadOnly,l as Required,gr as __namedExportsOrder,br as default};
