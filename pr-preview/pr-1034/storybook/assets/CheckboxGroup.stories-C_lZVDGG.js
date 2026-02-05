import{j as e}from"./iframe-DWeimgIa.js";import{C as m}from"./CheckboxGroup-CiWSMg3e.js";import{C as p}from"./Checkbox-H4_MEQuv.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D4QojQoq.js";import"./utils-DxMtLVOR.js";import"./clsx-B-dksMZM.js";import"./Text-DbBhNbbj.js";import"./useFocusRing-DKnPpF37.js";import"./index-yvDfoLET.js";import"./index-Zv7Hv4yU.js";import"./clsx-Ciqy0D92.js";import"./Text-CfprFU7e.js";import"./Label-B2mMEyFl.js";import"./Button-BvEh5rbk.js";import"./Hidden-DKOEiJ1S.js";import"./useLabels-C5bIK2qD.js";import"./useButton-DqDFtivK.js";import"./Dialog-DYBzwV37.js";import"./RSPContexts-CNnbePcK.js";import"./OverlayArrow-BMvinMub.js";import"./useResizeObserver-BUoUipIm.js";import"./useControlledState-HboVp0gd.js";import"./Collection-DwYHR0Vg.js";import"./index-DyeLdOPS.js";import"./Separator-19e6jFiW.js";import"./SelectionManager-i0o8PGpm.js";import"./useEvent-C4MlArKl.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CKDi98ip.js";import"./useDescription-Bh7NSV4H.js";import"./ListKeyboardDelegate-CY2YJj51.js";import"./PressResponder-BnEt-TVg.js";import"./useLocalizedStringFormatter-aKbmrIDP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BPvNjLbq.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-DRBz7uUV.js";import"./Button-77YGZ7IT.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CTWeQANG.js";import"./createLucideIcon-BHfYKO9v.js";import"./x-DycnocmR.js";import"./Heading-DnNXfcg_.js";import"./info-DTgvNKZi.js";import"./Popover-Bc4Lfs41.js";import"./useFormValidation-BVTCQTHB.js";import"./useField-BTFmLCge.js";import"./Form-DKZEmQ_n.js";import"./check-CLCQ0_0I.js";import"./useToggleState-IhaYSV-h.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
