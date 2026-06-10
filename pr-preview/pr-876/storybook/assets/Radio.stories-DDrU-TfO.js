import{j as e}from"./iframe-CmeF7aiR.js";import{R as a,a as c}from"./Radio-Dp5muwZx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Z3-XoPsz.js";import"./clsx-B-dksMZM.js";import"./Group-BQ2QLkRq.js";import"./useFocusRing-2QXJrqIt.js";import"./index-XXiSS7gB.js";import"./index-Cy7R6ehB.js";import"./FieldError-BVrE0AIG.js";import"./Text-C9HAfj-8.js";import"./clsx-Ciqy0D92.js";import"./Text-BssmR8ms.js";import"./Form-DCycYtMR.js";import"./Button-ClEeAqn6.js";import"./Hidden-BUn3MpC7.js";import"./useLabel-ZOG9CKkE.js";import"./useLabels-kUwjKE83.js";import"./useButton-B02vL_2_.js";import"./SelectionIndicator-BC7L7-ox.js";import"./useField-DvTMSr8p.js";import"./VisuallyHidden-B0_5kTh6.js";import"./useControlledState-hzD7JFD-.js";import"./Label-k1l0EY31.js";import"./Dialog-DS-mfamb.js";import"./RSPContexts-BpcZ6nht.js";import"./OverlayArrow-DGTFW9dl.js";import"./useResizeObserver-BDV1aHG4.js";import"./Collection-Cw5azGBR.js";import"./index-Ctx5ZgNK.js";import"./Separator-B2-i3j6n.js";import"./SelectionManager-N_jg7Ktj.js";import"./useEvent-kH6-sJDb.js";import"./scrollIntoView-rNYRejP1.js";import"./useDescription-DEWpOLKq.js";import"./ListKeyboardDelegate-C9ktpFr7.js";import"./PressResponder-FhDuQOeC.js";import"./useLocalizedStringFormatter-CWAX1pT5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bg2Y09vr.js";import"./getScrollParent-BlOOdjy0.js";import"./ModalOverlay-UObFunht.js";import"./x-B7wEz93I.js";import"./createLucideIcon-DCW1PR-F.js";import"./useLocalizedStringFormatter-ACOccWph.js";import"./Heading-ggj7_bEi.js";import"./Button-xoJ9JlM1.js";import"./Button.module-BB7N-cLd.js";import"./info-B4T0OC2X.js";import"./Popover-CrJNx5RQ.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
