import{j as e}from"./iframe-DXV5yNVg.js";import{R as a,a as c}from"./Radio-B9tTKTcI.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D2X0V_ch.js";import"./clsx-B-dksMZM.js";import"./Group-2TNpPRTn.js";import"./useFocusRing-D5WWltRW.js";import"./index-CzcJdf_a.js";import"./index-Ck0jOAPG.js";import"./FieldError-BqMBz98l.js";import"./Text-CKvHTakV.js";import"./clsx-Ciqy0D92.js";import"./Text-CBeHelAL.js";import"./Form-ChJqqoAq.js";import"./Button-BFHR6RXp.js";import"./Hidden-D1mzcqIQ.js";import"./useLabel-DhHgPc5x.js";import"./useLabels-CnmTVeYq.js";import"./useButton-D2_h4EWT.js";import"./SelectionIndicator-BAznZF8p.js";import"./useField-zA9g1QiW.js";import"./VisuallyHidden-BEiLaXoC.js";import"./useControlledState-gqmUfamI.js";import"./Label-D4bRHScp.js";import"./Dialog-CbPWg4ki.js";import"./RSPContexts-CFPuUxx1.js";import"./OverlayArrow-BFyUX9eS.js";import"./useResizeObserver-B-tmIu7G.js";import"./Collection-BHKWOZuO.js";import"./index-DLzlm1NY.js";import"./Separator-Cnj1iZa1.js";import"./SelectionManager-DOb3wefr.js";import"./useEvent-BKSnxFNZ.js";import"./scrollIntoView-Gtl3EXZL.js";import"./useDescription-Br6-58Tk.js";import"./ListKeyboardDelegate-qY0cUxF-.js";import"./PressResponder-jCanc_1p.js";import"./useLocalizedStringFormatter-DMugWIr_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Cln5OJdR.js";import"./getScrollParent-DEOaQKh5.js";import"./ModalOverlay-BP6gum9g.js";import"./x-C8jYBObA.js";import"./createLucideIcon-BzcStSQs.js";import"./useLocalizedStringFormatter-C4UT3jd4.js";import"./Heading-DF9E9mda.js";import"./Button-BlXLhIpL.js";import"./Button.module-BB7N-cLd.js";import"./info-DJyPwCkZ.js";import"./Popover-CvGVI1s-.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
