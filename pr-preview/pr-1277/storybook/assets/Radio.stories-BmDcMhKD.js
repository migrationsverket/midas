import{j as e}from"./iframe-P3qrm_tw.js";import{R as a,a as c}from"./Radio-SqPl1To_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cu9HNXzK.js";import"./clsx-B-dksMZM.js";import"./Group-CrusDawx.js";import"./useFocusRing-BLJ-Rv5B.js";import"./index-sMyOSi6p.js";import"./index-DWrpe-jF.js";import"./FieldError-BiTTAlmO.js";import"./Text-GLSAKrWj.js";import"./clsx-Ciqy0D92.js";import"./Text-3plXOlwA.js";import"./Form-YJB6MmV5.js";import"./Button-DhFyMRUa.js";import"./Hidden-BdxXq6fe.js";import"./useLabel-CyrOFGd3.js";import"./useLabels-C-xox_2r.js";import"./useButton-Co-DeDts.js";import"./SelectionIndicator-NCDsTiNC.js";import"./useField-Cj8lvb17.js";import"./VisuallyHidden-BQNLfJdW.js";import"./useControlledState-UTFpRQoc.js";import"./Label-jRZO29FF.js";import"./Dialog-CAsWsL1c.js";import"./RSPContexts-BPVGWq9w.js";import"./OverlayArrow-dQPLWnfN.js";import"./useResizeObserver-egy9g9Ju.js";import"./Collection-BfPyiiOr.js";import"./index-B_B3CX6j.js";import"./Separator-D3Nu6UpI.js";import"./SelectionManager-CmZUjzIx.js";import"./useEvent-uJeReNRd.js";import"./scrollIntoView-D7nJ6B6R.js";import"./useDescription-Dx_6VVp1.js";import"./ListKeyboardDelegate-BOK_v8Uu.js";import"./PressResponder-DEDclZz9.js";import"./useLocalizedStringFormatter-CJciJbzM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DILHiYuv.js";import"./getScrollParent-DDX5O9pm.js";import"./ModalOverlay-Bj8wc53x.js";import"./x-CgDpVAro.js";import"./createLucideIcon-dl19Mkak.js";import"./useLocalizedStringFormatter-CDAilngZ.js";import"./Heading-vN4jtE4Y.js";import"./Button-CvMUPzzi.js";import"./Button.module-BB7N-cLd.js";import"./info-DJzM-f4H.js";import"./Popover-DRRwJZ1T.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
