import{j as e}from"./iframe-CDlGoVBX.js";import{R as a,a as c}from"./Radio-D1jSI0SG.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-BYFKWapm.js";import"./utils-DK0QJ5bq.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-GV8a7-dB.js";import"./index-CClkoolm.js";import"./index-D9EgTrn3.js";import"./FieldError-BTnAzmQ0.js";import"./Text-gvo1OKGS.js";import"./clsx-Ciqy0D92.js";import"./Text-Cflgqxbo.js";import"./Form-DTFKHJWV.js";import"./useFormValidation-C3JGr8K4.js";import"./Button-ChHi1CmX.js";import"./Hidden-D3g4_ydn.js";import"./useLabels-Bnvu_zoZ.js";import"./useButton-CEiQ-7P6.js";import"./SelectionIndicator-B2Q5v_NP.js";import"./useField-C4i4gm-f.js";import"./VisuallyHidden-BoTcuaXb.js";import"./useControlledState-CcD6TCI7.js";import"./Label-DnbVg9hf.js";import"./Dialog-ChLjSgrj.js";import"./RSPContexts-omBJ6Sgu.js";import"./OverlayArrow-DodgMuZn.js";import"./useResizeObserver-D1875uj1.js";import"./Collection-C0k2ascB.js";import"./index-D25xMYNc.js";import"./Separator-Cbp4e2aL.js";import"./SelectionManager-Dgm03e0j.js";import"./useEvent-BCnLZYbk.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DUfOP2Oy.js";import"./ListKeyboardDelegate-Cd18ptaN.js";import"./PressResponder-CwsbJqYe.js";import"./useLocalizedStringFormatter-FToakcQL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-RKI4vDG-.js";import"./getScrollParent-Cpn7MDkE.js";import"./Button-bhz0d5b_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-D9wBWCji.js";import"./createLucideIcon-DnI-ftFI.js";import"./x-DzdEbKW-.js";import"./Heading-Z24TZx0I.js";import"./info-DDIYqxGr.js";import"./Popover-wobZ9HHk.js";const dr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
