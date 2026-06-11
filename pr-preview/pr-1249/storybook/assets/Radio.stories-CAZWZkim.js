import{j as e}from"./iframe-Di5CTR8T.js";import{R as a,a as c}from"./Radio-Dy32i2pj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtBItuGe.js";import"./clsx-B-dksMZM.js";import"./Group-D3mEeqQ-.js";import"./useFocusRing-DrwftOie.js";import"./index-DitNwB70.js";import"./index-DBHfn5s_.js";import"./FieldError-Bv2rXWOC.js";import"./Text-ZJfVqn-h.js";import"./clsx-Ciqy0D92.js";import"./Text-n28vbpm4.js";import"./Form-q1oODmDm.js";import"./Button-2OtSDF-S.js";import"./Hidden-sHhuPHwe.js";import"./useLabel-B2_1exfs.js";import"./useLabels-B1J-T3xq.js";import"./useButton-C1jCWvmO.js";import"./SelectionIndicator-BD3Jo9O3.js";import"./useField-BrrjMWLY.js";import"./VisuallyHidden-DD_4lyF0.js";import"./useControlledState-I_KBwW67.js";import"./Label-mKPoFVPk.js";import"./Dialog-BJdR-I1-.js";import"./RSPContexts-DB30PmIp.js";import"./OverlayArrow-BgFIeVyY.js";import"./useResizeObserver-C6VfgOTj.js";import"./Collection-Cd6bQLAa.js";import"./index-C8zKGD88.js";import"./Separator-BnzzmdtP.js";import"./SelectionManager-C1q1HFOS.js";import"./useEvent-Crt2nr6j.js";import"./scrollIntoView-NTyBe7BV.js";import"./useDescription-XOfwguuv.js";import"./ListKeyboardDelegate-B_UfOpVg.js";import"./PressResponder-DW7M4-_e.js";import"./useLocalizedStringFormatter-WF6y2aSl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1_x5jAl.js";import"./getScrollParent-2xlS7fKj.js";import"./ModalOverlay-PDQHlzPO.js";import"./x-B82Stdu9.js";import"./createLucideIcon-BtcOznK7.js";import"./useLocalizedStringFormatter-CoQGZsFN.js";import"./Heading-BZrlUYHo.js";import"./Button-zPsJWo_p.js";import"./Button.module-BB7N-cLd.js";import"./info-DOmqevh8.js";import"./Popover-Hfz6gWUK.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
