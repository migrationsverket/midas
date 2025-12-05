import{j as e}from"./iframe-CDjUhHkf.js";import{C as m}from"./CheckboxGroup-BKfX5q35.js";import{C as p}from"./Checkbox-NQJDUpb1.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-vdgRg7Vd.js";import"./utils-BwP8WbxY.js";import"./clsx-B-dksMZM.js";import"./Text-B18pCq7H.js";import"./useFocusRing-CKu_fLWx.js";import"./index-CtchEpDY.js";import"./index-DoNQNwAs.js";import"./clsx-Ciqy0D92.js";import"./Text-CdNxzd7k.js";import"./Label-DRfpDCcy.js";import"./Button-ZrOuQ2QI.js";import"./Hidden-Bqtl1bJc.js";import"./useLabels-ueWd9dbD.js";import"./useButton-svinwHyX.js";import"./Dialog-NNigcS5v.js";import"./RSPContexts-DChnSr8e.js";import"./OverlayArrow--18yXwHW.js";import"./useResizeObserver-ClU8gpiW.js";import"./useControlledState-9B2Btxh8.js";import"./Collection-0IIJjKLO.js";import"./index-BnDbTwLi.js";import"./Separator-m6xfh49t.js";import"./SelectionManager-C_peV35v.js";import"./useEvent-CbUwsR45.js";import"./scrollIntoView-DAsjrTq5.js";import"./SelectionIndicator-MpA4obSc.js";import"./useDescription-qOG3Dy7D.js";import"./ListKeyboardDelegate-yDdHtdKS.js";import"./PressResponder-BM-14wCY.js";import"./useLocalizedStringFormatter-CYjVYPGP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-C4SgZTQS.js";import"./VisuallyHidden-CTrzc_wT.js";import"./Button-CAbYH_sj.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CGCNydTJ.js";import"./createLucideIcon-DB6p7_4V.js";import"./x-Dsr3KmO-.js";import"./Heading-DtuzeRSv.js";import"./info-C2WS_2jk.js";import"./Popover-CEKtWBqA.js";import"./useFormValidation-Dko6b5Xv.js";import"./useField-BKbsuMqP.js";import"./Form-Dvsz8yXN.js";import"./check-Dxu2PC11.js";import"./useToggleState-Cn4jFonQ.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
