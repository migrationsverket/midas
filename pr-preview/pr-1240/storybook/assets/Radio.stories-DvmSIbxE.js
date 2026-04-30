import{j as e}from"./iframe-CbAzJO9N.js";import{R as a,a as c}from"./Radio-DFLxAdlU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B0jB1E5G.js";import"./clsx-B-dksMZM.js";import"./Group-CDs_4aSR.js";import"./useFocusRing-Cvfx5XiJ.js";import"./index-CIpD7d_z.js";import"./index-zxdvsBHT.js";import"./FieldError-Q76E79z-.js";import"./Text-Cb6mQNAQ.js";import"./clsx-Ciqy0D92.js";import"./Text-B0GIqCDR.js";import"./Form-VNKUe-wT.js";import"./Button-_5CpY_LG.js";import"./Hidden-j-F0-7Lz.js";import"./useLabel-DdRCBCBY.js";import"./useLabels-BUHgLQ-5.js";import"./useButton-CrpkGmXn.js";import"./SelectionIndicator-QNGy80KY.js";import"./useField-CBtm8xuD.js";import"./VisuallyHidden-Dhjqn-q1.js";import"./useControlledState-DjmxdyV_.js";import"./Label-ExQDaYWm.js";import"./Dialog-DW2Inq1H.js";import"./RSPContexts-CdwstRL7.js";import"./OverlayArrow-Dv4tydTP.js";import"./useResizeObserver-CrcmnwKx.js";import"./Collection-D60D3pRD.js";import"./index-hbx092to.js";import"./Separator-BZo3Gu1p.js";import"./SelectionManager-DBlz5uU6.js";import"./useEvent-VV5wi-lK.js";import"./scrollIntoView-CfANcw89.js";import"./useDescription-x0RZZUcB.js";import"./ListKeyboardDelegate-C6dnv3Af.js";import"./PressResponder-BTxBJQy3.js";import"./useLocalizedStringFormatter-DJXPkqTe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bskg7DBL.js";import"./getScrollParent-4mlCzyaP.js";import"./ModalOverlay-DvNGtE2h.js";import"./x-CrcasNM6.js";import"./createLucideIcon-lx1Wi4QI.js";import"./useLocalizedStringFormatter-AKU0Mz00.js";import"./Heading-5Uwbhg9g.js";import"./Button-Cly75nHE.js";import"./Button.module-BB7N-cLd.js";import"./info-BPfNumPG.js";import"./Popover-C2Zhsq-R.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
