import{j as e}from"./iframe-Dt8qGcj0.js";import{C as m}from"./CheckboxGroup-BI-XLtvJ.js";import{C as p}from"./Checkbox-DKQ8t7Xw.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-Boq0AlWn.js";import"./utils-DzGpUwDk.js";import"./clsx-B-dksMZM.js";import"./Text-BFMlzHdv.js";import"./useFocusRing-B8EF88pa.js";import"./index-D45MIj80.js";import"./index-yXKLMRgP.js";import"./clsx-Ciqy0D92.js";import"./Text-DXvquVL7.js";import"./Label-DeRdUZrY.js";import"./Button-CjJiJTes.js";import"./Hidden-BXZBrSDT.js";import"./useLabels-DoBVCtRz.js";import"./useButton-CXsFy5nf.js";import"./Dialog-CNOJc3H-.js";import"./RSPContexts-B8qtBHPt.js";import"./OverlayArrow-DBW45wnx.js";import"./useResizeObserver-BklRVhQH.js";import"./useControlledState-BVoQcIBV.js";import"./Collection-Mc1jGEir.js";import"./index-2HYxLetr.js";import"./Separator-DQl5Teqn.js";import"./SelectionManager-DycKXJ5f.js";import"./useEvent-EDEmV_un.js";import"./scrollIntoView-DopW3zf_.js";import"./SelectionIndicator-tL3uILI3.js";import"./useDescription-lf21MVH0.js";import"./ListKeyboardDelegate-C_4XVNH0.js";import"./PressResponder-CKYytuCL.js";import"./useLocalizedStringFormatter-MwenM1Zt.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-DMG60YH-.js";import"./VisuallyHidden-DqAUfebe.js";import"./Button-CoCyWkmo.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DHyFRBkx.js";import"./createLucideIcon-CzMrI8-b.js";import"./x-BKRVh5LC.js";import"./Heading-DRviNsfq.js";import"./info-iHyK2GFN.js";import"./Popover-I2mB7qFL.js";import"./useFormValidation-PwxkFn_k.js";import"./useField-B0YzA3FQ.js";import"./Form-CydZd3vQ.js";import"./check-CKiOLKIE.js";import"./useToggleState-Cwh2PRf3.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
