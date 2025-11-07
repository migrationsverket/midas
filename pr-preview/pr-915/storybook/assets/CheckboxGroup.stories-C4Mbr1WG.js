import{j as e}from"./iframe-CDrSurWy.js";import{C as m}from"./CheckboxGroup-CaeuSSbC.js";import{C as p}from"./Checkbox-CXKX_2du.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-C3Cs2Qyk.js";import"./utils-Dy1P41Mq.js";import"./clsx-B-dksMZM.js";import"./Text-BsD5HA04.js";import"./useFocusRing-8Ibh4hbP.js";import"./index-CpmYj3fJ.js";import"./index-BMiT6AWh.js";import"./clsx-Ciqy0D92.js";import"./Text-Dk-c4AnW.js";import"./Label-DUK1gpCy.js";import"./Button-CT7017SL.js";import"./Hidden-BWcF6djw.js";import"./useLabels-DEqi4d33.js";import"./useButton-uFHPbEdv.js";import"./Dialog-DsugA2t-.js";import"./RSPContexts-C5dhxqCN.js";import"./OverlayArrow-CKtKaixc.js";import"./useResizeObserver-BGlqLrkQ.js";import"./useControlledState-CUTCkVdb.js";import"./Collection-exSMqWcX.js";import"./index-Bt-_0jU4.js";import"./Separator-DqAVKRZm.js";import"./SelectionManager-CkEwOTsz.js";import"./useEvent-wOK8FOZ6.js";import"./scrollIntoView-DrqSbS4m.js";import"./SelectionIndicator-DbKoimpb.js";import"./useDescription-BahndL2P.js";import"./ListKeyboardDelegate-DTARREwl.js";import"./PressResponder-B_QAD0cZ.js";import"./useLocalizedStringFormatter-DuF-ONi0.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CQcnHDD2.js";import"./VisuallyHidden-CqzoDPo1.js";import"./useLocalizedStringFormatter-BU9LyYpX.js";import"./Button-D1Cx7yto.js";import"./Button.module-CtQ1deO8.js";import"./x-AoPWifd7.js";import"./createLucideIcon-DtA62ZGX.js";import"./Heading-IZt5eFTf.js";import"./info-DpdMQddw.js";import"./Popover-Deiv21my.js";import"./useFormValidation-B_INn_a1.js";import"./useField-B-0diuV7.js";import"./Form-ZXuVoE0Z.js";import"./check-CPRbU5Y6.js";import"./useToggleState-DIIvIIiX.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
