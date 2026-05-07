import{j as e}from"./iframe-DsyUTAcE.js";import{R as a,a as c}from"./Radio-DLO48pnF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BnWDXxML.js";import"./clsx-B-dksMZM.js";import"./Group-fE0kJLiO.js";import"./useFocusRing-Cx6ToNCy.js";import"./index-Cm0emSOI.js";import"./index-DUe59CJc.js";import"./FieldError-CUL53TAh.js";import"./Text-BcSWoPTn.js";import"./clsx-Ciqy0D92.js";import"./Text-BbelKnYK.js";import"./Form-CGaVeMLz.js";import"./Button-CyvfdMVt.js";import"./Hidden-C6TlAeVz.js";import"./useLabel-BZ281jnk.js";import"./useLabels-B-uO_ouR.js";import"./useButton-zhU8f6Q9.js";import"./SelectionIndicator-jhAgBAsJ.js";import"./useField-CZQg1P7z.js";import"./VisuallyHidden-hue3FDJw.js";import"./useControlledState-CUD0SDj1.js";import"./Label-Crq51tct.js";import"./Dialog-DohYhUFQ.js";import"./RSPContexts-Bq3W9l8U.js";import"./OverlayArrow-Bt8y4fvo.js";import"./useResizeObserver-eQ6f-ciW.js";import"./Collection-BkFaDfpb.js";import"./index-DKebHK_B.js";import"./Separator-DiYSAA9a.js";import"./SelectionManager-DWstKPeT.js";import"./useEvent-CSHJ_TNr.js";import"./scrollIntoView-C7SZHVqe.js";import"./useDescription-umLegZgN.js";import"./ListKeyboardDelegate-Cof7SJue.js";import"./PressResponder-k6I_4WI-.js";import"./useLocalizedStringFormatter-Bt27mnVB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CB6ugAJk.js";import"./getScrollParent-dZX6mtkV.js";import"./ModalOverlay-DY-j-A4y.js";import"./x-zGwK5Qc9.js";import"./createLucideIcon-BXEX14cZ.js";import"./useLocalizedStringFormatter-d708RcER.js";import"./Heading-D4DQoq2I.js";import"./Button-D3VEHZPU.js";import"./Button.module-BB7N-cLd.js";import"./info-DGX3oTFd.js";import"./Popover-H2lXawV4.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
