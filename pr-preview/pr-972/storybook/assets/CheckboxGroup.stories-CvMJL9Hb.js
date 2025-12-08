import{j as e}from"./iframe-NQwQ8Ipc.js";import{C as m}from"./CheckboxGroup-DkDrFIYj.js";import{C as p}from"./Checkbox-Ds2yDHq1.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-aq8gcakB.js";import"./utils-CagmBR4h.js";import"./clsx-B-dksMZM.js";import"./Text-C_uAOKRC.js";import"./useFocusRing-ChWSchxP.js";import"./index-D5MLpHUU.js";import"./index-Cvu387iz.js";import"./clsx-Ciqy0D92.js";import"./Text-YxgCEkkP.js";import"./Label-DU1KZilr.js";import"./Button-BD9SwyBt.js";import"./Hidden-CMhcaOTC.js";import"./useLabels-B0KRHn3k.js";import"./useButton-CEbDpz1S.js";import"./Dialog-B1XSLwxn.js";import"./RSPContexts-BtehIcvf.js";import"./OverlayArrow-DbAqa-xg.js";import"./useResizeObserver-Bf2XUjIv.js";import"./useControlledState-C5kK2k2z.js";import"./Collection-CgH9y7rA.js";import"./index-BoF2Q7cm.js";import"./Separator-BMs47c8O.js";import"./SelectionManager-CF8t7v__.js";import"./useEvent-zLeWJTeo.js";import"./scrollIntoView-BHqusxUp.js";import"./SelectionIndicator-BaEmZcqu.js";import"./useDescription-Dgt-8WJE.js";import"./ListKeyboardDelegate-BPHDB0oM.js";import"./PressResponder-CU_iIlAi.js";import"./useLocalizedStringFormatter-Cw0M4ILW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DOXk8-VT.js";import"./VisuallyHidden-DcGuHUr7.js";import"./Button-CDPGYKZu.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B5C2l5IJ.js";import"./createLucideIcon-pmY9-a6l.js";import"./x-BAa2SIzJ.js";import"./Heading-MJ45rYTR.js";import"./info-CThQYv_2.js";import"./Popover-DZXAIx4I.js";import"./useFormValidation-C3YSdpOu.js";import"./useField-Dfen7gtH.js";import"./Form-xiO26wzP.js";import"./check-fmUNv7z0.js";import"./useToggleState-B8UalTdc.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
