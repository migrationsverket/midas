import{j as e}from"./iframe-BWxdoVbq.js";import{C as m}from"./CheckboxGroup-BkTBfadG.js";import{C as p}from"./Checkbox-NxbfHqUd.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CxzGL3jS.js";import"./utils-BnYb9Hw4.js";import"./clsx-B-dksMZM.js";import"./Text-dn5dCY6n.js";import"./useFocusRing-DPldp525.js";import"./index-DG33oO9s.js";import"./index-DTDl1n2p.js";import"./clsx-Ciqy0D92.js";import"./Text-DGZxErjX.js";import"./Label-CLB1tHyl.js";import"./Button-ccQsUA8n.js";import"./Hidden-Cxs9AA6g.js";import"./useLabels-CAVv4we_.js";import"./useButton-CdcPrfen.js";import"./Dialog-DhP15DIK.js";import"./RSPContexts-Dux4Wkx7.js";import"./OverlayArrow-BY3LyeC7.js";import"./useResizeObserver-CTUsI4k8.js";import"./useControlledState-FuJuatlB.js";import"./Collection-2_PO0O5b.js";import"./index-D_mW35hG.js";import"./Separator-CCq7NZc6.js";import"./SelectionManager-CdbwfAoN.js";import"./useEvent-y-8iBWin.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-oTm2G6Fh.js";import"./useDescription-DgM0dtj0.js";import"./ListKeyboardDelegate-DQTFuCE0.js";import"./PressResponder-B3LKxLIx.js";import"./useLocalizedStringFormatter-CqDQSu3W.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CC4XGFMH.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Sp8_SWOf.js";import"./Button-DObiC3sf.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DEH2FHS3.js";import"./createLucideIcon-BPWVcFpY.js";import"./x-BJpOH67y.js";import"./Heading-CeJPd17r.js";import"./info-CZ3e5W5E.js";import"./Popover-Z6vSNCr_.js";import"./useFormValidation-DNc0NnIZ.js";import"./useField-DHj-Ewwt.js";import"./Form-BPid_5N5.js";import"./check-l2j-1phP.js";import"./useToggleState-CTzyQdPw.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
