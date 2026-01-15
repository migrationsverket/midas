import{j as e}from"./iframe-CfYlVJbT.js";import{C as m}from"./CheckboxGroup-DBvG_pqR.js";import{C as p}from"./Checkbox-f6GoXc5f.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-C1ZSTrtV.js";import"./utils-CJmxlmBT.js";import"./clsx-B-dksMZM.js";import"./Text-DPDTmGdI.js";import"./useFocusRing-CoZPHDQr.js";import"./index-Ye0e-ntf.js";import"./index-CP4lNSy2.js";import"./clsx-Ciqy0D92.js";import"./Text-a5g5-yXG.js";import"./Label-BpiMwJOf.js";import"./Button-CF5oaspZ.js";import"./Hidden-CLJR8IU5.js";import"./useLabels-CfaUcrJ-.js";import"./useButton-CwgKmRtS.js";import"./Dialog-DFj_hi3q.js";import"./RSPContexts-B6MfxgMQ.js";import"./OverlayArrow-CxGag7bJ.js";import"./useResizeObserver-C7qcJTS3.js";import"./useControlledState-BKJCcjym.js";import"./Collection-DiU-1jRC.js";import"./index-Dokwu504.js";import"./Separator-BvPwW-ao.js";import"./SelectionManager-J1zya0Zc.js";import"./useEvent-X8mwGVrv.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-D6nphIwP.js";import"./useDescription-DZuf13ft.js";import"./ListKeyboardDelegate-BxhRRDfm.js";import"./PressResponder-DEY1h2Cp.js";import"./useLocalizedStringFormatter-BY8QYVwG.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DxI-wXWL.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRHGK4kj.js";import"./Button-mO0qg6G0.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-XdRVw3Iq.js";import"./createLucideIcon-BodeLy3S.js";import"./x-pOvGEv2b.js";import"./Heading-CxtVvS-8.js";import"./info-C4iI7mvH.js";import"./Popover-DexhHeTj.js";import"./useFormValidation-BsmaiakS.js";import"./useField-All465gQ.js";import"./Form-CkwuCk_n.js";import"./check-DhJddZL6.js";import"./useToggleState-DQhq3AU-.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
