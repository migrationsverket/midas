import{j as e}from"./iframe-CNCYpet-.js";import{R as a,a as c}from"./Radio-CKiYa_5W.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DbCir_Jt.js";import"./clsx-B-dksMZM.js";import"./Group-DFj-8_7F.js";import"./useFocusRing-CRxTmkRw.js";import"./index-BUDe2ZxC.js";import"./index-DWOJOWmI.js";import"./FieldError-pGosIpkp.js";import"./Text-BSDJ27Oc.js";import"./clsx-Ciqy0D92.js";import"./Text-ORzvfqKL.js";import"./Form-BY3Nnasj.js";import"./Button-DJ63q7tI.js";import"./Hidden-hGcy4cT5.js";import"./useLabel-CzS_jyTD.js";import"./useLabels-vAecHqWn.js";import"./useButton-DXHtHs2n.js";import"./SelectionIndicator-By9ghNhJ.js";import"./useField-CS2Ek9vr.js";import"./VisuallyHidden-BD8822Hp.js";import"./useControlledState-CeXWXac4.js";import"./Label-C4uC668Z.js";import"./Dialog-CDdgriEt.js";import"./RSPContexts-BaURGsym.js";import"./OverlayArrow-Btkpe0Jw.js";import"./useResizeObserver-DeSWJ0R6.js";import"./Collection-fvaKWVec.js";import"./index-wiJ-pny3.js";import"./Separator-DIcboP8V.js";import"./SelectionManager-Dsrgsk_Q.js";import"./useEvent-SGyVQ3yM.js";import"./scrollIntoView-DKoFSOfZ.js";import"./useDescription-CgiS5IZ6.js";import"./ListKeyboardDelegate-BT-CoH93.js";import"./PressResponder-fGbMc-Ku.js";import"./useLocalizedStringFormatter-D4gZ00xG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-g4fSyKjs.js";import"./getScrollParent-C5eE57Do.js";import"./Modal-UNMxYX9_.js";import"./x-BNWluiEV.js";import"./createLucideIcon-Clh8USVg.js";import"./useLocalizedStringFormatter-BnKVjVFL.js";import"./Heading-BKsUShCt.js";import"./Button-FEtIFAuh.js";import"./Button.module-BB7N-cLd.js";import"./info-C6YoZ-0l.js";import"./Popover-Bl3xU1tF.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
