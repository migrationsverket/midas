import{j as e}from"./iframe-_pn10Gh5.js";import{R as a,a as c}from"./Radio-CJNuYlYp.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dxs9pDcB.js";import"./clsx-B-dksMZM.js";import"./Group-BYgW5Zr6.js";import"./useFocusRing-Du-3sSFw.js";import"./index-Cw5lWwtj.js";import"./index-8X9ryZUF.js";import"./FieldError-DNAaC6mi.js";import"./Text-CTGKw8zC.js";import"./clsx-Ciqy0D92.js";import"./Text-B6_JfJRz.js";import"./Form-DbnAgaD0.js";import"./Button-BbTH0gim.js";import"./Hidden-B59_1jQa.js";import"./useLabel-G0kMe1Tv.js";import"./useLabels-D2T-Rr0V.js";import"./useButton-C6hhINuJ.js";import"./SelectionIndicator-qNnmvrpX.js";import"./useField-BidYdbaA.js";import"./VisuallyHidden-DrcSE3si.js";import"./useControlledState-B3g2_X4G.js";import"./Label-DBLS2Zm1.js";import"./Dialog-Cyw3U-z-.js";import"./RSPContexts-qi1qSqWJ.js";import"./OverlayArrow-mp8JD48b.js";import"./useResizeObserver-BWojxgN3.js";import"./Collection-D2dsY8lM.js";import"./index-Bo66yhSK.js";import"./Separator-Ba8TtDCF.js";import"./SelectionManager-4whR5RAS.js";import"./useEvent-DjkDRboI.js";import"./scrollIntoView-PAGe5JTT.js";import"./useDescription-BKvd-nfd.js";import"./ListKeyboardDelegate-CQ6Tj1SL.js";import"./PressResponder-E6QiKd1a.js";import"./useLocalizedStringFormatter-BPfMaHdV.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXMfGWlf.js";import"./getScrollParent-0TLzMWVN.js";import"./ModalOverlay-R5dlB-Nl.js";import"./x-LrHo8mCt.js";import"./createLucideIcon-B0iC-DBv.js";import"./useLocalizedStringFormatter-CE2BIbZN.js";import"./Heading-KCFO_xOa.js";import"./Button-D11fELwQ.js";import"./Button.module-BB7N-cLd.js";import"./info-Dq8wNctB.js";import"./Popover-Cd47ZjX9.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
