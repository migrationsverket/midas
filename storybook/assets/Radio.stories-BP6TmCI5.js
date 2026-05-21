import{j as e}from"./iframe-lVehiq6l.js";import{R as a,a as c}from"./Radio-C08skgyT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-mNJ9Z0MW.js";import"./clsx-B-dksMZM.js";import"./Group-Bj39cUw-.js";import"./useFocusRing--_5FTCU2.js";import"./index-BYr4OlSN.js";import"./index-IBTB5hiH.js";import"./FieldError-BiJGHbcs.js";import"./Text-BTYS5fVW.js";import"./clsx-Ciqy0D92.js";import"./Text-CB3b7It2.js";import"./Form-BVTVpFyF.js";import"./Button-CYmCkrOz.js";import"./Hidden-CQ6hLYuq.js";import"./useLabel-BJ5LbRsC.js";import"./useLabels-BVtbuBE4.js";import"./useButton-CaovbWyL.js";import"./SelectionIndicator-ClMAv9ja.js";import"./useField-C95X0ruH.js";import"./VisuallyHidden-C5EMcuEJ.js";import"./useControlledState-BySGjGY5.js";import"./Label-B7ylLwdY.js";import"./Dialog-BzFPhWeI.js";import"./RSPContexts-DMhdXzo5.js";import"./OverlayArrow-sqCSEqCM.js";import"./useResizeObserver-AyxQt1_m.js";import"./Collection-Ctmg3yud.js";import"./index-CKxanYeA.js";import"./Separator-woD2Fun4.js";import"./SelectionManager-XPna52cV.js";import"./useEvent-E09xkLUE.js";import"./scrollIntoView-_wY1R8QT.js";import"./useDescription-CymLEEwh.js";import"./ListKeyboardDelegate-BDeGGVAe.js";import"./PressResponder-B1MDza39.js";import"./useLocalizedStringFormatter-Bj44o9Xo.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CkHmclv3.js";import"./getScrollParent-DZNwOYHo.js";import"./ModalOverlay-BMUDbYqE.js";import"./x-CCWQlqjq.js";import"./createLucideIcon-D1OyaQLn.js";import"./useLocalizedStringFormatter-qtrOBw-Q.js";import"./Heading-DZYBL7Gl.js";import"./Button-Dp2V6GGG.js";import"./Button.module-BB7N-cLd.js";import"./info-DZTrspJ7.js";import"./Popover-DmFWcQiA.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
