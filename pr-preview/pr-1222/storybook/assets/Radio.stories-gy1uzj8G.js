import{j as e}from"./iframe-Co8ouiR0.js";import{R as a,a as c}from"./Radio-D2Sc8WQz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CaTFkK5X.js";import"./clsx-B-dksMZM.js";import"./Group-CFHeoX-M.js";import"./useFocusRing-Dxdgl-gF.js";import"./index-2SWVDjSK.js";import"./index-Cebtxf6H.js";import"./FieldError-CEGfntdp.js";import"./Text-DtfYRBf1.js";import"./clsx-Ciqy0D92.js";import"./Text-B5_C6N3n.js";import"./Form-Ckl-USsE.js";import"./Button-BP9TK4Xh.js";import"./Hidden-TJ2PhhZw.js";import"./useLabel-CFh1kjGP.js";import"./useLabels-BI3YgoCG.js";import"./useButton-D1lFKu5A.js";import"./SelectionIndicator-DWiIapfM.js";import"./useField-CC0WBTcL.js";import"./VisuallyHidden-DHiWfcqJ.js";import"./useControlledState-CaplsX9m.js";import"./Label-hXq40l1q.js";import"./Dialog-CvlWZS6m.js";import"./RSPContexts-DtYDmIKY.js";import"./OverlayArrow-C6d9GNbe.js";import"./useResizeObserver-B51hn-QD.js";import"./Collection-DINZb8zb.js";import"./index-B_luancG.js";import"./Separator-BapWEfbs.js";import"./SelectionManager-BWBhr4BK.js";import"./useEvent-Cm1cXmjt.js";import"./scrollIntoView-DvPgTXx8.js";import"./useDescription-HAOJ4Hrg.js";import"./ListKeyboardDelegate-CsIF4ql5.js";import"./PressResponder-D7LEbecv.js";import"./useLocalizedStringFormatter-DQmIYKST.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CnViS2qk.js";import"./getScrollParent-BedhNeW7.js";import"./ModalOverlay-CCKnw6s9.js";import"./x-BzzbKOkA.js";import"./createLucideIcon-CuuVQ0Rb.js";import"./useLocalizedStringFormatter-BlJUxnvu.js";import"./Heading-BCJk9rok.js";import"./Button-BOgReN_Q.js";import"./Button.module-BB7N-cLd.js";import"./info-SKV308y7.js";import"./Popover-0v0Nff7R.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
