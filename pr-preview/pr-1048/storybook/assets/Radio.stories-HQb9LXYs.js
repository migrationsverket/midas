import{j as e}from"./iframe-BTWMpxaw.js";import{R as a,a as c}from"./Radio-z9NZZBNF.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-C-m-Yvp5.js";import"./utils-C3lx9DX-.js";import"./useObjectRef-CQ0wbjO8.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-D_JbvpzL.js";import"./useFocusable-DroJBjVA.js";import"./index-BcRiH35A.js";import"./index-BRI9nXbv.js";import"./FieldError-CapQEyCl.js";import"./Text-AwkOgpRf.js";import"./clsx-Ciqy0D92.js";import"./Text-XH9vDvn5.js";import"./Form-D7825GY6.js";import"./useFormValidation-5p1jo9Ru.js";import"./Button-CAgd8sZK.js";import"./Hidden-BQDZ_Wq1.js";import"./number-DfkVkf0F.js";import"./useLabels-Qrrl1VgB.js";import"./useButton-BrhFQfMI.js";import"./SelectionIndicator-Db6mgl97.js";import"./useField-WQlJsGjc.js";import"./VisuallyHidden-BZ8ApsH8.js";import"./useControlledState-CRbmL-GT.js";import"./Label-Bgsnsyln.js";import"./Dialog-Chll4O9z.js";import"./RSPContexts-CgrWNIj5.js";import"./OverlayArrow-D84MR2MX.js";import"./useResizeObserver-CffUVSIR.js";import"./Collection-B_b2ppV7.js";import"./CollectionBuilder-BLs7TzFW.js";import"./index-BQuq6Vq-.js";import"./Separator-Oy-LEqKf.js";import"./SelectionManager-jBp3qQ-Y.js";import"./useEvent-BLDn_e3Q.js";import"./scrollIntoView-Q7175gbP.js";import"./useDescription-DVX_PCr4.js";import"./ListKeyboardDelegate-COwUALGh.js";import"./PressResponder-CTGZQkus.js";import"./useLocalizedStringFormatter-CCWRThSu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DlxJxUyB.js";import"./getScrollParent-DRdm8xm-.js";import"./Button-B7QanPQQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BCu2gt1L.js";import"./createLucideIcon-D3byJH39.js";import"./x-CZObjwQc.js";import"./Heading-CyoT9rFN.js";import"./info-C-coDdpf.js";import"./Popover-DDU0MFJR.js";const br={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],s=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:s,isDisabled:!0}},i={args:{children:s,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
