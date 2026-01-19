import{j as e}from"./iframe-CutDFk5n.js";import{a,R as c}from"./Radio-CNWc8MCi.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-C733-SSO.js";import"./utils-CTW1dxkN.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-4WXHNlg7.js";import"./index-Vo5448Qj.js";import"./index-DJz0Sx_u.js";import"./FieldError-DctkBoCn.js";import"./Text-DcyAgiDX.js";import"./clsx-Ciqy0D92.js";import"./Text-CgQQrWKF.js";import"./Form-BPYH9qYA.js";import"./useFormValidation-CdQWy_dH.js";import"./Button-Dp5-D5M-.js";import"./Hidden-CUK-mE4f.js";import"./useLabels-DY93YiY3.js";import"./useButton-Co8nMjNx.js";import"./SelectionIndicator-BY7DJ66L.js";import"./useField-8cvfXJwd.js";import"./VisuallyHidden-BPIRqvhu.js";import"./useControlledState-Cn8LkIR3.js";import"./Label-CuxiB2vu.js";import"./Dialog-DS8s0FRF.js";import"./RSPContexts-DcYz2meL.js";import"./OverlayArrow-DxCsWpOk.js";import"./useResizeObserver-DKgnP7cD.js";import"./Collection-C-hf73FU.js";import"./index-DiUBrakn.js";import"./Separator-00NY4bF5.js";import"./SelectionManager-Elmu4j6R.js";import"./useEvent-BeSsf5uU.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CHhNdst8.js";import"./ListKeyboardDelegate-J1swqCL2.js";import"./PressResponder-D-tSAkZz.js";import"./useLocalizedStringFormatter-b3cE-jas.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_W1sumT.js";import"./getScrollParent-Cpn7MDkE.js";import"./Button-DdqPt2Xq.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ttEBQjzn.js";import"./createLucideIcon-B80-lQ4U.js";import"./x-DzdF7VVd.js";import"./Heading-TSmww82B.js";import"./info-BVVEa0Wk.js";import"./Popover-B1Ie_Pbs.js";const dr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
