import{j as e}from"./iframe-BNcGdhPn.js";import{R as a,a as c}from"./Radio--AUfE9-O.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BPT-EsfX.js";import"./clsx-B-dksMZM.js";import"./Group-Dtrx9Ex4.js";import"./useFocusRing-Cu9nwss3.js";import"./index-eJCNODhz.js";import"./index-DyMsBIwY.js";import"./FieldError-CFxnUxOD.js";import"./Text-Dc9-vgHL.js";import"./clsx-Ciqy0D92.js";import"./Text-CjSndq1s.js";import"./Form-BiZUbCcr.js";import"./Button-CSPLOvS6.js";import"./Hidden-D26ysej5.js";import"./useLabel-BYHfbcg2.js";import"./useLabels-Cyu-ySud.js";import"./useButton-CBaQ9s7X.js";import"./SelectionIndicator-C8uxE-m0.js";import"./useField-3oXs5MuB.js";import"./VisuallyHidden-BrOw3xQL.js";import"./useControlledState-BMDHyIEM.js";import"./Label-DIQtgpJR.js";import"./Dialog-B-cDCHOP.js";import"./RSPContexts-DHoclz_N.js";import"./OverlayArrow-C245l6va.js";import"./useResizeObserver-gfM9DMFm.js";import"./Collection-C1nt9JNW.js";import"./index-GhtlZNTq.js";import"./Separator-w59tPuNY.js";import"./SelectionManager-D9zlF73V.js";import"./useEvent-CU5jG29K.js";import"./scrollIntoView-DW5hP9Ho.js";import"./useDescription-B3I2KEu4.js";import"./ListKeyboardDelegate-BUSiOdW7.js";import"./PressResponder-Dyf4t-uc.js";import"./useLocalizedStringFormatter-Boi35b_5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-aHSinPf_.js";import"./getScrollParent-Dxp0T4Mw.js";import"./ModalOverlay-BxxQGZhw.js";import"./x-Cn8Z5y6x.js";import"./createLucideIcon-CIzIYBm5.js";import"./useLocalizedStringFormatter-BLpdVFbs.js";import"./Heading-ChJbJ3Ze.js";import"./Button-BgPh4XDv.js";import"./Button.module-BB7N-cLd.js";import"./info-CecoY-7I.js";import"./Popover-2eTZGnSP.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
