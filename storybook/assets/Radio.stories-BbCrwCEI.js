import{j as e}from"./iframe-CWDqI9As.js";import{R as a,a as c}from"./Radio-COrEO_US.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-dBjUBpAV.js";import"./clsx-B-dksMZM.js";import"./Group-EJLZZM0Q.js";import"./useFocusRing-CGI_ER4d.js";import"./index-BPbsZXYC.js";import"./index-B9h6eKZl.js";import"./FieldError-BFTOWK8w.js";import"./Text-CNhsvp3k.js";import"./clsx-Ciqy0D92.js";import"./Text-Bg0gZzcQ.js";import"./Form-Bi-96Kx0.js";import"./Button-ChgRUqyy.js";import"./Hidden-Cgjt9oWa.js";import"./useLabel-BVrFk9UL.js";import"./useLabels-BvpY06Hn.js";import"./useButton-C4i5Q2ts.js";import"./SelectionIndicator-SU9AKZhk.js";import"./useField-C8fPh8Wl.js";import"./VisuallyHidden-CSPSoyjM.js";import"./useControlledState-7TZpR_sr.js";import"./Label-BZyuXFgi.js";import"./Dialog-DG6MYKjB.js";import"./RSPContexts-BANsKMWb.js";import"./OverlayArrow-DsWYENJs.js";import"./useResizeObserver-U8EiD1vM.js";import"./Collection-BCFGKp7k.js";import"./index-CQlCIbRD.js";import"./Separator-SJgp7vcw.js";import"./SelectionManager-CRbMuRcS.js";import"./useEvent-Cr5dRUc0.js";import"./scrollIntoView-CWyOkl1L.js";import"./useDescription-DPaZj1pb.js";import"./ListKeyboardDelegate-DfYbDCAE.js";import"./PressResponder-CcyPq1JI.js";import"./useLocalizedStringFormatter-BpizLsAw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-By6ANJoT.js";import"./getScrollParent-_UwOfSKS.js";import"./ModalOverlay-gRwerX64.js";import"./x-CzmzQROS.js";import"./createLucideIcon-CQ9K894w.js";import"./useLocalizedStringFormatter-CoCxcMtj.js";import"./Heading-mvOStMwp.js";import"./Button-CT52BdlE.js";import"./Button.module-BB7N-cLd.js";import"./info-twn1bu6v.js";import"./Popover-BFfrnmTU.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
