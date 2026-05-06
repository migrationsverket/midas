import{j as e}from"./iframe-UnOrZDCo.js";import{R as a,a as c}from"./Radio-B5v13Kcx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DKy0aGzr.js";import"./clsx-B-dksMZM.js";import"./Group-BljE0MsX.js";import"./useFocusRing-Bp9IxzZX.js";import"./index-Bfrs3YKb.js";import"./index-DPXy1hV4.js";import"./FieldError-BTGqp3OT.js";import"./Text-C6YEGwEA.js";import"./clsx-Ciqy0D92.js";import"./Text-BkvdwtUJ.js";import"./Form-Bt6GvUIb.js";import"./Button-Bxrzo9c5.js";import"./Hidden-BgWTJ4vd.js";import"./useLabel-De-33T0c.js";import"./useLabels-1WZ6CxHa.js";import"./useButton-BWTGB_Cp.js";import"./SelectionIndicator-C80ridiA.js";import"./useField-DLZ_5onF.js";import"./VisuallyHidden-ulNGrwFD.js";import"./useControlledState-DgxohqQv.js";import"./Label-B7nVNLra.js";import"./Dialog-hjM60LSU.js";import"./RSPContexts-B4tPHjXP.js";import"./OverlayArrow-BwUJmOnI.js";import"./useResizeObserver-fkAFhLGT.js";import"./Collection-C06BWKHu.js";import"./index-B8SNsTzv.js";import"./Separator-BIkibrNm.js";import"./SelectionManager-CIl23jZ2.js";import"./useEvent-C-gMyQkY.js";import"./scrollIntoView-D4-k8RNQ.js";import"./useDescription-CDMg63Ol.js";import"./ListKeyboardDelegate-DAEtZx3l.js";import"./PressResponder-BIw4ZyBo.js";import"./useLocalizedStringFormatter-lLy4v2xp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CyhtBLH4.js";import"./getScrollParent-BhH05UgX.js";import"./ModalOverlay-ZdX6FHUK.js";import"./x-DWogN0h0.js";import"./createLucideIcon-A1bnhQ0L.js";import"./useLocalizedStringFormatter-KbPyvbsO.js";import"./Heading-ewwk1_qY.js";import"./Button-DZKUgycP.js";import"./Button.module-BB7N-cLd.js";import"./info-ZnAeMvZK.js";import"./Popover-B7e61P6B.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
