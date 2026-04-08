import{j as e}from"./iframe-D1quRbgW.js";import{R as a,a as c}from"./Radio-oNT0-Sj9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-5jbBDEho.js";import"./clsx-B-dksMZM.js";import"./Group-BYE11aio.js";import"./useFocusRing-9kJRwLWf.js";import"./index-C1wTVLbv.js";import"./index-w4IFX-ob.js";import"./FieldError-tCCfgJxh.js";import"./Text-3Qvoq1in.js";import"./clsx-Ciqy0D92.js";import"./Text-D_OKwN2L.js";import"./Form-CYOiDrvK.js";import"./Button-BhbL5JV7.js";import"./Hidden-CE_f7fkS.js";import"./useLabel-DDdOINwl.js";import"./useLabels-BsTHS2Oy.js";import"./useButton-D9N6BOnF.js";import"./SelectionIndicator-BQcve-Om.js";import"./useField-Cufj8K7g.js";import"./VisuallyHidden-BTPkzFD2.js";import"./useControlledState-DeZ6Yvot.js";import"./Label-CQyhlHOY.js";import"./Dialog-CRuSb46z.js";import"./RSPContexts-BOAQgN9e.js";import"./OverlayArrow-Cu_hZ8Ow.js";import"./useResizeObserver-mi6LLgFF.js";import"./Collection-D07AIaI6.js";import"./index-DVsa0PpW.js";import"./Separator-Bm91EQOq.js";import"./SelectionManager-BfK7m5GQ.js";import"./useEvent-l8liJTej.js";import"./scrollIntoView-Bo7c4HRy.js";import"./useDescription-CYq7ZcY8.js";import"./ListKeyboardDelegate-abc3RMeL.js";import"./PressResponder-B1v66ZVJ.js";import"./useLocalizedStringFormatter-JzAhjm-n.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C7P9G73n.js";import"./getScrollParent-BuLIPRgk.js";import"./Dialog-B0MaM1ld.js";import"./x-C6gJ_9jG.js";import"./createLucideIcon-xiP51FEZ.js";import"./useLocalizedStringFormatter-BjC_IaMj.js";import"./Heading-DBO9UxDb.js";import"./Button-BfQ6mpwy.js";import"./Button.module-BB7N-cLd.js";import"./info-C4xCLEuX.js";import"./Popover-o2aALoW-.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
