import{j as e}from"./iframe-FtEa7VQj.js";import{C as m}from"./CheckboxGroup-CwhNcSZt.js";import{C as p}from"./Checkbox-C_houcwV.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-ClKp2imH.js";import"./utils-COfxaHf8.js";import"./clsx-B-dksMZM.js";import"./Text-ESAF9nxg.js";import"./useFocusRing-D8XlJGR3.js";import"./index-DAEPIqsi.js";import"./index-loZrsOH8.js";import"./clsx-Ciqy0D92.js";import"./Text-DiMsQpYZ.js";import"./Label-Oub4KePl.js";import"./Button-Dqxngb1_.js";import"./Hidden-DvRPXbsY.js";import"./useLabels-BKIUEpC2.js";import"./useButton-cS6iWc3P.js";import"./Dialog-BKLolvfT.js";import"./RSPContexts-BCdKzl2o.js";import"./OverlayArrow-mq7tAYNM.js";import"./useResizeObserver-Crg5DKff.js";import"./useControlledState-CCkxZ5nC.js";import"./Collection-Aylh_77m.js";import"./index-BDcn4SpJ.js";import"./Separator-fIkq8orD.js";import"./SelectionManager-D_wMjdMu.js";import"./useEvent-S9LJqkM-.js";import"./scrollIntoView-DgbQWClN.js";import"./SelectionIndicator-DwyyQNvW.js";import"./useDescription-BpV-4EC3.js";import"./ListKeyboardDelegate-DMu8IpBO.js";import"./PressResponder-P5z6VbJ-.js";import"./useLocalizedStringFormatter-iKxxmVnK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-D2Nxm4kL.js";import"./VisuallyHidden-DfcEnh0s.js";import"./useLocalizedStringFormatter-DEPSzweY.js";import"./Button-BHyJkgwt.js";import"./Button.module-CtQ1deO8.js";import"./x-DiP6oz7r.js";import"./createLucideIcon-BFKkZNi-.js";import"./Heading-CR3FQ06N.js";import"./info-0PYjxuJb.js";import"./Popover-DpWEsjXP.js";import"./useFormValidation-CZtyidDU.js";import"./useField-Bzl4_aAY.js";import"./Form-w2pCOEv6.js";import"./check-D7tnev8G.js";import"./useToggleState-DNC2Ihqz.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
