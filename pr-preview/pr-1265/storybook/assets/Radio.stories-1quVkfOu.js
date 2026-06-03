import{j as e}from"./iframe-B-lTFvoy.js";import{R as a,a as c}from"./Radio-XZPyb3d6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BvE7c9kg.js";import"./clsx-B-dksMZM.js";import"./Group-X44LMo-J.js";import"./useFocusRing-1mXKXGvg.js";import"./index-DmPhFD94.js";import"./index-DAnTlNFf.js";import"./FieldError-BUQWfKIf.js";import"./Text-BcmCG7pr.js";import"./clsx-Ciqy0D92.js";import"./Text-C1H4pvzD.js";import"./Form-BkPykOZH.js";import"./Button-DxSNXM4z.js";import"./Hidden-DgGj9s0X.js";import"./useLabel-D3_Mwj4N.js";import"./useLabels-DPXFFgdJ.js";import"./useButton-BpEh7YD9.js";import"./SelectionIndicator-D3wtYqkk.js";import"./useField-CZNhYKxr.js";import"./VisuallyHidden-BBaBjIdQ.js";import"./useControlledState-CblkDfUl.js";import"./Label-VFVkv4nl.js";import"./Dialog-peOVGIQh.js";import"./RSPContexts-D3IvaYAD.js";import"./OverlayArrow--7LO6zbc.js";import"./useResizeObserver-BsnyFbXq.js";import"./Collection-DN7kv7Ki.js";import"./index-D871kQeG.js";import"./Separator-B2k8Seix.js";import"./SelectionManager-CyiCJxHi.js";import"./useEvent-CDFu6uQE.js";import"./scrollIntoView-YOf-cX1Z.js";import"./useDescription-C3Cr_Jxc.js";import"./ListKeyboardDelegate-BUJNuGNB.js";import"./PressResponder-Bohcd8Do.js";import"./useLocalizedStringFormatter-DFJodF-E.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-VgwKKx1S.js";import"./getScrollParent-C7d2R0II.js";import"./ModalOverlay-dZTLCVIM.js";import"./x-CB9WHZye.js";import"./createLucideIcon-DTdT2pbF.js";import"./useLocalizedStringFormatter-Cmv69HRb.js";import"./Heading-B0wvQHWV.js";import"./Button-aUjqyot5.js";import"./Button.module-BB7N-cLd.js";import"./info-D-sGA9gx.js";import"./Popover-B2RgYLbH.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
