import{j as e}from"./iframe-oKPevWaY.js";import{R as a,a as c}from"./Radio-Ds0YvGhF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BqjuQA51.js";import"./clsx-B-dksMZM.js";import"./Group-D4AR734E.js";import"./useFocusRing-BNAmj3ga.js";import"./index-C5PKnBSq.js";import"./index-DgJJn68D.js";import"./FieldError-B9nT_kkA.js";import"./Text-NuhHAO3F.js";import"./clsx-Ciqy0D92.js";import"./Text-CEmixCfV.js";import"./Form-D8hKIz8A.js";import"./Button-UMnKvlHB.js";import"./Hidden-DpO7vPy1.js";import"./useLabel-DD_tHSVp.js";import"./useLabels-Dudi4a5M.js";import"./useButton-BQzjyOJs.js";import"./SelectionIndicator-lk-xC_bn.js";import"./useField-Bl_GZwWa.js";import"./VisuallyHidden-D5YwBUcA.js";import"./useControlledState-CyVhgPro.js";import"./Label-Brw2JrKu.js";import"./Dialog-BzgqjoUu.js";import"./RSPContexts-I8GuPoNW.js";import"./OverlayArrow-DvjZHb9S.js";import"./useResizeObserver-MEdL5GdH.js";import"./Collection-CkdTzR9R.js";import"./index-CzQfmgnt.js";import"./Separator-C-f_gDjQ.js";import"./SelectionManager-CDyUNFjs.js";import"./useEvent-IXAyeg2x.js";import"./scrollIntoView-B_u9uatn.js";import"./useDescription-Ya8G2xdV.js";import"./ListKeyboardDelegate-i-dcu7Zi.js";import"./PressResponder-Cml_sTZq.js";import"./useLocalizedStringFormatter-Ds6Qg8Ar.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-rH8nux2W.js";import"./getScrollParent-B4qiDCOv.js";import"./x-DIFCquM7.js";import"./createLucideIcon-D_CPhcXk.js";import"./useLocalizedStringFormatter-C0pOBFKJ.js";import"./Heading-CAvfyWoD.js";import"./Button-BPGT5-63.js";import"./Button.module-BB7N-cLd.js";import"./info-DiXhKcAi.js";import"./Popover-DUzKO22e.js";const dr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const mr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,mr as __namedExportsOrder,dr as default};
