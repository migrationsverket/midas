import{j as e}from"./iframe-Dnz7kUlg.js";import{R as a,a as c}from"./Radio-Dd-7lV0x.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CAf_-pht.js";import"./clsx-B-dksMZM.js";import"./Group-DG0Y1mio.js";import"./useFocusRing-Dzszu2Vy.js";import"./index-PhUC-dOo.js";import"./index-7KV9d02y.js";import"./FieldError-BH1ucUfl.js";import"./Text-B5WBJ4QI.js";import"./clsx-Ciqy0D92.js";import"./Text-CtOjX911.js";import"./Form-W54koQxt.js";import"./Button-C6iHgC9P.js";import"./Hidden-kcU4Hzb8.js";import"./useLabel-BUdrG9lA.js";import"./useLabels-YSILxijJ.js";import"./useButton-C3WMTaS3.js";import"./SelectionIndicator-Cf1Yj1qg.js";import"./useField-DK5iQm1y.js";import"./VisuallyHidden-Dm7meOkg.js";import"./useControlledState-Iqz0lmAp.js";import"./Label-B0VPHTag.js";import"./Dialog--3X15ZgF.js";import"./RSPContexts-Cp-T_kgY.js";import"./OverlayArrow-CUG7RuY1.js";import"./useResizeObserver-DFwb3sj2.js";import"./Collection-CZKBbkK9.js";import"./index-ju8lx5jh.js";import"./Separator-JiZwya5a.js";import"./SelectionManager-CGlOn_QU.js";import"./useEvent-C9zHHyc9.js";import"./scrollIntoView-DTF-X5Bx.js";import"./useDescription-BWq2pUsi.js";import"./ListKeyboardDelegate-B5Qqhejy.js";import"./PressResponder-CgFVQ_iV.js";import"./useLocalizedStringFormatter-DwxYp_RG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BpdwLEAR.js";import"./getScrollParent-CEScWKZW.js";import"./ModalOverlay-KVkngti-.js";import"./x-68yJIKBo.js";import"./createLucideIcon-C7dFuUAn.js";import"./useLocalizedStringFormatter-1LNK4MxE.js";import"./Heading-Bzl8jYcb.js";import"./Button-DP2JC875.js";import"./Button.module-BB7N-cLd.js";import"./info-DIFu0oxQ.js";import"./Popover-QiPoLtmK.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
