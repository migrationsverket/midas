import{j as e}from"./iframe-BaDPacjd.js";import{R as a,a as c}from"./Radio-CXaQLSe-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DIlgsg9w.js";import"./clsx-B-dksMZM.js";import"./Group-DLvsScbU.js";import"./useFocusRing-CU-3-Yvs.js";import"./index-Nc8_JSKj.js";import"./index-DARPjNQR.js";import"./FieldError-CCoQDHBS.js";import"./Text-D9IIAziF.js";import"./clsx-Ciqy0D92.js";import"./Text-maDwTHxG.js";import"./Form-oBhPq7WZ.js";import"./Button-xqG4BSxe.js";import"./Hidden-wYkIMllK.js";import"./useLabel-CEPds_v5.js";import"./useLabels-DVtm5qiG.js";import"./useButton-CWKA-NcB.js";import"./SelectionIndicator-E2Oo2YPO.js";import"./useField-DIToGq9j.js";import"./VisuallyHidden-Cc7_mEU0.js";import"./useControlledState-C7Qyb7bs.js";import"./Label-BG4tYNy3.js";import"./Dialog-BYeY2Kq4.js";import"./RSPContexts-Q8mL0bRp.js";import"./OverlayArrow-Dxq5i1Js.js";import"./useResizeObserver-BMJo5MZf.js";import"./Collection-DwVoD4ZF.js";import"./index-zgqX2Yvv.js";import"./Separator-CkGYv_lX.js";import"./SelectionManager-CWk_F_tK.js";import"./useEvent-DWbcd_98.js";import"./scrollIntoView-DP2ELaPl.js";import"./useDescription-4MxSlUac.js";import"./ListKeyboardDelegate-BvsWrhNC.js";import"./PressResponder-D4J1Z43q.js";import"./useLocalizedStringFormatter-D18yrwwN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CoR0ZV4_.js";import"./getScrollParent-CQLO__Ec.js";import"./ModalOverlay-CMvAZP1n.js";import"./x-CIJW-8OQ.js";import"./createLucideIcon-Cn3KNUPN.js";import"./useLocalizedStringFormatter-B8-NJo2o.js";import"./Heading-Bf9R16Cd.js";import"./Button-BbMcm-s_.js";import"./Button.module-BB7N-cLd.js";import"./info-Bgk1qFK4.js";import"./Popover-DUTsRoUU.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
