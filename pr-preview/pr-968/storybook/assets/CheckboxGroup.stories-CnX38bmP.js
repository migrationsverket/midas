import{j as e}from"./iframe-CACK1ifN.js";import{C as m}from"./CheckboxGroup-CaQ8jDB1.js";import{C as p}from"./Checkbox-DFn_q_rl.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bhe1g_YD.js";import"./utils-DrYd9Pqd.js";import"./clsx-B-dksMZM.js";import"./Text-BnT-eFzO.js";import"./useFocusRing-DYoY7B0o.js";import"./index-Cso1iP6f.js";import"./index-RncFtgOS.js";import"./clsx-Ciqy0D92.js";import"./Text-CRhY20oU.js";import"./Label-rxg6-Xes.js";import"./Button-J7gLD4uT.js";import"./Hidden-C1FS9acW.js";import"./useLabels-C_najzVY.js";import"./useButton-DYZev9kh.js";import"./Dialog-B5kUQCj1.js";import"./RSPContexts-Bjnw7db_.js";import"./OverlayArrow-DLj8T8PD.js";import"./useResizeObserver-Crrk23vz.js";import"./useControlledState-DCOK662h.js";import"./Collection-CAmhBvgE.js";import"./index-Cq_3bRrR.js";import"./Separator-D61x4Nam.js";import"./SelectionManager-D-ZLegKB.js";import"./useEvent-CM7-6yi_.js";import"./scrollIntoView-B7hwb_SX.js";import"./SelectionIndicator-sFKgU-Ui.js";import"./useDescription-osvHzt0k.js";import"./ListKeyboardDelegate-CxhWwM1o.js";import"./PressResponder-1GogWAhd.js";import"./useLocalizedStringFormatter-D7qp87au.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DcH05knO.js";import"./VisuallyHidden-COi0BVk3.js";import"./Button-BoPq1AVj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-AIFce-v4.js";import"./createLucideIcon-G0rIHLkb.js";import"./x-PeF9jKEP.js";import"./Heading-D4-h0TMa.js";import"./info-DGPMZgFD.js";import"./Popover-Ca39AIkX.js";import"./useFormValidation-0NxoFJwH.js";import"./useField-DFHBiafe.js";import"./Form-Cy_bBUnn.js";import"./check-CMts_VWX.js";import"./useToggleState-C41Sud-O.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
