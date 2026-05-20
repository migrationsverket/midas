import{j as e}from"./iframe-UJ3BwdI6.js";import{C as m}from"./CheckboxGroup-ru6N-TT7.js";import{C as p}from"./Checkbox-CLJ7wkUL.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CS9phB3k.js";import"./utils-BYceCV3C.js";import"./clsx-B-dksMZM.js";import"./Text-BU9YFTb1.js";import"./useFocusRing-CLeeQzke.js";import"./index-DAZT_GQr.js";import"./index-Bx8foN3C.js";import"./clsx-Ciqy0D92.js";import"./Text-C99-Gc34.js";import"./Label-B2wEGgYc.js";import"./Button-C3rI1i5q.js";import"./Hidden-Dl3PKEKv.js";import"./useLabel-B0g5vJvf.js";import"./useLabels-C5RnXiv5.js";import"./useButton-Cn8mW4Ll.js";import"./Dialog-BD0IRIUG.js";import"./RSPContexts-JudtSyi0.js";import"./OverlayArrow-CHGQ6Qmq.js";import"./useResizeObserver-DTE2Kg-d.js";import"./useControlledState-SS_iM14g.js";import"./Collection-VaBd8FzM.js";import"./index-Cm_EPirj.js";import"./Separator-CZoAQZ-8.js";import"./SelectionManager-BujgrAkT.js";import"./useEvent-CTyOrL8U.js";import"./scrollIntoView-CTYRmDo1.js";import"./SelectionIndicator-D_gUha_f.js";import"./useDescription-C3PTeJJa.js";import"./ListKeyboardDelegate-BDLnRayo.js";import"./PressResponder-BMknpfIK.js";import"./useLocalizedStringFormatter-C9onPQuM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B_ZWVv1J.js";import"./getScrollParent-DHFOoCum.js";import"./VisuallyHidden-KE5d7FBc.js";import"./ModalOverlay-CijLMVMM.js";import"./x-BHjLPSUz.js";import"./createLucideIcon-C1FynrDV.js";import"./useLocalizedStringFormatter-BPE-JPT8.js";import"./Heading-CWOFI80Y.js";import"./Button-C7x5CU1C.js";import"./Button.module-BB7N-cLd.js";import"./info-DT2O-hN9.js";import"./Popover-CHtRHt4o.js";import"./Form-BoynS74H.js";import"./useField-XAlNn7CP.js";import"./check-DdGCdeFn.js";import"./useToggleState-DKYAthNW.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
