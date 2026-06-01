import{j as e}from"./iframe-CwW8sN4S.js";import{R as a,a as c}from"./Radio-C7bSRgr6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B_M889tP.js";import"./clsx-B-dksMZM.js";import"./Group-YWsXtnDF.js";import"./useFocusRing-cgdKMhcs.js";import"./index-Bf5NZhsL.js";import"./index-BaeC46Uu.js";import"./FieldError-BlJWYskW.js";import"./Text-BE9Sihnv.js";import"./clsx-Ciqy0D92.js";import"./Text-C5uja355.js";import"./Form-CUc0WOwk.js";import"./Button-C3AuE87p.js";import"./Hidden-CVoubVAI.js";import"./useLabel-DoKdb579.js";import"./useLabels-CwIlq1fJ.js";import"./useButton-CZZnZ_mn.js";import"./SelectionIndicator-B23FeEQ3.js";import"./useField-C2elZhF8.js";import"./VisuallyHidden-BudlR0yM.js";import"./useControlledState-CC34MHAe.js";import"./Label-BtXdhNCg.js";import"./Dialog-taGEIRz0.js";import"./RSPContexts-szw5AFHr.js";import"./OverlayArrow-Dhpegq9P.js";import"./useResizeObserver-DIXIeOSr.js";import"./Collection-AVCAnE9e.js";import"./index-ZmllTkBI.js";import"./Separator-D1lrfBKJ.js";import"./SelectionManager-DjP27Hq6.js";import"./useEvent-CeuSem5l.js";import"./scrollIntoView-DJ_jtxbK.js";import"./useDescription-UAInHKf4.js";import"./ListKeyboardDelegate-CQEvvxFH.js";import"./PressResponder-DDLeQnn7.js";import"./useLocalizedStringFormatter-DJpiZ4xv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BsnOxs_W.js";import"./getScrollParent-DKE2Book.js";import"./ModalOverlay-K-4HGfJs.js";import"./x-DNLXf0Tv.js";import"./createLucideIcon-DzXM4i8f.js";import"./useLocalizedStringFormatter-eUY7Q8gu.js";import"./Heading-Bb8pQtsc.js";import"./Button-BNJwH1Cm.js";import"./Button.module-BB7N-cLd.js";import"./info-wfKsbo8I.js";import"./Popover-DbYbPZ55.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
