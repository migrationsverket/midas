import{j as e}from"./iframe-CHfAArqL.js";import{R as a,a as c}from"./Radio-UzeYZoOv.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-B9qYaPsL.js";import"./clsx-B-dksMZM.js";import"./Group-CPEXitlT.js";import"./useFocusRing-BLqX-8xD.js";import"./index-DD_A6Sdz.js";import"./index-BO2C6bAK.js";import"./FieldError-DThBEncI.js";import"./Text-9hAgyQPX.js";import"./clsx-Ciqy0D92.js";import"./Text-C_6I0x6_.js";import"./Form-CBT2Kr6Z.js";import"./Button-Kjhz10Fb.js";import"./Hidden-BOX53JQz.js";import"./useLabel-BoRZ5h0h.js";import"./useLabels-8brOlTZV.js";import"./useButton-CXuQG5Fo.js";import"./SelectionIndicator-Blsn9PZp.js";import"./useField-CG5Odj4p.js";import"./VisuallyHidden-QI36eTUn.js";import"./useControlledState-By7B3ojn.js";import"./Label-P5A-OK5O.js";import"./Dialog-1rk1nwhV.js";import"./RSPContexts-CdZqI30k.js";import"./OverlayArrow-Bwvt3YxS.js";import"./useResizeObserver-BdFYLAox.js";import"./Collection-YstYuLwH.js";import"./index-Dr28t-aO.js";import"./Separator-Bu6zTg-i.js";import"./SelectionManager-zN7EIGI4.js";import"./useEvent-g8MOXAII.js";import"./scrollIntoView-DiMlvdiv.js";import"./useDescription-DeNQGmHX.js";import"./ListKeyboardDelegate-Dvro-OxG.js";import"./PressResponder-D3_ecemp.js";import"./useLocalizedStringFormatter-aQ9hIT3Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-OoL9LBbg.js";import"./getScrollParent-DFfRG1WF.js";import"./ModalOverlay-Dcp2QOPO.js";import"./x-DIO0llkK.js";import"./createLucideIcon-Cv2FgIad.js";import"./useLocalizedStringFormatter-B-k-1dED.js";import"./Heading-B3eVwh_1.js";import"./Button-Cmx0GvV9.js";import"./Button.module-BB7N-cLd.js";import"./info-FFLP7lf-.js";import"./Popover-DbjKufjU.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
