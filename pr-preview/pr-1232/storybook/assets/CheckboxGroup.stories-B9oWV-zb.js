import{j as e}from"./iframe-BNflmq3A.js";import{C as m}from"./CheckboxGroup-HsZidgNk.js";import{C as p}from"./Checkbox-DHQfrwsk.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CpZNXgM0.js";import"./utils-B7V63oD4.js";import"./clsx-B-dksMZM.js";import"./Text-Bnz2t9Ql.js";import"./useFocusRing-C6RlaKsx.js";import"./index-BrcXQqZF.js";import"./index-C235bJJA.js";import"./clsx-Ciqy0D92.js";import"./Text-BlWLVQLi.js";import"./Label-DsSPpc1K.js";import"./Button-DJfxBrz6.js";import"./Hidden-fjlvP_hk.js";import"./useLabel-CJ08WlT4.js";import"./useLabels-D6wk1E_k.js";import"./useButton-DGWy0aPQ.js";import"./Dialog-CqO2zUsn.js";import"./RSPContexts-CIYDedK3.js";import"./OverlayArrow-7xfz7Hv7.js";import"./useResizeObserver-3Eb8t69T.js";import"./useControlledState-DuXs14gL.js";import"./Collection-BCi67oTX.js";import"./index-D9RdZJbp.js";import"./Separator-CN65iN9a.js";import"./SelectionManager-uSE9FSHJ.js";import"./useEvent-DMh1OLFP.js";import"./scrollIntoView-DZi0I4zG.js";import"./SelectionIndicator-C21eoo8L.js";import"./useDescription-B_uvSpwC.js";import"./ListKeyboardDelegate-DTCudMFJ.js";import"./PressResponder-CcUwqPuT.js";import"./useLocalizedStringFormatter-CAvVK8gZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C1dnsmar.js";import"./getScrollParent-BjbBQLw-.js";import"./VisuallyHidden-ITIWhviF.js";import"./ModalOverlay-MTJJ6ffD.js";import"./x-DbG6WDA3.js";import"./createLucideIcon-BQvoQkeP.js";import"./useLocalizedStringFormatter-C2_DIja1.js";import"./Heading-CpbECIrv.js";import"./Button-Cyp4EM5w.js";import"./Button.module-BB7N-cLd.js";import"./info-2Y5OfA5f.js";import"./Popover-DmjfmCnZ.js";import"./Form-ClPIoKYv.js";import"./useField-D3c7IL7J.js";import"./check-C0NBLqZL.js";import"./useToggleState-DWWVpExB.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showSelectAll: true,
    selectAllLabel: 'SELECT ALL'
  },
  tags: ['!dev', '!autodocs', '!snapshot'],
  parameters: {
    chromatic: {
      disableSnapshot: true
    }
  },
  render: ({
    ...args
  }) => {
    return <CheckboxGroup {...args}>
        <Checkbox value='banana'>Banana</Checkbox>
        <Checkbox value='apple'>Apple</Checkbox>
        <div>I'm not a checkbox</div>
      </CheckboxGroup>;
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true,
    showSelectAll: true,
    value: ['Mango']
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isInvalid: true
  }
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
