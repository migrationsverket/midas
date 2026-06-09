import{j as e}from"./iframe-BONLLpOF.js";import{R as a,a as c}from"./Radio-O2ANoWiF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C9VmisX4.js";import"./clsx-B-dksMZM.js";import"./Group-C1H1d_QY.js";import"./useFocusRing-DKupva6E.js";import"./index-CxKo4ITi.js";import"./index-AexxYhB1.js";import"./FieldError-D2jIpheU.js";import"./Text-CYi48kKA.js";import"./clsx-Ciqy0D92.js";import"./Text-Cs-XgrOp.js";import"./Form-ITn35OXk.js";import"./Button-2Duwp_Ic.js";import"./Hidden-DEirP3-u.js";import"./useLabel-Q48Rkvkt.js";import"./useLabels-Bh7NN-Ow.js";import"./useButton-hyzNfx3L.js";import"./SelectionIndicator-BstBVfA8.js";import"./useField-D7lpa4Ef.js";import"./VisuallyHidden-DGoVngfB.js";import"./useControlledState-f1OgfOOU.js";import"./Label-CJ8rhz5G.js";import"./Dialog-BZzLBxOh.js";import"./RSPContexts-DjgvGlJ6.js";import"./OverlayArrow-DSBWh69a.js";import"./useResizeObserver-4MMtw46c.js";import"./Collection-CyJQtxg_.js";import"./index-B047Z5Cb.js";import"./Separator-M5_WXlgZ.js";import"./SelectionManager-BFJf1PXq.js";import"./useEvent-BT5XuWp7.js";import"./scrollIntoView-BwrYAJjM.js";import"./useDescription-xh0FTpCi.js";import"./ListKeyboardDelegate-CIuiaVcB.js";import"./PressResponder-wZdbtsyo.js";import"./useLocalizedStringFormatter-Bxafu6ud.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CYswFIpa.js";import"./getScrollParent-BgLE-lAx.js";import"./ModalOverlay-D9rAW2Vi.js";import"./x-SVOUpjtq.js";import"./createLucideIcon-Dg8jUY-5.js";import"./useLocalizedStringFormatter-BxhbuX7R.js";import"./Heading-DVfrHjdW.js";import"./Button-BxdtuMNq.js";import"./Button.module-BB7N-cLd.js";import"./info-DA_9knQq.js";import"./Popover-CyEU9pzm.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
