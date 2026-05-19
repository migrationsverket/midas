import{j as e}from"./iframe-BEKS4YDN.js";import{R as a,a as c}from"./Radio-zNJDxdJv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-xO_879NF.js";import"./clsx-B-dksMZM.js";import"./Group-Cl_l4hHo.js";import"./useFocusRing-BhpyH7yS.js";import"./index-C_TP6Ur2.js";import"./index-CEolt4Rx.js";import"./FieldError-C9IlqVU0.js";import"./Text-BZzeA2Vt.js";import"./clsx-Ciqy0D92.js";import"./Text-BfCSkgj0.js";import"./Form-DjNnpm5_.js";import"./Button-BPvFIvh-.js";import"./Hidden-CwtVgZCk.js";import"./useLabel-CSn61wWa.js";import"./useLabels-BHkcg4nS.js";import"./useButton-BxOD9fvd.js";import"./SelectionIndicator-BFx5J5a6.js";import"./useField-H9rBq9I8.js";import"./VisuallyHidden-DHkZrGra.js";import"./useControlledState-BJkUh9eQ.js";import"./Label-BNxY1SH6.js";import"./Dialog-DRYJ3kIW.js";import"./RSPContexts-CZte2gii.js";import"./OverlayArrow-BdBQyxp-.js";import"./useResizeObserver-DSo0hXAK.js";import"./Collection-BNCTK-zC.js";import"./index-DQpkWmHs.js";import"./Separator-Dn1IpRZP.js";import"./SelectionManager-BonK-rJX.js";import"./useEvent-h3u_uwpJ.js";import"./scrollIntoView-Bhjt-fS-.js";import"./useDescription-qyRNVaLw.js";import"./ListKeyboardDelegate-D2QwNFZw.js";import"./PressResponder-BO2icTrx.js";import"./useLocalizedStringFormatter-Ch_NtsBU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BVzisHFw.js";import"./getScrollParent-Dd6uns12.js";import"./ModalOverlay-sBWWLOAI.js";import"./x-DI99KDwB.js";import"./createLucideIcon-BWz3rFdE.js";import"./useLocalizedStringFormatter-CYPaady4.js";import"./Heading-uQEv1yk8.js";import"./Button-D3aX5HrM.js";import"./Button.module-BB7N-cLd.js";import"./info-gvNGyC6R.js";import"./Popover-CqAa5rd1.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
