import{j as e}from"./iframe-CKFMuO9m.js";import{R as a,a as c}from"./Radio-VG-MhXPJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-D5GKgKLw.js";import"./clsx-B-dksMZM.js";import"./Group-BmEjfMGD.js";import"./useFocusRing-yfimCeup.js";import"./index-6i8ZJQUe.js";import"./index-DDqKr8WO.js";import"./FieldError-BxVlGG_h.js";import"./Text-D6Srqbyc.js";import"./clsx-Ciqy0D92.js";import"./Text-CA1blZ7p.js";import"./Form-CIVuJeWD.js";import"./Button-r5FEcXKA.js";import"./Hidden-Dy9FDq_i.js";import"./useLabel-Biy0vo30.js";import"./useLabels-D1n_UWc_.js";import"./useButton-CBEFeFxS.js";import"./SelectionIndicator-BFcBA69R.js";import"./useField-Do1u8hN3.js";import"./VisuallyHidden-DCQS44v1.js";import"./useControlledState-BexPn5vQ.js";import"./Label-Djib92Ef.js";import"./Dialog-Dd7oJhma.js";import"./RSPContexts-DhqrhFMI.js";import"./OverlayArrow-DOSEjS3e.js";import"./useResizeObserver-lGR9_MiC.js";import"./Collection-ufR-ynN_.js";import"./index-2H2h2DF8.js";import"./Separator-g6rmnRqd.js";import"./SelectionManager-DFf4iKUm.js";import"./useEvent-DtZHTgkv.js";import"./scrollIntoView-DixLNrnP.js";import"./useDescription-Df78gmXN.js";import"./ListKeyboardDelegate-uWRRNnxO.js";import"./PressResponder-BNGsEO2H.js";import"./useLocalizedStringFormatter-BF0ENpbS.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-_EkHvhyP.js";import"./getScrollParent-CRWGRsX_.js";import"./Dialog-CV1Xdzk8.js";import"./x-BvWk0FrP.js";import"./createLucideIcon-C2PX8F3A.js";import"./useLocalizedStringFormatter-BlqBGSSd.js";import"./Heading-CUHS5E_c.js";import"./Button-DCc3RCFi.js";import"./Button.module-BB7N-cLd.js";import"./info-CfBz-e-5.js";import"./Popover-Aem2Mu46.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
