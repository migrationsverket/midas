import{j as e}from"./iframe-TmYtQgnY.js";import{R as a,a as c}from"./Radio-C4s5TSSC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DvgYso-7.js";import"./clsx-B-dksMZM.js";import"./Group-DFvqsGLM.js";import"./useFocusRing-DS5bIIsk.js";import"./index-DGnVoJP5.js";import"./index-OGPoH8qw.js";import"./FieldError-7FPxvhrU.js";import"./Text-Buf9POGu.js";import"./clsx-Ciqy0D92.js";import"./Text-T0trnrKS.js";import"./Form-DALGR-BM.js";import"./Button-ChpfMuYO.js";import"./Hidden-Curp_cq_.js";import"./useLabel-DGzhZIfH.js";import"./useLabels-CrE4xl9O.js";import"./useButton-Lm3tezld.js";import"./SelectionIndicator-QUvO_-7Z.js";import"./useField-T1pIVFYf.js";import"./VisuallyHidden-Bad1FF8A.js";import"./useControlledState-D8j9ZCcX.js";import"./Label-BBfjtBEW.js";import"./Dialog-QnE-F5Xe.js";import"./RSPContexts-DD-NCnvs.js";import"./OverlayArrow-CqmAZ1KM.js";import"./useResizeObserver-BD2CW4iy.js";import"./Collection-DjRJ2-_Y.js";import"./index-DD5CoGXe.js";import"./Separator-gcPVMQlL.js";import"./SelectionManager-BpEOlw03.js";import"./useEvent-znuN9vlN.js";import"./scrollIntoView-BMboN7jH.js";import"./useDescription-BlLDYGFU.js";import"./ListKeyboardDelegate-DtDZKLW9.js";import"./PressResponder-BzyRnliG.js";import"./useLocalizedStringFormatter-BDPcye4t.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DoKEYHsK.js";import"./getScrollParent-D0szpDfO.js";import"./ModalOverlay-C2Wvuo36.js";import"./x-WIEiNIRj.js";import"./createLucideIcon-DeoFDGGs.js";import"./useLocalizedStringFormatter-C2tRJrok.js";import"./Heading-DQC2lV1W.js";import"./Button-CPisJxWJ.js";import"./Button.module-BB7N-cLd.js";import"./info-CJKU0Z6E.js";import"./Popover-BysjIYp5.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
