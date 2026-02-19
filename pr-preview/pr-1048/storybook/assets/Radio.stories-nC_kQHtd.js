import{j as e}from"./iframe-CyQ_Q7rG.js";import{R as a,a as c}from"./Radio-CN6cNwab.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-CbvK-T66.js";import"./utils-BoW3E2H5.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BQ-1QbEG.js";import"./index-CR1l2dC_.js";import"./index-DOUe2Txr.js";import"./FieldError-CQXxDwPR.js";import"./Text-Dq2_g6JH.js";import"./clsx-Ciqy0D92.js";import"./Text-agLRoWzJ.js";import"./Form-DbePOiZQ.js";import"./useFormValidation-B0oDx7tm.js";import"./Button-CntAlnRy.js";import"./Hidden-CRjkj892.js";import"./number-DfkVkf0F.js";import"./useLabels-CGrF7Gz1.js";import"./useButton-DyeUmxt9.js";import"./SelectionIndicator-CaTZmifC.js";import"./useField-BkpnFURk.js";import"./VisuallyHidden-DBSUrbfY.js";import"./useControlledState-fHHUIill.js";import"./Label-Dk_ZCLRp.js";import"./Dialog-CTc7Teu9.js";import"./RSPContexts-BGLALdn-.js";import"./OverlayArrow-w7zPFq0b.js";import"./useResizeObserver-CiwbCPBb.js";import"./Collection-9Co2B5T4.js";import"./index-CBTRi50S.js";import"./Separator-BlZOPbYT.js";import"./SelectionManager-Cnu2jLOl.js";import"./useEvent-CcBMeIPq.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DuUNP3eU.js";import"./ListKeyboardDelegate-cqpvQpUp.js";import"./PressResponder-D-Tn8nZU.js";import"./useLocalizedStringFormatter-D7j2-V_a.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Did0fznj.js";import"./getScrollParent-Cpn7MDkE.js";import"./Button-BTfIzcvP.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CDxyTvCl.js";import"./createLucideIcon-DGHBNn-o.js";import"./x-BDgCrCJo.js";import"./Heading-Cqo1c1jI.js";import"./info-BukWwPZ4.js";import"./Popover-DLFPzgw0.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
