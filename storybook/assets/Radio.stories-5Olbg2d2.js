import{j as e}from"./iframe-BFuflVuT.js";import{R as a,a as c}from"./Radio-BB9puK1-.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CVETsxUB.js";import"./clsx-B-dksMZM.js";import"./Group-DxDnkT_x.js";import"./useFocusRing-BGj7TLCb.js";import"./index-Brk4EwLy.js";import"./index-CJP4tsNo.js";import"./FieldError-B21E2xEp.js";import"./Text-50232H9V.js";import"./clsx-Ciqy0D92.js";import"./Text-Cd7qZGor.js";import"./Form-_O7owz9U.js";import"./Button-Bvi4kTfB.js";import"./Hidden-CWAGeXUM.js";import"./useLabel-CfkHNsqd.js";import"./useLabels-Df7U7HeX.js";import"./useButton-BUsqQPGJ.js";import"./SelectionIndicator-C0jG9iBd.js";import"./useField-CmfWuk6-.js";import"./VisuallyHidden-ChouFcZQ.js";import"./useControlledState-D_V-QnC2.js";import"./Label-Btf5roma.js";import"./Dialog-HGbVhZh3.js";import"./RSPContexts-BKJ_hWyQ.js";import"./OverlayArrow-BO59qnCj.js";import"./useResizeObserver-D2vfYUms.js";import"./Collection-DwqB045i.js";import"./index-Cx84pKcq.js";import"./Separator-CJ6jYql_.js";import"./SelectionManager-CDDOpm3X.js";import"./useEvent-qDpnqejC.js";import"./scrollIntoView-DyJWvoJg.js";import"./useDescription-CL478hBZ.js";import"./ListKeyboardDelegate-DG5oTXvP.js";import"./PressResponder-BUvOU1QA.js";import"./useLocalizedStringFormatter-BAc9MzAl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DDwZiepJ.js";import"./getScrollParent-CJmvDIbp.js";import"./ModalOverlay-Cs4VCEIj.js";import"./x-Dlq0AP5X.js";import"./createLucideIcon-CY2uueIZ.js";import"./useLocalizedStringFormatter-Cm1acgw7.js";import"./Heading-DSRT_WaZ.js";import"./Button-B_e2-Iv-.js";import"./Button.module-BB7N-cLd.js";import"./info-DR2nXUtE.js";import"./Popover-BQXWP18I.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
