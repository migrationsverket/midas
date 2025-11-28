import{j as e}from"./iframe-L3ZiwQam.js";import{C as m}from"./CheckboxGroup-Dja9FCPC.js";import{C as p}from"./Checkbox-TXh_B0Oh.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BqSjwlEK.js";import"./utils-8_0C2edU.js";import"./clsx-B-dksMZM.js";import"./Text-VmXli42R.js";import"./useFocusRing-xkAUyvIA.js";import"./index-CTyHgkao.js";import"./index-C7aC8kzM.js";import"./clsx-Ciqy0D92.js";import"./Text-DEU87KDU.js";import"./Label-Bif5xaDN.js";import"./Button-BdnTjb0J.js";import"./Hidden-p2g1pf0R.js";import"./useLabels-BPwrjTKQ.js";import"./useButton-kd668K9b.js";import"./Dialog-CpbMgZim.js";import"./RSPContexts-Dirc5gTa.js";import"./OverlayArrow-k6pfxubS.js";import"./useResizeObserver-CS3iHKqK.js";import"./useControlledState-Dpt5Xs4z.js";import"./Collection-Bp7mpPOK.js";import"./index-BvUrGcBd.js";import"./Separator-BrTWXljZ.js";import"./SelectionManager-DGETsi7e.js";import"./useEvent-Dw1NpWTu.js";import"./scrollIntoView-CsuURo36.js";import"./SelectionIndicator-D0ESiHsz.js";import"./useDescription-D_158S4T.js";import"./ListKeyboardDelegate-UV3scr6I.js";import"./PressResponder-Ct9hO6zv.js";import"./useLocalizedStringFormatter-CAQOHLqK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DlD0-RJx.js";import"./VisuallyHidden-D6HuS3bN.js";import"./Button-DGRhcKVW.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-SIx4tihu.js";import"./createLucideIcon-BAFEPMu5.js";import"./x-BmA9jPar.js";import"./Heading-BYh2sWiY.js";import"./info-t29klxPo.js";import"./Popover-CsH00Z4r.js";import"./useFormValidation-DDOsi_wH.js";import"./useField-7Cb9kWpW.js";import"./Form-C9EcRY5w.js";import"./check-D01i2kXE.js";import"./useToggleState-CQxdETvm.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
