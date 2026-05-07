import{j as e}from"./iframe-B3CWHhIN.js";import{C as m}from"./CheckboxGroup-wkKwhPQm.js";import{C as p}from"./Checkbox-4K6Eyn4b.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DaCLZlSC.js";import"./utils-Jns7c9tB.js";import"./clsx-B-dksMZM.js";import"./Text-CjXkmRxL.js";import"./useFocusRing-Dqy31Yu8.js";import"./index-BnJ3Y3M7.js";import"./index-CJ7rKWZW.js";import"./clsx-Ciqy0D92.js";import"./Text-BEt0Rg_V.js";import"./Label-BaMtZoUC.js";import"./Button-BI1n4R5H.js";import"./Hidden-CgV_CbEL.js";import"./useLabel-CC7uv02C.js";import"./useLabels-DG2yLXCg.js";import"./useButton-qyJkLJr0.js";import"./Dialog-5M_yJWc8.js";import"./RSPContexts-D5wE8Zis.js";import"./OverlayArrow-BBLynvro.js";import"./useResizeObserver-DehhQaPW.js";import"./useControlledState-DO7MzpyM.js";import"./Collection-DltRMGuJ.js";import"./index-DfG7SzIC.js";import"./Separator-B42A5QyY.js";import"./SelectionManager-BsMJ6UOF.js";import"./useEvent-Dz0-ORXf.js";import"./scrollIntoView-CEOdDLMX.js";import"./SelectionIndicator-CJ3Bq9Rm.js";import"./useDescription-BXbEU8r2.js";import"./ListKeyboardDelegate-Ddz2Dxjm.js";import"./PressResponder-XgRyzFBv.js";import"./useLocalizedStringFormatter-CcWFJj2d.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Buslp-fm.js";import"./getScrollParent-k-5r8MVO.js";import"./VisuallyHidden-DPG3Zp-i.js";import"./ModalOverlay-CDHf7O94.js";import"./x-BAAJthI0.js";import"./createLucideIcon-B55uVL59.js";import"./useLocalizedStringFormatter-FGEoJAjv.js";import"./Heading-J4CHMMjr.js";import"./Button-CFIqCifj.js";import"./Button.module-BB7N-cLd.js";import"./info-BnsgrLUO.js";import"./Popover-HDQOFG7J.js";import"./Form-DZNqsYbE.js";import"./useField-Dhf-tbRQ.js";import"./check-BG3r-55S.js";import"./useToggleState-BrCQNV94.js";const pr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const mr=["Primary","ShowSelectAll","SelectAllInteraction","Disabled","ReadOnly","Invalid"];export{s as Disabled,n as Invalid,o as Primary,i as ReadOnly,t as SelectAllInteraction,a as ShowSelectAll,mr as __namedExportsOrder,pr as default};
