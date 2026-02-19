import{j as e}from"./iframe-C3suvfCC.js";import{R as a,a as c}from"./Radio-BtGzOJeg.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-w1wqq_Bv.js";import"./utils-8KtKGWo2.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-DPPVEX-G.js";import"./index-DPEO0aoj.js";import"./index-PxyQfFNQ.js";import"./FieldError-r_7UR8Ic.js";import"./Text-TmrZTkdZ.js";import"./clsx-Ciqy0D92.js";import"./Text-CAR9w4j8.js";import"./Form-Bl2LrB3d.js";import"./useFormValidation-D3u9G5Gr.js";import"./Button-Dadovnzr.js";import"./Hidden-B4jqCieW.js";import"./number-DfkVkf0F.js";import"./useLabels-ETQjh8K0.js";import"./useButton-D1gxBCXz.js";import"./SelectionIndicator-3UAsTNPC.js";import"./useField-DCRcz9cn.js";import"./VisuallyHidden-BuDGIcKc.js";import"./useControlledState-Dy1nnS07.js";import"./Label-BxjybePx.js";import"./Dialog-DK8TlEY6.js";import"./RSPContexts-D9aNL0uK.js";import"./OverlayArrow-CLt_sQuq.js";import"./useResizeObserver-VclQBWcI.js";import"./Collection-CQ04hqGX.js";import"./index-R_sykBLn.js";import"./Separator-DMXJbRzd.js";import"./SelectionManager-sa4l8pM_.js";import"./useEvent-C45D4JfQ.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-Dzu4Oy5P.js";import"./ListKeyboardDelegate-8ZhAfhP0.js";import"./PressResponder-YbpO_Git.js";import"./useLocalizedStringFormatter-BhJ_7gEa.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Bo_RTDbl.js";import"./getScrollParent-Cpn7MDkE.js";import"./Button-BugZSa53.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B21-jb3s.js";import"./createLucideIcon-lIWmNTi7.js";import"./x-Z98Hm-Qw.js";import"./Heading-BUZwhMm1.js";import"./info-SU5iTE0p.js";import"./Popover-dtyRgXv8.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
