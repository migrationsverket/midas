import{j as e}from"./iframe-BWc43a1O.js";import{C as m}from"./CheckboxGroup-UizBKfse.js";import{C as p}from"./Checkbox-BlkSXwv3.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B8r7qfMZ.js";import"./utils-39kWX_LE.js";import"./clsx-B-dksMZM.js";import"./Text-DAytGxCt.js";import"./useFocusRing-C4VyUsZg.js";import"./index-CLPYF8fa.js";import"./index-CGp4UFbQ.js";import"./clsx-Ciqy0D92.js";import"./Text-BcD4jl1C.js";import"./Label-DEDMf6ns.js";import"./Button-D8sshy66.js";import"./Hidden-CJZ0JVr6.js";import"./useLabels-Cx5jYDxX.js";import"./useButton-DMB5d1hu.js";import"./Dialog-DUNFkMUW.js";import"./RSPContexts-C4lt73rl.js";import"./OverlayArrow-CGIuurpL.js";import"./useResizeObserver-DLaqHKLH.js";import"./useControlledState-2cnZjxyB.js";import"./Collection-CoR1ILLM.js";import"./index-BEi9dFA3.js";import"./Separator-C6dCCEwp.js";import"./SelectionManager-DcmAlHpt.js";import"./useEvent-BStJuAN2.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Dab4Jfto.js";import"./useDescription-DTPWIusX.js";import"./ListKeyboardDelegate-Jxu6v7Ls.js";import"./PressResponder-COWZRMh9.js";import"./useLocalizedStringFormatter-RWz-MW4O.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-CvaxS6yv.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-BkExIDrJ.js";import"./Button-Dko06iif.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BwtwStJt.js";import"./createLucideIcon-CFy2YlCm.js";import"./x-BymJwMBN.js";import"./Heading-CBDXh2kn.js";import"./info-D5eE1DC0.js";import"./Popover-kRCuYCJN.js";import"./useFormValidation-AEiBswFt.js";import"./useField-Brc245Bn.js";import"./Form-PZDttHkQ.js";import"./check-evZjM5lH.js";import"./useToggleState-CTUwgMPH.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
