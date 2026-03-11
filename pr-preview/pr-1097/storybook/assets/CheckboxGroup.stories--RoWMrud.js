import{j as e}from"./iframe-BXrAfsjq.js";import{C as m}from"./CheckboxGroup-DFCdZjl_.js";import{C as p}from"./Checkbox-DgWI9MI3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BVjBbXJN.js";import"./utils-cdAGpjgV.js";import"./clsx-B-dksMZM.js";import"./Text-aWKwJErA.js";import"./useFocusRing-DgM5hB_S.js";import"./index-DX8EYVJ-.js";import"./index-Dw2cXarQ.js";import"./clsx-Ciqy0D92.js";import"./Text-DoxGzedC.js";import"./Label-DvNqAWHO.js";import"./Button-By4fIxyI.js";import"./Hidden-DJwBGsVR.js";import"./useLabels-CpmKdeaa.js";import"./useButton-V4TYrtKf.js";import"./Dialog-CBk-ybdk.js";import"./RSPContexts-CF2MUXv8.js";import"./OverlayArrow-Bv43kkkE.js";import"./useResizeObserver-CWswtw0p.js";import"./useControlledState-CpFSzBx7.js";import"./Collection-DYPBJSc4.js";import"./index-OX4n_qIn.js";import"./Separator-CbszEgXG.js";import"./SelectionManager-ICojmhGd.js";import"./useEvent-BoaBlzfX.js";import"./scrollIntoView-3U7tLxsU.js";import"./SelectionIndicator-DVkUuBm9.js";import"./useDescription-t7xMbrFZ.js";import"./ListKeyboardDelegate-kcZGjyqX.js";import"./PressResponder-Hk8K6EH6.js";import"./useLocalizedStringFormatter-A_mBW6J-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-B1yYIs_w.js";import"./getScrollParent-CVvcmYh-.js";import"./VisuallyHidden-DmvbNouy.js";import"./Button-ClxvzqtQ.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CRM_oh5H.js";import"./createLucideIcon-CYigPS-O.js";import"./x-D2S3wmoi.js";import"./Heading-zviiFLoA.js";import"./info-C66L3Ywm.js";import"./Popover-BHZTG6i5.js";import"./useFormValidation-BLxToia1.js";import"./useField-JUGchugn.js";import"./Form-vt0dRRGK.js";import"./check-BkBXeNks.js";import"./useToggleState-CUF9eVcm.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
