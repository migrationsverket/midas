import{j as e}from"./iframe-ChiJKfMX.js";import{R as a,a as c}from"./Radio-DZtAvWD9.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dm4E4mwc.js";import"./clsx-B-dksMZM.js";import"./Group-DWzWI2Bt.js";import"./useFocusRing-C3m7c-xg.js";import"./index-CKWxshzR.js";import"./index-C6BXlkmx.js";import"./FieldError-Bf_I7BGY.js";import"./Text-D-VvP9KN.js";import"./clsx-Ciqy0D92.js";import"./Text-FMeRFHDx.js";import"./Form-tG479UME.js";import"./Button-DW_Sqb80.js";import"./Hidden-BaIjPHil.js";import"./useLabel-DFY6Hgn5.js";import"./useLabels-DqUEOu1i.js";import"./useButton-B2C85R1d.js";import"./SelectionIndicator-DVCRcCV1.js";import"./useField-DdqVKbLW.js";import"./VisuallyHidden-D09TEuo-.js";import"./useControlledState-BXkqcj0T.js";import"./Label-1UUaiD6t.js";import"./Dialog-B-gvFUUK.js";import"./RSPContexts-CERUV9Us.js";import"./OverlayArrow-YjpnC4j2.js";import"./useResizeObserver-DD7UdLS5.js";import"./Collection-1WP9hbrj.js";import"./index-BxDRY-FX.js";import"./Separator-tVN0AySa.js";import"./SelectionManager-NvZGQuxv.js";import"./useEvent-BgfjEJOG.js";import"./scrollIntoView-B923z5fn.js";import"./useDescription-BVzp0w86.js";import"./ListKeyboardDelegate-zEqYiAZw.js";import"./PressResponder-0BHZw3rY.js";import"./useLocalizedStringFormatter-DxP6DEYd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BTKUMYUw.js";import"./getScrollParent-D9F-6EpN.js";import"./ModalOverlay-Cz_dHr6C.js";import"./x-Ca-xMBZU.js";import"./createLucideIcon-CGmKAaMX.js";import"./useLocalizedStringFormatter-Dpd2BHxH.js";import"./Heading-ukudU_SQ.js";import"./Button-CL16j7Sc.js";import"./Button.module-BB7N-cLd.js";import"./info-CXwve_8j.js";import"./Popover-Dc3NHZuK.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
