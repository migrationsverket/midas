import{j as e}from"./iframe-DewzuY2Y.js";import{R as a,a as c}from"./Radio-C8G6d9kO.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-DE7woVmW.js";import"./utils-B9eCRML0.js";import"./useObjectRef-D02ig_Er.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-Bu9BKNcc.js";import"./useFocusable-D4F7j4yX.js";import"./index-CGxbGCj-.js";import"./index-YF-MvE2f.js";import"./FieldError-BAoeLCIl.js";import"./Text-CF2XopxT.js";import"./clsx-Ciqy0D92.js";import"./Text-Bab9BnDj.js";import"./Form-CAi5wZg8.js";import"./useFormValidation-lSb8KKAi.js";import"./Button-B263f3iS.js";import"./Hidden-DQi6D_EL.js";import"./number-DfkVkf0F.js";import"./useLabels-DqUr0jsw.js";import"./useButton-fhI4OoXn.js";import"./SelectionIndicator-Cf1hCYbC.js";import"./useField-DsMSm3hR.js";import"./VisuallyHidden-BcUmonei.js";import"./useControlledState-DKrm3iPF.js";import"./Label-w_0hTJsi.js";import"./Dialog-DZPrV3vM.js";import"./RSPContexts-D0MwBZX-.js";import"./OverlayArrow-CrdlvdTX.js";import"./useResizeObserver-DguKAatW.js";import"./Collection-DfNZS0Iw.js";import"./CollectionBuilder-B-bwIOQU.js";import"./index-DtnZ5gia.js";import"./Separator-C_C3xmzB.js";import"./SelectionManager-C13R8ogi.js";import"./useEvent-Co8FlwDh.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-DZHnrBI1.js";import"./ListKeyboardDelegate-CsRH7wZv.js";import"./PressResponder-D7jcaL-x.js";import"./useLocalizedStringFormatter-7896F-u-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Db_m75M3.js";import"./getScrollParent-Cpn7MDkE.js";import"./Button-DrlbWmQB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BU0D5dPi.js";import"./createLucideIcon-BpgdMRa6.js";import"./x-Dt71Rz9m.js";import"./Heading-CBTsyhRB.js";import"./info-BWpzFBYc.js";import"./Popover-B3LGZ1cV.js";const br={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],s=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],t={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:s,isDisabled:!0}},i={args:{children:s,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:s,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:s,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={args:{...t.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
