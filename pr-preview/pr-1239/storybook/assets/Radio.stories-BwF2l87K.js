import{j as e}from"./iframe-DYtTLEOY.js";import{R as a,a as c}from"./Radio-D2_JKAtD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BeWuc0kB.js";import"./clsx-B-dksMZM.js";import"./Group-DLwVJwa_.js";import"./useFocusRing-_bdLe-pi.js";import"./index-CHX39vrh.js";import"./index-DvTVW4UW.js";import"./FieldError-f6hy05Az.js";import"./Text-B_xqvba2.js";import"./clsx-Ciqy0D92.js";import"./Text-DW1CAqib.js";import"./Form-yvOI9qEP.js";import"./Button-DsqyYrvI.js";import"./Hidden-DDsbX8hq.js";import"./useLabel-BnXeWK3Y.js";import"./useLabels-CT9q7uAF.js";import"./useButton-Ci3u1E4N.js";import"./SelectionIndicator-DGG2_PbU.js";import"./useField-CBfES0O1.js";import"./VisuallyHidden-bhNQHOWS.js";import"./useControlledState-rzHF_sGy.js";import"./Label-rJo2nq6a.js";import"./Dialog-K_vnEtBp.js";import"./RSPContexts-DkdKWqA8.js";import"./OverlayArrow-EPB7G_HW.js";import"./useResizeObserver-KQT3wmxM.js";import"./Collection-CvrhsRx1.js";import"./index--9prz91y.js";import"./Separator-DoMWmt9-.js";import"./SelectionManager-DxV3yXAd.js";import"./useEvent-B1ZGd9Sm.js";import"./scrollIntoView-C6xwA0wp.js";import"./useDescription-Cyk80vV4.js";import"./ListKeyboardDelegate-7IzE9sWp.js";import"./PressResponder-BbbOe-DF.js";import"./useLocalizedStringFormatter-Ccy2SGCc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwZkWKmZ.js";import"./getScrollParent-WmdaZx3q.js";import"./ModalOverlay-B5JUVDsj.js";import"./x-hiiCX7eS.js";import"./createLucideIcon-CX9lPY5s.js";import"./useLocalizedStringFormatter-CJKDlra2.js";import"./Heading-CYbTt_Pz.js";import"./Button-NK277Tyq.js";import"./Button.module-BB7N-cLd.js";import"./info-DdvGTNXm.js";import"./Popover-XVLc4ZcS.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
