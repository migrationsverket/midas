import{j as e}from"./iframe-DsPZ3k2a.js";import{R as a,a as c}from"./Radio-BV5arz0W.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DVRplGTm.js";import"./clsx-B-dksMZM.js";import"./Group-BuYea3no.js";import"./useFocusRing-Cuzdmb74.js";import"./index-CaIK6bHz.js";import"./index-SpvYX93F.js";import"./FieldError-B7hNQFWR.js";import"./Text-Dz2dRBNa.js";import"./clsx-Ciqy0D92.js";import"./Text-DD5LVeyW.js";import"./Form-DPGlfzHu.js";import"./Button-1ibsdlM-.js";import"./Hidden-vFz_M5_3.js";import"./useLabel-CBpqBZPr.js";import"./useLabels-BLAf1Pjr.js";import"./useButton-td_Mid3P.js";import"./SelectionIndicator-B7XaYdIl.js";import"./useField-stTvCyM3.js";import"./VisuallyHidden-BoP7uW4X.js";import"./useControlledState-Ynphlhkh.js";import"./Label-DtZN8VLb.js";import"./Dialog-1Tc2Tzhh.js";import"./RSPContexts-CozbcOE6.js";import"./OverlayArrow-N0RcTnbu.js";import"./useResizeObserver-WVHe0Qgn.js";import"./Collection-tBFkX_de.js";import"./index-BJleMyuH.js";import"./Separator-C1wWYv1d.js";import"./SelectionManager-X-CmAPs6.js";import"./useEvent-c1TSVycZ.js";import"./scrollIntoView-Co_8oPFw.js";import"./useDescription-D1CIVKnU.js";import"./ListKeyboardDelegate-CouOaG_A.js";import"./PressResponder-CJklNJa2.js";import"./useLocalizedStringFormatter-BhAe1Cmu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CEtoYNbU.js";import"./getScrollParent-SsQAyo_d.js";import"./ModalOverlay-B0_dMMU6.js";import"./x-B1yKqvoC.js";import"./createLucideIcon-DFP7Vl1t.js";import"./useLocalizedStringFormatter-B_4X81TH.js";import"./Heading-BS-WW6S5.js";import"./Button-uXogGJvd.js";import"./Button.module-BB7N-cLd.js";import"./info-CQI_rwr8.js";import"./Popover-DFAxb8Ei.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
