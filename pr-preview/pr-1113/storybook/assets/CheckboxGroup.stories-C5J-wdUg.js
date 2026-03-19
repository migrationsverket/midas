import{j as e}from"./iframe-Boi322-e.js";import{C as m}from"./CheckboxGroup-ed14FPw3.js";import{C as p}from"./Checkbox-37bbUfTT.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CghXp7Fo.js";import"./utils-z1j4bIi1.js";import"./clsx-B-dksMZM.js";import"./Text-bXt2bHa-.js";import"./useFocusRing-CkCvH5DS.js";import"./index-Cvkkkaql.js";import"./index-s4s_PHwE.js";import"./clsx-Ciqy0D92.js";import"./Text-D7z3Z1mn.js";import"./Label-k1QDnvb1.js";import"./Button-BZrkaF7s.js";import"./Hidden-Cxs5fcIU.js";import"./useLabels-DbPeSc60.js";import"./useButton-aRTTkymG.js";import"./Dialog-BKos6ltr.js";import"./RSPContexts-CQ86iZLn.js";import"./OverlayArrow-BwJO3Yzs.js";import"./useResizeObserver-CY43OvIT.js";import"./useControlledState-CJDuseoe.js";import"./Collection-C_Ee4okz.js";import"./index-hNEIOhKB.js";import"./Separator-DO0jyVTu.js";import"./SelectionManager-CeqfsY14.js";import"./useEvent-CDk6Ke-x.js";import"./scrollIntoView-xxfCmNq8.js";import"./SelectionIndicator-DbUjPPJv.js";import"./useDescription-CQ5vqFNH.js";import"./ListKeyboardDelegate-D-uh4i55.js";import"./PressResponder-D88WmAIY.js";import"./useLocalizedStringFormatter-BdYnyh_u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BNH90ywo.js";import"./getScrollParent-C8E3tpWG.js";import"./VisuallyHidden-CV_gcmgX.js";import"./x-chi6RhK4.js";import"./createLucideIcon-C52beLhx.js";import"./useLocalizedStringFormatter-DQv5OY2h.js";import"./Heading-B6yBeY0W.js";import"./Button-BbOSYGn_.js";import"./Button.module-BB7N-cLd.js";import"./info-BNB2_TRS.js";import"./Popover-DyY7ZtRb.js";import"./Form-Co5HaTHR.js";import"./useField-ChTCt58t.js";import"./check-DPwEkdC6.js";import"./useToggleState-Ddpmi2Lj.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
