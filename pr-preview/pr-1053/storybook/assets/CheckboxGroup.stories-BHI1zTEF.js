import{j as e}from"./iframe-GzN0VSzx.js";import{C as m}from"./CheckboxGroup-Cjh6QyGB.js";import{C as p}from"./Checkbox-B8Q3CKcj.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DXzy-Fs_.js";import"./utils-dcWRHMqA.js";import"./clsx-B-dksMZM.js";import"./Text-BytI2fT-.js";import"./useFocusRing-BT84Sj0b.js";import"./index-BtUmmQ1y.js";import"./index-DkoMqfON.js";import"./clsx-Ciqy0D92.js";import"./Text-DW2oSw1u.js";import"./Label-CXQZZd10.js";import"./Button-B9ouc3Vz.js";import"./Hidden-BiK8gQF-.js";import"./useLabels-8wBAXN0N.js";import"./useButton-BJTX_GMM.js";import"./Dialog-BB0cbBWM.js";import"./RSPContexts-DntI5H5m.js";import"./OverlayArrow-B4Mvj34m.js";import"./useResizeObserver-DzkMjZLw.js";import"./useControlledState-CFkZ7Ywi.js";import"./Collection-DlB3NQT_.js";import"./index-CD7Lnybu.js";import"./Separator-CAURjAbf.js";import"./SelectionManager-yF3l3XTv.js";import"./useEvent-kmBIgIh4.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BPUPbomw.js";import"./useDescription-DH1k0dXL.js";import"./ListKeyboardDelegate-tH97EUPf.js";import"./PressResponder-Bqn7NlWU.js";import"./useLocalizedStringFormatter-CkwJfZLX.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Ti5FQfNt.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bf3adftS.js";import"./Button-BcwNb2j2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-9sMeAIfj.js";import"./createLucideIcon-KJI_USZY.js";import"./x-BypicB4y.js";import"./Heading-qWubh4fZ.js";import"./info-BwCMCLwi.js";import"./Popover-CDfA2okm.js";import"./useFormValidation-doFWEBdr.js";import"./useField-DN3tkGHh.js";import"./Form-BMjB8i_m.js";import"./check--HQmsiyh.js";import"./useToggleState-DjnvG65b.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
