import{j as e}from"./iframe-BZJIgrzq.js";import{C as m}from"./CheckboxGroup-CMmY0Ols.js";import{C as p}from"./Checkbox-Sc4Qk340.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Xf7luySm.js";import"./utils-CDsu9e82.js";import"./clsx-B-dksMZM.js";import"./Text-BCf7Uakc.js";import"./useFocusRing-CLRJYDX3.js";import"./index-CMFY0fD_.js";import"./index-DLK3qOyE.js";import"./clsx-Ciqy0D92.js";import"./Text-CLRTBMzT.js";import"./Label-D9cZkncG.js";import"./Button-nILSV0Zl.js";import"./Hidden-BH3zIE_M.js";import"./useLabels-1qpMULhJ.js";import"./useButton-DhBm0XNi.js";import"./Dialog-CcNPSpKX.js";import"./RSPContexts-Db0C8CO2.js";import"./OverlayArrow-CSCLCtnW.js";import"./useResizeObserver-C4hmgU3I.js";import"./useControlledState-YwjV-cgx.js";import"./Collection-Bw20jmHK.js";import"./index-CHIfq2GA.js";import"./Separator-DSVl1r7I.js";import"./SelectionManager-TMotc0NR.js";import"./useEvent-8RC0B9o7.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BEjfesxB.js";import"./useDescription-D0LbgrVb.js";import"./ListKeyboardDelegate-C3FvELMR.js";import"./PressResponder-CM1z-dcT.js";import"./useLocalizedStringFormatter--c6s_bUB.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CUc15JYj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C0iAQ1h6.js";import"./Button-CLHjLMLk.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-c0g796co.js";import"./createLucideIcon-OgUSFDFv.js";import"./x-4lOs2yK-.js";import"./Heading-Bqi4zKXZ.js";import"./info-C4LOLLvW.js";import"./Popover-DQyXc06k.js";import"./useFormValidation-CynkB5SZ.js";import"./useField-MSXXK5ZP.js";import"./Form-Cb9oyesI.js";import"./check-DsVoRjtp.js";import"./useToggleState-DG_DvitX.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const pr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,pr as __namedExportsOrder,nr as default};
