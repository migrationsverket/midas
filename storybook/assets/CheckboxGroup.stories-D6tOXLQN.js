import{j as e}from"./iframe-Db2uI-3P.js";import{C as m}from"./CheckboxGroup-CIkgxZez.js";import{C as p}from"./Checkbox-DZVpWniZ.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-4TO5MPa-.js";import"./utils-jUY8qSDP.js";import"./clsx-B-dksMZM.js";import"./Text-D0PoOoWm.js";import"./useFocusRing-CebZnfE_.js";import"./index-CVj3Bmq5.js";import"./index-Bysub-x3.js";import"./clsx-Ciqy0D92.js";import"./Text-EcRg05iA.js";import"./Label-Dfz3hbEd.js";import"./Button-DMQEpNPi.js";import"./Hidden-DjwTIE0a.js";import"./useLabels-DN0FLkUT.js";import"./useButton-D_S8tzc1.js";import"./Dialog-CJBFiC62.js";import"./RSPContexts-BhzCrXR4.js";import"./OverlayArrow-qf1Wj8PH.js";import"./useResizeObserver-BQUu9WDp.js";import"./useControlledState-CZZXp4YV.js";import"./Collection-vGTZtqDW.js";import"./index-Cd-ScXIK.js";import"./Separator-rU0mq3p8.js";import"./SelectionManager-XdgjPM_J.js";import"./useEvent-B69IVvH-.js";import"./scrollIntoView-DwOgRU02.js";import"./SelectionIndicator-BmqS678f.js";import"./useDescription-Cnit1L6t.js";import"./ListKeyboardDelegate-EGI5pkT2.js";import"./PressResponder-2G30C-xW.js";import"./useLocalizedStringFormatter-3OqgJ0pn.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-rHNg365m.js";import"./VisuallyHidden-BhcBefFA.js";import"./Button-Cc1zKl5-.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-CXXYPB7Q.js";import"./createLucideIcon-BFgY7rx4.js";import"./x-DKfF27R2.js";import"./Heading-CcM4BiAo.js";import"./info-EmqejzV1.js";import"./Popover-D7WTKJWT.js";import"./useFormValidation-D_AAXofS.js";import"./useField-D6ASrV9v.js";import"./Form-C-OcV_N4.js";import"./check-Czgd5byD.js";import"./useToggleState-BAbc3ys_.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
