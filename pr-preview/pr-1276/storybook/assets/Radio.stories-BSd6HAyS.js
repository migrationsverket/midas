import{j as e}from"./iframe-C6zRxPwt.js";import{R as a,a as c}from"./Radio-CiWihP6l.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BEZo77lv.js";import"./clsx-B-dksMZM.js";import"./Group-BQUgB0PV.js";import"./useFocusRing-BPpPWTKG.js";import"./index-iboGWBaX.js";import"./index-DnknE0l7.js";import"./FieldError-CzljslfK.js";import"./Text-BdoBf6Jw.js";import"./clsx-Ciqy0D92.js";import"./Text-DJ32dSE7.js";import"./Form-PpHcZF8L.js";import"./Button-C8Zk09p7.js";import"./Hidden-IUN1uUBY.js";import"./useLabel-ecSwuXG2.js";import"./useLabels-BCAoW4uD.js";import"./useButton-BrsN7x1k.js";import"./SelectionIndicator-B_zx6GlP.js";import"./useField-CUNsCkrM.js";import"./VisuallyHidden-9r_S3aDL.js";import"./useControlledState-BY6_m9cF.js";import"./Label-B4qiadPW.js";import"./Dialog-BOpzQ1MH.js";import"./RSPContexts-DPB_5Wnw.js";import"./OverlayArrow-DDfGMFSJ.js";import"./useResizeObserver-BPKQSG2Q.js";import"./Collection-CH3bxv8u.js";import"./index-BdieSrJG.js";import"./Separator-DqV_Oq0w.js";import"./SelectionManager-Idt-0Wa2.js";import"./useEvent-BvwOn5ub.js";import"./scrollIntoView-zTEWqLUD.js";import"./useDescription-D1QyVa4Z.js";import"./ListKeyboardDelegate-BmFgQiWl.js";import"./PressResponder-R2OLyqx9.js";import"./useLocalizedStringFormatter-D9_WmAaw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DYiIYqDx.js";import"./getScrollParent-CSa9bUGq.js";import"./ModalOverlay-4wsF43EW.js";import"./x-Dji1ZwpV.js";import"./createLucideIcon-ANvKNx91.js";import"./useLocalizedStringFormatter-B15xbeUv.js";import"./Heading-CrgNBsxh.js";import"./Button-DHMnWLGJ.js";import"./Button.module-BB7N-cLd.js";import"./info-BMmqubIS.js";import"./Popover-DLbKNTks.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
