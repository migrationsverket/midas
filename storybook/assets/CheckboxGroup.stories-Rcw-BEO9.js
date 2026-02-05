import{j as e}from"./iframe-BZXvBH-F.js";import{C as m}from"./CheckboxGroup-DwVgUDrU.js";import{C as p}from"./Checkbox-DRlcAe_E.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BKwMNI7Z.js";import"./utils-D0cahHWr.js";import"./clsx-B-dksMZM.js";import"./Text-HwH_WpJH.js";import"./useFocusRing-BIld4Qij.js";import"./index-DMx_9hj9.js";import"./index-BV9gomH3.js";import"./clsx-Ciqy0D92.js";import"./Text-u8_6XOdU.js";import"./Label-CYllrU6o.js";import"./Button-qgUbEQ-x.js";import"./Hidden-BnqtCAFp.js";import"./useLabels-D7ZAiJsb.js";import"./useButton-DYEcZB5q.js";import"./Dialog-BKq2z-LH.js";import"./RSPContexts-BaMpnc-i.js";import"./OverlayArrow-B-8H3eeE.js";import"./useResizeObserver-DsnhC2g0.js";import"./useControlledState-92nob15h.js";import"./Collection-YMyUPTpt.js";import"./index-B2buEDzq.js";import"./Separator-BDdmIhpD.js";import"./SelectionManager-CFTjhDPB.js";import"./useEvent-Ba2kTEre.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BQPW2A8r.js";import"./useDescription-yvRYLG0u.js";import"./ListKeyboardDelegate-Bt21Vwxh.js";import"./PressResponder-DahGhdou.js";import"./useLocalizedStringFormatter-CZJb1YX-.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CXh_qZdV.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BrTCLNZ6.js";import"./Button-fGCQSPeO.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BMdn7775.js";import"./createLucideIcon-DZcmQE6C.js";import"./x-Wf_arxs9.js";import"./Heading-ldMWt8d7.js";import"./info-qH6Uj3qK.js";import"./Popover-BItSiT5i.js";import"./useFormValidation-M8hBmAjU.js";import"./useField-BVbxo933.js";import"./Form-ColHnssL.js";import"./check-ChQCdtYO.js";import"./useToggleState-DmkBLLG0.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
