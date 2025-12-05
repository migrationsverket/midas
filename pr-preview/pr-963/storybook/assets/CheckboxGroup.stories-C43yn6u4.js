import{j as e}from"./iframe-BludVCPL.js";import{C as m}from"./CheckboxGroup-rhaQ_Oty.js";import{C as p}from"./Checkbox-oHiR4i8_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Crs15S47.js";import"./utils-BoYzwdTq.js";import"./clsx-B-dksMZM.js";import"./Text-DjPdOjsD.js";import"./useFocusRing-Bo_hMFPQ.js";import"./index-nZf0-c-4.js";import"./index-CLlIRgpI.js";import"./clsx-Ciqy0D92.js";import"./Text-4OIt-jaA.js";import"./Label-75PW-ICK.js";import"./Button-CjGnslnG.js";import"./Hidden-DiUQMeVN.js";import"./useLabels-CO3fVOFf.js";import"./useButton-B0B4GjtL.js";import"./Dialog-NGsBiAvQ.js";import"./RSPContexts-iVsZHsvb.js";import"./OverlayArrow-BB08AjEm.js";import"./useResizeObserver-DYKnm_GK.js";import"./useControlledState-CuHjUcW0.js";import"./Collection-DPwfbabj.js";import"./index-ioBwjV19.js";import"./Separator-fPHNx-_f.js";import"./SelectionManager-BJaM4A7j.js";import"./useEvent-C0paImUG.js";import"./scrollIntoView-Dnq7ttBi.js";import"./SelectionIndicator-C0xKl5-A.js";import"./useDescription-Ci4JSH0r.js";import"./ListKeyboardDelegate-DxarZjkL.js";import"./PressResponder-_BVhgS5_.js";import"./useLocalizedStringFormatter-B4WIXBM0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DUD7FXJ3.js";import"./VisuallyHidden-vUa_tkI4.js";import"./Button-BMfaash4.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BXNZT2cC.js";import"./createLucideIcon-DcDehA1r.js";import"./x-asknJrjS.js";import"./Heading-rKRtmMTC.js";import"./info-DgyRUCYr.js";import"./Popover-Dmdd-Cu_.js";import"./useFormValidation-BI-Yotv_.js";import"./useField-DYGPyTTF.js";import"./Form-CqW0EIvq.js";import"./check-CL97L6-d.js";import"./useToggleState-DZzUj8Y0.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
