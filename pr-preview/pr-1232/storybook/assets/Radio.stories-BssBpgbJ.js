import{j as e}from"./iframe-CUW_txz6.js";import{R as a,a as c}from"./Radio-C_7HmnKu.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BrfeFFy9.js";import"./clsx-B-dksMZM.js";import"./Group-C3Ht6QcB.js";import"./useFocusRing-Ow8z5BMJ.js";import"./index-CEIRzGFi.js";import"./index-DPGPOgn_.js";import"./FieldError-BBiP0jfO.js";import"./Text-Bi2kB5GC.js";import"./clsx-Ciqy0D92.js";import"./Text-DvPi9pFM.js";import"./Form-DNzUj6ms.js";import"./Button-DJT34vsz.js";import"./Hidden-C6dZGZNF.js";import"./useLabel-Cw6MJ1IZ.js";import"./useLabels-DZAjP1T4.js";import"./useButton-Bg8Qj9rG.js";import"./SelectionIndicator-Byd9q1Hf.js";import"./useField-CLP_zsZ0.js";import"./VisuallyHidden-C2eTcyAK.js";import"./useControlledState-BuDrosJG.js";import"./Label-CzaPhy5Y.js";import"./Dialog-D7fJEhAE.js";import"./RSPContexts-DYx0iF5j.js";import"./OverlayArrow-B36CX_JF.js";import"./useResizeObserver-B50A-UTA.js";import"./Collection-3mxxC9eU.js";import"./index-DjmmA6Oh.js";import"./Separator-CbzyhqqZ.js";import"./SelectionManager-aJ-j4EKa.js";import"./useEvent-CHrrjSKK.js";import"./scrollIntoView-D8kVtkIc.js";import"./useDescription-DeV7fvLF.js";import"./ListKeyboardDelegate-DyYd3gII.js";import"./PressResponder-DTTKATG8.js";import"./useLocalizedStringFormatter-CGK0h3fP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BGNa_fMh.js";import"./getScrollParent-DWW6JN_D.js";import"./ModalOverlay-Dd-5tipM.js";import"./x-pwSsQ8xV.js";import"./createLucideIcon-Cc0DwuLE.js";import"./useLocalizedStringFormatter-wgvHSt-l.js";import"./Heading-rIzkF3u3.js";import"./Button-yberURbp.js";import"./Button.module-BB7N-cLd.js";import"./info-BGBnsoll.js";import"./Popover-DgFfSiXP.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
