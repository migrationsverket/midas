import{j as e}from"./iframe-C1MoIoFQ.js";import{R as a,a as c}from"./Radio-SBWKEm1U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dd9KjGc9.js";import"./clsx-B-dksMZM.js";import"./Group-jP0NGuCQ.js";import"./useFocusRing-BDQMY-6N.js";import"./index-C81WqCTC.js";import"./index-CwePtk0Z.js";import"./FieldError-xLLnQN0i.js";import"./Text-BxVOdM76.js";import"./clsx-Ciqy0D92.js";import"./Text-BZ5m3zwb.js";import"./Form-BgY7Eb4J.js";import"./Button-Bt2VcdxR.js";import"./Hidden-CQA8_prX.js";import"./useLabel-BXOmRBqN.js";import"./useLabels-ONT18L0d.js";import"./useButton-kMH8ZZTp.js";import"./SelectionIndicator-TFXYChPQ.js";import"./useField-rPcU4U3B.js";import"./VisuallyHidden-CrG6ZMtm.js";import"./useControlledState-BDHCwT0f.js";import"./Label-BwhU61YZ.js";import"./Dialog-Dy1cg48O.js";import"./RSPContexts-rTZVWH0H.js";import"./OverlayArrow-BKYPGnW-.js";import"./useResizeObserver-BSWda7aC.js";import"./Collection-C2HKqn-L.js";import"./index-rZNXYI3D.js";import"./Separator-Dsdpgh1T.js";import"./SelectionManager-GFTd_q9E.js";import"./useEvent-9VQOaFMz.js";import"./scrollIntoView-CV3jjMt7.js";import"./useDescription-CWsbdymE.js";import"./ListKeyboardDelegate-CqDetXlF.js";import"./PressResponder-xfnIK1TV.js";import"./useLocalizedStringFormatter-DtXEU9jw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DDX6-0zQ.js";import"./getScrollParent-MGDKI0Li.js";import"./ModalOverlay-CtGtkBRD.js";import"./x-CreL89JY.js";import"./createLucideIcon-CpvMiuWS.js";import"./useLocalizedStringFormatter-DN-WkxQL.js";import"./Heading-B4Dxk79k.js";import"./Button-Bh1vA6XB.js";import"./Button.module-BB7N-cLd.js";import"./info-C5RLEIh2.js";import"./Popover-BzTjj0gs.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
