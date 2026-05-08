import{j as e}from"./iframe-Cq1efVtu.js";import{R as a,a as c}from"./Radio-OoFcoplF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDUIlyKR.js";import"./clsx-B-dksMZM.js";import"./Group-C4PVmIVz.js";import"./useFocusRing-TSe7POO2.js";import"./index-ByIJ9DK_.js";import"./index-CycVNjP9.js";import"./FieldError-C6eAPC3q.js";import"./Text-DK-NnzUH.js";import"./clsx-Ciqy0D92.js";import"./Text-RuRZ3ncY.js";import"./Form-Q13wlzI6.js";import"./Button-DksBmTbZ.js";import"./Hidden-DNnAB0GJ.js";import"./useLabel-ls64yvEj.js";import"./useLabels-DUkn1Zma.js";import"./useButton-CT6xb_5T.js";import"./SelectionIndicator-CgZV3gGJ.js";import"./useField-IIOsVOPa.js";import"./VisuallyHidden-DbkwGiLN.js";import"./useControlledState-C2EcW_bk.js";import"./Label-CgTcfasu.js";import"./Dialog-BkT0iv3q.js";import"./RSPContexts-Dkmb-asV.js";import"./OverlayArrow-mSEVmWTu.js";import"./useResizeObserver-D40imYud.js";import"./Collection-BxhYCovK.js";import"./index-Drb_jYn1.js";import"./Separator-DC9ooKbR.js";import"./SelectionManager-Cd7Mn8EA.js";import"./useEvent-Bq3pP39a.js";import"./scrollIntoView-CUwLIsqS.js";import"./useDescription-xyqlmyLv.js";import"./ListKeyboardDelegate-CD1hJbSr.js";import"./PressResponder-DvJsExzN.js";import"./useLocalizedStringFormatter-UDvCuBP6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CX8Z1SzW.js";import"./getScrollParent-5COwKf8k.js";import"./ModalOverlay-NUeNkcQD.js";import"./x--VzijxeQ.js";import"./createLucideIcon-CUu-1dyR.js";import"./useLocalizedStringFormatter-CJpwWgd_.js";import"./Heading-BXtAiUcs.js";import"./Button-CTOoH2N3.js";import"./Button.module-BB7N-cLd.js";import"./info-Cqo6jPBc.js";import"./Popover-C_25Ncvt.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
