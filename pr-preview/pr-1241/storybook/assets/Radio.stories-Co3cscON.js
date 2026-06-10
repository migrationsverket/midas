import{j as e}from"./iframe-y1u__L-8.js";import{R as a,a as c}from"./Radio-BDDMbDLm.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Da8nMI6o.js";import"./clsx-B-dksMZM.js";import"./Group-rrSAIQbm.js";import"./useFocusRing-DrPDMwIf.js";import"./index-sWYRQAk2.js";import"./index-BS1A8_4R.js";import"./FieldError-B3ZCLrVr.js";import"./Text-LCGDIWeJ.js";import"./clsx-Ciqy0D92.js";import"./Text-DI19gscT.js";import"./Form-CePOgkA4.js";import"./Button-Bmc3JOkJ.js";import"./Hidden-DTarpjft.js";import"./useLabel-DdR6Ey9N.js";import"./useLabels-DIWDgD-T.js";import"./useButton-DFds5nbV.js";import"./SelectionIndicator-Dr5bwis_.js";import"./useField-DeQcEKMo.js";import"./VisuallyHidden-vMJRuQeL.js";import"./useControlledState-SL3CCMLy.js";import"./Label-DALoe-87.js";import"./Dialog-BiNhJBI-.js";import"./RSPContexts-BzgKoUFY.js";import"./OverlayArrow-DPD6R6ym.js";import"./useResizeObserver-DxXypk8I.js";import"./Collection-BXQTs4xV.js";import"./index-DpYlLRD4.js";import"./Separator-QJJ7D4Tg.js";import"./SelectionManager-C7uieu2B.js";import"./useEvent-BdW-8kO2.js";import"./scrollIntoView-DPjPSgYg.js";import"./useDescription-C868_Zy-.js";import"./ListKeyboardDelegate-CotMEVTu.js";import"./PressResponder-Ci85RzOj.js";import"./useLocalizedStringFormatter-BaM5UMu5.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4rEa8ur.js";import"./getScrollParent-DOFnmN7L.js";import"./ModalOverlay-CNEMfCp8.js";import"./x-WeprrzHp.js";import"./createLucideIcon-C_M4Trqf.js";import"./useLocalizedStringFormatter-BeHCnKuu.js";import"./Heading-C9dBce2x.js";import"./Button-DsGM-uqm.js";import"./Button.module-BB7N-cLd.js";import"./info-D_CiA-_d.js";import"./Popover-CtuY2he5.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
