import{j as e}from"./iframe-6UVP4gzF.js";import{C as m}from"./CheckboxGroup-DUHf-guQ.js";import{C as p}from"./Checkbox-CKCzK4YR.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BpE-wczM.js";import"./utils-DOxsvNuE.js";import"./clsx-B-dksMZM.js";import"./Text-BTPWticG.js";import"./useFocusRing-C5gCUZ-8.js";import"./index-BBGJ7VjO.js";import"./index-BcvrcLrL.js";import"./clsx-Ciqy0D92.js";import"./Text-C9xgYxgE.js";import"./Label-C_R-DpnM.js";import"./Button-Cexa-7Qi.js";import"./Hidden-CM-w2pmZ.js";import"./useLabel-CWCmiQI5.js";import"./useLabels-DW_gz9ei.js";import"./useButton-BvM28DdE.js";import"./Dialog-C8gq1IkO.js";import"./RSPContexts-Brux6LMo.js";import"./OverlayArrow-B2D5kJv1.js";import"./useResizeObserver-CEvY11qD.js";import"./useControlledState-CSt56eyg.js";import"./Collection-CcmSdLgY.js";import"./index-BCEfaGHU.js";import"./Separator-C1KrL196.js";import"./SelectionManager-B7s-i6rh.js";import"./useEvent-BcFNSZ1q.js";import"./scrollIntoView-B9I7jkoL.js";import"./SelectionIndicator-CSFZ1qny.js";import"./useDescription-CDSI2B06.js";import"./ListKeyboardDelegate-D41sqi6s.js";import"./PressResponder-TlXEKdFN.js";import"./useLocalizedStringFormatter-CRr2CS_3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BICxc7P5.js";import"./getScrollParent-Dm1SN3eh.js";import"./VisuallyHidden-Coo2bS_I.js";import"./Modal-yvxW3Sak.js";import"./x-DRrtJvVE.js";import"./createLucideIcon-CZM_qkx4.js";import"./useLocalizedStringFormatter-BHlCXMz2.js";import"./Heading-CW14flDD.js";import"./Button-Dank0oAc.js";import"./Button.module-BB7N-cLd.js";import"./info-CJ9zKhnh.js";import"./Popover-B7baZZ1J.js";import"./Form-BWiq1SRj.js";import"./useField-B43db6Ve.js";import"./check-D4IUPNmY.js";import"./useToggleState-HwXMwdub.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
