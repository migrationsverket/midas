import{j as e}from"./iframe-BXrSm-hy.js";import{C as m}from"./CheckboxGroup-Z-ariAsM.js";import{C as p}from"./Checkbox-cKHW3hkx.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CDqWfdJf.js";import"./utils-m8hafyc1.js";import"./clsx-B-dksMZM.js";import"./Text-D-y5Nkc_.js";import"./useFocusRing-Dolnnvn8.js";import"./index-DH1xR7sx.js";import"./index-BEWugSXc.js";import"./clsx-Ciqy0D92.js";import"./Text-BpOUZ-T-.js";import"./Label-DCh2eexd.js";import"./Button-QWm8aeY3.js";import"./Hidden-Bt1SQac9.js";import"./useLabels-BpFbPl_Z.js";import"./useButton-lx5Wqlq6.js";import"./Dialog-B-jsIdFo.js";import"./RSPContexts-BrZ6stA1.js";import"./OverlayArrow-Tc9nsuaS.js";import"./useResizeObserver-BW9eI8vu.js";import"./useControlledState-D-2kZI1H.js";import"./Collection-V7haSTvz.js";import"./index-BfXHwUr8.js";import"./Separator-Cjx8ObZX.js";import"./SelectionManager-Ccbj1cbx.js";import"./useEvent-B4KqqYDZ.js";import"./scrollIntoView-Be-7cfO7.js";import"./SelectionIndicator-C5uXLrVT.js";import"./useDescription-BgOqUMKe.js";import"./ListKeyboardDelegate-BnfSiAt7.js";import"./PressResponder-Byq9ymm9.js";import"./useLocalizedStringFormatter-DxuMEbeM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ce0_Z5Jv.js";import"./getScrollParent-DJrEkJWW.js";import"./VisuallyHidden-CdQ2OkWx.js";import"./x-qLqiK7s0.js";import"./createLucideIcon-DYDRqzsr.js";import"./useLocalizedStringFormatter-Dv29l914.js";import"./Heading-BGxn5ss1.js";import"./Button-DLjOZTyV.js";import"./Button.module-D_C6WeTN.js";import"./info-BOEIge97.js";import"./Popover-DlU6RgBw.js";import"./useFormValidation-CUGfxI3J.js";import"./useField-Bft9auoy.js";import"./Form-CawK5RnY.js";import"./check-B0rzxJtq.js";import"./useToggleState-Ik2fKqBk.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
