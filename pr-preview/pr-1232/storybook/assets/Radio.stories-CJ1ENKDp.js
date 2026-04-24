import{j as e}from"./iframe-DOHhMkQY.js";import{R as a,a as c}from"./Radio-Dd_rzhgs.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-NiE-K3B6.js";import"./clsx-B-dksMZM.js";import"./Group-Dmwg-2rd.js";import"./useFocusRing-wtRS1Mc0.js";import"./index-BuovvTYt.js";import"./index-ZqaTbfD1.js";import"./FieldError-BflqQ1hj.js";import"./Text-DSHHPLHE.js";import"./clsx-Ciqy0D92.js";import"./Text-C8g4NeVM.js";import"./Form-Dq5C2lBM.js";import"./Button-BgxX3mlh.js";import"./Hidden-CBYtsSM7.js";import"./useLabel-B6n5QJis.js";import"./useLabels-CHqB-BNa.js";import"./useButton-CVPcloPU.js";import"./SelectionIndicator-DUS-gEyU.js";import"./useField-CDafB6bD.js";import"./VisuallyHidden-DQY1cYBw.js";import"./useControlledState-DiXqzo5g.js";import"./Label-Ig5xBitx.js";import"./Dialog-BhNv-yid.js";import"./RSPContexts-Cdm3yX79.js";import"./OverlayArrow-D-YsTEho.js";import"./useResizeObserver-BPaPazro.js";import"./Collection-C3UaWGRU.js";import"./index-G_V6xOjf.js";import"./Separator-BsjHvh90.js";import"./SelectionManager-DQ5FBa1D.js";import"./useEvent-DtrFGaiZ.js";import"./scrollIntoView-DebGkkw1.js";import"./useDescription-DUO7dbjU.js";import"./ListKeyboardDelegate-BwKlEZYr.js";import"./PressResponder-U4tHhDgS.js";import"./useLocalizedStringFormatter-DWccAkCt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DRyBXNLF.js";import"./getScrollParent-wRtd1GN9.js";import"./ModalOverlay-o9SLMU5y.js";import"./x-CkxwwECO.js";import"./createLucideIcon-B4Q-AngK.js";import"./useLocalizedStringFormatter-CRECnAOE.js";import"./Heading-IvdKpjLL.js";import"./Button-oYxwaeFk.js";import"./Button.module-BB7N-cLd.js";import"./info-CZfIXx9S.js";import"./Popover-BS7pzUqq.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
