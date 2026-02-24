import{j as e}from"./iframe-AKYLQdCk.js";import{R as a,a as c}from"./Radio-DInWV9-B.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-DAno6NEz.js";import"./utils-CwZ2LlQC.js";import"./useObjectRef-C1ZIljv5.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-DeUGGThd.js";import"./useFocusable-CTBL5lAM.js";import"./index-Bv5J06q2.js";import"./index-DH60KLGl.js";import"./FieldError-1z-h802J.js";import"./Text-Bn-0i142.js";import"./clsx-Ciqy0D92.js";import"./Text-BwqwIWKs.js";import"./Form-BMSgrWJv.js";import"./useFormValidation-Co9GPZZz.js";import"./Button-DFNriVHD.js";import"./Hidden-BaKtfQaU.js";import"./number-DfkVkf0F.js";import"./useLabels-DwGxuFNn.js";import"./useButton-I-1qHytb.js";import"./SelectionIndicator-DO0fqmNQ.js";import"./useField-z_fBkLit.js";import"./VisuallyHidden-BjOFadh9.js";import"./useControlledState-CbVlXO0V.js";import"./Label-BtlAKR85.js";import"./Dialog-DnF6LW7B.js";import"./RSPContexts-DNK6gf8O.js";import"./OverlayArrow-UNbNlQ7l.js";import"./useResizeObserver-BtktBhU6.js";import"./Collection-3ml14O5b.js";import"./CollectionBuilder-looNesjp.js";import"./index-Blg7ZGdj.js";import"./Separator-BiHOUpOh.js";import"./SelectionManager-BucojQKK.js";import"./useEvent-C0_2xWEm.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-CBo5mlE7.js";import"./ListKeyboardDelegate-CiGgAhDI.js";import"./PressResponder-CgZvu0Io.js";import"./useLocalizedStringFormatter-BLFXCP_p.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-3Ti8HS8f.js";import"./getScrollParent-Cpn7MDkE.js";import"./Button-DI1yGBch.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CAqHm93j.js";import"./createLucideIcon-DaHUv1OG.js";import"./x-D3UjfguG.js";import"./Heading-D6naq-Us.js";import"./info-BvEcYorg.js";import"./Popover-NjCRRiyO.js";const br={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],s=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:s,isDisabled:!0}},i={args:{children:s,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Frukt',
    description: 'Välj en frukt',
    children: fruits.map(fruit => <Radio key={fruit} value={fruit} id={fruit.toLowerCase()} className='test-radio-class'>
        {fruit}
      </Radio>),
    className: 'test-class'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const gr=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{m as CustomValidation,o as Disabled,d as Horizontal,p as Invalid,n as OneItemDisabled,t as Primary,i as ReadOnly,l as Required,gr as __namedExportsOrder,br as default};
