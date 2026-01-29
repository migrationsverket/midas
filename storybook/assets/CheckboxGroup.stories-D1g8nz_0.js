import{j as e}from"./iframe-TjYTyBIA.js";import{C as m}from"./CheckboxGroup-5YBvKigB.js";import{C as p}from"./Checkbox-CH4woI9t.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Bc9pveKo.js";import"./utils-B2jU_PXd.js";import"./clsx-B-dksMZM.js";import"./Text-BkOzDRnY.js";import"./useFocusRing-2DlQQnAW.js";import"./index-BzxihWEi.js";import"./index-D9BjRmkk.js";import"./clsx-Ciqy0D92.js";import"./Text-C9TF991Y.js";import"./Label-Bc0ITZCg.js";import"./Button-DfGK-ytd.js";import"./Hidden-Bk8kC44C.js";import"./useLabels-BFnK5R4R.js";import"./useButton-EM8J5NvE.js";import"./Dialog-3snVtcBm.js";import"./RSPContexts-IGt6m-sM.js";import"./OverlayArrow-VYU31Vg3.js";import"./useResizeObserver-Bp3XTfau.js";import"./useControlledState-DRcN3zts.js";import"./Collection-QZG0Os4g.js";import"./index-DnZT8snr.js";import"./Separator-Br4fwH0A.js";import"./SelectionManager-DTo-Zj2V.js";import"./useEvent-onuK9vqA.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-C0rBB3SQ.js";import"./useDescription-Bc-rlWkY.js";import"./ListKeyboardDelegate-R82ob_wj.js";import"./PressResponder-B9ZcG7i4.js";import"./useLocalizedStringFormatter-BthcVXxR.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-C4-yEZx5.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-Bgu6hP_b.js";import"./Button-Lepv9VS_.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C3ettQfp.js";import"./createLucideIcon-CEDLvmmT.js";import"./x-BMgB1TfF.js";import"./Heading-CXTRw5XU.js";import"./info-DcNPWdVu.js";import"./Popover-DlkEn3St.js";import"./useFormValidation-CeJWDr9L.js";import"./useField-DJHv4sS4.js";import"./Form-GSJN0Uyu.js";import"./check-CNyKNF5U.js";import"./useToggleState-Dd8bdgzc.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
