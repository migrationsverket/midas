import{j as e}from"./iframe-DmYAiZdS.js";import{C as m}from"./CheckboxGroup-CDfe6bqE.js";import{C as p}from"./Checkbox-Sl9syU6C.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-UD24mey6.js";import"./utils-Ce8T3nBz.js";import"./clsx-B-dksMZM.js";import"./Text-Cpi_AAzk.js";import"./useFocusRing-uVSx56YJ.js";import"./index-Clg0oazY.js";import"./index-BekCUKef.js";import"./clsx-Ciqy0D92.js";import"./Text-DrUi_0Jd.js";import"./Label-CYq_eSu0.js";import"./Button-B_13vb86.js";import"./Hidden-DSqyIKF7.js";import"./useLabels-o8QMpPqb.js";import"./useButton-DhL-fajU.js";import"./Dialog-BDsEG8m5.js";import"./RSPContexts-6HyyfxyX.js";import"./OverlayArrow-CiQoy8mT.js";import"./useResizeObserver-ANlX-eKR.js";import"./useControlledState-C0DEKgGJ.js";import"./Collection-0fQlzL78.js";import"./index-CQQkbUYQ.js";import"./Separator-D0kpJxeR.js";import"./SelectionManager-BVp_eIxO.js";import"./useEvent-BzBaGFQj.js";import"./scrollIntoView-7nJ5XGAi.js";import"./SelectionIndicator-CMBrlIkZ.js";import"./useDescription-Bg_KyiAu.js";import"./ListKeyboardDelegate-CCjCEqng.js";import"./PressResponder-CeZflBSS.js";import"./useLocalizedStringFormatter-BxKtkIxd.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-BeWaAnEg.js";import"./getScrollParent-Bu3T6bJu.js";import"./VisuallyHidden-HoFr5-6u.js";import"./x-BXdaKO9_.js";import"./createLucideIcon-Cd1S2Ifo.js";import"./useLocalizedStringFormatter-BrrMXkxk.js";import"./Heading-7gcbadRA.js";import"./Button-CF56JNsj.js";import"./Button.module-BB7N-cLd.js";import"./info-BMZ4m3ic.js";import"./Popover-DOnUpo5Y.js";import"./Form-MQFNPBez.js";import"./useField-BQBCqG7h.js";import"./check-Bw_ThLBT.js";import"./useToggleState-BkT2Pvk_.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
