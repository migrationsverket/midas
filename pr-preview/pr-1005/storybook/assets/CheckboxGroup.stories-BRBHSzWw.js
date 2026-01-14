import{j as e}from"./iframe-BKHIzrax.js";import{C as m}from"./CheckboxGroup-TNtNZ5ob.js";import{C as p}from"./Checkbox-BDwcwRzK.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-B8rlzmnF.js";import"./utils-eagGX55s.js";import"./clsx-B-dksMZM.js";import"./Text-BZIVr77b.js";import"./useFocusRing-BQi4GTJZ.js";import"./index-DeiSO1eR.js";import"./index-BURsRzrN.js";import"./clsx-Ciqy0D92.js";import"./Text-B6QRIKA2.js";import"./Label-7cbOcuHc.js";import"./Button-tJyCLzUT.js";import"./Hidden-Uuem72q2.js";import"./useLabels-BY9SCAZ0.js";import"./useButton-BjW1xepF.js";import"./Dialog-D5wFmQjH.js";import"./RSPContexts-DS-_QmkS.js";import"./OverlayArrow-Cu3oOdi4.js";import"./useResizeObserver-BfzC8zUj.js";import"./useControlledState-jVzV3VRN.js";import"./Collection-C5_ZdiZt.js";import"./index-COWepd4V.js";import"./Separator-CncNXzq1.js";import"./SelectionManager-_wwg4auy.js";import"./useEvent-BTVfo0Ca.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Druru6wY.js";import"./useDescription-DorK6SQb.js";import"./ListKeyboardDelegate-BMd2ah3Z.js";import"./PressResponder-B7PbC8v_.js";import"./useLocalizedStringFormatter-B5xALe7F.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BDc4qkpT.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-C3Qtj23X.js";import"./Button-D46_7az7.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUZW3yS9.js";import"./createLucideIcon-DDmRbHsv.js";import"./x-CCKzm0I8.js";import"./Heading-DQMX8xDh.js";import"./info-WG-ufg32.js";import"./Popover-CRgmKirH.js";import"./useFormValidation-CNp4vzeH.js";import"./useField-D9QQBjQ_.js";import"./Form-D2sIDUA1.js";import"./check-BCE9jB2V.js";import"./useToggleState-DUuG0NMC.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
