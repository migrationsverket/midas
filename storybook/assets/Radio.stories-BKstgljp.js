import{j as e}from"./iframe-Dl4LNfFt.js";import{R as a,a as c}from"./Radio-BSxqN-IN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-zoe11Nhs.js";import"./clsx-B-dksMZM.js";import"./Group-Dbz0NB1G.js";import"./useFocusRing-DBInQ3ih.js";import"./index-B4dlJKhH.js";import"./index-DfhqQ-fy.js";import"./FieldError-D8UkVWbY.js";import"./Text-P-m_usmt.js";import"./clsx-Ciqy0D92.js";import"./Text-htVbAu9h.js";import"./Form-BW3kbuFu.js";import"./Button-1ORHN5ed.js";import"./Hidden-qMhe2ll1.js";import"./useLabel-BMyaEN82.js";import"./useLabels-D1nLqhyh.js";import"./useButton-B3ilWFtn.js";import"./SelectionIndicator-BOl6pKjd.js";import"./useField-Bt07QuwG.js";import"./VisuallyHidden-CI441pyr.js";import"./useControlledState-CyH9azIX.js";import"./Label-CZ0JfQMw.js";import"./Dialog-DPGx9omw.js";import"./RSPContexts-4lSoz9P-.js";import"./OverlayArrow-DLh9Tp41.js";import"./useResizeObserver-CvCvp2Tt.js";import"./Collection-Bo8GIdVi.js";import"./index-CDp8Li4l.js";import"./Separator--rhMpA_n.js";import"./SelectionManager-Dd8kFD9H.js";import"./useEvent-BlUZThVq.js";import"./scrollIntoView-B7KTALk8.js";import"./useDescription-ccYB2Tbm.js";import"./ListKeyboardDelegate-BwRHOVKV.js";import"./PressResponder-4D9BL6pn.js";import"./useLocalizedStringFormatter-BfzJ7Wkp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-InBdBZ0D.js";import"./getScrollParent-CRvNPk_3.js";import"./ModalOverlay-DW1iRgTe.js";import"./x-BosK2Sg6.js";import"./createLucideIcon-1sQySh6M.js";import"./useLocalizedStringFormatter-BHmmo-Zt.js";import"./Heading-DMV6k00x.js";import"./Button-CE6ptzle.js";import"./Button.module-BB7N-cLd.js";import"./info-CCg9E48S.js";import"./Popover-CjC4abvw.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
