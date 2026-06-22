import{j as e}from"./iframe-Cb8Pppl7.js";import{R as a,a as c}from"./Radio-CnAvtv2W.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dj888C4V.js";import"./clsx-B-dksMZM.js";import"./Group-NyRvfXLY.js";import"./useFocusRing-hqoRcLtB.js";import"./index-pijaOdDz.js";import"./index-CskuVvb4.js";import"./FieldError-D0-fOVgu.js";import"./Text-D2Ko1ZUZ.js";import"./clsx-Ciqy0D92.js";import"./Text-C5__ZA60.js";import"./Form-CFGWDFPn.js";import"./Button-C8pMS1J_.js";import"./Hidden-COGS7kep.js";import"./useLabel-LJmuk9-y.js";import"./useLabels-C5l5JCC7.js";import"./useButton-SLXd8nlE.js";import"./SelectionIndicator-DDopmB2O.js";import"./useField-BqzVMgOW.js";import"./VisuallyHidden-DtKq5Gdo.js";import"./useControlledState-ixH4fEDK.js";import"./Label-BiZqGHJK.js";import"./Dialog-DSEhXHOx.js";import"./RSPContexts-DHg3Hsl6.js";import"./OverlayArrow-2ni0My97.js";import"./useResizeObserver-eW0Ome2f.js";import"./Collection-Cj61-OWh.js";import"./index-BeGPmrD_.js";import"./Separator-4_d9jsWj.js";import"./SelectionManager-D6ID8zOu.js";import"./useEvent-BCOghSZ0.js";import"./scrollIntoView-Dz6AtUUb.js";import"./useDescription-Bk-WLmUt.js";import"./ListKeyboardDelegate-CpEPtBzp.js";import"./PressResponder-BchWjLfC.js";import"./useLocalizedStringFormatter-B0S083G5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-f55oaWaw.js";import"./getScrollParent-Dcxt-3Ql.js";import"./ModalOverlay-DFYUls3I.js";import"./x-BvWkyjfg.js";import"./createLucideIcon-D7UMDINh.js";import"./useLocalizedStringFormatter-BKjuu9LT.js";import"./Heading-Ds7jCsCM.js";import"./Button-D4LxrXr0.js";import"./Button.module-BB7N-cLd.js";import"./info-BVhMhOhK.js";import"./Popover-CcsI4h7o.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
