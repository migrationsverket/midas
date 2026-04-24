import{j as e}from"./iframe-Cpv3N_Z7.js";import{R as a,a as c}from"./Radio-vXZcR_fN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ds8IarQh.js";import"./clsx-B-dksMZM.js";import"./Group-DtMaHiC2.js";import"./useFocusRing-ypjCw1vR.js";import"./index-wkqyPuv6.js";import"./index-DfwSWRjw.js";import"./FieldError-DDdPNrDK.js";import"./Text-CBaNxGOV.js";import"./clsx-Ciqy0D92.js";import"./Text-CywvhZI_.js";import"./Form-N1eN9l9p.js";import"./Button-yYifVGdg.js";import"./Hidden-CRjjTzwz.js";import"./useLabel-DY4t24dq.js";import"./useLabels-Cb5TS_nA.js";import"./useButton-D1nJ6Ar2.js";import"./SelectionIndicator-DNA7WQpC.js";import"./useField-D1U1wsM_.js";import"./VisuallyHidden-UFh7Pb-i.js";import"./useControlledState-BJT8QsD-.js";import"./Label-Dx3VCdGV.js";import"./Dialog-Bb2YMCi0.js";import"./RSPContexts-B7j5fLyU.js";import"./OverlayArrow-sE3WTDMd.js";import"./useResizeObserver-DVNf1EMT.js";import"./Collection-CQWma8za.js";import"./index-zYi_m5tq.js";import"./Separator-Be3iiyzN.js";import"./SelectionManager-BKEpkWWf.js";import"./useEvent-ryaXYS60.js";import"./scrollIntoView-CvDQ6PuP.js";import"./useDescription-zO_rmDkP.js";import"./ListKeyboardDelegate--0GCoeKZ.js";import"./PressResponder-DGGSGX2J.js";import"./useLocalizedStringFormatter-Cxhkiabf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DhQs2maB.js";import"./getScrollParent-DFT_DoLJ.js";import"./ModalOverlay-58Zq4NHN.js";import"./x-F7c5yWaB.js";import"./createLucideIcon-CPN07aPY.js";import"./useLocalizedStringFormatter-DBqNCzPo.js";import"./Heading-DYvz3_Q8.js";import"./Button-DMMScCvt.js";import"./Button.module-BB7N-cLd.js";import"./info-Dl1Xxg5G.js";import"./Popover-Bc1Ybz7d.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
