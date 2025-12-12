import{j as e}from"./iframe-Cy9xQwF6.js";import{C as m}from"./CheckboxGroup-DQ-UlgJc.js";import{C as p}from"./Checkbox-hxShR7x4.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DlJvAPsp.js";import"./utils-CX91mN24.js";import"./clsx-B-dksMZM.js";import"./Text-EiK0GjXA.js";import"./useFocusRing-eGyNtlnv.js";import"./index-wz2WhQ9W.js";import"./index-CLKliA_Q.js";import"./clsx-Ciqy0D92.js";import"./Text-in_uCIcq.js";import"./Label-BfnlKoKi.js";import"./Button-D4DaLWR4.js";import"./Hidden-DMiuVEcg.js";import"./useLabels-Bn5QEtDZ.js";import"./useButton-LhbsvKtL.js";import"./Dialog-DvRymg4l.js";import"./RSPContexts-BygzARCD.js";import"./OverlayArrow-v9G_YlFK.js";import"./useResizeObserver-C0eTb9yn.js";import"./useControlledState-CLnNsNKS.js";import"./Collection-Bxj0UpEc.js";import"./index-08ROoh00.js";import"./Separator-DQTnEdVU.js";import"./SelectionManager-DCjNTz9O.js";import"./useEvent-DGA9jmm-.js";import"./scrollIntoView-CPTgXU84.js";import"./SelectionIndicator-CsP0uaVU.js";import"./useDescription-eJSpB747.js";import"./ListKeyboardDelegate-dK4g9XO_.js";import"./PressResponder-eeg6mLp7.js";import"./useLocalizedStringFormatter-6fLhkzE_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-hBxNwP5K.js";import"./VisuallyHidden-DExMWTTn.js";import"./Button-BTN2abfL.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BbLBIRys.js";import"./createLucideIcon-DOfRWyVf.js";import"./x-8M2IUNr7.js";import"./Heading-C7z8kAIo.js";import"./info-CwYxfrXG.js";import"./Popover-DyC09Xrb.js";import"./useFormValidation-DDWgL35p.js";import"./useField-BSOim3Yx.js";import"./Form-D_OLi_8Q.js";import"./check-B84P3OkL.js";import"./useToggleState-Kc3X2ZTt.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
