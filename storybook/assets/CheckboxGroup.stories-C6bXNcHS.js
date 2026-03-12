import{j as e}from"./iframe-hjgHldhA.js";import{C as m}from"./CheckboxGroup-B55T_j9r.js";import{C as p}from"./Checkbox-B-WguI0S.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DyNIXA91.js";import"./utils-B2oy_Akv.js";import"./clsx-B-dksMZM.js";import"./Text-C-W1MFmh.js";import"./useFocusRing-DGqM0imy.js";import"./index-wWqPkfY9.js";import"./index-CZGdFrnq.js";import"./clsx-Ciqy0D92.js";import"./Text-BGjvDqqs.js";import"./Label-BupS0-_1.js";import"./Button-DdHA5O9n.js";import"./Hidden-CkBT3eQL.js";import"./useLabels-BUpPlZ0t.js";import"./useButton-3e8Qen6j.js";import"./Dialog-CU_5Duf5.js";import"./RSPContexts-BCs-XGXW.js";import"./OverlayArrow-Cv96EX0M.js";import"./useResizeObserver-CdNoBydG.js";import"./useControlledState-p8oWdHew.js";import"./Collection-BUI2UZ4s.js";import"./index-CcKajqZL.js";import"./Separator-CxX227d4.js";import"./SelectionManager-CJ1TE6-Q.js";import"./useEvent-mNSED06z.js";import"./scrollIntoView-BEdUUvdG.js";import"./SelectionIndicator-CcgAMD0V.js";import"./useDescription-g6-DJmWb.js";import"./ListKeyboardDelegate-CjrSiomx.js";import"./PressResponder-DUSCNq91.js";import"./useLocalizedStringFormatter-QPyrmh33.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-teKMIvIr.js";import"./getScrollParent-BME3aSxN.js";import"./VisuallyHidden-pF8Dh8C_.js";import"./x-DBeRfKB2.js";import"./createLucideIcon-DxWbUO7j.js";import"./useLocalizedStringFormatter-qYAAoSTQ.js";import"./Heading-DuV-GoVL.js";import"./Button-D4ayGKxz.js";import"./Button.module-D_C6WeTN.js";import"./info-DayYRgE6.js";import"./Popover-DdSYMRVH.js";import"./useFormValidation-CpAXD96F.js";import"./useField-CXw-Mbui.js";import"./Form-B6NlaSyc.js";import"./check-HtAUU4EO.js";import"./useToggleState-Berun3jW.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
