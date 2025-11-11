import{j as e}from"./iframe-DDwyaC3F.js";import{C as m}from"./CheckboxGroup-D2L0agRK.js";import{C as p}from"./Checkbox-CsA2HNxq.js";import"./preload-helper-PPVm8Dsz.js";import"./FieldError-k6Nd64zn.js";import"./utils-CG7wrpEM.js";import"./clsx-B-dksMZM.js";import"./Text-CYUYSho0.js";import"./useFocusRing-Bm3xvvdx.js";import"./index-C4cW3woH.js";import"./index-D60FYBt-.js";import"./clsx-Ciqy0D92.js";import"./Text-NydOqzpP.js";import"./Label-DmuCf5Pe.js";import"./Button-BtXqPxzk.js";import"./Hidden-CaIlUqSr.js";import"./useLabels-CmG6mFoO.js";import"./useButton-BKHlIL54.js";import"./Dialog-1yR0IHTp.js";import"./RSPContexts-Di60wf4a.js";import"./OverlayArrow-B2-89jwE.js";import"./useResizeObserver-Dd2xfjWP.js";import"./useControlledState-BdO3bj3v.js";import"./Collection-DVsXcvwJ.js";import"./index-BUiwa9P_.js";import"./Separator-CJQqm_uI.js";import"./SelectionManager-DbCzjBbB.js";import"./useEvent-BPpfuXgh.js";import"./scrollIntoView-BJcQ7yQY.js";import"./SelectionIndicator-CrVXl-2s.js";import"./useDescription-CDZMnnUE.js";import"./ListKeyboardDelegate-CFrFrZJD.js";import"./PressResponder-Dia7aXzt.js";import"./useLocalizedStringFormatter-DwgqBF71.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./getScrollParent-B3K0PCoV.js";import"./VisuallyHidden-CxZomHPO.js";import"./useLocalizedStringFormatter-F1oVopQa.js";import"./Button-CWPbBUMn.js";import"./Button.module-CtQ1deO8.js";import"./x-9Qbg9sxY.js";import"./createLucideIcon-BSGS7U9b.js";import"./Heading-CklBL13z.js";import"./info-BzQYsB-L.js";import"./Popover-CRbJlPpn.js";import"./useFormValidation-BSswJdzs.js";import"./useField-RDQsR3S1.js";import"./Form-BT7it1_w.js";import"./check-CQnozhw6.js";import"./useToggleState-B2Z8Uay-.js";const ir={title:"Components/Checkbox/CheckboxGroup",component:m,parameters:{layout:"centered"},args:{isInvalid:!1,isDisabled:!1,isRequired:!1,isReadOnly:!1,label:"Etikett",description:"Beskrivning",errorMessage:"Du måste välja en frukt",errorPosition:"top",children:["Banan","Apple","Mango"].map(r=>e.jsx(p,{value:r,children:r},r))},tags:["autodocs"]},o={},a={args:{showSelectAll:!0}},t={args:{showSelectAll:!0,selectAllLabel:"SELECT ALL"},tags:["!dev","!autodocs","!snapshot"],parameters:{chromatic:{disableSnapshot:!0}},render:({...r})=>e.jsxs(m,{...r,children:[e.jsx(p,{value:"banana",children:"Banana"}),e.jsx(p,{value:"apple",children:"Apple"}),e.jsx("div",{children:"I'm not a checkbox"})]})},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0,showSelectAll:!0,value:["Mango"]}},n={args:{isInvalid:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
