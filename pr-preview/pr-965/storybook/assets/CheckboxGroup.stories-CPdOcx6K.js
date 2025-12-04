import{j as e}from"./iframe-CUQ35QY-.js";import{C as m}from"./CheckboxGroup-AP_nHvof.js";import{C as p}from"./Checkbox-BXM5N_0L.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BjkxW7lY.js";import"./utils-5RKy4vaX.js";import"./clsx-B-dksMZM.js";import"./Text-TgbZ0VlZ.js";import"./useFocusRing-B7idPrX2.js";import"./index-CGbKJlQM.js";import"./index-C6uWvgQh.js";import"./clsx-Ciqy0D92.js";import"./Text-NEiftwSw.js";import"./Label-DPYqs3XR.js";import"./Button-Bsh9_HoT.js";import"./Hidden-Ct1SE1DS.js";import"./useLabels-Bt6x9uRf.js";import"./useButton-BansXk_T.js";import"./Dialog-CpdDlTkd.js";import"./RSPContexts-DZARiAzW.js";import"./OverlayArrow-MZd72Nlp.js";import"./useResizeObserver-CxbX0_JZ.js";import"./useControlledState-6cnBDVnB.js";import"./Collection-vZhapCR-.js";import"./index-B9eY4gM9.js";import"./Separator-Ces7Lb1C.js";import"./SelectionManager-Dbu5pjpk.js";import"./useEvent-DKevCmMh.js";import"./scrollIntoView-k0ZnzZN6.js";import"./SelectionIndicator-BuYH8QdD.js";import"./useDescription-DpHNilUH.js";import"./ListKeyboardDelegate-CSMrpsfr.js";import"./PressResponder-Vzfn8nnZ.js";import"./useLocalizedStringFormatter-CoOBbLCl.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-oXbVstWc.js";import"./VisuallyHidden-Bxln8_qY.js";import"./Button-B1Lfpc_P.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DHMj4qxM.js";import"./createLucideIcon-CfvbpDl0.js";import"./x-DKHs1ZuY.js";import"./Heading-DmIr2b1p.js";import"./info-DsodtU6p.js";import"./Popover-CbmKLSpx.js";import"./useFormValidation-t2gqBy82.js";import"./useField-CNFYxSKs.js";import"./Form-CM90o-DO.js";import"./check-DPv1d1qn.js";import"./useToggleState-BrpRC7Rg.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
