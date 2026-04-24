import{j as e}from"./iframe-DoRPDZ-n.js";import{R as a,a as c}from"./Radio-D4MZy_Dh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BzVzQHtN.js";import"./clsx-B-dksMZM.js";import"./Group-CRCDi-nQ.js";import"./useFocusRing-Cpj_6FFs.js";import"./index-BpvQun69.js";import"./index-dxvpTbK-.js";import"./FieldError-DkiFq4VK.js";import"./Text-CSSrkUG7.js";import"./clsx-Ciqy0D92.js";import"./Text-BM5KdGqj.js";import"./Form-CgjYIvc-.js";import"./Button-B0xwVoX4.js";import"./Hidden-Kgphbk6f.js";import"./useLabel-D--L_qeT.js";import"./useLabels-6Au6pJO1.js";import"./useButton-C_Cxj7yi.js";import"./SelectionIndicator-CKu1Q3Kp.js";import"./useField-JDSjT61z.js";import"./VisuallyHidden-Bcu1ZANu.js";import"./useControlledState-Ddc7Cp2E.js";import"./Label-44Oq_29n.js";import"./Dialog-DrAXFKbA.js";import"./RSPContexts-CIekAzAn.js";import"./OverlayArrow-CfGsm_8G.js";import"./useResizeObserver-CbM-pf-m.js";import"./Collection-CI7_yGGF.js";import"./index-BbB8zJUi.js";import"./Separator-D_Te7hjo.js";import"./SelectionManager-D1n9ipqn.js";import"./useEvent-B1VSdZUj.js";import"./scrollIntoView-DAAp94bF.js";import"./useDescription-B7wqrjVm.js";import"./ListKeyboardDelegate-DRt0AA7q.js";import"./PressResponder-BJ0eAZVL.js";import"./useLocalizedStringFormatter-C5mreUQq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C_aNgu1E.js";import"./getScrollParent-D1g3Kg9R.js";import"./ModalOverlay-CCZcK-8K.js";import"./x-BHilmKwO.js";import"./createLucideIcon-CiSuNVkc.js";import"./useLocalizedStringFormatter-Ckjeog25.js";import"./Heading-CoW8frit.js";import"./Button-qJNZwD8g.js";import"./Button.module-BB7N-cLd.js";import"./info-NHXfKxh3.js";import"./Popover-BWIm83EY.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
