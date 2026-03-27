import{j as e}from"./iframe-Csz20ARP.js";import{C as m}from"./CheckboxGroup-CUwT0C5u.js";import{C as p}from"./Checkbox-9W6fyOQS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DCrfS5vQ.js";import"./utils-CLTlmF8J.js";import"./clsx-B-dksMZM.js";import"./Text-C-Hcl69m.js";import"./useFocusRing-86VLoSnj.js";import"./index-DgqWrau-.js";import"./index-8BKLnV0B.js";import"./clsx-Ciqy0D92.js";import"./Text--2gnQNTy.js";import"./Label-BwojbAdx.js";import"./Button-kUaaPtXV.js";import"./Hidden-Be3C43tB.js";import"./useLabel-B-St2Amk.js";import"./useLabels-ChCuyKnh.js";import"./useButton-DECUyEyv.js";import"./Dialog-j5bOtoHJ.js";import"./RSPContexts-CleR7f2E.js";import"./OverlayArrow-C_GZ3LIR.js";import"./useResizeObserver-C2eKhyu0.js";import"./useControlledState-C0z1d-QQ.js";import"./Collection-C1RlERD9.js";import"./index-DsHRxv5I.js";import"./Separator-B6KNmzSM.js";import"./SelectionManager-CZkyF8t-.js";import"./useEvent-BW8WGxtg.js";import"./scrollIntoView-CF0w4XnJ.js";import"./SelectionIndicator-D3inM4um.js";import"./useDescription-D_Cu_EP8.js";import"./ListKeyboardDelegate-Bqu8vzp_.js";import"./PressResponder-BLlHH-R6.js";import"./useLocalizedStringFormatter-l_-wyep1.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BmeOkpPh.js";import"./getScrollParent-CETkwjQI.js";import"./VisuallyHidden-D5NA-uw_.js";import"./x-BnuAwExu.js";import"./createLucideIcon-BQ-CV6Lk.js";import"./useLocalizedStringFormatter-B7OoXNKl.js";import"./Heading-C8B2tW6e.js";import"./Button-CwrtXb_B.js";import"./Button.module-BB7N-cLd.js";import"./info-BbnZLDec.js";import"./Popover-DeSMm_kw.js";import"./Form-BfSRrjfS.js";import"./useField-DIH099Vh.js";import"./check-Cqig4paI.js";import"./useToggleState-BnST2m_4.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
