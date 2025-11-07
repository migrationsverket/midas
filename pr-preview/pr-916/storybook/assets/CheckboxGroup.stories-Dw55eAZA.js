import{j as e}from"./iframe-BdMP7xRe.js";import{C as m}from"./CheckboxGroup-DUfU_YXR.js";import{C as p}from"./Checkbox-CYP2Pgv7.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-C8wOBOO7.js";import"./utils-BXZxyj6A.js";import"./clsx-B-dksMZM.js";import"./Text-DVcK-pIr.js";import"./useFocusRing-DNVUOvoN.js";import"./index-ran4ZW8i.js";import"./index-CG9v_bJu.js";import"./clsx-Ciqy0D92.js";import"./Text-iZDkKzt3.js";import"./Label-ClvlwuzW.js";import"./Button-BShsBV_n.js";import"./Hidden-21u4YwCE.js";import"./useLabels-BBjabKP_.js";import"./useButton-Dp6FlW9J.js";import"./Dialog-BTupGEaP.js";import"./RSPContexts-R6BMhwXi.js";import"./OverlayArrow-DZhrcjav.js";import"./useResizeObserver-C9He1-ve.js";import"./useControlledState-BdK1PO_0.js";import"./Collection-CJ9Vb2-A.js";import"./index-CBhk_DAJ.js";import"./Separator-BZlGpEBB.js";import"./SelectionManager-Bs7V6cxh.js";import"./useEvent-Dg6CSePe.js";import"./scrollIntoView-Bipo5DH-.js";import"./SelectionIndicator-BESTi7vY.js";import"./useDescription-ta-S5uMH.js";import"./ListKeyboardDelegate-rzNb3E0p.js";import"./PressResponder-xTqNKP1Y.js";import"./useLocalizedStringFormatter-uCha_X5U.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-0ab75Emi.js";import"./VisuallyHidden-DTwk-y4u.js";import"./useLocalizedStringFormatter-Bmt49OaR.js";import"./Button-B87e4ZpD.js";import"./Button.module-CtQ1deO8.js";import"./x--C2HZCgu.js";import"./createLucideIcon-B_BA-bIQ.js";import"./Heading-C-n8PJFQ.js";import"./info-z_pSRbSH.js";import"./Popover-Osvtu8q-.js";import"./useFormValidation-CYa8QPFR.js";import"./useField-V4lYSNQA.js";import"./Form-DU3NOwU0.js";import"./check-BdtYEKST.js";import"./useToggleState-CntTIMjQ.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const nr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,nr as __namedExportsOrder,ir as default};
