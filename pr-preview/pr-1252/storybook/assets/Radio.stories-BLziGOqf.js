import{j as e}from"./iframe-DmMjYjLV.js";import{R as a,a as c}from"./Radio-B6XVE-Xh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C7Za6cav.js";import"./clsx-B-dksMZM.js";import"./Group-DApTybdo.js";import"./useFocusRing-DNsXJifB.js";import"./index-MWmo0bvh.js";import"./index-Dtm98ubu.js";import"./FieldError-Dhwy9R14.js";import"./Text-TBh7QsjQ.js";import"./clsx-Ciqy0D92.js";import"./Text-D1BlasEz.js";import"./Form-w1xpkiob.js";import"./Button-BoGHaXxS.js";import"./Hidden-C30O7ZZj.js";import"./useLabel-w1IJLBOX.js";import"./useLabels-KrUCHD9B.js";import"./useButton-Dmer3eRj.js";import"./SelectionIndicator-CspuSccB.js";import"./useField-ykwfEeQx.js";import"./VisuallyHidden-Bt6CiHI_.js";import"./useControlledState-jKmX6mW8.js";import"./Label-Cg8j5ntE.js";import"./Dialog-QxxpEwfY.js";import"./RSPContexts-CYlpwwtX.js";import"./OverlayArrow-FoDXdwa0.js";import"./useResizeObserver-QqaVn9XQ.js";import"./Collection-CQwAL6eH.js";import"./index-B_ond3mD.js";import"./Separator-ByeE83bT.js";import"./SelectionManager-CQ6A48ag.js";import"./useEvent-be-eSwO4.js";import"./scrollIntoView-BJKhh-O-.js";import"./useDescription-2aTt99IB.js";import"./ListKeyboardDelegate-Cgn_BUdj.js";import"./PressResponder-CgluTvIq.js";import"./useLocalizedStringFormatter-Df1Z6d6Q.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-D2C9iwtv.js";import"./getScrollParent-iMMNoEOU.js";import"./ModalOverlay-sNrptj1Y.js";import"./x--G2PLC8C.js";import"./createLucideIcon-mwlEDpcM.js";import"./useLocalizedStringFormatter-Cacp7Pde.js";import"./Heading-CQ85-u0X.js";import"./Button-Pdwae4O6.js";import"./Button.module-BB7N-cLd.js";import"./info-Dpc101tS.js";import"./Popover-DEDjHU40.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
