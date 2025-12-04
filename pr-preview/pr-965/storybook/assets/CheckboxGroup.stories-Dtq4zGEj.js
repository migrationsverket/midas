import{j as e}from"./iframe-BiGwQC7B.js";import{C as m}from"./CheckboxGroup-BVIO3HH5.js";import{C as p}from"./Checkbox-CYd06Z7O.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BdtM7o8g.js";import"./utils-C30Tz2FV.js";import"./clsx-B-dksMZM.js";import"./Text-CGAgsi4Y.js";import"./useFocusRing-Yc3HhkHH.js";import"./index-tDrwXmSr.js";import"./index-CukiPHwP.js";import"./clsx-Ciqy0D92.js";import"./Text-aG3lDf3K.js";import"./Label-CLSu6hEu.js";import"./Button-wh89retW.js";import"./Hidden-FKjmD1jf.js";import"./useLabels-B8OQIyOs.js";import"./useButton-DM0HTRcL.js";import"./Dialog-CrCVMneY.js";import"./RSPContexts-D_ivU-ZX.js";import"./OverlayArrow-D30kDzpP.js";import"./useResizeObserver-DYkmBeUS.js";import"./useControlledState-BsPOPDnb.js";import"./Collection-Dj3hLLkE.js";import"./index-CcnGAl9P.js";import"./Separator-Cc5LirtC.js";import"./SelectionManager-D4LjFjr8.js";import"./useEvent-BGxB7qrz.js";import"./scrollIntoView-DztyhQpp.js";import"./SelectionIndicator-MQ04DVD-.js";import"./useDescription-D2kvnLh0.js";import"./ListKeyboardDelegate-CZDG5-z1.js";import"./PressResponder-C65zphIG.js";import"./useLocalizedStringFormatter-DWUwKKLO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BCvUZjbw.js";import"./VisuallyHidden-BsPxQLTF.js";import"./Button-CIRUUK5p.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Dfxgqjph.js";import"./createLucideIcon-DBZ-Oss7.js";import"./x-CDnnqeqz.js";import"./Heading-BrwkFCbz.js";import"./info-DFMjCQMu.js";import"./Popover-DE6rY3BO.js";import"./useFormValidation-LCwChDGO.js";import"./useField-B9Ft1-xe.js";import"./Form-C7dWceJW.js";import"./check-CGMuPGan.js";import"./useToggleState-c_g6sdiT.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
