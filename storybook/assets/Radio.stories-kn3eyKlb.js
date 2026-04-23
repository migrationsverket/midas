import{j as e}from"./iframe-DOBgJI-y.js";import{R as a,a as c}from"./Radio-B1mXzXib.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DiaRguFq.js";import"./clsx-B-dksMZM.js";import"./Group-DS0v0YDF.js";import"./useFocusRing-BQr5-3Np.js";import"./index-X29No980.js";import"./index-mBWPsfNs.js";import"./FieldError-BPSmjDw6.js";import"./Text-CGuvF1HY.js";import"./clsx-Ciqy0D92.js";import"./Text-DFLO7oRJ.js";import"./Form-DQ-r7Yap.js";import"./Button-iOZwwJt-.js";import"./Hidden-DRJRklAH.js";import"./useLabel-CwHTcLwx.js";import"./useLabels-DQJyw6TD.js";import"./useButton-q5vZ9ZE2.js";import"./SelectionIndicator-CiEVc6IP.js";import"./useField-22FoNi1Z.js";import"./VisuallyHidden-mcCQW-OH.js";import"./useControlledState-DuJeSPKv.js";import"./Label-Cb2VwvBl.js";import"./Dialog-3fHPTowi.js";import"./RSPContexts-D1vu3Vuz.js";import"./OverlayArrow-zzAqmKbl.js";import"./useResizeObserver-CpHe5CSo.js";import"./Collection-CQCqI1zo.js";import"./index-_K1HwoT7.js";import"./Separator-Bjcgp8Dp.js";import"./SelectionManager-BOMbf9lp.js";import"./useEvent-B26EYKij.js";import"./scrollIntoView-D0LuDjH5.js";import"./useDescription-BorXdBcC.js";import"./ListKeyboardDelegate-DEvkxBuI.js";import"./PressResponder-VOsET5cv.js";import"./useLocalizedStringFormatter-DKxraR3H.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CeVmZFjW.js";import"./getScrollParent-l3TZr912.js";import"./ModalOverlay-IshjVRTX.js";import"./x-BRuwBP3I.js";import"./createLucideIcon-DcZtHlnh.js";import"./useLocalizedStringFormatter-B7OxMwVs.js";import"./Heading-D9mndLSG.js";import"./Button-u1ZblIyK.js";import"./Button.module-BB7N-cLd.js";import"./info-BqKlEoQp.js";import"./Popover-CJb4S6mH.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
