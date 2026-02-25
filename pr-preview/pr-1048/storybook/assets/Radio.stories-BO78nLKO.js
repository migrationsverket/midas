import{j as e}from"./iframe-Bces5ReF.js";import{R as a,a as c}from"./Radio-BVf2Aeum.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-Bwq3o5kk.js";import"./utils-KBwZHkAa.js";import"./useObjectRef-Cb_4IuYU.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BbIVxAS-.js";import"./useFocusable-CCLwmwwj.js";import"./index-C3ONQ0hZ.js";import"./index-mmvsT4Yz.js";import"./FieldError-CoA192lt.js";import"./Text-BbgSNpRI.js";import"./clsx-Ciqy0D92.js";import"./Text-S43pSr6l.js";import"./Form-DgaYtgkc.js";import"./useFormValidation-DKvuYSK2.js";import"./Button-sx3D740K.js";import"./Hidden-HEj2_VP4.js";import"./number-DfkVkf0F.js";import"./useLabels-it0H97ln.js";import"./useButton-CFUJeSeD.js";import"./SelectionIndicator-R-3rkI9A.js";import"./useField-BnZ2w5LO.js";import"./VisuallyHidden-CplwDL_w.js";import"./useControlledState-DzHlTDkP.js";import"./Label-ZkIPGYUs.js";import"./Dialog-CEJryXss.js";import"./RSPContexts-KQSALUVI.js";import"./OverlayArrow-CJaqSD8r.js";import"./useResizeObserver-C8rFwvOL.js";import"./Collection-DTPpeXjN.js";import"./CollectionBuilder-DYUOvLcK.js";import"./index-eELsyXIA.js";import"./Separator-CZsB5Jtz.js";import"./SelectionManager-DnJZ1f0u.js";import"./useEvent-r8dTAAd3.js";import"./scrollIntoView-rsEwujUN.js";import"./useDescription-BDbgTMgy.js";import"./ListKeyboardDelegate-CZk_8FT1.js";import"./PressResponder-CzDZ9nEt.js";import"./useLocalizedStringFormatter-DvTA5UTi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BzzM05P-.js";import"./getScrollParent-CNLff4rP.js";import"./Button-CYRhppib.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Bezv0VbS.js";import"./createLucideIcon-B7hgpfhf.js";import"./x-DUS_Kj0p.js";import"./Heading-f7FHASBd.js";import"./info-D1apA-sK.js";import"./Popover-Cp2wtLc3.js";const br={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],s=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:s,isDisabled:!0}},i={args:{children:s,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
