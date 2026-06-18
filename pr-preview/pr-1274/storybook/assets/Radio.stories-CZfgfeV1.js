import{j as e}from"./iframe-BrwpvQHc.js";import{R as a,a as c}from"./Radio-HRxeszev.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BACMs3jS.js";import"./clsx-B-dksMZM.js";import"./Group-EsSCRkvs.js";import"./useFocusRing-ay8XrwpJ.js";import"./index-e4zmhYiJ.js";import"./index-CfMCfkTD.js";import"./FieldError-Bn-kD1g2.js";import"./Text-Cp5vE00Z.js";import"./clsx-Ciqy0D92.js";import"./Text-B8xII3uk.js";import"./Form-QTUFbTxy.js";import"./Button-CyBHSIdo.js";import"./Hidden-62uiVpgl.js";import"./useLabel-1zqhq5YX.js";import"./useLabels-D7FAWWUV.js";import"./useButton-DKTae0i9.js";import"./SelectionIndicator-DAEZu0n9.js";import"./useField-BfH21yjI.js";import"./VisuallyHidden-DRJAfVxE.js";import"./useControlledState-BuArS6Zg.js";import"./Label-C3E02UL2.js";import"./Dialog-Czi0d8Hr.js";import"./RSPContexts-LKuPHdSI.js";import"./OverlayArrow-CqCyF7Ym.js";import"./useResizeObserver-C52f4LZj.js";import"./Collection-CUm3w3hw.js";import"./index-DSeJmrPr.js";import"./Separator-Cm-oI8CP.js";import"./SelectionManager-CMlb0qO7.js";import"./useEvent-D8YMy7IN.js";import"./scrollIntoView-CyZOtQhj.js";import"./useDescription-DfwBnCrb.js";import"./ListKeyboardDelegate-qi1TIQEk.js";import"./PressResponder-ByjezIr6.js";import"./useLocalizedStringFormatter-CkzWLLcE.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DCnZU3jm.js";import"./getScrollParent-CBxp-l9V.js";import"./ModalOverlay-BhNqjgfR.js";import"./x-C3Fvjogf.js";import"./createLucideIcon-DL41wzn8.js";import"./useLocalizedStringFormatter-V2VPiIBS.js";import"./Heading-B2xW-WDi.js";import"./Button-BhMRkAV6.js";import"./Button.module-BB7N-cLd.js";import"./info-CbCg_KTu.js";import"./Popover-C_pzYqjh.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
