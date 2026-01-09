import{j as e}from"./iframe-DHh65h_D.js";import{C as m}from"./CheckboxGroup-BxgVQevB.js";import{C as p}from"./Checkbox-Bw5tDr7J.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-CZOLFkPk.js";import"./utils-CRlJIqN4.js";import"./clsx-B-dksMZM.js";import"./Text-B6OtYudP.js";import"./useFocusRing-DqzDzWve.js";import"./index-D9l5_NrD.js";import"./index-BqXLjEuD.js";import"./clsx-Ciqy0D92.js";import"./Text-2-9fHpSD.js";import"./Label-CSCifA4R.js";import"./Button-6YV4W2NZ.js";import"./Hidden-CS2nm6ao.js";import"./useLabels-q87dcIcB.js";import"./useButton-BBt2Ci9q.js";import"./Dialog-2SBn50M0.js";import"./RSPContexts-CngAHAHx.js";import"./OverlayArrow-BLXUjT9M.js";import"./useResizeObserver-vjL6WbDa.js";import"./useControlledState-DdJfUtoQ.js";import"./Collection-BOLyBVrt.js";import"./index-gtnfDiq7.js";import"./Separator-DsK04sVr.js";import"./SelectionManager-Dbi63Cc2.js";import"./useEvent-BPbwm3Ts.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-I0tRuqFx.js";import"./useDescription-C_eZ3IFZ.js";import"./ListKeyboardDelegate-lYKbs3P3.js";import"./PressResponder-BVMByfz_.js";import"./useLocalizedStringFormatter-Bh-F6CwF.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./animation-Dz4KOBu-.js";import"./getScrollParent-Cpn7MDkE.js";import"./VisuallyHidden-B2VGaWGX.js";import"./Button-zcv_I1lF.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BX3F0Xrm.js";import"./createLucideIcon-jDUATHN8.js";import"./x-C4sM-r3i.js";import"./Heading-DnXQujbJ.js";import"./info-CNa2kD6A.js";import"./Popover-DVe4OICU.js";import"./useFormValidation-BJjf4415.js";import"./useField-XK7JKHI0.js";import"./Form-CtKNJT4H.js";import"./check-BTOoGd34.js";import"./useToggleState-D-ECFHyO.js";const nr={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
