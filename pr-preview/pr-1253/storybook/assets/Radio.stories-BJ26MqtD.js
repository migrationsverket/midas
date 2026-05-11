import{j as e}from"./iframe-B--hDPXb.js";import{R as a,a as c}from"./Radio-Ck12fu1Y.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DaPQhgmu.js";import"./clsx-B-dksMZM.js";import"./Group-0GBrZlGV.js";import"./useFocusRing-DBQnIZ7Q.js";import"./index-CVdnj8Ui.js";import"./index-Be4ICNeG.js";import"./FieldError-B0I-izd3.js";import"./Text-eQWaQXgM.js";import"./clsx-Ciqy0D92.js";import"./Text-BKE4mpEc.js";import"./Form-U2PISRcB.js";import"./Button-C9U5DdED.js";import"./Hidden-CMfVl8d1.js";import"./useLabel-BX5mcItr.js";import"./useLabels-DcRK7D8e.js";import"./useButton-CAycgAqx.js";import"./SelectionIndicator-C09sddeF.js";import"./useField-B8UugQx6.js";import"./VisuallyHidden-8_Tg-jOG.js";import"./useControlledState-DZkg54SI.js";import"./Label-DA4He307.js";import"./Dialog-BRZImhOo.js";import"./RSPContexts-DkE08RbH.js";import"./OverlayArrow-DclCvrFE.js";import"./useResizeObserver-CxNKLpVu.js";import"./Collection-CUFtkeWs.js";import"./index-DHsR75bP.js";import"./Separator-XJaVReYL.js";import"./SelectionManager-oY1epqDt.js";import"./useEvent-DlQ_v0NJ.js";import"./scrollIntoView-Cdvuqxjj.js";import"./useDescription-BIxNiA0o.js";import"./ListKeyboardDelegate-B2SKkgzs.js";import"./PressResponder-D0pzj7fY.js";import"./useLocalizedStringFormatter-ZP-DQ3dI.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DOlZqxuA.js";import"./getScrollParent-DYArvUGl.js";import"./ModalOverlay-CpaKEMAf.js";import"./x-D9iWQ3e4.js";import"./createLucideIcon-BSPs0YiP.js";import"./useLocalizedStringFormatter-gOdJRbCD.js";import"./Heading-CZ2LHrqz.js";import"./Button-Bz3nOl8L.js";import"./Button.module-BB7N-cLd.js";import"./info-CDs8PH6H.js";import"./Popover-t_Swnzg_.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
