import{j as e}from"./iframe-to6ZPd-o.js";import{C as m}from"./CheckboxGroup-BSkLIPWm.js";import{C as p}from"./Checkbox-BOXCvQpM.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-kqWMyMLO.js";import"./utils-BaBklhKO.js";import"./clsx-B-dksMZM.js";import"./Text-rl71NDZH.js";import"./useFocusRing-mcA5BXJm.js";import"./index-BF--nVYl.js";import"./index-BCIYHMkX.js";import"./clsx-Ciqy0D92.js";import"./Text-Fu0lberS.js";import"./Label-Bv566uFP.js";import"./Button-BbbNB3BB.js";import"./Hidden-CKtvUpX0.js";import"./useLabels-D7I-5sOB.js";import"./useButton-CGov8omT.js";import"./Dialog-C5ua9aEL.js";import"./RSPContexts-Cl_-pRdh.js";import"./OverlayArrow-COMC2aM9.js";import"./useResizeObserver-Cex-N81r.js";import"./useControlledState-D9LO3zyF.js";import"./Collection-BQfUNU7j.js";import"./index-QilTSXto.js";import"./Separator-B_OYQdM-.js";import"./SelectionManager-DDcFZp9F.js";import"./useEvent-BcWNErzH.js";import"./scrollIntoView-CSwMpNjZ.js";import"./SelectionIndicator-DLpwXe8j.js";import"./useDescription-CRtdpkuv.js";import"./ListKeyboardDelegate-w5o95QTT.js";import"./PressResponder-I1STTir0.js";import"./useLocalizedStringFormatter-he1K6QfO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-CrXDP40W.js";import"./VisuallyHidden-rAuGCWJa.js";import"./Button-33ZWPybi.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-aWUqleFc.js";import"./createLucideIcon-DyGCeJBI.js";import"./x-BOSIFXhh.js";import"./Heading-C85iSoNW.js";import"./info-DJysSRKw.js";import"./Popover-HSF0T-3Y.js";import"./useFormValidation-BqiN7hi-.js";import"./useField-BzvU-3EX.js";import"./Form-MGDjvuyG.js";import"./check-Denc7_lS.js";import"./useToggleState-Bv9KliIq.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
