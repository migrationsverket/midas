import{j as e}from"./iframe-CsxWE5EL.js";import{C as m}from"./CheckboxGroup-BchPr9ov.js";import{C as p}from"./Checkbox-C4eHxgJ-.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-A-GMFzj3.js";import"./utils-P0665-nd.js";import"./clsx-B-dksMZM.js";import"./Text-DUbIGWON.js";import"./useFocusRing-Dx7Mqj5I.js";import"./index-BAsiWoUz.js";import"./index-DKO6MG4x.js";import"./clsx-Ciqy0D92.js";import"./Text-3LyazC5v.js";import"./Label-C7IIDDt7.js";import"./Button-CDY69ujX.js";import"./Hidden-BqRB_zEB.js";import"./useLabels-h1mkGsRa.js";import"./useButton-BpMa8VN4.js";import"./Dialog-DKwgXXFo.js";import"./RSPContexts-DOv8Dn-z.js";import"./OverlayArrow-ChfjKiLu.js";import"./useResizeObserver-qJq3SY9_.js";import"./useControlledState-57nrhz75.js";import"./Collection-QyDzYr0n.js";import"./index-CNoJbepi.js";import"./Separator-C76nJCig.js";import"./SelectionManager-7GG-2FbB.js";import"./useEvent-Dd6OJrln.js";import"./scrollIntoView-MA0b_M3P.js";import"./SelectionIndicator-D79xjCK7.js";import"./useDescription-52SWgKDA.js";import"./ListKeyboardDelegate-D9S_djJW.js";import"./PressResponder-DWwJnZge.js";import"./useLocalizedStringFormatter-Z1dagDOh.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-tx7xcwso.js";import"./getScrollParent-pI-jvfbG.js";import"./VisuallyHidden-nLPm3Kol.js";import"./Button-yd2G3ZOl.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-P5TE6vXt.js";import"./createLucideIcon-CCm7dT8n.js";import"./x-4V_XJgsU.js";import"./Heading-Dzo7FbaI.js";import"./info-gv2Ig60z.js";import"./Popover-CET7FXjD.js";import"./useFormValidation-CrcNBzjy.js";import"./useField-qgzZoiS2.js";import"./Form-BDEr0D_A.js";import"./check-CTo0t4yo.js";import"./useToggleState-CVRUc1NF.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
