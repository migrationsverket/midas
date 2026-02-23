import{j as e}from"./iframe-xAfmlG07.js";import{C as m}from"./CheckboxGroup-B__8VbBx.js";import{C as p}from"./Checkbox-BhJLaMWj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D0XPClu_.js";import"./utils-9cghZAOb.js";import"./clsx-B-dksMZM.js";import"./Text-DTHVKRvi.js";import"./useFocusRing-DuURs6wG.js";import"./index-Cr2BzmUh.js";import"./index-DtXyM2b7.js";import"./clsx-Ciqy0D92.js";import"./Text-Dg2zxxbH.js";import"./Label-CJ5DCym1.js";import"./Button-_CPn_6qY.js";import"./Hidden-CaQ6AcOr.js";import"./useLabels-CuSdSuM5.js";import"./useButton-CnRE8ofO.js";import"./Dialog-JhXE_H92.js";import"./RSPContexts-COny7Pe5.js";import"./OverlayArrow-BQzg_e_8.js";import"./useResizeObserver-C4Shs2bn.js";import"./useControlledState-B8262pyO.js";import"./Collection-B7cfVZ3K.js";import"./index-CRbTRMO1.js";import"./Separator-CQC-DCEi.js";import"./SelectionManager-CyVU1abT.js";import"./useEvent-juwi-LBt.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CUUhQe3s.js";import"./useDescription-BG0yfZwv.js";import"./ListKeyboardDelegate-CcmS_bQH.js";import"./PressResponder-DsrT-E5Y.js";import"./useLocalizedStringFormatter-C4Ie4IXR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-DwOyL9Gj.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BPCvzmAs.js";import"./Button-DlzyzK84.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-Dvc3cf-i.js";import"./createLucideIcon-xLqTy_XU.js";import"./x-DLZX4-ID.js";import"./Heading-CnWMyh0q.js";import"./info-6oHHkX08.js";import"./Popover-qRc5bSAQ.js";import"./useFormValidation-Dc5CfAEv.js";import"./useField-D592B_sa.js";import"./Form-4H72jiU6.js";import"./check-BKG1sG6b.js";import"./useToggleState-Bk9htqiJ.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
