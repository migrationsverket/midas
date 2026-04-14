import{j as e}from"./iframe-CU1z8ZWO.js";import{R as a,a as c}from"./Radio-CACpZrZO.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DVqGwfeZ.js";import"./clsx-B-dksMZM.js";import"./Group-BTX-dbq1.js";import"./useFocusRing-Bwwpl-Rq.js";import"./index-I_kl0fWJ.js";import"./index-C-Y4ipn9.js";import"./FieldError-I8SPxjsf.js";import"./Text-YKX6wkOC.js";import"./clsx-Ciqy0D92.js";import"./Text-ChUFIC2p.js";import"./Form-DBPJ3l-c.js";import"./Button-BdGWlDvU.js";import"./Hidden-N7huL-Y5.js";import"./useLabel-D4QSJjhu.js";import"./useLabels-DWo5evaA.js";import"./useButton-BI7SC1MX.js";import"./SelectionIndicator-BCZrxYeQ.js";import"./useField-BnC0fsgX.js";import"./VisuallyHidden-BrIjXOit.js";import"./useControlledState-CUj5ZMiu.js";import"./Label-C6iliZZn.js";import"./Dialog-DbKpoTYu.js";import"./RSPContexts-CauR0OIy.js";import"./OverlayArrow-Cy9G6xXf.js";import"./useResizeObserver-C2c0MTCb.js";import"./Collection-CzqXpYks.js";import"./index-DMFDmPIt.js";import"./Separator-Bzx9Vn_K.js";import"./SelectionManager-DWS42UG-.js";import"./useEvent-Bq6uqUQY.js";import"./scrollIntoView-BgxrN33L.js";import"./useDescription-CR7aQf8r.js";import"./ListKeyboardDelegate-CVJvgYEq.js";import"./PressResponder-Bu4rUZG4.js";import"./useLocalizedStringFormatter-CFmlUqTC.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6On8J8R.js";import"./getScrollParent-xYS8wAXV.js";import"./ModalOverlay-BVAF_K5P.js";import"./x-ChoXe0cH.js";import"./createLucideIcon-CaHhpyoi.js";import"./useLocalizedStringFormatter-Dvrj7zKe.js";import"./Heading-BR9AhlKG.js";import"./Button-DkJeYqVL.js";import"./Button.module-BB7N-cLd.js";import"./info-DCUGTQL1.js";import"./Popover-D0jDir5i.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
