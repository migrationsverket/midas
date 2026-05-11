import{j as e}from"./iframe-CWKpWNkk.js";import{R as a,a as c}from"./Radio-myhIcyak.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DZaHz_Vy.js";import"./clsx-B-dksMZM.js";import"./Group-C9US1aCF.js";import"./useFocusRing-CpL5jV2W.js";import"./index-B6G90j2w.js";import"./index-ky1MVl1j.js";import"./FieldError-CQ-FvnYz.js";import"./Text-C7LaV_aB.js";import"./clsx-Ciqy0D92.js";import"./Text-Ds_oVnWP.js";import"./Form-ClSFU7sX.js";import"./Button-apqjWUoz.js";import"./Hidden-bt019v0w.js";import"./useLabel-CVerH1Jx.js";import"./useLabels-CpFnq5uL.js";import"./useButton-DMvYi67o.js";import"./SelectionIndicator-DXuHsU9n.js";import"./useField-CPp_IGdL.js";import"./VisuallyHidden-CUqCo7Kt.js";import"./useControlledState-DvoS3sKo.js";import"./Label-DOnkAzhc.js";import"./Dialog-oKb8weP7.js";import"./RSPContexts-BCpmha9C.js";import"./OverlayArrow-BQEkmKGr.js";import"./useResizeObserver-DF1U3k9v.js";import"./Collection-B8p0MI6F.js";import"./index-DpCjz9aE.js";import"./Separator-B3w0uZHa.js";import"./SelectionManager-BLRpOlsc.js";import"./useEvent-Bvf1pRIU.js";import"./scrollIntoView-EiYcHJPI.js";import"./useDescription-DoPJm1n-.js";import"./ListKeyboardDelegate-EIc5NKm6.js";import"./PressResponder-D9mL1KKw.js";import"./useLocalizedStringFormatter-CzLna1TA.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CuvQWEod.js";import"./getScrollParent-8ZOlHmZ1.js";import"./ModalOverlay-DEjIIPXs.js";import"./x-BvIy6Ou7.js";import"./createLucideIcon-DmuvpfBU.js";import"./useLocalizedStringFormatter-JVYCQbQZ.js";import"./Heading-D-lMrc2Q.js";import"./Button-WdsjujPh.js";import"./Button.module-BB7N-cLd.js";import"./info-Cy_crO9Y.js";import"./Popover-B5gHq_qy.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
