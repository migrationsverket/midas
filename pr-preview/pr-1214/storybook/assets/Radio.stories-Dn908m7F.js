import{j as e}from"./iframe-B22LvWbW.js";import{R as a,a as c}from"./Radio-BvvmPlbD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BoCAfGQj.js";import"./clsx-B-dksMZM.js";import"./Group-BQeFUN6h.js";import"./useFocusRing-COZ-KdCj.js";import"./index-COlz_oEn.js";import"./index-Ce19_x3I.js";import"./FieldError-CaBPVaas.js";import"./Text-igIwftJt.js";import"./clsx-Ciqy0D92.js";import"./Text-C_6Wg08c.js";import"./Form-loZ3Ref_.js";import"./Button-DKfTRRv_.js";import"./Hidden-BOXGnL4u.js";import"./useLabel-BMEjxuHj.js";import"./useLabels-CG8ZEWvO.js";import"./useButton-D-9O1J5B.js";import"./SelectionIndicator-BOQ4NAlt.js";import"./useField-CuA4l6HP.js";import"./VisuallyHidden-BkHBxjny.js";import"./useControlledState-IKfTJ6C0.js";import"./Label-YYnb5gHM.js";import"./Dialog-BqQxdS0P.js";import"./RSPContexts-C7KIxgyf.js";import"./OverlayArrow-B3TmF933.js";import"./useResizeObserver-c0n_8mJZ.js";import"./Collection-CdjXBLNw.js";import"./index-DuOmNTUm.js";import"./Separator-BrFHALxw.js";import"./SelectionManager-CsU5-DFp.js";import"./useEvent-DcI05E6D.js";import"./scrollIntoView-7H8hj9e6.js";import"./useDescription-CWKmEZRS.js";import"./ListKeyboardDelegate-BeR0xWC1.js";import"./PressResponder-BNw9Ut1n.js";import"./useLocalizedStringFormatter-Cax5_603.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DnYENIvM.js";import"./getScrollParent-BHXVU5eY.js";import"./Dialog-CPqTyhcA.js";import"./x-Dgd0H-9L.js";import"./createLucideIcon-B8tzovcT.js";import"./useLocalizedStringFormatter-Bx-OZ9xC.js";import"./Heading-CoAlJEvR.js";import"./Button-sJK-n8WP.js";import"./Button.module-BB7N-cLd.js";import"./info-BgeGSH12.js";import"./Popover-v0UKaGbn.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
