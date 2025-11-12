import{j as e}from"./iframe-CUHTTXY9.js";import{C as m}from"./CheckboxGroup-B07UG0LY.js";import{C as p}from"./Checkbox-BHx-L8F9.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DhrB2_qe.js";import"./utils-Dcvemnmi.js";import"./clsx-B-dksMZM.js";import"./Text-D835pmOj.js";import"./useFocusRing-DjsRWKNx.js";import"./index-CAqaGyj3.js";import"./index-4Ydb_h1E.js";import"./clsx-Ciqy0D92.js";import"./Text-Bxb0XJzo.js";import"./Label-tougiJwH.js";import"./Button-CTW6va-d.js";import"./Hidden-D4n6kN_K.js";import"./useLabels-BI5qQt6r.js";import"./useButton-BfZu2Gs4.js";import"./Dialog-DkgCJQSt.js";import"./RSPContexts-AZZ75FD2.js";import"./OverlayArrow-Cpc0h32s.js";import"./useResizeObserver-BShnbDig.js";import"./useControlledState-Dsr3uqIL.js";import"./Collection-BPNeuvlU.js";import"./index-CbxZ2bGO.js";import"./Separator-BkH_9Uti.js";import"./SelectionManager-_hhoXmEe.js";import"./useEvent-M16ECpV-.js";import"./scrollIntoView-1WMQlWAp.js";import"./SelectionIndicator-CoyJ6FxV.js";import"./useDescription-BM1Fm2SQ.js";import"./ListKeyboardDelegate-ComYmjGR.js";import"./PressResponder-T0OSPyo_.js";import"./useLocalizedStringFormatter-CrK0txrp.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-Dau4AleY.js";import"./VisuallyHidden-B5Z1t7Bp.js";import"./useLocalizedStringFormatter-Dc6_OVdg.js";import"./Button-BpmtbzrD.js";import"./Button.module-CtQ1deO8.js";import"./x-Dph03mwd.js";import"./createLucideIcon-BTFShZrE.js";import"./Heading-CrKTex-4.js";import"./info-Bel7BPXx.js";import"./Popover-CDe_pLS-.js";import"./useFormValidation-1u9KplN9.js";import"./useField-D95uEWDm.js";import"./Form-CRJFAWD6.js";import"./check-DWcfrgzF.js";import"./useToggleState-DYa3roFm.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
