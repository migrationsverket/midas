import{j as e}from"./iframe-Cwy6RqRk.js";import{R as a,a as c}from"./Radio-DjHIle2U.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dig7OQRF.js";import"./clsx-B-dksMZM.js";import"./Group-CHuLe44F.js";import"./useFocusRing-D2oXtlEb.js";import"./index-B9B4w_Jv.js";import"./index-9xU_DKCC.js";import"./FieldError-Dtb5uhEX.js";import"./Text-DKQA35ph.js";import"./clsx-Ciqy0D92.js";import"./Text-D4_zOmYN.js";import"./Form-S0R74D1Y.js";import"./Button-iq1xipAk.js";import"./Hidden-DypQ3tfS.js";import"./useLabel-DrD6Az6p.js";import"./useLabels-Bed1240S.js";import"./useButton-CywKmqyz.js";import"./SelectionIndicator-JJXEUeBw.js";import"./useField-Br2LzLU3.js";import"./VisuallyHidden-4XVU0CqX.js";import"./useControlledState-DxWn3JGW.js";import"./Label-q4ibHs2w.js";import"./Dialog-BvgVWsEB.js";import"./RSPContexts-CiaJ3HLw.js";import"./OverlayArrow-4W9oHicC.js";import"./useResizeObserver-IoZ4K-EE.js";import"./Collection-9mv6b24_.js";import"./index-CzhHH6Yp.js";import"./Separator-CFTqLv6h.js";import"./SelectionManager-DvQEqNgq.js";import"./useEvent-BWNeDX6a.js";import"./scrollIntoView-BP2BJLKr.js";import"./useDescription-Bui8B5YG.js";import"./ListKeyboardDelegate-Cwm7Zl_q.js";import"./PressResponder-C3Ojjabh.js";import"./useLocalizedStringFormatter-DrQBb-pQ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CI6pm0GJ.js";import"./getScrollParent-CkLJGlzO.js";import"./ModalOverlay-DxvRPc2z.js";import"./x-BFQfEM6r.js";import"./createLucideIcon-D-5pXknp.js";import"./useLocalizedStringFormatter-BIN4Z2mf.js";import"./Heading-Ck5F1mkL.js";import"./Button-DQvr5Ms4.js";import"./Button.module-BB7N-cLd.js";import"./info-D3zEwNsr.js";import"./Popover-DRt4zzxY.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
