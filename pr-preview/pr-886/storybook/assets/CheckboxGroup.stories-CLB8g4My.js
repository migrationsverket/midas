import{j as e}from"./iframe-DpimZ4vu.js";import{C as m}from"./CheckboxGroup-BeR7Q-Qm.js";import{C as p}from"./Checkbox-CtHmCwja.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldError-yhW5HiV-.js";import"./utils-sUShH4Zp.js";import"./clsx-B-dksMZM.js";import"./Text-BU40xBzY.js";import"./useFocusRing-Cvk1I5yA.js";import"./index-BFp4dbMl.js";import"./index-DXLavACN.js";import"./clsx-Ciqy0D92.js";import"./Text-HCdZ9zIX.js";import"./Label-Jwvz9Fta.js";import"./Button-BlvOxMDL.js";import"./Hidden-D8U0ds-5.js";import"./useLabels-QQqtllqV.js";import"./useButton-DLLjkHVB.js";import"./Dialog-CVZshKv3.js";import"./RSPContexts-1RfZJYPH.js";import"./OverlayArrow-SgNghUhB.js";import"./useResizeObserver-DJuKL5dl.js";import"./useControlledState-Dm6fk6wz.js";import"./Collection-DlV8H-tA.js";import"./index-CbW4XJ0e.js";import"./Separator-Dlofws8s.js";import"./SelectionManager-B1dG0Ioj.js";import"./useEvent-DSaRE3GX.js";import"./scrollIntoView-CCfZUFZI.js";import"./SelectionIndicator-BeJQHKjq.js";import"./useDescription-DR9U-L1o.js";import"./ListKeyboardDelegate-DHABxEAq.js";import"./PressResponder-TI8tGZgJ.js";import"./useLocalizedStringFormatter-k2WHvzo2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DCJmM9dv.js";import"./VisuallyHidden-D38RTIJD.js";import"./useLocalizedStringFormatter-BuRxbTNW.js";import"./Button-CAiuqkSW.js";import"./Button.module-CtQ1deO8.js";import"./x-D4VC0369.js";import"./createLucideIcon-2ltAEOx8.js";import"./Heading-B4MNzCXT.js";import"./info-CNS_noCK.js";import"./Popover-BhvEodTv.js";import"./useFormValidation-C8ab9TDZ.js";import"./useField-CyRcp8lA.js";import"./Form-DGvMXseD.js";import"./check-Dl8oh1ed.js";import"./useToggleState-DspxzRnw.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
