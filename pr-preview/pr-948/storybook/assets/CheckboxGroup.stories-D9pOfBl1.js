import{j as e}from"./iframe-C1leRaCi.js";import{C as m}from"./CheckboxGroup-BhVdfquj.js";import{C as p}from"./Checkbox-Bd6r6rnn.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-BUrHU4SW.js";import"./utils-BGVkhvRq.js";import"./clsx-B-dksMZM.js";import"./Text-dqBDklPG.js";import"./useFocusRing-DlbSN8Ae.js";import"./index-DEAN_h1R.js";import"./index-v0huand3.js";import"./clsx-Ciqy0D92.js";import"./Text-C7wFv8Yh.js";import"./Label-1SrJJups.js";import"./Button-M9uB7-Jb.js";import"./Hidden-Cqw8yHzL.js";import"./useLabels-DSFbCLKG.js";import"./useButton-k9xAcm15.js";import"./Dialog-L6YHMnJd.js";import"./RSPContexts-DKReEcV9.js";import"./OverlayArrow-BQbiVO17.js";import"./useResizeObserver-CYp1IwN2.js";import"./useControlledState-ByljhpRz.js";import"./Collection-NtSEA0gq.js";import"./index-9LIZYk_t.js";import"./Separator-BdfPFPKO.js";import"./SelectionManager-qltLu7pJ.js";import"./useEvent-DgudDhx_.js";import"./scrollIntoView-BeWdCQA-.js";import"./SelectionIndicator-CyWrjH6f.js";import"./useDescription-DLrO9DFj.js";import"./ListKeyboardDelegate-B0hzj8fZ.js";import"./PressResponder-DWiZVrXl.js";import"./useLocalizedStringFormatter-Ya10jvmU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-LrzveM_K.js";import"./VisuallyHidden-YPgCWLl2.js";import"./Button-CwoNmGBb.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-BWxVH0_G.js";import"./createLucideIcon-C44Pm6ej.js";import"./x-C71pF5OR.js";import"./Heading-CUv8fsir.js";import"./info-m8AoU6df.js";import"./Popover-RdW-JZ0_.js";import"./useFormValidation-DKueZ1JI.js";import"./useField-7qqyFdNc.js";import"./Form-3TjERAUK.js";import"./check-D8lleJd_.js";import"./useToggleState-DQ01jSqF.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
