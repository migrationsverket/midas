import{j as e}from"./iframe-XBMlEgFB.js";import{R as a,a as c}from"./Radio-CD-MOjK_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Cc5G8ViG.js";import"./clsx-B-dksMZM.js";import"./Group-DqshiR4N.js";import"./useFocusRing-DuQiYGUN.js";import"./index-fc9UsKt1.js";import"./index-DcS3vXtE.js";import"./FieldError-qc1sXTm5.js";import"./Text-86sbONsT.js";import"./clsx-Ciqy0D92.js";import"./Text-BZ6aPD5a.js";import"./Form-BpH7O1vT.js";import"./Button-BzKQzIb5.js";import"./Hidden-DmPMVnI9.js";import"./useLabel-CDvp7ZEq.js";import"./useLabels-BRX5yLgs.js";import"./useButton-Cl00IDBI.js";import"./SelectionIndicator-DiIFfW39.js";import"./useField-BMLfgxz1.js";import"./VisuallyHidden-C4noZ6lE.js";import"./useControlledState-DEjZXUVu.js";import"./Label-BDFL5AT1.js";import"./Dialog-Ddzey_y7.js";import"./RSPContexts-CjMPhbqA.js";import"./OverlayArrow-DBj52cG9.js";import"./useResizeObserver-Du6-Az5U.js";import"./Collection-DcqgxSB4.js";import"./index-BPoFj_vg.js";import"./Separator-DeV10lVq.js";import"./SelectionManager-DqOOi4Gi.js";import"./useEvent-BKpTOEzW.js";import"./scrollIntoView-BbcvzxoF.js";import"./useDescription-BL_Y3ATo.js";import"./ListKeyboardDelegate-oxEhV0y3.js";import"./PressResponder-BNRNLcJD.js";import"./useLocalizedStringFormatter-Bu_qbSQ2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CuVT7vSv.js";import"./getScrollParent-D5DjdUZx.js";import"./Modal-qm884p6D.js";import"./x-BNnKlOhJ.js";import"./createLucideIcon-CPar-zam.js";import"./useLocalizedStringFormatter-B3T1U-R5.js";import"./Heading-ekHWI8iy.js";import"./Button-CkmlK4go.js";import"./Button.module-BB7N-cLd.js";import"./info-Do_gKMJl.js";import"./Popover-DL6fDMmy.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
