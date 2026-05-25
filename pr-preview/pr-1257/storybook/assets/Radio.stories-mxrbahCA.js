import{j as e}from"./iframe-DHSFkIsy.js";import{R as a,a as c}from"./Radio-BTL4uhZc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZbTr4bL.js";import"./clsx-B-dksMZM.js";import"./Group-GTWQChIb.js";import"./useFocusRing-CNpZwhdZ.js";import"./index-oXf-9ID4.js";import"./index-J1_Mq2EC.js";import"./FieldError-DFzLFMIZ.js";import"./Text-Dlktz5kY.js";import"./clsx-Ciqy0D92.js";import"./Text-CE2-J5ib.js";import"./Form-C4OsrVJ1.js";import"./Button-DwFLZ-vl.js";import"./Hidden-N-s-Oc-P.js";import"./useLabel-BCJ-n4cN.js";import"./useLabels-CTlVno2m.js";import"./useButton-tAptgANb.js";import"./SelectionIndicator-CydRsdFr.js";import"./useField-CmEVGEa7.js";import"./VisuallyHidden-CdVi298y.js";import"./useControlledState-BC5iZhUu.js";import"./Label-B_ZUWnb7.js";import"./Dialog-h_UASn88.js";import"./RSPContexts-Dm3G7A6M.js";import"./OverlayArrow-DVJcUeet.js";import"./useResizeObserver-DwGU07GJ.js";import"./Collection-B0B2WoeJ.js";import"./index-CqWHgfao.js";import"./Separator-CUGVPZ00.js";import"./SelectionManager-JKYT7One.js";import"./useEvent-DMc3Uz1U.js";import"./scrollIntoView-DmtYx3D8.js";import"./useDescription-COddip1D.js";import"./ListKeyboardDelegate-3IFiTk9z.js";import"./PressResponder-CXr9tQ9l.js";import"./useLocalizedStringFormatter-CrmHRQiX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BfJYb7vS.js";import"./getScrollParent-HtTQIod0.js";import"./ModalOverlay-Dm3RFYNm.js";import"./x-Ca2lmhP_.js";import"./createLucideIcon-Bhv8-C3S.js";import"./useLocalizedStringFormatter-AT5R_CzH.js";import"./Heading-pXzzfo8s.js";import"./Button-BCxQv38d.js";import"./Button.module-BB7N-cLd.js";import"./info-BBCoW9Lj.js";import"./Popover-Baq0wk6e.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
