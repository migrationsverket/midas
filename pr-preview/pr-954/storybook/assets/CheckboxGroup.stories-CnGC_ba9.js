import{j as e}from"./iframe-DwenO7ee.js";import{C as m}from"./CheckboxGroup-uhz0pCwi.js";import{C as p}from"./Checkbox-DY1LB0JQ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-D0wasyEZ.js";import"./utils-B04QOTqX.js";import"./clsx-B-dksMZM.js";import"./Text-DBlsv5Fr.js";import"./useFocusRing-DMrg0sfB.js";import"./index-xMNIBZ7U.js";import"./index-DeJVUVa5.js";import"./clsx-Ciqy0D92.js";import"./Text-f-cH2Nc1.js";import"./Label-DVTIyPKl.js";import"./Button-BweeCEHL.js";import"./Hidden-Cu6WCKNR.js";import"./useLabels-CZNC_GkZ.js";import"./useButton-BxnkwXfu.js";import"./Dialog-CBZJb7MW.js";import"./RSPContexts-BkoZaB3n.js";import"./OverlayArrow-DTZ9SX0m.js";import"./useResizeObserver-BhOhVkDQ.js";import"./useControlledState-BpTl-34E.js";import"./Collection-Bvnyi-n-.js";import"./index-BgBpgMa-.js";import"./Separator-DP0E3I2M.js";import"./SelectionManager-BqHINbiI.js";import"./useEvent-CHalSxnW.js";import"./scrollIntoView-mzLO5Dzu.js";import"./SelectionIndicator-B1PjTVfM.js";import"./useDescription-Bo32FiVm.js";import"./ListKeyboardDelegate-DQUPQuil.js";import"./PressResponder-BMrkwj5U.js";import"./useLocalizedStringFormatter-BmtD3KPy.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CmvpSIIr.js";import"./VisuallyHidden-D6EEr8kz.js";import"./Button-B4MIMYl2.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3eP5Seam.js";import"./createLucideIcon-CA6X7-no.js";import"./x-B0tZ-htC.js";import"./Heading-CYGWc5e2.js";import"./info-DscQycJS.js";import"./Popover-B8hy8FhJ.js";import"./useFormValidation-DBCLm4XG.js";import"./useField-xxMGL5ET.js";import"./Form-DoGAbbt1.js";import"./check-Baee4wyn.js";import"./useToggleState-D_NoSbjk.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
