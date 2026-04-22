import{j as e}from"./iframe-D0FqK1lb.js";import{R as a,a as c}from"./Radio-DFy89rWj.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BMbNOyUc.js";import"./clsx-B-dksMZM.js";import"./Group-C-ROvPDj.js";import"./useFocusRing-BD1a5Y2G.js";import"./index-5HzkHfPe.js";import"./index-SIDrXvAb.js";import"./FieldError-D9qv9kV0.js";import"./Text-Du7gyEcw.js";import"./clsx-Ciqy0D92.js";import"./Text-DNU35Fvp.js";import"./Form-B4kYCfIB.js";import"./Button-ASP2neQz.js";import"./Hidden-Dhm_4TsG.js";import"./useLabel-ky8NeYeA.js";import"./useLabels-Dak2com7.js";import"./useButton-pK_0UtxK.js";import"./SelectionIndicator-Brnu1DGI.js";import"./useField-j5hIvejQ.js";import"./VisuallyHidden-CFNdR6Qu.js";import"./useControlledState-C8lWssw-.js";import"./Label-pa7GTQEx.js";import"./Dialog-DYtX3rt-.js";import"./RSPContexts-0TxVVo6E.js";import"./OverlayArrow-BRAHmtAX.js";import"./useResizeObserver-oMKCGDU6.js";import"./Collection-BqqxDhK2.js";import"./index-DHQ1v_AI.js";import"./Separator-BJndn-Pq.js";import"./SelectionManager-CgUlY-2r.js";import"./useEvent-B8pAJ79A.js";import"./scrollIntoView-DLJFvk8W.js";import"./useDescription-Df9gIiPP.js";import"./ListKeyboardDelegate-C1t568NK.js";import"./PressResponder-DGMJW-pM.js";import"./useLocalizedStringFormatter-BHS8kRNf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B6V37QhV.js";import"./getScrollParent-CbuB2ebi.js";import"./ModalOverlay-BJoZltO4.js";import"./x-CjuTORk7.js";import"./createLucideIcon-B3FFrp2k.js";import"./useLocalizedStringFormatter-CgfN0QE1.js";import"./Heading-DpJ7i1P8.js";import"./Button-BmBlwCLs.js";import"./Button.module-BB7N-cLd.js";import"./info-DsHfgpgH.js";import"./Popover-CHjIIBtG.js";const mr={title:"Components/Radio",component:c,subcomponents:{Radio:a},tags:["autodocs"],args:{label:"Välj frukt",description:"Valfri beskrivning",errorMessage:"Du måste välja en frukt?",errorPosition:"top"},argTypes:{children:{table:{disable:!0}},label:{type:"string",control:{type:"text"}},isDisabled:{type:"boolean",options:[!1,!0],control:{type:"radio"}},isInvalid:{type:"boolean",options:[!1,!0],control:{type:"radio"}}}},u=["Äpple","Banan","Kiwi","Apelsin"],t=u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),children:r},r)),b=[e.jsx(a,{value:"banan",children:"Banan"},"radio-banan"),e.jsx(a,{value:"apelsin",isDisabled:!0,children:"Apelsin"},"radio-apelsin"),e.jsx(a,{value:"kiwi",children:"Kiwi"},"radio-kiwi")],s={args:{label:"Frukt",description:"Välj en frukt",children:u.map(r=>e.jsx(a,{value:r,id:r.toLowerCase(),className:"test-radio-class",children:r},r)),className:"test-class"}},o={args:{children:t,isDisabled:!0}},i={args:{children:t,isReadOnly:!0,value:"Kiwi"}},n={args:{children:b}},p={args:{children:t,isInvalid:!0,errorMessage:"Det här stämmer inte!"}},l={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,isRequired:!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},d={tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},args:{label:"Frukt",description:"Välj en frukt",children:t,errorMessage:void 0,validate:r=>r?.includes("Äpple")?"Inga äpplen är tillåtna":!0},render:r=>e.jsxs("form",{children:[e.jsx(c,{...r}),e.jsx("button",{type:"submit",children:"Submit"})]})},m={args:{...s.args,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{value:"apple",children:"Äpple"},"radio-apple"),e.jsx(a,{value:"banan",children:"Banan"},"radio-banan")]}),orientation:"horizontal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
