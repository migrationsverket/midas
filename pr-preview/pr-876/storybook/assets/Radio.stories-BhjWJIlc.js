import{j as e}from"./iframe-XCmPjT_D.js";import{R as a,a as c}from"./Radio-DmNWh8PA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-UE4RAygH.js";import"./clsx-B-dksMZM.js";import"./Group-C1BkV6KF.js";import"./useFocusRing-Ow3seqvj.js";import"./index-BelrfpRG.js";import"./index-BOZEGAbU.js";import"./FieldError-Ddp3ZKWY.js";import"./Text-BuJILbtP.js";import"./clsx-Ciqy0D92.js";import"./Text-RTx-QT4L.js";import"./Form-ClIjAo6w.js";import"./Button-CNsl3901.js";import"./Hidden-YeCUxupi.js";import"./useLabel-DhxNDKAr.js";import"./useLabels-BQnVbVBu.js";import"./useButton-DKwW11Mp.js";import"./SelectionIndicator-DJNyyuP1.js";import"./useField-a2ZWKilV.js";import"./VisuallyHidden-DTL2Sb6w.js";import"./useControlledState-CJRuvBEJ.js";import"./Label-D93AZRaQ.js";import"./Dialog-B1tyGkHL.js";import"./RSPContexts-BqTpYPqw.js";import"./OverlayArrow-BFvM54Jt.js";import"./useResizeObserver-vSLgG7Oa.js";import"./Collection-DDyfzr5r.js";import"./index-yftg3tvi.js";import"./Separator-lXYIHM10.js";import"./SelectionManager-bkciLoD-.js";import"./useEvent-CkgGcE1e.js";import"./scrollIntoView-Dci8aQFD.js";import"./useDescription-DSdmSZs4.js";import"./ListKeyboardDelegate-C8lf82aC.js";import"./PressResponder-B5-Ptcqo.js";import"./useLocalizedStringFormatter-CELL1ivr.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BYd3A0RE.js";import"./getScrollParent-BZMbo4m2.js";import"./ModalOverlay-Ci7eJJOn.js";import"./x-DXC51em7.js";import"./createLucideIcon-dj1Mp7UM.js";import"./useLocalizedStringFormatter-BRU34m0r.js";import"./Heading-827tCZrs.js";import"./Button-BoCs2oV6.js";import"./Button.module-BB7N-cLd.js";import"./info-CIkts6Hb.js";import"./Popover-CJ-Xf8wX.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
