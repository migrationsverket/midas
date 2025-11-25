import{j as e}from"./iframe-CSVmyJ9R.js";import{C as m}from"./CheckboxGroup-CcOBoQGb.js";import{C as p}from"./Checkbox-DPFsR1a7.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-DHYVenvj.js";import"./utils-CPqOETBM.js";import"./clsx-B-dksMZM.js";import"./Text-C8HgXGPu.js";import"./useFocusRing-BrPdNnBS.js";import"./index-E587h0fs.js";import"./index-CVwQ3yNk.js";import"./clsx-Ciqy0D92.js";import"./Text-BsEzx2Ek.js";import"./Label-B0IaRgKH.js";import"./Button-BQXPo15e.js";import"./Hidden-B-TeHCBv.js";import"./useLabels-D1ztbA9R.js";import"./useButton-DFFPcWTi.js";import"./Dialog-Sdg7eLn8.js";import"./RSPContexts-GO5W47ky.js";import"./OverlayArrow-Bgv8sbJO.js";import"./useResizeObserver-tu5o0PEw.js";import"./useControlledState-DTJWCz0V.js";import"./Collection-DgaZtCGP.js";import"./index-CdxjXi9l.js";import"./Separator-Bo8VghUH.js";import"./SelectionManager-BGeO44f6.js";import"./useEvent-qx2c1K7D.js";import"./scrollIntoView-t6kjJQiD.js";import"./SelectionIndicator-99zEWoLq.js";import"./useDescription-B4Vu6QR4.js";import"./ListKeyboardDelegate-BG1wdXY4.js";import"./PressResponder-CpYqWZpE.js";import"./useLocalizedStringFormatter-B8c5ZoQv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-BYzozrC1.js";import"./VisuallyHidden-CSK4owg4.js";import"./Button-BmI8BsBm.js";import"./Button.module-CtQ1deO8.js";import"./useLocalizedStringFormatter-DjLs2VzN.js";import"./createLucideIcon-CvwfQw68.js";import"./x-CjC83yIY.js";import"./Heading-hsM_iYer.js";import"./info-ChFLJxWM.js";import"./Popover-CPobd-JO.js";import"./useFormValidation-DspL0P0U.js";import"./useField-KTNK2PUR.js";import"./Form-ZrLhv48n.js";import"./check-C3bVLDOm.js";import"./useToggleState-CQu8tZ8g.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
