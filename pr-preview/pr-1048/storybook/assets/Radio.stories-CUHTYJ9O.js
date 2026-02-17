import{j as e}from"./iframe-DFPNwlkc.js";import{R as a,a as c}from"./Radio-DRCNSQ8Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-C3olzZb3.js";import"./utils-CV6nHplc.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BCqmlDXx.js";import"./index-BDUmJqpj.js";import"./index-Dpft1Kq9.js";import"./FieldError-C5roi1Sk.js";import"./Text-C4FKP_kf.js";import"./clsx-Ciqy0D92.js";import"./Text-tvz73rc8.js";import"./Form-DaDSaScW.js";import"./useFormValidation-CfPOxHPb.js";import"./Button-DQefDSoE.js";import"./Hidden-D0i80-zA.js";import"./number-DfkVkf0F.js";import"./useLabels-3zYOWwD6.js";import"./useButton-DiLGUc5M.js";import"./SelectionIndicator-Dz4Z4nS2.js";import"./useField-BGeccqxt.js";import"./VisuallyHidden-ChW5Sl-W.js";import"./useControlledState-DApIq544.js";import"./Label-BmeVDizV.js";import"./Dialog-CsZxeUu1.js";import"./RSPContexts-ZFMplKwB.js";import"./OverlayArrow-rNPLKoG3.js";import"./useResizeObserver-P3kbL7SK.js";import"./Collection-CAjwM5MA.js";import"./index-0Fley7P3.js";import"./Separator-DTqIQKd5.js";import"./SelectionManager-kIiUcMRw.js";import"./useEvent-D1XNdLaU.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-BwrmQFfb.js";import"./ListKeyboardDelegate-DH_DMwpQ.js";import"./PressResponder-D3aUTLTH.js";import"./useLocalizedStringFormatter-ERBM7yjl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BBIfU8ZR.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-Dl3MP2rF.js";import"./Button-kZACelDn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DCEDmOYO.js";import"./createLucideIcon-C-NMhMRQ.js";import"./x-Dg7QfrZy.js";import"./Heading-DYEjwoMW.js";import"./info-CrYd0sIg.js";import"./Popover-CAZcTlxs.js";const cr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ur=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,ur as __namedExportsOrder,cr as default};
