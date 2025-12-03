import{j as e}from"./iframe-DzpGAGRs.js";import{a,R as c}from"./Radio-Et9D2hJr.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-rz96SSnl.js";import"./utils-DhQZEy20.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-CBMZ-ulq.js";import"./index-RZDpPbNi.js";import"./index-COvdJqzc.js";import"./FieldError-BJ6H7Ap3.js";import"./Text-DzINHNBQ.js";import"./clsx-Ciqy0D92.js";import"./Text-BciY5Tjq.js";import"./Form-kiC6Xfma.js";import"./useFormValidation-CoLbxmFl.js";import"./Button-DhsqVPF-.js";import"./Hidden-BamiLY6w.js";import"./useLabels-CnU9ekD0.js";import"./useButton-DgcuQT2f.js";import"./SelectionIndicator-WJ1Ng6sH.js";import"./useField-CDhzWcTA.js";import"./VisuallyHidden-Bu_FxHbl.js";import"./useControlledState-Cd4ZWdr1.js";import"./Label-yvUHoT_l.js";import"./Dialog-x_tPqD_g.js";import"./RSPContexts-Dqik0rA0.js";import"./OverlayArrow-CxKtVg1H.js";import"./useResizeObserver-DhqDyjeF.js";import"./Collection-CfCyruHm.js";import"./index-CPNUj5zQ.js";import"./Separator-DXYgY4tL.js";import"./SelectionManager-yKB6RIVq.js";import"./useEvent-CFsLuxvR.js";import"./scrollIntoView-J6xnNcxw.js";import"./useDescription-_6Itm5b2.js";import"./ListKeyboardDelegate-C2T8--ZF.js";import"./PressResponder-B8bj9uGX.js";import"./useLocalizedStringFormatter-Chv8IKjN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DkDG2Qlb.js";import"./Button-zwkBBH84.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DclIrRz1.js";import"./createLucideIcon-BvhlWCmI.js";import"./x-oOrzlPsL.js";import"./Heading-CYq4rErI.js";import"./info-CYt-BXip.js";import"./Popover-Cup6NCRB.js";const lr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const dr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,dr as __namedExportsOrder,lr as default};
