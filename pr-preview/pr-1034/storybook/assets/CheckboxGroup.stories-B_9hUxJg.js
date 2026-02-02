import{j as e}from"./iframe-BQxOfzlW.js";import{C as m}from"./CheckboxGroup-my_q3Bxf.js";import{C as p}from"./Checkbox-B7A9JDOY.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-dlUiDVEq.js";import"./utils-BXBr2vrV.js";import"./clsx-B-dksMZM.js";import"./Text-BZHSWyDa.js";import"./useFocusRing-DQFHtdEB.js";import"./index-DYsqMbTI.js";import"./index-D95GD9Yp.js";import"./clsx-Ciqy0D92.js";import"./Text-XBZd4_As.js";import"./Label-ClE-JV3D.js";import"./Button-B8qi-92i.js";import"./Hidden-VLZyivb1.js";import"./useLabels-zI525H0W.js";import"./useButton-C-Vp9A3A.js";import"./Dialog-Cj_T0WXP.js";import"./RSPContexts-CmlY3_rm.js";import"./OverlayArrow-D1Pp5Xhu.js";import"./useResizeObserver-C39eOITL.js";import"./useControlledState-DfXJmpIS.js";import"./Collection-Dke8_xmQ.js";import"./index-BD-gBNV-.js";import"./Separator-CTPbjBqP.js";import"./SelectionManager-DFqTi-k6.js";import"./useEvent-BAia882S.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CrAjeEEw.js";import"./useDescription-n_gbERc3.js";import"./ListKeyboardDelegate-Cp2cso8X.js";import"./PressResponder-BcP4Iafh.js";import"./useLocalizedStringFormatter-CK8fZOyp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DeMivh_6.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Sl6NNMXK.js";import"./Button-BPwMgPSD.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B_higiKm.js";import"./createLucideIcon-5RmQ-8qX.js";import"./x-IcEcso0D.js";import"./Heading-Cjc1je68.js";import"./info-fBLj6L9n.js";import"./Popover-DyF-XfFL.js";import"./useFormValidation-BXrbXpbC.js";import"./useField-CuahQc0k.js";import"./Form-B5GBoHi2.js";import"./check-Sz4qFS0C.js";import"./useToggleState-CpLu0OH9.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
