import{j as e}from"./iframe-GcUoBMSg.js";import{C as m}from"./CheckboxGroup-DBo7dpKo.js";import{C as p}from"./Checkbox-DF_jE9Az.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-UiNQLKTT.js";import"./utils-rtD3T3TW.js";import"./clsx-B-dksMZM.js";import"./Text-F1ylVkWL.js";import"./useFocusRing-DIuTFd3b.js";import"./index-DRY6s0Uf.js";import"./index-CzFqfJNr.js";import"./clsx-Ciqy0D92.js";import"./Text-CNOZt7Js.js";import"./Label-SAUHtp-k.js";import"./Button-DSIvaIV3.js";import"./Hidden-BqpeSpmt.js";import"./useLabels-DexiCPCf.js";import"./useButton-DXkPYxVk.js";import"./Dialog-DYfIYppF.js";import"./RSPContexts-B8ZXf98J.js";import"./OverlayArrow-BcNhpTrX.js";import"./useResizeObserver-j9xgkMrU.js";import"./useControlledState-BbDaPJvR.js";import"./Collection-DN0v5seS.js";import"./index-D9YajRC4.js";import"./Separator-Dc2O86N8.js";import"./SelectionManager-C_5PIkPp.js";import"./useEvent-B47GfUV2.js";import"./scrollIntoView-DEGH2g_V.js";import"./SelectionIndicator-BRxVJQ3E.js";import"./useDescription-DegkKtjI.js";import"./ListKeyboardDelegate-oF-WQ10S.js";import"./PressResponder-BWvYHgKI.js";import"./useLocalizedStringFormatter-ygoypWk4.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DJeQ7SrW.js";import"./VisuallyHidden-CO11mDnh.js";import"./Button-CKo_jchp.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-3VUd_YGv.js";import"./createLucideIcon-iWDg5CCZ.js";import"./x-CjwVpvAB.js";import"./Heading-S7p3z2GQ.js";import"./info-DQ1D_jpN.js";import"./Popover-nBLGaqsv.js";import"./useFormValidation-C1LSpa0E.js";import"./useField-Btqd0A1t.js";import"./Form-V0e49k1h.js";import"./check-Bi6fbL9P.js";import"./useToggleState-CjLZ749K.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
