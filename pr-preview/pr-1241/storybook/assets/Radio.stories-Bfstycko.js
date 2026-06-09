import{j as e}from"./iframe-CaeJqQ8f.js";import{R as a,a as c}from"./Radio-DroyaZVZ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BteVPZy0.js";import"./clsx-B-dksMZM.js";import"./Group-CTKcef7T.js";import"./useFocusRing-B-IWjK53.js";import"./index-DqQtAxv6.js";import"./index-CeMSaifd.js";import"./FieldError-BMeh3Mm5.js";import"./Text-kWHKD_uI.js";import"./clsx-Ciqy0D92.js";import"./Text-23GvJn9a.js";import"./Form-CA7TkeoX.js";import"./Button-CmYrsmdS.js";import"./Hidden-DAb19HuU.js";import"./useLabel-DiiZxaHU.js";import"./useLabels-CvBePrBc.js";import"./useButton-BT2OPEq9.js";import"./SelectionIndicator-DzgiSh9y.js";import"./useField-DDJhIXmw.js";import"./VisuallyHidden-CDogNmlo.js";import"./useControlledState-DVDrYLuR.js";import"./Label-BtXhXhDp.js";import"./Dialog-oYWFwQZ3.js";import"./RSPContexts-C23pPjhB.js";import"./OverlayArrow-BaxcOtUd.js";import"./useResizeObserver-CZNaWLID.js";import"./Collection-Dcy9D0L3.js";import"./index-BBE2CXqT.js";import"./Separator-CuJpgSRs.js";import"./SelectionManager-bLePU0IW.js";import"./useEvent-DrhgR5ub.js";import"./scrollIntoView-Dv9TGF9T.js";import"./useDescription-BGB3EMY_.js";import"./ListKeyboardDelegate-GnYqBagy.js";import"./PressResponder-BmizWJnN.js";import"./useLocalizedStringFormatter-B6KzQfdD.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DNhOQaSp.js";import"./getScrollParent-B7OSUguh.js";import"./ModalOverlay-BCN0q4zL.js";import"./x-BNT6PRWH.js";import"./createLucideIcon-Bkh4JM6J.js";import"./useLocalizedStringFormatter-CsL4vBQb.js";import"./Heading-DhoR6r2Q.js";import"./Button-rTp5uTED.js";import"./Button.module-BB7N-cLd.js";import"./info-stHTiLL8.js";import"./Popover-_qRHPjhH.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
