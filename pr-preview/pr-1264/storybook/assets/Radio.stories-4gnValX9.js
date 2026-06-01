import{j as e}from"./iframe-Bd9H7Vfx.js";import{R as a,a as c}from"./Radio-UAbFhBDP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DsmRkWxC.js";import"./clsx-B-dksMZM.js";import"./Group-BIjuMvxj.js";import"./useFocusRing-CnLPB_6u.js";import"./index-BtBPjCGs.js";import"./index-CaWaKKHJ.js";import"./FieldError-DpsZbolk.js";import"./Text-B_j7rweg.js";import"./clsx-Ciqy0D92.js";import"./Text-6cOQ6dAC.js";import"./Form-CZMTNuAO.js";import"./Button-BiRWLd5m.js";import"./Hidden-BsqjLjJT.js";import"./useLabel-lBHMCnWn.js";import"./useLabels-D4u2oU-D.js";import"./useButton-BfgVUf0f.js";import"./SelectionIndicator-CQVWmUVk.js";import"./useField-BPmKK2hO.js";import"./VisuallyHidden-ytL0956d.js";import"./useControlledState-075FDtLg.js";import"./Label-BGHBDr8q.js";import"./Dialog-D5Rjgzgw.js";import"./RSPContexts-CuXYnuDl.js";import"./OverlayArrow-BSvQtyR7.js";import"./useResizeObserver-BW4mypps.js";import"./Collection-DWNfCn8n.js";import"./index-CRFez_EJ.js";import"./Separator-Dzzbxscp.js";import"./SelectionManager-5QY68epY.js";import"./useEvent-DN0cDM1V.js";import"./scrollIntoView-Bf_lnXkb.js";import"./useDescription-C3g1on3s.js";import"./ListKeyboardDelegate-JM4p0mT-.js";import"./PressResponder-OkwJmME0.js";import"./useLocalizedStringFormatter-BsyS8WPI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C-EkjH-D.js";import"./getScrollParent-Cbimak5V.js";import"./ModalOverlay-C-Ael9T-.js";import"./x-CYsXEKRm.js";import"./createLucideIcon-DpMYq6qz.js";import"./useLocalizedStringFormatter-DCais5ZN.js";import"./Heading-DoXH1r2E.js";import"./Button-6v77JWTX.js";import"./Button.module-BB7N-cLd.js";import"./info-Ey6aZQdZ.js";import"./Popover-4JKvDwLT.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
