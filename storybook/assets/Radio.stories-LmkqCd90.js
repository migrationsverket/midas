import{j as e}from"./iframe-DP3vvJW_.js";import{R as a,a as c}from"./Radio-Vgl2iGIq.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DeQRcX3I.js";import"./clsx-B-dksMZM.js";import"./Group-cz4Xi5QE.js";import"./useFocusRing-CT4t16Bn.js";import"./index-nwZ9FQBx.js";import"./index-B0BlSEXc.js";import"./FieldError-Bmtmc6Ue.js";import"./Text-COCpEZrG.js";import"./clsx-Ciqy0D92.js";import"./Text-CdS1c328.js";import"./Form-By5_t82Q.js";import"./Button-Cm4-ITis.js";import"./Hidden-0kVxHtHC.js";import"./useLabel-BkKpedFS.js";import"./useLabels-DjnDZU9d.js";import"./useButton-BtKEagUR.js";import"./SelectionIndicator-BRvYQOhy.js";import"./useField-CCf3XAps.js";import"./VisuallyHidden-ohAQh_Nb.js";import"./useControlledState-B3z4I1hz.js";import"./Label-CeLH0k_s.js";import"./Dialog-BK4q9YKD.js";import"./RSPContexts-BPYDVhoO.js";import"./OverlayArrow-DOOK3l1H.js";import"./useResizeObserver-CSHbB_F6.js";import"./Collection-Dad9EmoV.js";import"./index-BC044ghQ.js";import"./Separator-C4YfgHAr.js";import"./SelectionManager-boEt2-9H.js";import"./useEvent-KPlZMkuH.js";import"./scrollIntoView-C9R--iDG.js";import"./useDescription-ChOnG5Gy.js";import"./ListKeyboardDelegate-B74dJT2P.js";import"./PressResponder-DVOus0r9.js";import"./useLocalizedStringFormatter-CDrhnNBu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DqNaSxvm.js";import"./getScrollParent-DKQ_TpWj.js";import"./ModalOverlay-COt_YS9z.js";import"./x-DF0EZiF0.js";import"./createLucideIcon-Deup7nCX.js";import"./useLocalizedStringFormatter-FpMcBaq8.js";import"./Heading-Bj5Rj2cw.js";import"./Button-CqcFgrq0.js";import"./Button.module-BB7N-cLd.js";import"./info-DwIRHbbO.js";import"./Popover-DjWu-nMd.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
