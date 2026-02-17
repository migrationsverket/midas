import{j as e}from"./iframe-CGGmCHdK.js";import{R as a,a as c}from"./Radio-DC_hS07o.js";import"./preload-helper-PPVm8Dsz.js";import"./Group-ClVJ7xHX.js";import"./utils-D-bfWJQo.js";import"./clsx-B-dksMZM.js";import"./useFocusRing-BpvWxL7t.js";import"./index-DCMIOYtC.js";import"./index-xSCn676G.js";import"./FieldError-DeWUCxqP.js";import"./Text-DLgi0cnJ.js";import"./clsx-Ciqy0D92.js";import"./Text-C7tJFFeN.js";import"./Form-Cp7q5sqz.js";import"./useFormValidation-DwbgJzYa.js";import"./Button-CSNXBxJJ.js";import"./Hidden-yGKkmiYH.js";import"./number-DfkVkf0F.js";import"./useLabels-DYBD-9_u.js";import"./useButton-BhWcO4Um.js";import"./SelectionIndicator-BFYE2p2o.js";import"./useField-Czho_fib.js";import"./VisuallyHidden-3IaiNxxm.js";import"./useControlledState-x5f61b7i.js";import"./Label-CNsW1mhl.js";import"./Dialog-DuamB8dP.js";import"./RSPContexts-B3O5q3W4.js";import"./OverlayArrow-BUXPKnE5.js";import"./useResizeObserver-BXnAWn-N.js";import"./Collection-BGFQqU5g.js";import"./index-XTyyo0jd.js";import"./Separator-CkDmqnMN.js";import"./SelectionManager-CyjXmeST.js";import"./useEvent-BELLYkgM.js";import"./scrollIntoView-CtWAMHuk.js";import"./useDescription-D5Oxry_M.js";import"./ListKeyboardDelegate-DXI6yf3X.js";import"./PressResponder-DwoaXRnV.js";import"./useLocalizedStringFormatter-BPgmIhkN.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-hJrK8dEa.js";import"./getScrollParent-Cpn7MDkE.js";import"./Modal-CunRVayh.js";import"./Button-q0sQUu-L.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-w_7AiL4k.js";import"./createLucideIcon-D7mqoZIq.js";import"./x-CGpjQ8Iu.js";import"./Heading-PKm7yygK.js";import"./info-CeCeZudF.js";import"./Popover-B_Xv86pN.js";const cr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ur=["Primary","Disabled","ReadOnly","OneItemDisabled","Invalid","Required","CustomValidation","Horizontal"];export{d as CustomValidation,o as Disabled,m as Horizontal,p as Invalid,n as OneItemDisabled,s as Primary,i as ReadOnly,l as Required,ur as __namedExportsOrder,cr as default};
