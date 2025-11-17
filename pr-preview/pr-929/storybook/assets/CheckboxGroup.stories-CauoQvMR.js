import{j as e}from"./iframe-DfKVIDFT.js";import{C as m}from"./CheckboxGroup-CrmYqmeY.js";import{C as p}from"./Checkbox-CJ-5NVsz.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Dd8N4USr.js";import"./utils-BsJ338XX.js";import"./clsx-B-dksMZM.js";import"./Text-T0mofHnw.js";import"./useFocusRing-DqSVY-T2.js";import"./index-DmKxMGqW.js";import"./index-i8eomWHR.js";import"./clsx-Ciqy0D92.js";import"./Text-Ds5rOpWL.js";import"./Label-DFm--mFs.js";import"./Button-B4NKyMIN.js";import"./Hidden-DXHl2rmN.js";import"./useLabels-DK3feGvu.js";import"./useButton-C03Un9El.js";import"./Dialog-9Jg-KTwI.js";import"./RSPContexts-3olCKSwS.js";import"./OverlayArrow-dN5W3qfQ.js";import"./useResizeObserver-DQillnCN.js";import"./useControlledState-D9mSLKmW.js";import"./Collection-RMEV8-7l.js";import"./index-DI2NCUeh.js";import"./Separator-B4U_Wf8a.js";import"./SelectionManager-q-Jo0_Cc.js";import"./useEvent-5uq1jlnw.js";import"./scrollIntoView-ekMIuG6i.js";import"./SelectionIndicator-CAoS7GoF.js";import"./useDescription-832-Jrdv.js";import"./ListKeyboardDelegate-CDJfq3DG.js";import"./PressResponder-C3GJ2_8T.js";import"./useLocalizedStringFormatter-CRP9x8Uw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CTx9KSmX.js";import"./VisuallyHidden-LQfzhTeZ.js";import"./useLocalizedStringFormatter-CCU9GJU2.js";import"./Button-BbeKBUCA.js";import"./Button.module-CtQ1deO8.js";import"./x-Dk5lZioI.js";import"./createLucideIcon-B4afkyr6.js";import"./Heading-B9V870LV.js";import"./info-rxLgc1WB.js";import"./Popover-DxtgOAZ7.js";import"./useFormValidation-B6hiRjg-.js";import"./useField-BlKwpNVf.js";import"./Form-C271ZPZa.js";import"./check-DFrvmUYb.js";import"./useToggleState-H3hl2fEi.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
