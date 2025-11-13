import{j as e}from"./iframe-Bj-I_53F.js";import{C as m}from"./CheckboxGroup-gb58Df5l.js";import{C as p}from"./Checkbox-RwrSnV8_.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-QaZ2d8uP.js";import"./utils-AYBXNHWH.js";import"./clsx-B-dksMZM.js";import"./Text-DOZw3K2Z.js";import"./useFocusRing-3Uqdh2tR.js";import"./index-Cr9mSzEt.js";import"./index-DRLQ3B3R.js";import"./clsx-Ciqy0D92.js";import"./Text-BW7nmiG_.js";import"./Label-CkpabL1x.js";import"./Button-CYD4aiPQ.js";import"./Hidden-C4NKfEwd.js";import"./useLabels-R0WNnhTM.js";import"./useButton--bsyIudm.js";import"./Dialog-BMXojvkR.js";import"./RSPContexts-CldvHFix.js";import"./OverlayArrow-Czv8iarU.js";import"./useResizeObserver-CDeWg4As.js";import"./useControlledState-C7UYN2s_.js";import"./Collection-Dv3QAqst.js";import"./index-Bvlh8tRR.js";import"./Separator-Ly1TdqAI.js";import"./SelectionManager-dMnowY7v.js";import"./useEvent-C0iCA9HD.js";import"./scrollIntoView-CR2ITi7r.js";import"./SelectionIndicator-irqqzVMw.js";import"./useDescription-D15WWjzT.js";import"./ListKeyboardDelegate-Cdrm69H0.js";import"./PressResponder-BFk5IEgx.js";import"./useLocalizedStringFormatter-DCLhEoY8.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DGhJvWNi.js";import"./VisuallyHidden-BHWpIZFA.js";import"./useLocalizedStringFormatter-BN1MB58D.js";import"./Button-DjY0cfru.js";import"./Button.module-CtQ1deO8.js";import"./x-DP9rj5I0.js";import"./createLucideIcon-DCE2q9z-.js";import"./Heading-8W4drCzH.js";import"./info-qSN4S0E8.js";import"./Popover-DYokfV-S.js";import"./useFormValidation-DawZfh6P.js";import"./useField-Co9IJsjf.js";import"./Form-BajHUc8X.js";import"./check-BqyyptKR.js";import"./useToggleState-0ginwFro.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
