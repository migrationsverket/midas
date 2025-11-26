import{j as e}from"./iframe-ESnm-WG3.js";import{C as m}from"./CheckboxGroup-Bvf5xcQP.js";import{C as p}from"./Checkbox-yS8mlpgC.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-rr6C8cNr.js";import"./utils-CfF6X6ci.js";import"./clsx-B-dksMZM.js";import"./Text-CopC_eFr.js";import"./useFocusRing-DA_fDrnE.js";import"./index-vxsCmClI.js";import"./index-AgRx6xjg.js";import"./clsx-Ciqy0D92.js";import"./Text-DgO_WfAt.js";import"./Label-DNONlY1K.js";import"./Button-DFzAjeyw.js";import"./Hidden-CluJLsa9.js";import"./useLabels-CAK9137x.js";import"./useButton-6NzSPfmg.js";import"./Dialog-ClCm1x3w.js";import"./RSPContexts-FqK3r0D2.js";import"./OverlayArrow-DKF8GtH1.js";import"./useResizeObserver-DuCEJASZ.js";import"./useControlledState-Df7HUCxc.js";import"./Collection-C-8Cbsbh.js";import"./index-CjhXrpIL.js";import"./Separator-D5Pkyu2p.js";import"./SelectionManager-B4xzLv80.js";import"./useEvent-CO_Npdc0.js";import"./scrollIntoView-yDgqYeez.js";import"./SelectionIndicator-BnOJ7FHR.js";import"./useDescription-BG6y4S9U.js";import"./ListKeyboardDelegate-DSKO2hYg.js";import"./PressResponder-BkJSiJRg.js";import"./useLocalizedStringFormatter-DiyOzk1S.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CNw16W3a.js";import"./VisuallyHidden-D9McEQWq.js";import"./Button-C-IyseEW.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-Dl_alOYb.js";import"./createLucideIcon-BI482lZK.js";import"./x-Ctz3SHhN.js";import"./Heading-382vz7ef.js";import"./info-Dpv2K_Rl.js";import"./Popover-DOoH27IE.js";import"./useFormValidation-cPSQcZQK.js";import"./useField-CyX9ROHV.js";import"./Form-DXDc00WU.js";import"./check-Du4kcehd.js";import"./useToggleState-DkgvjCye.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
