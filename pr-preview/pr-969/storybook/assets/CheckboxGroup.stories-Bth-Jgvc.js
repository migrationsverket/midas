import{j as e}from"./iframe-cjgaQTbV.js";import{C as m}from"./CheckboxGroup-kRwI6P-N.js";import{C as p}from"./Checkbox-DJM_MvjS.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DSvxWesv.js";import"./utils-B7obR6Um.js";import"./clsx-B-dksMZM.js";import"./Text-DzSej0my.js";import"./useFocusRing-tZdXTMa6.js";import"./index-CMBZFI91.js";import"./index-BuJptDJm.js";import"./clsx-Ciqy0D92.js";import"./Text-BAi7lGpW.js";import"./Label-CuBawSra.js";import"./Button-Bc8n5vPI.js";import"./Hidden-BNDGTdgg.js";import"./useLabels-_lpRaq5N.js";import"./useButton-CJbE9EUu.js";import"./Dialog-BsLWpUMD.js";import"./RSPContexts-__dCJUmR.js";import"./OverlayArrow-tYVmOJei.js";import"./useResizeObserver-Br0kjitw.js";import"./useControlledState-fnpb4ApR.js";import"./Collection-nVug7_BD.js";import"./index-CpszQrPg.js";import"./Separator-BFF7Ylml.js";import"./SelectionManager-CZ8Ui-y-.js";import"./useEvent-D2p3mPWR.js";import"./scrollIntoView-DfJRvT_I.js";import"./SelectionIndicator-Dcikiw-2.js";import"./useDescription-DoEqjAMH.js";import"./ListKeyboardDelegate-CEa8y7i2.js";import"./PressResponder-5EseZFBi.js";import"./useLocalizedStringFormatter-Bja4yra-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DQLmtl1X.js";import"./VisuallyHidden-DFAX4X2F.js";import"./Button-CJqsJHUi.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DhHkNnmO.js";import"./createLucideIcon-B-E7-HZJ.js";import"./x-DPDdbP7_.js";import"./Heading-T_2JYl4t.js";import"./info-CNh9d9md.js";import"./Popover-B4wTK_E3.js";import"./useFormValidation-B16qkoBX.js";import"./useField-BZOCOk0a.js";import"./Form-BO_uRoUS.js";import"./check-CpcFRN_I.js";import"./useToggleState-E87EsBLN.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
