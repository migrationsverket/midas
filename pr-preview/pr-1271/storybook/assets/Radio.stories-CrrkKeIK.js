import{j as e}from"./iframe-GMyNOJOq.js";import{R as a,a as c}from"./Radio-DmUFs4-A.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BXbplvrq.js";import"./clsx-B-dksMZM.js";import"./Group-C5kGEOYT.js";import"./useFocusRing-CY-YEC5f.js";import"./index-DSCO44yP.js";import"./index-CiecEaAM.js";import"./FieldError-C81FQqBO.js";import"./Text-DwP9uMRl.js";import"./clsx-Ciqy0D92.js";import"./Text-DPFOPtH6.js";import"./Form-Bt1ZVAUN.js";import"./Button-BmFFiwR6.js";import"./Hidden-zTZMnLTK.js";import"./useLabel-CqPGMRzp.js";import"./useLabels-BBipD7g9.js";import"./useButton-HZCszyxF.js";import"./SelectionIndicator-C2IpaVjB.js";import"./useField-CA_QjZbA.js";import"./VisuallyHidden-DOm6YV-1.js";import"./useControlledState-yUAT-leZ.js";import"./Label-DkgZd0Gw.js";import"./Dialog-K1psAsFf.js";import"./RSPContexts-ALCmHzcd.js";import"./OverlayArrow-BKaPkWbW.js";import"./useResizeObserver-zWdOXMvT.js";import"./Collection-DVkjdMjT.js";import"./index-CJyCjhTy.js";import"./Separator-Bf8GRhF7.js";import"./SelectionManager-D943sEC2.js";import"./useEvent-CBo9AmGw.js";import"./scrollIntoView-CMEx-M2c.js";import"./useDescription-CTuGe5IW.js";import"./ListKeyboardDelegate-BFbJBipB.js";import"./PressResponder-BvdOkDwv.js";import"./useLocalizedStringFormatter-CslKPgSR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CjVJX3Fl.js";import"./getScrollParent-9kULsret.js";import"./ModalOverlay-BStbUUfg.js";import"./x-CqyquoJ7.js";import"./createLucideIcon-BTNAcQe3.js";import"./useLocalizedStringFormatter-DN9P_vz1.js";import"./Heading-Dvuki4_N.js";import"./Button-DiEAaUmX.js";import"./Button.module-BB7N-cLd.js";import"./info-BLF_5Qzs.js";import"./Popover-C0NXiew-.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
