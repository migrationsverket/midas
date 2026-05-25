import{j as e}from"./iframe-RhDbrXC3.js";import{R as a,a as c}from"./Radio-CKclBNOn.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DW8RLnA8.js";import"./clsx-B-dksMZM.js";import"./Group-DhQ-VxvO.js";import"./useFocusRing-gsVXsph9.js";import"./index-Bq-QYhEQ.js";import"./index-D8RpSJOW.js";import"./FieldError-BMJ6O_ac.js";import"./Text-BjSdk3hx.js";import"./clsx-Ciqy0D92.js";import"./Text-CcqjDRD2.js";import"./Form-BGhlaKqh.js";import"./Button-B7Qh-IV7.js";import"./Hidden-UG-LGAyj.js";import"./useLabel-CGSCFlTW.js";import"./useLabels-BNdBxkb6.js";import"./useButton-CVLOUy-6.js";import"./SelectionIndicator-CrZwTg5e.js";import"./useField-D3_NVbG0.js";import"./VisuallyHidden-BacDaEj4.js";import"./useControlledState-DqxoR-5f.js";import"./Label-0pC4GIA4.js";import"./Dialog-Db-aziCe.js";import"./RSPContexts-CYLIcFJW.js";import"./OverlayArrow-D5qzCApp.js";import"./useResizeObserver-DCkBLcw-.js";import"./Collection-BSc5pS1V.js";import"./index-Cx4SVn-F.js";import"./Separator-BYOQnxO2.js";import"./SelectionManager-BHvP0mMk.js";import"./useEvent-Cahrq6rW.js";import"./scrollIntoView-BRqXrGDm.js";import"./useDescription-D6Rbp9cO.js";import"./ListKeyboardDelegate-BqZvF2rt.js";import"./PressResponder-56d_UeXY.js";import"./useLocalizedStringFormatter-DVReLGbq.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-eyTzZ1lY.js";import"./getScrollParent-CN5B_Bz1.js";import"./ModalOverlay-DW0y9ttQ.js";import"./x-BCkyh0wS.js";import"./createLucideIcon-CO3bJS-y.js";import"./useLocalizedStringFormatter-C2RlB95E.js";import"./Heading-BSbl4Tma.js";import"./Button-ByeM9eCK.js";import"./Button.module-BB7N-cLd.js";import"./info-BwXMhHSU.js";import"./Popover-LSszjAGj.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
