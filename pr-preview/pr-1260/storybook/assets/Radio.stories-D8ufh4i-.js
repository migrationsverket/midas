import{j as e}from"./iframe-CU6IyPdi.js";import{R as a,a as c}from"./Radio-Uja-90XY.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C3EuF5tN.js";import"./clsx-B-dksMZM.js";import"./Group-fabNRkLN.js";import"./useFocusRing-CgN0-97j.js";import"./index-CWwAu-UJ.js";import"./index-EaiVYzVz.js";import"./FieldError-CwoMpyv7.js";import"./Text-DjY_AY4u.js";import"./clsx-Ciqy0D92.js";import"./Text-DiW7fUXy.js";import"./Form-D7KVHFov.js";import"./Button-Dn__6SVC.js";import"./Hidden-BMh1hBMj.js";import"./useLabel-Bt0836mW.js";import"./useLabels-Di0VtbU1.js";import"./useButton-YhY6a0OA.js";import"./SelectionIndicator-Aj5ctdzm.js";import"./useField-C6IBffWw.js";import"./VisuallyHidden-Bl6sgZVR.js";import"./useControlledState-DnKqpd9E.js";import"./Label-CroMJy-b.js";import"./Dialog-CW6SQVMt.js";import"./RSPContexts-C8L0Tday.js";import"./OverlayArrow-B5JIWtP2.js";import"./useResizeObserver-Cp6oxV6U.js";import"./Collection-DuVcoonJ.js";import"./index-BLTV2BVr.js";import"./Separator-MT-0gEh2.js";import"./SelectionManager-mV4APRA7.js";import"./useEvent-CbNpr6qP.js";import"./scrollIntoView-CBeKWyA3.js";import"./useDescription-C14Mmfay.js";import"./ListKeyboardDelegate-IB4zQhb7.js";import"./PressResponder-Cv1zl0GD.js";import"./useLocalizedStringFormatter-CCIw-1cs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-wYJS1t3d.js";import"./getScrollParent-DPGj-_74.js";import"./ModalOverlay-BZ01U_6q.js";import"./x-DvEBYFLx.js";import"./createLucideIcon-BhPQSJHM.js";import"./useLocalizedStringFormatter-D1ier4wV.js";import"./Heading-Dnd9KkCF.js";import"./Button-DzjFo675.js";import"./Button.module-BB7N-cLd.js";import"./info-DdkUQrfv.js";import"./Popover-D5KJoh1F.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
